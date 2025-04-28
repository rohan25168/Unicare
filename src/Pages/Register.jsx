import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation between forms
import axios from "axios"
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    contact: '',
    age: '',
  });

  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', formData)
    .then(result =>{console.log(result)
      navigate('/login')
    })
    // Handle form submission logic (e.g., send to API)
    // console.log('Registration data submitted:', formData);
    .catch(err => console.log(err))
  };

  const goToLogin = () => {
    navigate('/login'); // Navigate to the LoginForm component
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card border-light p-4">
            <h2 className="text-center mb-4">Registration Form</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              {/* Uncomment if you want to use the file upload */}
              {/* <div className="form-group">
                <label htmlFor="photo">Photo</label>
                <input type="file" className="form-control" id="photo" name="photo" />
              </div> */}
              <button type="submit" className="btn btn-secondary btn-block">
                Register
              </button>
              <p className="mt-3 text-center">
                Already have an account?{' '}
                <span onClick={goToLogin} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                  Login here
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
