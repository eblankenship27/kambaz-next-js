/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { FormControl } from "react-bootstrap";
import { FaTrash } from "react-icons/fa6";
import Editor from 'react-simple-wysiwyg';
import { v4 as uuid } from 'uuid';

export default function MultipleChoiceQuestionEditor({question, setQuestion}: {question: any, setQuestion: any}) {

    const [questionState, setQuestionState] = useState<any>(question);
    return (
        <div id="wd-multiple-choice-question-editor p-3 m-3">
            <span className="">Enter your question and multiple answers, then select the one correct answer.</span><br />
            <label className="form-label fs-3 fw-medium mt-3">Question:</label>
            <Editor
                value={questionState.questionText}
                onChange={(e: any) => {
                    setQuestionState({...questionState, questionText: e.target.value});
                }}
                className="form-control"
            />
            <label className="form-label fs-4 fw-medium mt-3">Answers:</label>
            <table className="table">
                <tbody>
                    {questionState.choices && questionState.choices.length > 0 && questionState.choices.map((choice: any, index: number) => (
                        <tr key={choice._id}>
                            <td>
                                <input type="radio" name="correctAnswer" id={`choice-${choice._id}`} className="form-check-input mt-2" checked={questionState.correctAnswer === choice._id} onChange={() => {
                                    setQuestionState({...questionState, correctAnswer: choice._id});
                                }} />
                                <label className="form-label ms-2 mt-2" htmlFor={`choice-${choice._id}`}>
                                    {questionState.correctAnswer === index ? <span className="ms-2">Correct Answer</span> : <span className="ms-2">Possible Answer</span>}
                                </label>
                            </td>
                            <td>
                                <FormControl as="textarea" className="form-control" rows={1} defaultValue={choice.choiceText} onChange={(e) => {
                                    const updatedChoices = [...questionState.choices];
                                    const choiceToUpdate = updatedChoices.find((c: any) => c._id === choice._id);
                                    if (choiceToUpdate) {
                                        choiceToUpdate.choiceText = e.target.value;
                                    }
                                    setQuestionState({...questionState, choices: updatedChoices});
                                }} />
                            </td>
                            <td>
                                <FaTrash className="text-danger ms-3 mt-2" style={{ cursor: "pointer" }} onClick={() => {
                                    const updatedChoices = questionState.choices.filter((choice: any, i: number) => i !== index);
                                    if (questionState.correctAnswer === choice._id) {
                                        // If the deleted choice was the correct answer, reset correctAnswer
                                        setQuestionState({...questionState, choices: updatedChoices, correctAnswer: null});
                                    } else {
                                        setQuestionState({...questionState, choices: updatedChoices, });
                                    }
                                }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-outline-danger mb-2 float-end " onClick={() => {
                const updatedChoices = questionState.choices ? [...questionState.choices, {_id: uuid(), choiceText: ""}] : [{_id: uuid(), choiceText: ""}];
                setQuestionState({...questionState, choices: updatedChoices});
            }}>
                Add Answer
            </button>
            <br /><br />
            <button className="btn btn-danger" onClick={() => {
                if (!questionState.correctAnswer || !questionState.choices.find((c: any) => c._id === questionState.correctAnswer)) {
                    alert("Please select a valid correct answer before saving the question.");
                    return;
                }
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