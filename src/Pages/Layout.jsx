import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Layout.css';


function Layout() {

//   document.addEventListener('DOMContentLoaded', function() {
//     const faqItems = document.querySelectorAll('.faq-item');

//     faqItems.forEach(item => {
//         const questionButton = item.querySelector('.faq-question');
        
//         questionButton.addEventListener('click', () => {
//             item.classList.toggle('active');
//         });
//     });
// });
    
        return (
          <>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
           
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
           
           
           
           
           <nav className="navbar navbar-expand-lg navbar-light">
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
    
        <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">

              <li className="img">
                <img src="Images/logo1.png" className="img-fluid"/>
              </li>
              </li>
              <li>
              <a className="nav-link" href="home">Home</a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link" href="fundraiser.html">Fundraise For</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link" href="ngo.html">NGO</a>
          </li> 
    
            <li className="nav-item">
                <a className="nav-link" href="About.html">About Us</a>
            </li>   
              
            <li className="nav-item">
              <a className="nav-link" href="contact">Contact Us</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="form">Donate Now</a>
          </li> 

          <li className="nav-item">
              <a className="nav-link" href="form"></a>
          </li> 
        


           <a href="login" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </a> 
          <li className="nav-item">
              <a className="nav-link" href="register"></a>
          </li> 
          </ul>
        </div>
  </nav>
      
            <Outlet />
          </>
        )
      
}

export default Layout
