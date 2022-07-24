import { useState } from "react";
import {Routes,Route} from "react-router-dom"
import Form from "./components/Form"
import Admin from "./components/Admin.js";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Createjob from "./components/Createjob";
import Applicants from "./components/Applicants";
import AppliedJobsPage from "./components/AppliedJobsPage";

function App() {
   
  const [cid,setCid] = useState();
  const changeCid = (c_id) => {
    setCid(c_id);
  }   
  
  return (
    <div>
      <h1 style={{textAlign:"center"}}> JOB PORTAL</h1>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Routes>
      <Route path="/"  element={<Home changeCid={changeCid} cid={cid}/>} />
      <Route path="/admin"  element={<Admin changeCid={changeCid} cid={cid} />} />
      <Route path="/form" element={<Form changeCid = {changeCid} cid={cid}/>} />
      <Route path="/appliedjobs" element={<AppliedJobsPage/>} /> 
      <Route path="/createjob" element={<Createjob />} /> 
      <Route path="/applicants" element={<Applicants changeCid={changeCid} cid={cid}/>} /> 

      </Routes>
    </div>
  );
}

export default App;
