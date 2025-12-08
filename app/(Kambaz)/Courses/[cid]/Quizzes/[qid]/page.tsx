/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useParams } from "next/navigation";
import QuizDetailsBox from "./QuizDetailsBox";
import QuizDetailsControls from "./QuizDetailsControls";
import { useDispatch } from "react-redux";
import * as client from "../../../client";
import { setQuizzes } from "../reducer";
import { setQuizResponses } from "./reducer";
import { useSelector } from "react-redux";
import { RootState } from "@/app/(Kambaz)/store";
import { useEffect } from "react";

export default function QuizDetailsPage() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootState) => state.accountReducer as any).currentUser;

    const fetchQuiz = async () => {
        const quizzies = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzies));
    }

    const fetchQuizResponses = async () => {
        const responses = await client.findQuizResponsesForQuiz(currentUser._id, qid as string);
        dispatch(setQuizResponses(responses));
    }

    useEffect(() => {
        fetchQuiz();
        fetchQuizResponses();
    }, []);

    const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);

    const { quizResponses } = useSelector((state: RootState) => state.quizResponsesReducer);

    const quiz = quizzes.find((quiz: any) => quiz._id === qid);
    return (
        <div id="wd-quiz-details-page">
            <QuizDetailsControls cid={cid as string} qid={qid as string} role={currentUser.role}/>
            <hr />
            {quiz ? <QuizDetailsBox quiz={quiz} responses={quizResponses} /> : <div>Loading...</div>}
        </div>
    )
}