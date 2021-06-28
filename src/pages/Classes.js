import React from "react";
import CardComp from "../components/appcomponents/Card";
import img1 from "../asset/images/class.svg";

function Classes() {
  return (
    <div className=" flex flex-row  min-h-screen">
      <div className="flex flex-1 ">
        <h1>Classes</h1>
        <CardComp
          className=" align-middle flex-auto mt-10 mr-2  h-32 w-32"
          text2="Creat New Class"
        />
        <CardComp
          className=" text-white flex-auto mt-10 mr-2 bg-purple-600 h-32 w-32"
          text2="Primary 1"
        />
        <CardComp
          className="text-white flex-auto mt-10 mr-2 bg-purple-600 h-32 w-32"
          text2="Primary 2"
        />
      </div>
      <div className="flex-1 ">
        <img src={img1} height="100%" width="100%" />
      </div>
    </div>
  );
}

export default Classes;
