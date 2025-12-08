/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl } from "react-bootstrap";
import { FaPlus, FaTrash, FaUps } from "react-icons/fa6";
import MultipleChoiceQuestionEditor from "./QuestionTypes/MultipleChoice";
import TrueFalseQuestionEditor from "./QuestionTypes/TrueFalse";
import FillInTheBlankQuestionEditor from "./QuestionTypes/FillInTheBlank";
import { v4 as uuid } from "uuid";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

export default function QuizQuestionEditor({quiz, setQuiz}: {quiz: any, setQuiz: any}) {
    
    const addNewQuestion = () => {
        const newQuestion = {
            title: "New Question",
            questionType: "multiple-choice",
            _id: uuid(),
            index: quiz.questions ? quiz.questions.length : 0,
            points: 0,
        };
        setQuiz({...quiz, questions: [...(Array.isArray(quiz.questions) ? quiz.questions : []), newQuestion]});
    }
    return (
        <div id="wd-quiz-question-editor-page"  className="d-flex flex-column justify-content-center align-items-center w-100">
            <button className="btn btn-secondary mb-3" onClick={addNewQuestion}>
                <FaPlus className="me-1" /> New Question
            </button>
            {quiz && quiz.questions && quiz.questions.length > 0 && (
                quiz.questions.map((question: any, index: number) => (
                    <div key={index} className="border mb-3 w-75">
                        <div className="mb-2 d-flex border-bottom p-2 w-100">
                            <div className="d-flex flex-grow-1">
                                <FormControl type="text" className="me-2" placeholder="Question Title" value={question.title} onChange={(e) => {
                                     const newQuestion = { ...question, title: e.target.value };
                                     const updatedQuestions = [...quiz.questions];
                                     const newQuestions = [ ...updatedQuestions.filter((q: any) => q._id !== newQuestion._id), newQuestion ];
                                     updatedQuestions[index] = newQuestion;
                                    setQuiz({...quiz, questions: newQuestions});
                                }} />
                                <select className="form-select me-2" value={question.questionType ?? 'multiple-choice'} onChange={(e) => {
                                    const updatedQuestions = [...quiz.questions];
                                    const newQuestion = { ...question, questionType: e.target.value };
                                    const newQuestions = [ ...updatedQuestions.filter((q: any) => q._id !== newQuestion._id), newQuestion ];
                                    setQuiz({...quiz, questions: newQuestions});
                                }}>
                                    <option value="multiple-choice">Multiple Choice</option>
                                    <option value="true-false">True/False</option>
                                    <option value="fill-in-the-blank">Fill in the Blank</option>
                                </select>
                            </div>
                            <div className="flex-grow-1">
                                <FaTrash className="text-danger float-start mt-2" style={{ cursor: "pointer" }} onClick={() => {
                                    const updatedQuestions = quiz.questions.filter((q: any, i: number) => q._id !== question._id);
                                    setQuiz({...quiz, questions: updatedQuestions});
                                }} />
                                <BiUpArrow className="text-secondary float-start ms-3 mt-2" style={{ cursor: "pointer" }} onClick={() => {
                                    if (index === 0) return;
                                    const updatedQuestions = [...quiz.questions];
                                    const temp = updatedQuestions[index - 1];
                                    updatedQuestions[index - 1] = updatedQuestions[index];
                                    updatedQuestions[index] = temp;
                                    setQuiz({...quiz, questions: updatedQuestions});
                                }} />
                                <BiDownArrow className="text-secondary float-start ms-3 mt-2" style={{ cursor: "pointer" }} onClick={() => {
                                    if (index === quiz.questions.length - 1) return;
                                    const updatedQuestions = [...quiz.questions];
                                    const temp = updatedQuestions[index + 1];
                                    updatedQuestions[index + 1] = updatedQuestions[index];
                                    updatedQuestions[index] = temp;
                                    setQuiz({...quiz, questions: updatedQuestions});
                                }} />
                                <FormControl className="float-end " style={{ width: "64px" }} type="number" value={question.points ?? ""} onChange={(e) => {
                                    const updatedQuestions = [...quiz.questions];
                                    updatedQuestions[index].points = e.target.value;
                                    setQuiz({...quiz, questions: updatedQuestions});
                                }} />
                                <label className="form-label mt-2 float-end">pts: </label>
                            </div>
                        </div>
                        {question.questionType === 'multiple-choice' && (
                            <div className="p-3">
                            <MultipleChoiceQuestionEditor question={question} setQuestion={(updatedQuestion: any) => {
                                const updatedQuestions = [...quiz.questions];
                                updatedQuestions[index] = updatedQuestion;
                                setQuiz({...quiz, questions: updatedQuestions});
                            }} />
                            </div>
                        )}
                        {question.questionType === 'true-false' && (
                            <div className="p-3">
                                <TrueFalseQuestionEditor question={question} setQuestion={(updatedQuestion: any) => {
                                    const updatedQuestions = [...quiz.questions];
                                    updatedQuestions[index] = updatedQuestion;
                                    setQuiz({...quiz, questions: updatedQuestions});
                                }} />
                            </div>
                        )}
                        {question.questionType === 'fill-in-the-blank' && (
                            <div className="p-3">
                                <FillInTheBlankQuestionEditor question={question} setQuestion={(updatedQuestion: any) => {
                                    const updatedQuestions = [...quiz.questions];
                                    updatedQuestions[index] = updatedQuestion;
                                    setQuiz({...quiz, questions: updatedQuestions});
                                }} />
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    )
}