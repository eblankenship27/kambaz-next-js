/* eslint-disable @typescript-eslint/no-explicit-any */


export default function QuizQuestionDisplay({question, index, setAnswer}: {question: any, index: number, setAnswer: (questionId: string, answer: any, correct?: boolean) => void}) {
    

    return (
        <div id="wd-quiz-question-display border mb-4">
            <div className="p-3 border-bottom bg-light d-flex justify-content-between align-items-center">
                <h5>{question.title}</h5>
                <span className="float-end">{question.points} pts</span>
            </div>
            <div className="p-3">
                <div dangerouslySetInnerHTML={{__html: question.questionText}}></div>
                {question.questionType === "multiple-choice" && (
                    <ul className="list-group mt-3">
                        {question.choices.map((choice: any, idx: number) => (
                            <li key={idx} className="list-group-item">
                                <input type="radio" onChange={(e) => {if (e.target.checked) setAnswer(question._id, choice.choiceText, choice._id === question.correctAnswer)}} name={`question-${index}`} id={`question-${index}-choice-${idx}`} className="me-2" />
                                <label htmlFor={`question-${index}-choice-${idx}`} dangerouslySetInnerHTML={{__html: choice.choiceText}}></label>
                            </li>
                        ))}
                    </ul>
                )}
                {question.questionType === "true-false" && (
                    <div className="mt-3">
                        <div className="form-check">
                            <input className="form-check-input" onChange={(e) => {if (e.target.checked) setAnswer(question._id, true, question.trueFalseAnswer)}} type="radio" name={`question-${index}`} id={`question-${index}-true`} />
                            <label className="form-check-label" htmlFor={`question-${index}-true`}>
                                True
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" onChange={(e) => {if (e.target.checked) setAnswer(question._id, false, !question.trueFalseAnswer)}} type="radio" name={`question-${index}`} id={`question-${index}-false`} />
                            <label className="form-check-label" htmlFor={`question-${index}-false`}>
                                False
                            </label>
                        </div>
                    </div>
                )}
                {question.questionType === "fill-in-the-blank" && (
                    <div className="mt-3">
                        <input type="text" onChange={(e) => setAnswer(question._id, e.target.value, false )} className="form-control" />
                    </div>
                )}
            </div>
        </div>
    )
}