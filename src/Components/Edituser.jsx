import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Edituser = () => {
  let {id}=useParams();
  let navigate=useNavigate()

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");

  useEffect(() => {
    
    axios
    .get(`https://reqres.in/api/users/${id}`)
    .then(({ data }) => {
      setFirstName(data.data.first_name);
      setLastName(data.data.last_name);
      setEmail(data.data.email);
    })
    .catch(() => {
      toast.error("Failed to fetch user data");
    });
}, [id]);
  
let handleSubmit = async (e) => {
  e.preventDefault();
  let payload = {
    first_name: firstName,
    last_name: lastName,
    email
  };
  try {
    await axios.put(`https://reqres.in/api/users/${id}`, payload);
    toast.success("User updated successfully!");
    navigate("/userlist");
  } catch (error) {
    toast.error("Failed to update user");
  }
};
 
  return (
    <div id='form-container'>
     
     <form onSubmit={handleSubmit}>
        <h2>Edit User</h2>
        <div className="form-items">
          <input type='text' value={firstName} placeholder='First Name' 
            onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="form-items">
          <input type='text' value={lastName} placeholder='Last Name' 
            onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="form-items">
          <input type='email' value={email} placeholder='Email' 
            onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-items" id="btn">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  )
}

export default Edituser