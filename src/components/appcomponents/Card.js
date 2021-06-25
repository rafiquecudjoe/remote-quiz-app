import { Card, CardBody } from "@windmill/react-ui";

import React from "react";

function CardComp({ className,text }) {
  return (
    <div>
      <Card  className={className}>
        <CardBody>
          <p className="text-center  ">{text}</p>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardComp;
