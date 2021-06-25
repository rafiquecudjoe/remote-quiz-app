import React from "react";
import bannercss from "./Banner.module.css";
import learn6 from "../asset/images/online1.png";
import NavbarComp from "../components/appcomponents/NavbarComp";
import ButtonComp from "../components/appcomponents/Button";




function Banner() {


  return (
    <>
      <NavbarComp />
      <div className={bannercss.main}>
        <div className={bannercss.left}>
          <h1>Learn at the Comfort of your Home</h1>
          <p>
            With Remote Quiz,Students get access to dedicated Teachers who
            understands students and gives quality feedback based on test result
            of Students
          </p>
          
          <ButtonComp
                  
                  text=" GET STARTED"
                  className=" w-28 h-10 ml-4 mt-8 whitespace-nowrap text-base font-medium text-white mr-4 "
                />
                
        </div>
        <div className={bannercss.right}>
          <img src={learn6} alt="learn" height="80%" width="80%" />
        </div>
      </div>
    </>
  );
}

export default Banner;
