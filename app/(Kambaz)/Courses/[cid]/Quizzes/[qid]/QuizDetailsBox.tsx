/* eslint-disable @typescript-eslint/no-explicit-any */

import { Table } from "react-bootstrap";


export default function QuizDetailsBox({quiz, responses}: {quiz?: any, responses?: any[]}) {
    return (
        <div id="wd-quiz-details-box" className="p-3 border dotted-border me-2 mb-2">
            <h3>{quiz.title}</h3>
            <table>
                <thead>
                    <tr>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Quiz Type</strong>
                        </td>
                        <td>
                            {quiz.type}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Points</strong>
                        </td>
                        <td>
                            {quiz.points}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Assignment Group</strong>
                        </td>
                        <td>
                            {quiz.assignmentGroup}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Shuffle Answers</strong>
                        </td>
                        <td>
                            {quiz.shuffleAnswers ? "Yes" : "No"}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Time Limit</strong>
                        </td>
                        <td>
                            {quiz.timeLimit ? `${quiz.timeLimit} minutes` : "No time limit"}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Multiple Attempts</strong>
                        </td>
                        <td>
                            {quiz.multipleAttempts ? "Yes" : "No"}
                        </td>
                    </tr>
                    {quiz.multipleAttempts && (
                        <tr>
                            <td className="text-end pe-3">
                                <strong>Number of Attempts Allowed</strong>
                            </td>
                            <td>
                                {quiz.attemptsAllowed ? quiz.attemptsAllowed : "Unlimited"}
                            </td>
                        </tr>
                    )}
                    <tr>
                        <td className="text-end pe-3">
                            <strong>View Responses</strong>
                        </td>
                        <td>
                            {!quiz.viewResponses && "Never"}
                            {quiz.viewResponses &&
                            (quiz.viewResponsesAfter ? `After ${quiz.viewResponsesAfter}` : "Always")}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Show Correct Answers</strong>
                        </td>
                        <td>
                            {!quiz.showCorrectAnswers && "Never"}
                            {quiz.showCorrectAnswers &&
                            (quiz.showCorrectAnswersAfter ? `After ${quiz.showCorrectAnswersAfter}` : "Immediately")}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>One Question as a Time</strong>
                        </td>
                        <td>
                            {quiz.oneQuestionAtATime ? "Yes" : "No"}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Require Respondus LockDown Browser</strong>
                        </td>
                        <td>
                            {quiz.requireLockDownBrowser ? "Yes" : "No"}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Required to View Quiz Results</strong>
                        </td>
                        <td>
                            {quiz.requiredToViewResults ? "Yes" : "No"}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Webcam Required</strong>
                        </td>
                        <td>
                            {quiz.webcamRequired ? "Yes" : "No"}
                        </td>
                    </tr>
                    <tr>
                        <td className="text-end pe-3">
                            <strong>Lock Questions After Answering</strong>
                        </td>
                        <td>
                            {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}
                        </td>
                    </tr>
                </tbody>
            </table>
            <Table>
                <thead>
                    <tr>
                        <th>Due</th>
                        <th>For</th>
                        <th>Available from</th>
                        <th>Until</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{quiz.dueDate}</td>
                        <td>{quiz.assignedTo}</td>
                        <td>{quiz.availableDate}</td>
                        <td>{quiz.untilDate}</td>
                    </tr>
                </tbody>
            </Table>
            <br /><br />
            <Table>
                <thead>
                    <tr>
                        <th>Attempt</th>
                        <th>Score</th>
                        <th>Completed At</th>
                    </tr>
                </thead>
                <tbody>
                    {responses && responses.length > 0 ? responses.map((response: any, index: number) => (
                        <tr key={response._id}>
                            <td>Attempt {response.attemptNumber}</td>
                            <td>{response.score !== undefined ? response.score : "N/A"}</td>
                            <td>{response.dateTaken ? new Date(response.dateTaken).toLocaleString() : "In Progress"}</td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>No attempts yet.</td>
                        </tr>
                    )}

                </tbody>
            </Table>
        </div>
    )
}