import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import AdminJobs from "./AdminJobs";
import axios from "axios";

const Admin = (props) => {
  const navigate = useNavigate();
  const createJob = () => {
    navigate("/createjob");
  }
  const url = "http://127.0.0.1:8000/jobs";
  const [jobs,setJobs] = useState([]);

  useEffect(() => {
   axios.get(url).then((response) => {
     setJobs(response.data);
    //  console.log(jobs);
   })
   },[]);

  return (
    <div className="jobs">
    {jobs.length===0 ? ( <h1 style={{textAlign:"center"}}>No Jobs Posted</h1>) : (<AdminJobs data={jobs} changeCid={props.changeCid} cid={props.cid}/>)}
     
        <button type="button" onClick={createJob}>
                Create job
        </button>
    </div>
  );
};

export default Admin;
