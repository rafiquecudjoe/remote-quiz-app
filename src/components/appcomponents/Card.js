import { Card, CardBody } from "@windmill/react-ui";

import React from "react";

function CardComp({ className,text1,text2 }) {
  return (
    <div>
      <Card  className={className}>
        <CardBody>
          <h1 className=" font-bold text-center">{text1}</h1>
          <p>{text2}</p>
         
        </CardBody>
      </Card>
    </div>
  );
}

export default CardComp;
