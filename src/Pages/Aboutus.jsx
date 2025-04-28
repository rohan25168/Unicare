import React from 'react'
import './AboutUs.css';
function Aboutus() {
  return (
    <>
    {/* <header> */}
    {/* <nav>
      <div class="logo">
        <a href="#">Unicare</a>
      </div>
      <ul class="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#values">Values</a></li>
        
        <li><a href="#team">Our Team</a></li>
        <li><a href="#information">Information</a></li>
      </ul>
    </nav>
  </header> */}

  {/* <!-- Start of the Jumbotron --> */}
   
  <div class="jumbotron" id="adoutus"  background-color="#CFD6C4">
    <div class="jumbotron-text" >
      <h1 id="about">About Unicare</h1>
      
      <h4 class="lead" >It's not how much we give ,but how much love we put  into giving</h4>

      <hr class="my-10"/>
      <p id="textbold">Your support changes lives, one step at a time.</p>
      <p class="lead">
        <a class="btn  btn-md" href="donate.html" role="button">Donate Now</a>
      </p>
    </div>
    <div id="jumbotron-img">
      <img src="Images/bg2.png" class="img-fluid" alt="Jumbotron Image"/>
    </div>
  </div>
  {/* <!-- End of the Jumbotron --> */}

                {/* <!-- start of container  --> */}
   <div class="container">
      {/* <div class="row">
        <div class="col-md-3">
            <h1>1.5M+</h1>
         
             <h2>Doners</h2>
        </div>
        <div class="col-md-3"><h1>150+</h1>
            
            <h2>Corparate Partner And Brands</h2>
        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="col-md-3"><h1>12M+</h1>
            
            <h2>Served</h2></div>
      </div><br/> */}
        <img src="Images/thought2.png" height="500px" width="1300px" alt=""/><br/><br/>
         <h3 id="values"><center><b>Values</b></center></h3><br/><br/>

        <div class="row">
         <div class="col-md-3">
          <div class="card">
            <div class="card-header">
              <center><img src="Images/trust.jpg" height="100%" width="100%"/></center>
            </div>
            <div class="card-body" background-color="#657166" >
              <div class="dropdown">
                <button class="btn  dropdown-toggle" background-color="#657166"type="button" data-toggle="dropdown" aria-expanded="true" >
                  <center><b>Trust</b></center>
                </button>
                <div class="dropdown-menu " >
                  <p>Our Trust & Safety team works around the clock to ensure your safety and protect against fraud. We also provide the first and only donor protection guarantee: the Unicare Giving Guarantee. With eight years of experience and the most money raised, Unicare has earned the trust of respected institutions and government officials around the world.</p>
                </div>
              </div>
            </div>
          </div>
         </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="col-md-3">
            <div class="card">
              <div class="card-header ">
                <center><img src="Images/reach.jpg" height="100%" width="100%"alt="Reach"/></center>
              </div>
              <div class="card-body">
                <div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
                    <center><b>Reach</b></center>
                  </button>
                  <div class="dropdown-menu  " >
                    <p>Unicare helps you easily share your story far and wide over email, text, and social media to rally support for your cause. In addition, we have a dedicated team looking for great stories to amplify and share with the media and our community.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="col-md-3">
              <div class="card">
                <div class="card-header">
                  <center><img src="Images/service.png" height="100%" width="100%"alt="Service"/></center>
                </div>
                <div class="card-body">
                  <div class="dropdown">
                    <button class="btn  dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
                      <center><b>Service</b></center>
                    </button>
                    <div class="dropdown-menu" >
                      <p>Need customer service? Unicare is ready to help. Our help center team is here to answer your questions, offer expert advice, and support you every step of the way. We care about your questions, which is why we’re committed to providing a rapid and friendly response.</p>
                    </div>
                  </div>
                </div>
              </div>
         </div>


       </div>
   </div><br/><br/><br/><br/>
           <h2 id="team"><center>Meet Our Team</center></h2><br/><br/>

       <div class="row">
        <div class="col-md-2">
          <img src="" alt=""/>
          

        </div>
        
         <div class="col-md-2">
             <div class="card">
              <div class="card-header " >
                <img src="Images/service.png" alt=""/>
               
                 <h5><b>Shambhavi Asole</b><p>Founder of Unicare</p></h5>
              </div>
             </div>
            

          </div>

         <div class="col-md-2">
          <div class="card">
            <div class="card-header">
              <img src="Images/service.png" alt=""/>
              
               <h5><b>Purva Gorde</b><p>Director , Finance</p></h5>
            </div>
           </div>
          

          </div>

         <div class="col-md-2">
          <div class="card">
            <div class="card-header">
              <img src="Images/service.png" alt=""/>
              <h5><b>Rohan Kalekar</b><p>CEO</p></h5>
            </div>
           </div>

            

          </div>

          <div class="col-md-2">
            <div class="card">
              <div class="card-header">
                <img src="Images/service.png" alt=""/>
                <h5><b>Harshal Devale</b><p>Associate Director</p></h5>
                
              </div>
             </div>
             

          </div>
          <div class="col-md-2">
            <img src="" alt=""/>
            

          </div>



        </div>    <br/><br/>
                        {/* <!-- Start of Information Section --> */}

       <div class="info">
        <h2 id="information">Leagel & Financial Information</h2>
         <h5>UnicareIndia Inc</h5>
         <p><b>Address : </b>651 N, Broad St.,<br/>
          Suite 206, Middletown,<br/>
          Newcastle, Delaware - 19709</p>
          <br/>
          <h3>Saathi  Social Impact Solutions Pvt Ltd</h3>
          <p>Saathi Social Impact Solutions Pvt Ltd was incorporated under the Companies Act, 2013 and the company is limited by shares</p>
          <p><b>Address : </b>Registered office:
            2nd floor, <br/>Mira Complex, No. 15-19
            Sai nagar,<br/>
            Amravati,Maharashtra-444601</p>
            <p><b>Contact : </b> +91 955 204 7241</p>
            <p><b>Email : </b> kalekarrohan23@gmail.com</p>
            <br/>
            <h3>Unicare Foundation</h3>
            <ul>
              <li>Conflict Of Interest Policy</li>
              <li>Whistleblower Policy</li>
              <li>Document Retention Policy</li>
            </ul>



       </div>
       
     


  

  {/* <!-- Footer Section --> */}
  <footer>
    <div class="footer-container">
      <h5>Social Media Profiles</h5>
                                        <ul>
                                          <li><i class="bi bi-facebook"></i>&nbsp;Facebook</li>
                                          <li><i class="bi bi-instagram"></i>&nbsp;Instagram</li>
                                          <li><i class="bi bi-whatsapp"></i>&nbsp;Whatsapp</li>
                                        </ul>
      <p>&copy; 2024 Unicare Foundation | All Rights Reserved</p>
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms & Conditions</a></li>
      </ul>
      
    </div>
  </footer>

    </>
  )
}

export default Aboutus