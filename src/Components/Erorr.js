import React from "react";
import { useRouteError } from "react-router-dom";

const Erorr = () => {
  const error = useRouteError();
  console.log(error, "----------");
  return (
    <div>
      oopss! an Erorr occured {error.error.message} {error.status}
    </div>
  );
};

export default Erorr;
