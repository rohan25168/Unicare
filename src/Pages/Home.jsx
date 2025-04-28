

import React from 'react';

import './Home.css';
import'./Chatbot';

// const tvItems = [
//   {
//     id: 1,
//     name: 'Samsung Neo QLED 8K Smart TV',
//     price: '1,27,000 INR',
//     imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/qa75qn800ckxxl/gallery/in-qled-qn800c-qa75qn800ckxxl-535909387?$1300_1038_PNG$',
//     description: 'Enjoy stunning 8K resolution and smart features with this Samsung TV.',
//   },
//   {
//     id: 2,
//     name: 'LG 65" OLED TV',
//     price: '70,499 INR',
//     imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua85cu8000kxxl/gallery/in-crystal-uhd-cu8000-454608-ua85cu8000kxxl-536429361?$1300_1038_PNG$',
//     description: 'Experience rich colors and deep blacks with the LG OLED TV.',
//   },
//   {
//     id: 3,
//     name: 'Sony 50" LED TV',
//     price: '2,20,345 INR',
//     imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua85cu8000kxxl/gallery/in-crystal-uhd-cu8000-454608-ua85cu8000kxxl-536429361?$1300_1038_PNG$',
//     description: 'Get vibrant visuals and immersive sound with the Sony LED TV.',
//   },
//   {
//     id: 4,
//     name: 'TCL 32" HD Smart TV',
//     price: '1,23,999 INR',
//     imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua85cu8000kxxl/gallery/in-crystal-uhd-cu8000-454608-ua85cu8000kxxl-536429361?$1300_1038_PNG$',
//     description: 'Enjoy HD streaming and built-in Roku functionality with this TCL Smart TV.',
//   },
//   {
//     id: 5,
//     name: 'Hisense 43" 4K UHD TV',
//     price: '2,34,999 INR',
//     imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua85cu8000kxxl/gallery/in-crystal-uhd-cu8000-454608-ua85cu8000kxxl-536429361?$1300_1038_PNG$',
//     description: 'Upgrade to 4K UHD resolution with the Hisense TV for stunning clarity.',
//   },
// ];

function Home() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
           
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            
    <div className="jumbotron jumbotron-fluid fundraiser-jumbotron">
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <h1 className="display-4">Make a Difference with Us</h1>
                  <p className="lead">"Together, we can create stories of hope and impact."</p>
                  <hr className="my-4 bg-dark"/>
                  <p>Support our cause and help us bring positive change to those in need.</p>
                  <p className="lead">
                      <a className="btn2 btn2-outline-dark btn2-md donate-btn2" href="donate.html" role="button">Donate Now</a>
                  </p>
              </div>
              <div className="col-md-6">
                  <div className="video-container">
                      <video className="fundraiser-video" autoplay muted loop playsinline>
                          <source src="Images/main_vid.mp4" type="video/mp4"/>
                          Your browser does not support the video tag.
                      </video>
                  </div>
              </div>
          </div>
      </div>
  </div>


  {/* <!-- section -->

  <!-- How Crowdfunding Works Section --> */}

<section id="how-crowdfunding-works" className="content-section">
  <div className="container">
      <h2>How Crowdfunding Works on UNICARE</h2>
      <p>UNICARE empowers individuals, nonprofits, and organizations to bring ideas to life by connecting them with supporters worldwide. Here’s how the crowdfunding process works:</p>
      
      <div className="steps">
          {/* <!-- Step 1 --> */}
          <div className="step">
              <h3>Step 1: Set Up a Campaign</h3>
              <p>Start by creating a campaign page on UNICARE. Describe your project, the problem you aim to solve, and the impact you hope to make. Set a funding goal, timeline, and add photos or videos to personalize your story.</p>
          </div>
          
          {/* <!-- Step 2 --> */}
          <div className="step">
              <h3>Step 2: Engage Your Supporters</h3>
              <p>Share your campaign with friends, family, and social networks. Leverage emails, social media, and other outreach methods to attract more attention. UNICARE helps by promoting trending and impactful campaigns.</p>
          </div>
          
          {/* <!-- Step 3 --> */}
          <div className="step">
              <h3>Step 3: Collect Contributions</h3>
              <p>Supporters contribute directly to your campaign through secure payment options on UNICARE. You can keep track of donations in real-time, view backer comments, and share updates to keep backers engaged.</p>
          </div>
          
          {/* <!-- Step 4 --> */}
          <div className="step">
              <h3>Step 4: Fund Your Project</h3>
              <p>Once the campaign reaches its funding goal, you receive the funds to implement your project. Update your backers on the progress and outcomes, showing them the impact of their support.</p>
          </div>
          
      </div>
  </div>
