import React from "react";
import AdminJob from "./AdminJob";

const AdminJobs = (props) => {
  
  // console.log(data);

  return (
    <div className="jobs">

      {props.data.map((d) => {
        return <AdminJob key={d.id} data={d} changeCid={props.changeCid} cid={props.cid}/>;
      })}
    </div>
  );
};

export default AdminJobs;
