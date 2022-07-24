import React from 'react'
import AppliedJobs from './Appliedjobs';
import { useState, useEffect } from "react";
import axios from "axios";

const AppliedJobsPage = () => {
    
  const url = "http://127.0.0.1:8000/appliedjobs";
  const [data,setData] = useState([]);

//   const updateData = (dataa) => setData([...data,dataa]);
  useEffect(()=> {
    axios.get(url).then((response)=>{
      setData(response.data);
    })
  },[]);
  

  return (
    <div className="jobs">
      <h1>Applied Jobs</h1>
      
     {data.length===0 ?  ( <h1 style={{textAlign:"center"}}>No Applied Jobs</h1>): (<AppliedJobs data={data}/>)}

    </div>
  );

}

export default AppliedJobsPage;