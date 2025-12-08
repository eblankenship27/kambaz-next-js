/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { FormControl } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import Editor from "react-simple-wysiwyg";
import { v4 as uuid } from "uuid";


export default function FillInTheBlankQuestionEditor({ question, setQuestion }: { question: any, setQuestion: (q: any) => void }) {
    const [questionState, setQuestionState] = useState<any>(question);

    return (
        <div id="wd-fill-in-the-blank-question-editor">
            <span className="">Enter your question text, then define all possible correct asnwers for the blank. Students will see the question followed by a small text box to type their answer.</span>
            <br />
            <label className="form-label fs-3 fw-medium mt-3">Question:</label>
            <Editor
                value={questionState.questionText}
                onChange={(e: any) => {
                    setQuestionState({...questionState, questionText: e.target.value});
                }}
                className="form-control"
            />
            <label className="form-label fs-4 fw-medium mt-3">Correct Answers:</label>
            <table className="table">
                <tbody>
                    {questionState.fillInTheBlankAnswers && questionState.fillInTheBlankAnswers.length > 0 && questionState.fillInTheBlankAnswers.map((answer: any, index: number) => (
                        <tr key={answer._id}>
                            <td>
                                <span className="form-label ms-2 mt-2">Possible Answer: </span>
                            </td>
                            <td>
                                <FormControl as="textarea" className="form-control me-4" rows={1} defaultValue={answer.answerText} onChange={(e) => {
                                    const updatedAnswers = [...questionState.correctAnswers];
                                    const answerToUpdate = updatedAnswers.find((a: any) => a._id === answer._id);
                                    if (answerToUpdate) {
                                        answerToUpdate.answerText = e.target.value;
                                    }
                                    setQuestionState({...questionState, fillInTheBlankAnswers: updatedAnswers});
                                }} />
                            </td>
                            <td>
                                <FaTrash className="text-danger ms-3 mt-2" style={{ cursor: "pointer" }} onClick={() => {
                                    const updatedAnswers = questionState.fillInTheBlankAnswers.filter((_: any, i: number) => i !== index);
                                    setQuestionState({...questionState, fillInTheBlankAnswers: updatedAnswers});
                                }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-outline-danger mb-2 float-end " onClick={() => {
                const updatedAnswers = questionState.fillInTheBlankAnswers ? [...questionState.fillInTheBlankAnswers, {_id: uuid(), answerText: ""}] : [{_id: uuid(), answerText: ""}];
                setQuestionState({...questionState, fillInTheBlankAnswers: updatedAnswers});
            }}>
                Add Answer
            </button>
            <br /><br />
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