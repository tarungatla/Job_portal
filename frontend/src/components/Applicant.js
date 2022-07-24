import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Applicant = (props) => {
    const data = props.data;
    const id = data.a_id;
    const navigate = useNavigate();
    const url1 = "http://127.0.0.1:8000/put1/application/";
    const url2 = "http://127.0.0.1:8000/put2/application/";
    const accept = () => {
      console.log(data.a_id);
      axios.put(url1 + id).then((response)=> console.log(response));
      navigate('/admin');
    }

    const reject = () => {
      console.log(data.a_id);
      axios.put(url2 + id).then((response)=> console.log(response));
      navigate('/admin');
    }
console.log(data)
  return (
    <div className="container">
    
    <form >
      <div className="ui divider"></div>
      <div className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="username"
            value={data.name}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
          />
        </div>
        <div className="field">
          <label>skills</label>
          <input
            type="text"
            name="skills"
            value={data.skills}
          />
          </div>
        <div className="field">
          <label>Qualification</label>
          <input
            type="text"
            name="qualification"
            value={data.qualification}
          />

        </div>
        <button className="fluid ui button blue" onClick={accept}>Accept</button>
        <button className="fluid ui button blue" onClick={reject}>Reject</button>
      </div>
    </form> 
  </div>

  );
}

export default Applicant