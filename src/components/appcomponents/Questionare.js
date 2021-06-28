import React, { useState } from "react";
import { Select, Input } from "@windmill/react-ui";
import ButtonComp from "./Button";
import { connect } from "react-redux";
import { SETQUESTIONSACTION } from "../../.";

function Questionare(props) {
  const [values, setValues] = useState("");

  const updateValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setValues(values);
    const { ans1, ans2, ans3, title, questtype, grade, question,questnumb } = values;
    props.SET_QUESTIONS({
      ans1,
      ans2,
      ans3,
      title,
      questtype,
      grade,
      question,
      questnumb
    });
   
  };

  return (
    <div>
      <h1>Question Number</h1>
      <Select name="questnumb" onChange={updateValues}>
        <option>Question 1</option>
        <option>Question 2</option>
        <option>Question 3</option>
        <option>Question 4</option>
        <option>Question 5</option>
        <option>Question 6</option>
        <option>Question 7</option>
        <option>Question 8</option>
        <option>Question 9</option>
        <option>Question 10</option>
      </Select>

      <h1>Questions</h1>
      <Select name="questtype" onChange={updateValues}>
        <option>Multiple Choice</option>
        <option>True/False</option>
      </Select>
      <Input
        onChange={updateValues}
        name="question"
        type="text"
        placeholder="Enter Question"
      />

      <h2>Responses</h2>
      <Input
        onChange={updateValues}
        name="ans1"
        type="text"
        placeholder="A)  Enter Answer"
      />
      <Input
        onChange={updateValues}
        name="ans2"
        type="text"
        placeholder="B)   Enter Answer"
      />
      <Input
        onChange={updateValues}
        type="text"
        name="ans3"
        placeholder="C)   Enter Answer"
      />
      <h2>Grading</h2>
      <Select name="grade" onChange={updateValues}>
        <option>1 Mark</option>
        <option>2 Marks</option>
        <option>3 Marks</option>
        <option>4 Marks</option>
        <option>5 Marks</option>
      </Select>

      <ButtonComp onClick={submit} text="Add a new Question" />
    </div>
  );
}

const mapDispatchtoProps = (dispatch) => {
  return {
    SET_QUESTIONS: (value) => {
      dispatch(SETQUESTIONSACTION(value));
    },
  };
};

export default connect(null, mapDispatchtoProps)(Questionare);