</section>


{/* <!-- story --> */}


<div className="fundraiser-section">
  <h2>Support a fundraiser</h2>
  <p className="fundraiser-description">Pick a cause close to your heart and donate now</p>

  <div className="fundraiser-cards">
      {/* <!-- Fundraiser Card 1 --> */}
      <div className="fundraiser-card">
          <div className="card-image">
              <span className="tax-benefits">Tax Benefits Available</span>
              <img src="Images/3.jpg" alt="Fundraiser Image"/>
              <p className="card-caption">NAB Delhi can help thousands of blind kids with the facilities they need.</p>
          </div>
          <div className="card-content">
              <h3>This visually impaired Veena, loving mother to 180...</h3>
              <p className="fundraiser-org">by The National Association for the Blind</p>
              <div className="card-stats">
                  <span className="donations">4,257 Donations</span>
                  <span className="days-left">3 Days Left</span>
              </div>
              <p className="amount-raised">₹45,65,815 <span className="goal">Raised of ₹60,00,000 goal</span></p>
          </div>
      </div>

      {/* <!-- Fundraiser Card 2 --> */}
      <div className="fundraiser-card">
          <div className="card-image">
              <span className="tax-benefits">Tax Benefits Available</span>
              <img src="Images/8.jpg" alt="Fundraiser Image"/>
              <p className="card-caption">This Diwali, save abandoned, elderly widow mothers of...</p>
          </div>
          <div className="card-content">
              <h3>This Diwali, save abandoned, elderly widow mothers of...</h3>
              <p className="fundraiser-org">by Give</p>
              <div className="card-stats">
                  <span className="donations">1,424 Donations</span>
                  <span className="days-left">3 Days Left</span>
              </div>
              <p className="amount-raised">₹8,96,313 <span className="goal">Raised of ₹1,10,00,000 goal</span></p>
          </div>
      </div>

      {/* <!-- Fundraiser Card 3 --> */}
      <div className="fundraiser-card">
          <div className="card-image">
              <span className="tax-benefits">Tax Benefits Available</span>
              <img src="Images/10.jpg" alt="Fundraiser Image"/>
              <p className="card-caption">Help Rajasree give girl children from red-light areas a life awa...</p>
          </div>
          <div className="card-content">
              <h3>Help Rajasree give girl children from red-light areas a life awa...</h3>
              <p className="fundraiser-org">by Mahima India</p>
              <div className="card-stats">
                  <span className="donations">759 Donations</span>
                  <span className="days-left">2 Days Left</span>
              </div>
              <p className="amount-raised">₹10,79,270 <span className="goal">Raised of ₹50,00,000 goal</span></p>
          </div>
      </div>
  </div>
