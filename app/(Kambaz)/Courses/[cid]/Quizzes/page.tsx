/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { redirect, useParams } from "next/navigation";
import QuizControls from "./QuizControls";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/(Kambaz)/store";
import * as client from "../../client";
import QuizTable from "./QuizTable";
import { setQuizzes } from "./reducer";
import { useEffect } from "react";

export default function Quizzes() {
    const { cid } = useParams();
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    }

    useEffect(() => {
        fetchQuizzes();
    }, []);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer as any)
    const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
    const role = currentUser?.role



    const onCreateQuizForCourse = async () => {
        const newQuiz = { title: "New Quiz", course: cid };
        const tempQuiz = await client.createQuizForCourse(cid as string, newQuiz);
        dispatch(setQuizzes([...quizzes, tempQuiz]));
        redirect(`/Courses/${cid}/Quizzes/${tempQuiz._id}`);
    }

    const filterQuizzesByQuizName = async (title: string) => {
        if (title) {
            const quizzes = await client.findQuizzesByPartialTitle(title, cid as string);
            dispatch(setQuizzes(quizzes));
        } else {
            fetchQuizzes();
        }
    }

    return (
        <div id="wd-quizzes-page">
            <QuizControls isFaculty={role === "FACULTY"} setFilter={filterQuizzesByQuizName} addQuiz={() => onCreateQuizForCourse()} />
            <br /><br /><hr /><br />  
            <QuizTable quizzes={quizzes} isFaculty={role === "FACULTY"} />
        </div>
    )
}