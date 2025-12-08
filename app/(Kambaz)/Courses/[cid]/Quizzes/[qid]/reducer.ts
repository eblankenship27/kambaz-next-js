/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    quizResponses: <any>[],
};
const quizResponsesSlice = createSlice({
    name: 'quizResponses',
    initialState,
    reducers: {
        setQuizResponses: (state, action) => {
            state.quizResponses = action.payload;
        },
        addQuizResponse: (state, { payload: quizResponse }) => {
            const newQuizResponse: any = {
                _id: quizResponse._id,
                quizId: quizResponse.quizId,
                userId: quizResponse.userId,
                responses: quizResponse.answers || [],
            }
            state.quizResponses.push(newQuizResponse);
        },
        updateQuizResponse: (state, { payload: quizResponse }) => {
            state.quizResponses = state.quizResponses.map((qr: any) =>
                qr._id === quizResponse._id ? { ...qr, ...quizResponse } : qr
            );
        },
        updateQuizResponseAttempt: (state, { payload: { quizResponseId, attemptIndex, newAttemptData } }) => {
            state.quizResponses = state.quizResponses.map((qr: any) => {
                if (qr._id === quizResponseId) {
                    const updatedResponses = [...qr.responses];
                    updatedResponses[attemptIndex] = {
                        ...updatedResponses[attemptIndex],
                        ...newAttemptData
                    };
                    return { ...qr, responses: updatedResponses };
                }
                return qr;
            }) as any;
        }
    }
});
export const { setQuizResponses, addQuizResponse, updateQuizResponse, updateQuizResponseAttempt } = quizResponsesSlice.actions;
export default quizResponsesSlice.reducer;