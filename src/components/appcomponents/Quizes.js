import React from "react";
import QuestionCard from "./QuestionCard";
import { connect } from "react-redux";

function Quizes(props) {
  return (
    <div>
      {props.quests.map((questsi) => {
        return <QuestionCard quest={questsi} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quests: state.questions,
  };
};

export default connect(mapStateToProps)(Quizes);
