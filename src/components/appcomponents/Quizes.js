
import QuestionCard from "./QuestionCard";
import { connect } from "react-redux";
import { Input } from "@windmill/react-ui";
import ButtonComp from "./Button";

function Quizes(props) {
  return (
    <div>
      {props.quests.map((questsi) => {
        return (
          <div>
            <QuestionCard quest={questsi} />
            <Input type="text" />
            <ButtonComp onClick={() => props.deletequizaction(props.user)} text="Delete"/>
          </div>
        );
      })}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    deletequizaction: () =>
      dispatch({
        type: "DELETE_QUIZ",
        payload: "value",
      }),
    reset: () => dispatch({ type: "RESET" }),
  };
};

const mapStateToProps = (state) => {
  return {
    quests: state.questions,
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Quizes);
