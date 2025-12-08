/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import Editor from "react-simple-wysiwyg";


export default function TrueFalseQuestionEditor({ question, setQuestion }: { question: any, setQuestion: (q: any) => void }) {
    const [questionState, setQuestionState] = useState<any>(question);

    return (
        <div id="wd-true-false-question-editor">
            <span className="">Enter your question, then select whether the correct answer is True or False.</span><br />
            <label className="form-label fs-3 fw-medium mt-3">Question:</label>
            <Editor
                value={questionState.questionText}
                onChange={(e: any) => {
                    setQuestionState({...questionState, questionText: e.target.value});
                }}
                className="form-control"
            />
            <label className="form-label fs-4 fw-medium mt-3">Correct Answer:</label>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="trueFalseOptions" id="trueOption" checked={questionState.trueFalseAnswer === true} onChange={() => {
                    setQuestionState({...questionState, trueFalseAnswer: true});
                }} />
                <label className="form-check-label" htmlFor="trueOption">
                    True
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="trueFalseOptions" id="falseOption" checked={questionState.trueFalseAnswer === false} onChange={() => {
                    setQuestionState({...questionState, trueFalseAnswer: false});
                }} />
                <label className="form-check-label" htmlFor="falseOption">
                    False
                </label>
            </div>
            <br />
            <button className="btn btn-danger" onClick={() => {
                setQuestion(questionState);
            }}>
                Save Question
            </button>
            <button className="btn btn-secondary ms-2" onClick={() => {
                setQuestion(question);
                setQuestionState(question);
            }}>
                Cancel
            </button>
        </div>
    )
}