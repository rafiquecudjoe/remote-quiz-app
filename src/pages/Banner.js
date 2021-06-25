import React from "react";
import bannercss from "./Banner.module.css";
import learn6 from "../asset/images/learn6.png";
import NavbarComp from "../components/appcomponents/NavbarComp";




function Banner() {


  return (
    <>
      <NavbarComp />
      <div className={bannercss.main}>
        <div className={bannercss.left}>
          <h1>Learn at the Comfort of your Home</h1>
          <p>
            With Remote Learn,Students get access to dedicated Teachers who
            understands students and gives quality feedback based on test result
            of Students
                  </p>
                  <a
                  href="#"
                  className=" w-28 h-10 ml-4 mt-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 "
                >
                  GET STARTED
                </a>
                 
        </div>
        <div className={bannercss.right}>
          <img src={learn6} alt="learn" height="80%" width="80%" />
        </div>
      </div>
    </>
  );
}

export default Banner;
