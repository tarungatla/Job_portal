import React from "react";
import AppliedJob from "./AppliedJob";

const AppliedJobs = (props) => {   //component inside the applied jobs page

  // const appUrl = "http://127.0.0.1:8000/applications";
  // const jobUrl = "http://127.0.0.1:8000/find/";

  // const [data,setData] = useState([]);

  // const updateData = (dataa) => setData([...data,dataa]);
  // useEffect(()=> {
  //   axios.get(appUrl).then((response)=>{
  //     const apps = response.data;

  //     apps.map((app)=>{
  //       const id = app.c_id;
  //       console.log(id);
  //       axios.get(jobUrl+id).then((response)=>{
  //         const job = response.data;
  //         console.log(job);
  //         updateData({a_id:app.a_id,
  //           company_name: job.company_name,
  //           job_tittle:job.job_tittle,
  //           name: app.name,
  //           email: app.email,
  //           skills: app.skills,
  //           qualification: app.qualification ,
  //           status:app.status});

  //       })
  //     })

  //   })
  // },[]);
  

  return (
    <div className="jobs">
      {/* <h1>Applied Jobs</h1> */}

      {props.data.map((d) => {
        console.log(d);
        return (<AppliedJob key={d.a_id} data={d}/>)
      })}
    </div>
  );
};

export default AppliedJobs;


      // data.push(
        //   {a_id:app.a_id,
        //   company_name: job.company_name,
        //   job_tittle:job.job_tittle,
        //   name: app.name,
        //   email: app.email,
        //   skills: app.skills,
        //   qualification: app.qualification ,
        //   status:app.status});
        
