import React,{useState} from 'react'
import dashHomecss from "./dashHome.module.css"
import pic1 from "../asset/images/learn4.svg"
import ButtonComp from '../components/appcomponents/Button'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Select,
} from "@windmill/react-ui";
import {useHistory} from "react-router-dom"
  


function DashHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history=useHistory()

    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
      history.push('/dashboard/classes')
  };
  
  const toquiz = () => {
     history.push('/dashboard/takeaquiz')
  }

    return (
        <div className={dashHomecss.main}>
            <div className={dashHomecss.text}>
                <h1 style={{fontSize:"30px",fontWeight:"bold"}}>Welcome to Remote Quiz</h1>
                <h3>You can ceate a new class as a Teacher or view existing classes as a student</h3>
                
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <ButtonComp onClick={openModal} className="mr-10"text="Create Class"/>
            <ButtonComp layout="outline" text="Take a Quiz" onClick={toquiz }/>

                </div>
               
            </div>

            <div className={dashHomecss.image}> <img src={pic1} alt="pic1" height="100%" width='100%' /> </div>
            <div>
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Create a class</ModalHeader>
        <ModalBody>
          <Select>
            <option defaultValue>Choose...</option>
            <option>Primary 1</option>
            <option>Primary 2</option>
            <option>Primary 3</option>
            <option>Primary 4</option>
            <option>Primary 5</option>
            <option>Primary 6</option>
            <option>JHS 1</option>
                        </Select>
                        <h3>Subject</h3>
                        <Select>
            <option defaultValue>Choose...</option>
            <option>English</option>
            <option>Mathematics</option>
            <option>Intergrated Science</option>
            <option>Social Studies</option>
            <option>RME</option>
            <option>History</option>
            <option>ICT</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full sm:w-auto"
            layout="outline"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button onClick={closeModal} className="w-full sm:w-auto">
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    </div>
        </div>
    )
}


export default DashHome