</div>

  
  {/* <!-- slider --> */}


  <div id="featuredFundCarousel" className="carousel slide" data-ride="carousel" data-interval="2000">
    <div className="container">
      <h1 id="d1">Donate For </h1>
         <ol className="carousel-indicators">
        <li data-target="#featuredFundCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#featuredFundCarousel" data-slide-to="1"></li>
        <li data-target="#featuredFundCarousel" data-slide-to="2"></li>
        <li data-target="#featuredFundCarousel" data-slide-to="3"></li>
        <li data-target="#featuredFundCarousel" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="Images/5.jpg" className="Fundraise-img" alt="Fundraise 1"/>
            <div className="Fundraise-desc">
            <h3>EDUCATION</h3>
            <p>Support education initiatives to unlock opportunities and empower individuals. With your help, we can provide resources, scholarships, and learning programs that transform lives and open doors for future generations.</p>
            <a href="donate.html" className="btn2 btn2-outline-dark">Donate Now</a>
            </div>
        </div>
        <div className="carousel-item">
          <img src="Images/7.jpg" className="Fundraise-img" alt="Fundraise 2"/>
          <div className="Fundraise-desc">
          <h3>ANIMALS</h3>
          <p>Join us in protecting animals and advocating for humane treatment. Your contribution helps rescue endangered species, provide shelter and medical care to abandoned animals, and promote a more compassionate world for all creatures.</p>
           <a href="donate.html" className="btn2 btn2-outline-dark">Donate Now</a>
          </div>
        </div>
        <div className="carousel-item ">
            <img src="Images/6.jpg" className="Fundraise-img" alt="Fundraise 3"/>
            <div className="Fundraise-desc">
            <h3>ENVIRONMENT</h3>
            <p>Help us safeguard the planet for generations to come. Donations go toward conservation efforts, pollution reduction, and sustainable practices, protecting our ecosystems and addressing climate change.</p>
            <a href="child.html" className="btn2 btn2-outline-dark">Donate Now</a>
            </div>
        </div>
        
            <div className="carousel-item ">
                <img src="Images/4.jpg" className="Fundraise-img" alt="Fundraise 4"/>
                <div className="Fundraise-desc">
                    <h3>CHILDRENS</h3>
                    <p>Every child deserves a safe and nurturing environment. Your support provides resources for education, health, and welfare programs, creating a world where children can thrive and achieve their dreams.</p>
                    <a href="child.html" className="btn2 btn2-outline-dark">Donate Now</a>
                </div>
            </div> 
            <div className="carousel-item">
            <img src="Images/1.jpg" className="Fundraise-img" alt="Fundraise 5"/>
            <div className="Fundraise-desc">
                <h3>HEALTH</h3>
                <p>Access to quality healthcare is a basic right. By contributing to health initiatives, you help fund essential medical care, research, and support for those in need, bringing hope and healing to communities around the world.</p>
                <a href="child.html" className="btn2 btn2-outline-dark">Donate Now</a>
            </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#featuredFundCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#featuredFundCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
      </div>
  </div>    
 

{/* <!-- why UNICARE --> */}

<div className="container my-5">
  {/* <!-- Row for content --> */}
  <div className="row">
      {/* <!-- Column for the crowdfunding explanation --> */}
      <div className="col-md-6">
          <h2 className="section-heading">Why Choose UNICARE for Raising Funds?</h2>
          <p className="section-description">
              UNICARE provides an easy-to-use platform for individuals and organizations to raise funds for causes they care about. 
              Whether you're supporting a health initiative, social cause, or creative project, our crowdfunding platform helps you reach the right audience and achieve your goals. 
              With secure payment options and transparent processes, UNICARE ensures that your efforts make a lasting impact.
          </p>
      </div>
      {/* <!-- Additional content can be added in another col-md-6 here --> */}
      <div className="col-md-6">
          {/* <!-- Placeholder for additional content (e.g., a call to action or a form) --> */}
          <div className="fundraising-image">
              <img src="Images/why.jpg" alt="Crowdfunding Image" className="img-fluid"/>
          </div>
      </div>
  </div>
</div>


{/* <!-- review --> */}

<div className="container">
  <h1>Here's what people say about <span>UNICARE</span></h1>
  <div className="testimonials">
      <div className="testimonial">
          <p>UNICARE has been at the forefront of supporting healthcare initiatives during challenging times. I trust them completely to make a positive impact where it’s needed most.</p>
          <div className="author">
              <img src="Images/v1.jpg" alt="Author 1"/>
              <div className="author-info">
                  <strong>John Doe</strong>
                  <span>Healthcare Specialist</span>
              </div>
          </div>
      </div>
      <div className="testimonial">
          <p>I’ve seen firsthand how UNICARE’s team works with transparency and integrity. They’ve created real change in communities that needed urgent support.</p>
          <div className="author">
              <img src="Images/v2.jpg" alt="Author 2"/>
              <div className="author-info">
                  <strong>Jane Smith</strong>
                  <span>Philanthropist</span>
              </div>
          </div>
      </div>
      <div className="testimonial">
          <p>The efforts UNICARE put into community support are inspiring. They make it easy for donors to contribute and trust that their funds are being used effectively.</p>
          <div className="author">
              <img src="Images/v3.jpg" alt="Author 3"/>
              <div className="author-info">
                  <strong>Dr. Emily Clark</strong>
                  <span>Community Leader</span>
              </div>
          </div>
      </div>
      <div className="testimonial">
          <p>UNICARE’s impact on healthcare has been profound. They have managed to bring hope and aid to many who need it the most. I highly recommend supporting their work.</p>
          <div className="author">
              <img src="Images/v4.jpg" alt="Author 4"/>
              <div className="author-info">
                  <strong>Michael Lee</strong>
                  <span>Social Worker</span>
              </div>
          </div>
      </div>
  </div>
