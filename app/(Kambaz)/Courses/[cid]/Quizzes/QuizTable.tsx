/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import QuizControlButtons from "./QuizControlButtons";
import QuizLabelButtons from "./QuizLabelButtons";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as client from "../../client";
import { useDispatch } from "react-redux";
import { setQuizzes } from "./reducer";

export default function QuizTable({ quizzes = [], isFaculty}: { quizzes?: any[], isFaculty?: boolean}) {
    const { cid } = useParams();
    const dispatch = useDispatch();

    const onDeleteQuiz = async (qid: string) => {
        // Implement delete quiz functionality here
        await client.deleteQuiz(qid);
        dispatch(setQuizzes(quizzes.filter((q: any) => q._id !== qid)));
    }
    const onChangePublished = async (qid: string) => {
        // Implement publish/unpublish quiz functionality here
        const oldQuiz = quizzes.find((q: any) => q._id === qid);
        const newQuiz = { ...oldQuiz, published: !oldQuiz.published };
        await client.updateQuiz(newQuiz);
        const newQuizzes = quizzes.map((q: any) => q._id === qid ? newQuiz : q);
        dispatch(setQuizzes(newQuizzes));
    }
    return (
        <div id="wd-quiz-table">
            <ListGroup className="rounded-0" id="wd-quiz-list">
                <ListGroupItem className="p-0 fs-5 border-grey" id="wd-group-title">
                    <div className="p-3 ps-2 bg-body-tertiary">
                        <BsGripVertical className="me-2 fs-3" /> Assignment Quizzes
                    </div>
                </ListGroupItem>
                {quizzes.map((quiz) => (
                    <ListGroupItem key={quiz._id} className="p-3 ps-1 wd-quiz d-flex align-items-center w-100" id="wd-quiz" >
                        <QuizLabelButtons />
                        <Link href={`/Courses/${cid}/Quizzes/${quiz._id}`} className="containter d-inline fs-3 text-decoration-none  text-black">
                            {quiz.title} <br />
                            <div className="fs-6">
                                {(() => {
                                    const now = new Date();
                                    const from = quiz.availableDate ?  new Date(quiz.availableDate) : null;
                                    const until =  quiz.untilDate ? new Date(quiz.untilDate) : null;

                                    if (until && now > until) {
                                        return (
                                            <span><b>Closed</b></span>
                                        )
                                    }
                                    else if (from && now < from) {
                                        return (
                                            <span><strong>Not available until</strong> {from.toISOString()}</span>
                                        )
                                    }
                                    else {
                                        return (
                                            <span><strong>Available until <span className="text-danger">{new Date(quiz.availableDate).toDateString()}</span></strong></span>
                                        )
                                    }
                                })()} | <strong>Due: </strong> {quiz.dueDate ? new Date(quiz.dueDate).toDateString() : <span className="text-danger">Multiple Dates</span>} | {quiz.points ? `${quiz.points} pts` : ""} | {quiz.questions ? quiz.questions.length : 0} Questions
                            </div>
                        </Link>
                        {isFaculty && (
                            <QuizControlButtons qid={quiz._id} deleteQuiz={() => onDeleteQuiz(quiz._id)} isPublished={quiz.published ? quiz.published : false} setPublished={() => {onChangePublished(quiz._id)}} />
                        )}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    )
}