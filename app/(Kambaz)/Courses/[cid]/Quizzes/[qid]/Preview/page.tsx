/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { redirect, useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(Kambaz)/store";
import QuizPreviewTitle from "./QuizTitle";
import { useEffect, useState } from "react";
import QuizQuestionDisplay from "./QuizQuestionDisplay";
import * as client from "../../../../client";
import { setQuizzes } from "../../reducer";
import { v4 as uuidv4 } from "uuid";
import { setQuizResponses } from "../reducer";




export default function PreviewQuizPage() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.accountReducer as any).currentUser;
    

    const fetchQuiz = async () => {
        const quizzies = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzies));
    }

    const fetchQuizResponses = async () => {
        const quizResponses = await client.findQuizResponsesForQuiz(currentUser._id, qid as string);
        dispatch(setQuizResponses(quizResponses.quizResponses));
    }
    
    const quizResponses = useSelector((state: RootState) => state.quizResponsesReducer) as any;
    const responses = quizResponses.quizResponses || {};

    const [currentAttempt, setCurrentAttempt] = useState<any>(null);

    const createNewResponse = async () => {
        if (currentUser.role === "STUDENT") {
            console.log(responses);
            if (!responses.quizResponses || responses.quizResponses.length === 0) {

                const newResponse = await client.createQuizResponse({
                    quizId: qid,
                    userId: currentUser._id,
                    responses: []
                });
                dispatch(setQuizResponses(newResponse));
                return;
            }
        }
    }

    const startNewAttempt = async () => {
        const responsesArray = Array.isArray(responses.responses) ? responses.responses : [];
        console.log(responsesArray);
        console.log(responses.responses);
        const newAttempt = {
            _id: uuidv4(),
            attemptNumber: responsesArray.length + 1,
            dateTaken: new Date().toISOString(),
            score: 0,
            answers: []
        }
        if (currentUser.role === "STUDENT") {
            console.log(responsesArray);
            await client.updateQuizResponse({
                ...responses,
                responses: [...responsesArray, newAttempt]
            });
            dispatch(setQuizResponses({
                ...responses,
                responses: [...responsesArray, newAttempt]
            }));
        }
        setCurrentAttempt(newAttempt);

    }

    useEffect(() => {
        const loadQuizData = async () => {
            await fetchQuiz();
            await fetchQuizResponses();
            await createNewResponse();
            await startNewAttempt();
        };
        loadQuizData();
    }, []);

    const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);

    const quiz = quizzes.find((quiz: any) => quiz._id === qid) as any;
    
    const role = currentUser?.role

    const [quizResponseState, setQuizResponseState] = useState<any>(responses);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    const saveAnswerChange = (questionId: string, answer: any, correct: boolean = false) => {
        // Find the current attempt in the responses array
        const responsesArray = Array.isArray(quizResponseState.responses) ? quizResponseState.responses : [];
        const updatedAttempts = responsesArray.map((attempt: any) => {
            if (attempt._id === currentAttempt._id) {
                // Update or add the answer for the question
                const updatedAnswers = Array.isArray(attempt.answers)
                    ? attempt.answers.filter((a: any) => a.questionId !== questionId)
                    : [];
                updatedAnswers.push({ questionId, answer, correct });
                return { ...attempt, answers: updatedAnswers };
            }
            return attempt;
        });

        // Update client (backend)
        client.updateQuizResponse({
            ...quizResponseState,
            responses: updatedAttempts
        });

        // Update Redux store
        dispatch(setQuizResponses({
            ...quizResponseState,
            responses: updatedAttempts
        }));

        // Optionally update local state if needed
        setQuizResponseState({
            ...quizResponseState,
            responses: updatedAttempts
        });
    };

    const handleSubmitQuiz = () => {
        if (currentUser.role === "STUDENT") {
            const responsesArray = Array.isArray(quizResponseState.responses) ? quizResponseState.responses : [];
            const updatedResponses = responsesArray.map((attempt: any) => {
                if (attempt._id === currentAttempt._id) {

                    return currentAttempt;
                }
                return attempt;
            });
            client.updateQuizResponse({
                ...quizResponseState,
                responses: updatedResponses
            });
            dispatch(setQuizResponses({
                ...quizResponseState,
                responses: updatedResponses
            }));
        }
        redirect(`/Courses/${cid}/Quizzes/${qid}`);
    }

    return (
        <div id="wd-quiz-preview-page">
            <div className="p-3 border">
                <QuizPreviewTitle quiz={quiz} isPreviewMode={role === "FACULTY"} attemptStart={responses.re} />
                <hr />
                {quiz && !quiz.oneQuestionAtATime && (
                    quiz.questions.map((question: any, index: number) => (
                        <div key={index} className="mb-4 border">
                        <QuizQuestionDisplay key={index} question={question} index={index} setAnswer={saveAnswerChange} />
                        </div>
                    ))
                )}
                {quiz && quiz.oneQuestionAtATime && (
                    <div className="border">
                        <QuizQuestionDisplay question={quiz.questions[currentQuestionIndex]} index={currentQuestionIndex} setAnswer={saveAnswerChange} />
                        <div className="d-flex justify-content-between mt-3 p-3">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))}
                                disabled={currentQuestionIndex === 0}
                            >
                                Previous
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => setCurrentQuestionIndex((prev) => Math.min(prev + 1, quiz.questions.length - 1))}
                                disabled={currentQuestionIndex === quiz.questions.length - 1}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
                <div className="d-flex justify-content-end mt-3 w-100 border p-2">
                    <span></span>
                    <button className="btn btn-secondary float-end" onClick={handleSubmitQuiz}>Submit Quiz</button>
                </div>
            </div>
            
        </div>
    )
}