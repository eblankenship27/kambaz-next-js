/* eslint-disable @typescript-eslint/no-explicit-any */

import { IoAlertCircleOutline } from "react-icons/io5";

export default function QuizPreviewTitle({quiz, isPreviewMode, attemptStart}: {quiz: any, isPreviewMode: boolean, attemptStart: Date}) {
    return (
        <div id="wd-quiz-preview-title">
            <h3>{quiz?.title}</h3>
            {isPreviewMode &&
                <div className="p-2 mb-2 bg-danger bg-opacity-10 border border-danger border-opacity-25 rounded">
                    <IoAlertCircleOutline className="mb-0 text-danger" />
                    <span className="ms-2 text-danger">This is a preview of the published version of the quiz.</span>
                </div>
            }
            <div>
                <span className="me-2">Started:</span>
                {attemptStart ?
                    <span>{attemptStart.toLocaleString()}</span>
                    :
                    <span>Not started yet</span>
                }
            </div>
            <h3>Quiz Instructions</h3>
        </div>
    )
}