import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import Applicant from './Applicant'


const Applicants = (props) => {

   const cid = props.cid;
   console.log(cid);
   const [applicants,setApplicants] = useState([]);
  const url = "http://127.0.0.1:8000/applications/find/";
  useEffect(()=>{
    axios.get(url+cid).then((response) => {

      console.log(response.data);
      setApplicants(response.data);
      console.log(applicants);
    })
  },[cid]);

  
  return (

    <>
   <h1 style={{textAlign:"center",backgroundColor:"white"}}>Applicants</h1>
    
   {
   applicants.length===0 ? ( <h1 style={{textAlign:"center"}}>No applicants found</h1>) : 
   (applicants.map((applicant)=>{
    return <Applicant data={applicant} />
   }))
   }
   </>
  )
}

export default Applicants