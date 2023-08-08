import axios from "axios";
import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({ data: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const SubmitAction = async (event) => {
                event.preventDefault();
            
                try {
                  const response = await axios.post('https://api.example.com/post-endpoint', formData);
            
                  console.log('Response from server:', response.data);
                  // Handle the response data as needed
                } catch (error) {
                  console.error('Error:', error);
                  // Handle errors
                }
              };
    return (
        <div>
            <h1><center>Login Form</center></h1>
            <label>Enter UserID : </label>
            <input name='username' style={{ fontFamily: "Bold" }}
                className="form-control form-control-lg" placeholder='UserID'
                onChange={(e) => handleChange(e)} required={true} />
            <label>Enter Password : </label>
            <input name="password" style={{ fontFamily: "Bold" }}
                className="form-control form-control-lg" type="password"
                placeholder='Password' onChange={(e) => handleChange(e)} required={true} />
            <button onClick={SubmitAction}>Submit</button>
        </div>
    )

}
export default App;