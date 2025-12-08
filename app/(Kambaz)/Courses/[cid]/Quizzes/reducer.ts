/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    quizzes: [],
};
const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: quiz }) => {
            const newQuiz: any = {
                _id: quiz._id,
                title: quiz.title,
                course: quiz.course,
                description: quiz.description,
                questions: quiz.questions || [],
            }
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter((q: any) => q._id !== quizId) as any;
        },
        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((q: any) => q._id === quiz._id ? quiz : q) as any;
        },
        editQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((q: any) => q._id === quizId ? {...q, editing: true} : q ) as any;
        }

    }
});
export const { addQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } = quizzesSlice.actions;
export default quizzesSlice.reducer;