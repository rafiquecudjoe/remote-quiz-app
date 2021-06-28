import React from "react";
import CardComp from "../components/appcomponents/Card";

function Help() {
  return (
    <div className="flex flex-wrap justify-around">
      <CardComp
        className="mt-5 mr-2 text-black  h-72 w-96"
              text1="How do i use your web-app"
              text2="Once you sign up, then you choose where you are a teacher or student."
      />
      <CardComp
        className="mt-5 mr-2 text-black h-72 w-96"
        text1="Can i know my marks after answering Questions?"
      />
      <CardComp
        className="mt-5 mr-2 text-black h-72 w-96"
        text1="Can i get access to the Teachers?"
      />

      <CardComp
        className="mb-5 mt-5 mr-2 text-black h-72 w-96"
        text1="Can i Answer multiple questions in different classes?"
      />
    </div>
  );
}

export default Help;
