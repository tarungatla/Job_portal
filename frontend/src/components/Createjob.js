import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";


const Createjob = () => {
    // console.log(props);
    const navigate = useNavigate();

    const url = "http://127.0.0.1:8000/add/job";

    
  const [jobs,setJobs] = useState([]);
 
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/jobs").then((response) => {
      setJobs(response.data);
     //  console.log(jobs);
    })
    },[]);

    const initialValues = { companyName: "", jobTitle: "", location: "",description: ""};
    const [formValues, setFormValues] = useState(initialValues);
   

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    // "company_name": "st"company_name": "string",
    // "job_tittle": "string",
    // "location": "string",
    // "job_description": "string"
    const addJob = (job) => {          
      axios
      .post(url, {
        company_name: job.companyName,
        job_tittle: job.jobTitle,
        location: job.location,
        job_description: job.description
      })
      .then((response) => {
        console.log(response.data);
        setJobs([...jobs, { id: response.data.c_id, ...response.data }]);
      });                              
    };
  
    const handleSubmit = (e) => {
       e.preventDefault();
        if (formValues.companyName==="" || formValues.jobTitle==="" || formValues.location==="" || formValues.location==="") {
      alert("ALl the fields are mandatory!");
      return;
    }
    addJob(formValues);
    navigate("/admin");
    };
  

    return ( 
      <div className="container" style={{marginLeft:"20em"}}>
      
        <form onSubmit={handleSubmit}>
          <h1>Job Posting Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formValues.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Job Title</label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formValues.jobTitle}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label>Location</label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formValues.location}
                onChange={handleChange}
              />
              </div>
            <div className="field">
              <label>Description</label>
              <input
                type="text"
                name="description"
                placeholder=""
                value={formValues.description}
                onChange={handleChange}
              />
  
            </div>
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form> 
      </div>
  
    );
}

export default Createjob