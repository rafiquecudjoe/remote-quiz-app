import React from 'react'
import image1 from "../asset/images/quiz.svg"

function TakeAQuiz() {
    return (
        <div className="flex flex-row min-h-screen ">
            <div className="flex-1">
            <h1>Take A Quiz</h1>
            </div>

            <div className="flex-1 ">
            <img src={image1} heigt="100%" width="100%"/>

            </div>
            
           
            
        </div>
    )
}

export default TakeAQuiz
