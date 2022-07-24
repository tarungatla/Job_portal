import React from "react";
import { useNavigate } from "react-router";

const Job = (props) => {
  
  const job = props.data;

  console.log(props.data)
  const navigate = useNavigate();
  const apply = (c_id) => {
    props.changeCid(c_id)
    navigate("/form");
  }


  
  return (
    <div className="job-container">
      
      <div className="part1">
        <div className="company">
          <span className="cname">{job.company_name}</span>

        </div>

        <div className="position">{job.job_tittle}</div>

        <div className="details">
          <span>{job.job_description}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{job.location}</span>
        </div>
      </div>
      <button type="button" onClick={(e)=> apply(job.c_id)}>    
                Apply
        </button>
    </div>
  );
};

export default Job;
