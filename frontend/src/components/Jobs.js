import React from "react";
import Job from "./Job";

const Jobs = (props) => {
  
  // console.log(props);

  return (
    <div className="jobs">

      {props.data.map((d) => {
        return <Job key={d.id} data={d} changeCid={props.changeCid} cid={props.cid}/>;
      })}
    </div>
  );
};

export default Jobs;
