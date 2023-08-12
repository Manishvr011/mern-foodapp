import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

  
  const handleSubmit = async(e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/creatuser",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })  
      });

      const json = await response.json()
      console.log(json);

      if(!json.success){
        alert("Enter Valid Credentials")
      }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
        <div className='container' >
          <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label">Address</label>
              {/* <fieldset> */}
                <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
              {/* </fieldset> */}
            </div>
            {/* <div className="m-3">
              <button type="button" name="geolocation" className=" btn btn-success">Click for current Location </button>
            </div> */}
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
    </>
  );
};

export default Signup;