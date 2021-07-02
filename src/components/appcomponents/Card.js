import { Card, CardBody } from "@windmill/react-ui";

import React from "react";

function CardComp({ className,text1,text2 }) {
  return (
    <div>
      <Card  className={className}>
        <CardBody>
          <h1 className="mb-4 font-bold text-center font-mono text-2xl">{text1}</h1>
          <p className="font-mono">{text2}</p>
         
        </CardBody>
      </Card>
    </div>
  );
}

export default CardComp;
