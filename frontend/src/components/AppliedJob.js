import React from "react";

const AppliedJob = (props) => {
  
  const data = props.data;
  console.log(data);

  return (
    <div className="job-container">
      <div className="part1">
        <div className="company">
          <span className="cname">{data.company_name}</span>

        </div>

        <div className="position">{data.job_tittle}</div>

        <div className="details">
          <p>Details:</p>
          <span>{data.name}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{data.email}</span>
          <p style={{color:"gray"}}>Skills: {data.skills}</p>
          <p style={{color:"gray"}}>Qualification: {data.qualification}</p>
        </div>
      </div>
      <button >    
         {data.status===0? ("Decision Pending") : (data.status===1?("Accepted"):("Rejected"))}
        </button>
    </div>
  );
};

export default AppliedJob;
