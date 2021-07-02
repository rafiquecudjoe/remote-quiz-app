import React from "react";
import CardComp from "../components/appcomponents/Card";

function Help() {
  return (
    <div className="flex flex-wrap justify-around">
      <CardComp
        className="mt-5 mr-2 text-black  h-72 w-96 bg-purple-500"
        text1="How do i use your web-app?"
        text2="When Signing Up, you choose whether you are a teacher or a Student. As a Student, you can answer questions set by Teachers on our app. As a teacher, you set set quizez with our app "
      />
      <CardComp
        className="mt-5 mr-2 text-black h-72 w-96 bg-purple-500"
        text1="Can i know my marks after answering Questions?"
        text2="Yes You can, Once The Teacher marks the quizez, you will be notified that you quiz has been marked."
      />
      <CardComp
        className="mt-5 mr-2 text-black h-72 w-96 bg-purple-500"
              text1="Can i get access to the Teachers?"
              text2="Yes You can, the teachers profile will be shown as well as social media handles."
      />

      <CardComp
        className="mb-5 mt-5 mr-2 text-black h-72 w-96 bg-purple-500"
              text1="Can i Answer multiple questions in different classes?"
              text2="Yes, Once you are assigned to the class, you will be able to Answer the questions"
      />
    </div>
  );
}

export default Help;
