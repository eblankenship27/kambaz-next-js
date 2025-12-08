/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { redirect, useParams } from "next/navigation";
import QuizEditorControls from "./QuizEditorControls";
import { Tab, Tabs } from "react-bootstrap";
import QuizDetailsEditor from "./QuizDetailsEditor";
import { useState } from "react";
import QuizQuestionEditor from "./QuizQuestionEditor";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../../../../client";
import { setQuizzes } from "../../reducer";
import { RootState } from "@/app/(Kambaz)/store";
import { useEffect } from "react";

export default function QuizEditor() {
    const { cid, qid } = useParams();
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
        const quizzies = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzies));
    }

    useEffect(() => {
        fetchQuizzes();
    }, []);

    const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);

    const [quiz, setQuiz] = useState<any>(undefined);

    useEffect(() => {
        const foundQuiz = quizzes.find((quiz: any) => quiz._id === qid);
        setQuiz(foundQuiz);
    }, [quizzes]);

    const handleSubmit = async () => {
        await client.updateQuiz(quiz);
        dispatch(setQuizzes(quizzes.map((q: any) => q._id === quiz._id ? quiz : q)));
        redirect(`/Courses/${cid}/Quizzes/${qid}`)
    }

    const handleSubmitAndPublish = async () => {
        await client.updateQuiz({...quiz, published: true});
        dispatch(setQuizzes(quizzes.map((q: any) => q._id === quiz._id ? {...quiz, published: true} : q)));
        redirect(`/Courses/${cid}/Quizzes`)
    }
    return (
        <div id="wd-quiz-editor-page" >
            <QuizEditorControls isPublished={quiz ? quiz.published : false } points={quiz ? quiz.points : 0} /><br />
            <hr />
            <Tabs defaultActiveKey="details" id="quiz-editor-tabs" className="mb-3">
                <Tab eventKey="details" title="Details">
                    <QuizDetailsEditor quiz={quiz} setQuiz={setQuiz} />
                </Tab>
                <Tab eventKey="questions" title="Questions">
                    <QuizQuestionEditor quiz={quiz} setQuiz={setQuiz} />
                </Tab>
            </Tabs>
            <br /><hr />
            <div id="wd-quiz-editor-submit-buttons" className="d-flex justify-content-end mb-5">
                <button type="button" className="btn btn-secondary me-2" onClick={() => redirect(`/Courses/${cid}/Quizzes`)}>Cancel</button>
                <button type="button" className="btn btn-danger me-2" onClick={handleSubmit}>Save</button>
                <button type="button" className="btn btn-danger me-2" onClick={handleSubmitAndPublish} >Save & Publish</button>
            </div>
        </div> 
    )
}