import React from 'react'
import Questionare from '../../components/appcomponents/Questionare'
import teach from "../../asset/images/teach2.svg"

export default function createAQuiz() {
    return (
        <div className="flex flex-row min-h-screen ">
        <div className="flex-1">
        <h1 className="my-4">Create A Quiz</h1>
                <Questionare />
        </div>

        <div className="flex-1 ">
        <img src={teach} heigt="100%" width="100%"/>

        </div>
        
       
        
    </div>
        // <div>
        //    
        //    
         
            
        // </div>
    )
}
