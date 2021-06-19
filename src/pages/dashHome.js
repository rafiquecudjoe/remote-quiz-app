import React from 'react'
import dashHomecss from "./dashHome.module.css"
import pic1 from "./learn4.svg"
import { Button } from '@windmill/react-ui'
import ButtonComp from '../components/appcomponents/Button'


 function dashHome() {
    return (
        <div className={dashHomecss.main}>
            <div className={dashHomecss.text}>
                <h1 style={{fontSize:"30px",fontWeight:"bold"}}>Welcome to Remote Quiz</h1>
                <h3>You can ceate a new class as a Teacher or view existing classes as a student</h3>
                
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <ButtonComp className="mr-10"text="Create Class"/>
                <ButtonComp layout="outline"text="Take a Quiz"/>

                </div>
               
            </div>

            <div className={dashHomecss.image}> <img src={pic1} alt="pic1" height="100%" width='100%' /> </div>
            
        </div>
    )
}


export default dashHome



