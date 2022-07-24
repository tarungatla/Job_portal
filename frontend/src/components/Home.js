import React from 'react'
import Jobs from './Jobs'
import { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {

  const baseURL = "http://127.0.0.1:8000/";

  const [jobs,setJobs] = useState([]);

  useEffect(() => {
   axios.get(baseURL+"jobs").then((response) => {
     setJobs(response.data);
     console.log(jobs);
   })
   },[]);
  return (
    <>
    {jobs.length===0 ? ( <h1 style={{textAlign:"center"}}>No Jobs Posted</h1>) : (<Jobs data={jobs} changeCid={props.changeCid} cid={props.cid}/>)}
   </>
  
  )
}

export default Home