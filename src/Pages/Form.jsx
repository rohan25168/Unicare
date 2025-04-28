import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Create this CSS file for styles
import axios from 'axios';
const Form = () => {
  const [formTitle, setFormTitle] = useState('Start Your Fundraiser');
  const navigate = useNavigate();

  const handlePurposeChange = (e) => {
    const purposes = {
      medical: 'Donation for Medical Treatment',
      education: 'Donation for Education',
      environment: 'Donation for Environment',
      child: 'Donation for Child',
      'old-parents': 'Donation for Old-Parents',
      other: 'Start Your Fundraiser',
    };
    setFormTitle(purposes[e.target.value] || 'Start Your Fundraiser');
  };
  const [formData, setFormData] = useState({
    purpose:'',
     name: '',
     email: '',
     password: '',
     mobile: '',
     amount:''
     
   });
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/form', formData)
    .then(result =>{console.log(result)
      navigate('/donate.html')
    })
    // Handle form submission logic (e.g., send to API)
    // console.log('Registration data submitted:', formData);
    .catch(err => console.log(err))
  };

  const goToDonate = () => {
    navigate('/donate.html'); // Navigate to the LoginForm component
  };

  return (
    <div className="form-container">
      <h2 id="form-title">{formTitle}</h2>
      <form onSubmit={handleSubmit}>
        {/* // onSubmit={(e) => {
        //   e.preventDefault();
        //   navigate('/donate.html');
        // }} */}
      
        <label htmlFor="purpose">Purpose of Raising Fund</label>
        <select id="purpose" name="purpose" value={formTitle.purpose} onChange={handlePurposeChange}>
          <option value="medical">Medical Treatment</option>
          <option value="education">Education</option>
          <option value="environment">Environment</option>
          <option value="child">Child</option>
          <option value="old-parents">Old Parents</option>
          <option value="other">Other Cause</option>
        </select>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" required  value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />

        <label htmlFor="password">Create a Password</label>
        <input type="password" id="password" name="password" placeholder="Create a password" required  value={formData.password} onChange={handleChange}/>

        <label htmlFor="mobile">Mobile</label>
        <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required  value={formData.mobile} onChange={handleChange} />

        <label htmlFor="name">Amount</label>
        <input type="text" id="name" name="amount" placeholder="Enter your amount" required  value={formData.amount} onChange={handleChange} />


        <button type="submit" className="btn1" onClick={goToDonate}>Donate</button>
      </form>
    </div>
  );
};

export default Form;
