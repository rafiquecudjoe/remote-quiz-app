import { Card, CardBody, Input } from "@windmill/react-ui";

function QuestionCard(props) {
  return (
    <div>
      <Card colored className="bg-purple-600 mt-1 mb-1">
        <CardBody>
          <p className="mb-4 font-semibold text-white">
            {props.quest.questnumb}
          </p>
          <p className="text-white">
            <p>Question: {props.quest.question}</p>
            <p>Answer 1: {props.quest.ans1}</p>
            <p>Answer 2: {props.quest.ans2}</p>
            <p>Answer 3: {props.quest.ans3}</p>
            <p>Marks: {props.quest.grade}</p>
            {}
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default QuestionCard;
