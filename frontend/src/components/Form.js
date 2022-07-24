import { useState } from "react";
import "../css/App.css";
import { useNavigate } from "react-router";
import axios from "axios";

function Form (props) {

  const url = "http://127.0.0.1:8000/Add/application";
  const navigate = useNavigate();
  const initialValues = { username: "", email: "", skills: "",qualification: ""};
  const [formValues, setFormValues] = useState(initialValues);
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormValues({ ...formValues, [name]: value });
  };

  // {
  //   "name": "Tarun",
  //   "email": "123",
  //   "skills": "Travel",
  //   "qualification": "Btech",
  //   "status": 0
  // }
  const apply = (user) => {          
    axios
    .post(url, {
      name: user.username,
      email: user.email,
      skills: user.skills,
      qualification: user.qualification,
      status: 0,
      c_id: props.cid                            //temporary for testing
    })
    .then((response) => {
      console.log(response.data);
      // console.log(response);
    });                              
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.username==="" || formValues.email==="" || formValues.skills==="" || formValues.qualification==="") {
  alert("ALl the fields are mandatory!");
  return;
}
    apply(formValues);
    
    navigate("/");
  };


  return ( 
    <div className="container">
    
      <form onSubmit={handleSubmit}>
        <h1>Application Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="username"
              placeholder="Name"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>skills</label>
            <input
              type="text"
              name="skills"
              placeholder=""
              value={formValues.skills}
              onChange={handleChange}
            />
            </div>
          <div className="field">
            <label>Qualification</label>
            <input
              type="text"
              name="qualification"
              placeholder=""
              value={formValues.qualification}
              onChange={handleChange}
            />

          </div>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form> 
    </div>

  );
}
export default Form;
