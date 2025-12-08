/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl } from "react-bootstrap";


export default function QuizDetailsEditor({quiz, setQuiz}: {quiz: any, setQuiz: (quiz: any) => void }) {
    function isoToDateInput(isoString?: string) {
        if (!isoString) return "";
        return isoString.split("T")[0];
    }

    return (
        <div id="wd-quiz-details-editor">
            <FormControl type="text" placeholder="Quiz Title" className="mb-3" defaultValue={quiz?.title} onChange={(e) => setQuiz({...quiz, title: e.target.value})} />
            <span>Quiz Instructions: </span><br />
            <FormControl as="textarea" rows={5} placeholder="Quiz Description" className="mb-3" defaultValue={quiz?.description} onChange={(e) => setQuiz({...quiz, description: e.target.value})} />
            <table className="ms-4 w-100">
                <tbody className=
                'gap-4'>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3 w-25">
                            Points:
                        </td>
                        <td>
                            <FormControl type="number" placeholder="Points" className="mb-3" defaultValue={quiz?.points} onChange={(e) => setQuiz({...quiz, points: parseInt(e.target.value)})} />
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3">
                            Quiz Type:
                        </td>
                        <td>
                            <select className="form-select mb-3 " defaultValue={quiz?.type ? quiz.type : "Graded Quiz"} onChange={(e) => setQuiz({...quiz, type: e.target.value})}>
                                <option value="Graded Quiz">Graded Quiz</option>
                                <option value="Practice Quiz">Practice Quiz</option>
                                <option value="Graded Survey">Graded Survey</option>
                                <option value="Ungraded Survey">Ungraded Survey</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3">
                            Assignment Group:
                        </td>
                        <td>
                            <select className="form-select mb-3" defaultValue={quiz?.assignmentGroup ? quiz.assignmentGroup : "Quizzes"} onChange={(e) => setQuiz({...quiz, assignmentGroup: e.target.value})}>
                                <option value="Quizzes">Quizzes</option>
                                <option value="Exams">Exams</option>
                                <option value="Assignments">Assignments</option>
                                <option value="Project">Project</option>
                            </select>
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3">

                        </td>
                        <td><strong>Options</strong></td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3" />
                        <td>
                            <input type="checkbox" className="form-check-input me-2" id="shuffle-answers-checkbox" defaultChecked={quiz ? quiz.shuffleAnswers : true} onChange={(e) => setQuiz({...quiz, shuffleAnswers: e.target.checked})} />
                            <label htmlFor="shuffle-answers-checkbox">Shuffle Answers</label>
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3" />
                        <td className="align-baseline">
                            <input type="checkbox" className="form-check-input mt-2 me-2" id="time-limit-checkbox" defaultChecked={quiz ? quiz.timeLimit > -1 : true} onChange={(e) => {
                                if (e.target.checked) {
                                    setQuiz({...quiz, timeLimit: 20})}
                                else {
                                    setQuiz({...quiz, timeLimit: -1})
                                }
                            }} />
                            <label className="py-2" htmlFor="time-limit-checkbox">Set Time Limit</label>
                            {quiz && quiz.timeLimit > -1 && (
                                <><FormControl id="wd-quiz-time-limit-input" type="number" placeholder="Time Limit in minutes" className="ms-3 d-inline-block w-auto" defaultValue={quiz.timeLimit} onChange={(e) => setQuiz({...quiz, timeLimit: parseInt(e.target.value)})} />
                                <label htmlFor="wd-quiz-time-limit-input" className="ms-2">minutes</label>
                                </>
                            )}
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3" />
                        <td className="align-baseline rounded border  p-2">
                            <input type="checkbox" className="form-check-input mt-2 me-2" id="multiple-attempts-checkbox" defaultChecked={quiz ? quiz.multipleAttempts : false} onChange={(e) => setQuiz({...quiz, multipleAttempts: e.target.checked})} />
                            <label className="py-1" htmlFor="multiple-attempts-checkbox">Allow Multiple Attempts</label>
                            {quiz && quiz.multipleAttempts && (
                                <FormControl type="number" placeholder="Number of Attempts" className=" ms-3 d-inline-block w-auto" defaultValue={quiz.numberOfAttempts} onChange={(e) => setQuiz({...quiz, numberOfAttempts: parseInt(e.target.value)})} />
                            )}
                            <br />
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3" />
                        <td>
                            <input type="checkbox" className="form-check-input me-2 mt-2" id="show-correct-answers-checkbox" defaultChecked={quiz ? quiz.showCorrectAnswers : true} onChange={(e) => setQuiz({...quiz, showCorrectAnswers: e.target.checked})} />
                            <label className="py-1" htmlFor="show-correct-answers-checkbox">Show Correct Answers After Submission</label>
                            {quiz && quiz.showCorrectAnswers && (
                                <FormControl type="Date" className="ms-3 d-inline-block w-auto" defaultValue={quiz.showCorrectAnswersAfter} onChange={(e) => setQuiz({...quiz, showCorrectAnswersAfter: e.target.value})} />
                            )}
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3" />
                        <td>
                            <FormControl type="text" placeholder="Quiz Access Code" className="mb-3 w-auto d-inline-block" defaultValue={quiz?.accessCode} onChange={(e) => setQuiz({...quiz, accessCode: e.target.value})} />
                            <label htmlFor="wd-quiz-access-code-input" className="ms-2">Access Code</label>
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3" />
                        <td>
                            <input type="checkbox" className="form-check-input me-2 mt-2" id="one-question-at-a-time-checkbox" defaultChecked={quiz ? quiz.oneQuestionAtATime : true} onChange={(e) => setQuiz({...quiz, oneQuestionAtATime: e.target.checked})} />
                            <label className="py-1" htmlFor="one-question-at-a-time-checkbox">Show One Question at a Time</label>
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3" />
                        <td>
                            <input type="checkbox" className="form-check-input me-2 mt-2" id="webcam-required-checkbox" defaultChecked={quiz ? quiz.webcamRequired : false} onChange={(e) => setQuiz({...quiz, webcamRequired: e.target.checked})} />
                            <label className="py-1" htmlFor="webcam-required-checkbox">Require Webcam</label>
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3" />
                        <td>
                            <input type="checkbox" className="form-check-input me-2 mt-2" id="lock-questions-checkbox" defaultChecked={quiz ? quiz.lockQuestions : false} onChange={(e) => setQuiz({...quiz, lockQuestions: e.target.checked})} />
                            <label className="py-1" htmlFor="lock-questions-checkbox">Lock Questions After Answered</label>
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline">
                        <td className="text-end pe-3" />
                        <td>
                            <input type="checkbox" className="form-check-input me-2 mt-2" id="require-lockdown-browser-checkbox" defaultChecked={quiz ? quiz.requireLockdownBrowser : false} onChange={(e) => setQuiz({...quiz, requireLockdownBrowser: e.target.checked})} />
                            <label className="py-1" htmlFor="require-lockdown-browser-checkbox">Require Respondus LockDown Browser</label>
                        </td>
                    </tr>
                    <tr className="mb-3 align-baseline"><td><br /></td></tr>
                    <tr className="mb-3">
                        <td className="text-end pe-3 align-top" >
                            Assign
                        </td>
                        <td>
                            <div className="border rounded p-2"> 
                                <label className="fs-5" htmlFor="wd-quiz-assign-to">Assign to</label>
                                <FormControl type="text" id="wd-quiz-assign-to" placeholder="Everyone" className="mb-3" defaultValue={quiz?.assignedTo} disabled />
                                <span className="fw-bold">Due</span>
                                <FormControl type="date" className="mb-3" defaultValue={isoToDateInput(quiz?.dueDate)} onChange={(e) => setQuiz({...quiz, dueDate: e.target.value})} />
                                <br />
                                <div className="mb-2 d-flex align-items-end gap-3 w-100">
                                    <span className="flex-grow-1">
                                        <span className="fw-bold">Available from</span>
                                        <FormControl type="date" className="mb-3" defaultValue={isoToDateInput(quiz?.availableDate)} onChange={(e) => setQuiz({...quiz, availableDate: e.target.value})} />
                                    </span>
                                    <span className="flex-grow-1">
                                        <span className="fw-bold">Until</span>
                                        <FormControl type="date" className="mb-3" defaultValue={isoToDateInput(quiz?.untilDate)} onChange={(e) => setQuiz({...quiz, untilDate: e.target.value})} />
                                    </span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}