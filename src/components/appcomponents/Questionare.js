import React from "react";
import { Select, Input } from "@windmill/react-ui";
import ButtonComp from "./Button";

function Questionare() {
  return (
    <div>
      <h2>Quiz title</h2>
      <Input type="text" />
      <h1>Questions</h1>
      <Select>
        <option>Multiple Choice</option>
        <option>True/False</option>
          </Select>
          <h2>Responses</h2>
          <Input type="text" placeholder="A)  Enter Answer" />
          <Input type="text" placeholder="B)   Enter Answer" />
          <Input type="text" placeholder="C)   Enter Answer" />
          <h2>Grading</h2>
          <Input type="text" />
          <ButtonComp text="Add a new Question"/>
          
    </div>
  );
}

export default Questionare;