</div>
  



<div className="container">
  <h1>UNICARE</h1>
  <p className="tagline">India's Most Trusted Crowdfunding Platform</p>
  <div className="stats">
      <div className="stat-item">
          <h2>5M+</h2>
          <p>Donations</p>
      </div>
      <div className="stat-item">
          <h2>25M+</h2>
          <p>Lives Impacted</p>
      </div>
      <div className="stat-item">
          <h2>4000+</h2>
          <p>Verified Non-Profits</p>
      </div>
      <div className="stat-item">
          <h2>500+</h2>
          <p>Corporate Partners</p>
      </div>
  </div>
</div>




<div className="container">
  <div className="faq-section">
    <h2>FAQs</h2>
    <p className="faq-description">Everything you need to know about our initiatives, if you have any other questions please reach out to us at: <a href="mailto:support@unicare.org">support@unicare.org</a></p>
    
    <div className="faq-item">
        <button className="faq-question">
            What does UNICARE do?
            <span className="plus-icon">+</span>
        </button>
        <div className="faq-answer">
            <p>UNICARE is committed to supporting healthcare initiatives by mobilizing resources to those who need them most.</p>
        </div>
    </div>
  
    <div className="faq-item">
        <button className="faq-question">
            How can I donate online?
            <span className="plus-icon">+</span>
        </button>
        <div className="faq-answer">
            <p>You can donate through our secure online portal using credit card, debit card, or bank transfer.</p>
        </div>
    </div>
  
    <div className="faq-item">
        <button className="faq-question">
            Is there a minimum donation amount?
            <span className="plus-icon">+</span>
        </button>
        <div className="faq-answer">
            <p>The minimum donation amount is $5. Every donation, big or small, makes a difference.</p>
        </div>
    </div>
  
    <div className="faq-item">
        <button className="faq-question">
            How do I claim tax exemption against my donation?
            <span className="plus-icon">+</span>
        </button>
        <div className="faq-answer">
            <p>After your donation, you will receive a tax receipt which can be used to claim exemptions as per your country’s tax laws.</p>
        </div>
    </div>
  
    <div className="faq-item">
        <button className="faq-question">
            What are the causes I can support through UNICARE?
            <span className="plus-icon">+</span>
        </button>
        <div className="faq-answer">
            <p>UNICARE focuses on healthcare, education, and social welfare projects that aim to improve communities worldwide.</p>
        </div>
    </div>
  
    <div className="faq-item">
        <button className="faq-question">
            How do I know if my donation has reached the beneficiary?
            <span className="plus-icon">+</span>
        </button>
        <div className="faq-answer">
            <p>We provide regular updates and reports to ensure transparency about the impact of your donations.</p>
        </div>
    </div>
  
    <div className="faq-item">
        <button className="faq-question">
            Why donate monthly?
            <span className="plus-icon">+</span>
        </button>
        <div className="faq-answer">
            <p>Monthly donations allow us to plan and sustain long-term projects, making a greater impact over time.</p>
        </div>
    </div>
  </div>
</div>

{/* <script src="script.js"></script> */}




<footer className="footer">
  <div className="container">
    <div className="row">
      
      <div className="col-md-3 footer-section " id='abc'>
        <h5>Quick Links</h5>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">How It Works</a></li>
          <li><a href="#">Fundraising Causes</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>

     
      <div className="col-md-3 footer-section " id='xyz'>
        <h5>Support</h5>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Donate</a></li>
          <li><a href="#">Start a Campaign</a></li>
          <li><a href="#">Volunteer Opportunities</a></li>
        </ul>
      </div>

      
      <div className="col-md-3 footer-section ">
        <h5>Connect With Us</h5>
        <ul className="social-icons">
            <a href="#"><img src="Images/facebook.png" alt="Facebook"/></a>
            <a href="#"><img src="Images/twitter.png" alt="Twitter"/></a>
            <a href="#"><img src="Images/insta.png" alt="Instagram"/></a>
            <a href="#"><img src="Images/linkedin.png" alt="LinkedIn"/></a>
         
        </ul>
      </div>

      
      <div className="col-md-3 footer-bottom">
        <p>&copy; 2024 UNICARE. All Rights Reserved.</p>
        <p>Crafted with ❤️ for a better world.</p>
      </div>
    </div>
  </div>
</footer>


    </>
  );
}



export default Home