import React, { useState } from 'react';
import './Ngo.css'; // Import your CSS styles here

const Ngo = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);
  const [ngos, setNgos] = useState([]);
  const [mapSrc, setMapSrc] = useState("");

  const apiKey = "AIzaSyCaW5-FsuXUsTyw_SnhBwlMx0H6J8zk3FU"; // Replace with a valid API key

  const stateCityMap = {
    "Andaman and Nicobar Island": ["Port Blair"],
    "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur"],
    "Arunachal Pradesh": ["Itanagar"],
    "Assam": ["Guwahati"],
    "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
    "Chandigarh": ["Chandigarh"],
    "Chhattisgarh": ["Raipur"],
    "DaDadra & Nagar Haveli": ["Daman"],
    "Daman & Diu": ["Daman"],
    "Delhi": ["New Delhi", "Dwarka", "Karol Bagh"],
    "Goa": ["Panaji"],
    "Gujarat": ["Ahmedabad"],
    "Haryana": ["Ambala"],
    "Himachal Pradesh": ["Shimla"],
    "Jammu and Kashmir": ["Srinagar"],
    "Jharkhand": ["Ranchi"],
    "Karnataka": ["Bangalore", "Mysore", "Mangalore"],
    "Kerala": ["Thiruvananthapuram"],
    "Ladakh": ["Leh"],
    "Lakshadweep": ["Kavaratti"],
    "Madhya Pradesh": ["Bhopal"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Amravati", "Akola", "Yavatmal", "Sambhaji Nagar", "Kolhapur"],
    "Manipur": ["Imphal"],
    "Meghalaya": ["Shillong"],
    "Mizoram": ["Aizawl"],
    "Nagaland": ["Kohima"],
    "Odisha": ["Bhubaneswar"],
    "Puducherry": ["Pondicherry"],
    "Punjab": ["Chandigarh"],
    "Rajasthan": ["Jaipur"],
    "Sikkim": ["Gangtok"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Telangana": ["Hyderabad"],
    "Tripura": ["Agartala"],
    "Uttarakhand": ["Dehradun"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur"]
  };

  const ngoData = {
    "Vijayawada": [
      { name: "Helping Hands", address: "Vijayawada, AP", website: "http://helpinghands.org" },
      { name: "Good Samaritans", address: "Eluru Road, Vijayawada", website: "http://goodsamaritans.com" }
    ],
    "Patna": [
      { name: "Patna Relief", address: "Gandhi Maidan, Patna", website: "http://patnarelief.org" }
    ],
    "Mumbai": [
      { name: "Mumbai Care", address: "Bandra, Mumbai", website: "http://mumbaicare.org" }
    ],
    "Amravati":[
      {name:"Lasting Smile Foundation",address:"Camp Road, Amravati",website:"http://lastingsmile.org/"},
      { name: "AGVSS", address: "Shivangaon, Amravati", website: "https://www.agvss.org/" },
      { name: "Satpuda", address: "Sai Nagar, Amravati  ", website:"https://satpuda.org/"},
      { name: "Prayas", address: "Vimalnagar, Amravati", website: "https://prayasngo.net/" }

    ],
    "Nagpur":[
      {name:"Lasting Smile Foundation",address:"Camp Road, Amravati",website:"http://lastingsmile.org/"},
      { name: "AGVSS", address: "Shivangaon, Amravati", website: "https://www.agvss.org/" },
      { name: "Satpuda", address: "Sai Nagar, Amravati  ", website:"https://satpuda.org/"},
      { name: "Prayas", address: "Vimalnagar, Amravati", website: "https://prayasngo.net/" }

    ],
    "Akola":[
      {name:"Lasting Smile Foundation",address:"Camp Road, Amravati",website:"http://lastingsmile.org/"},
      { name: "AGVSS", address: "Shivangaon, Amravati", website: "https://www.agvss.org/" },
      { name: "Satpuda", address: "Sai Nagar, Amravati  ", website:"https://satpuda.org/"},
      { name: "Prayas", address: "Vimalnagar, Amravati", website: "https://prayasngo.net/" }

    ],
    "Yavatmal":[
      {name:"Lasting Smile Foundation",address:"Camp Road, Amravati",website:"http://lastingsmile.org/"},
      { name: "AGVSS", address: "Shivangaon, Amravati", website: "https://www.agvss.org/" },
      { name: "Satpuda", address: "Sai Nagar, Amravati  ", website:"https://satpuda.org/"},
      { name: "Prayas", address: "Vimalnagar, Amravati", website: "https://prayasngo.net/" }

    ],
    "Sambhaji Nagar":[
      {name:"Lasting Smile Foundation",address:"Camp Road, Amravati",website:"http://lastingsmile.org/"},
      { name: "AGVSS", address: "Shivangaon, Amravati", website: "https://www.agvss.org/" },
      { name: "Satpuda", address: "Sai Nagar, Amravati  ", website:"https://satpuda.org/"},
      { name: "Prayas", address: "Vimalnagar, Amravati", website: "https://prayasngo.net/" }

    ],
    "Kolhapur":[
      {name:"Lasting Smile Foundation",address:"Camp Road, Amravati",website:"http://lastingsmile.org/"},
      { name: "AGVSS", address: "Shivangaon, Amravati", website: "https://www.agvss.org/" },
      { name: "Satpuda", address: "Sai Nagar, Amravati  ", website:"https://satpuda.org/"},
      { name: "Prayas", address: "Vimalnagar, Amravati", website: "https://prayasngo.net/" }

    ]
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setCities(stateCityMap[state] || []);
    setSelectedCity("");
    setNgos([]);
    setMapSrc("");
  };

  const fetchNgos = async () => {
    if (!selectedState || !selectedCity) return;

    if (ngoData[selectedCity]) {
      setNgos(ngoData[selectedCity]);
      setMapSrc(`https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=NGOs in ${selectedCity}, ${selectedState}`);
      return;
    }

    const query = `NGOs in ${selectedCity}, ${selectedState}, India`;
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results) {
        setNgos(
          data.results.map((place) => ({
            name: place.name,
            address: place.formatted_address,
            website: place.website || "#"
          }))
        );
        setMapSrc(`https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${query}`);
      } else {
        setNgos([]);
        setMapSrc("");
      }
    } catch (error) {
      console.error("Error fetching NGOs:", error);
      setNgos([]);
      setMapSrc("");
    }
  };

  return (
    <>
      <div className="jumbotron">
        <div id="image">
          <center><img src="Images/wallpaper.png" alt="donation" /></center>
          <div className="text" style={{ color: 'aliceblue', fontSize: '40px' }}>
            <h1>Big changes are caused by small help</h1>
          </div>

          <div className="searchbar">
            <input className="form-control" type="search" placeholder="Search For NGO's" aria-label="Search" />
            <button className="btn" type="submit">Search</button>
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

      <h2 id="top"><b>Our Top NGO's</b></h2>
      <a href="https://serudsindia.org/ngo-names-list/"><button className="btn">View All</button></a>

      <div className="row">
        {[
          { name: 'Satpuda', link: 'https://balrakshabharat.org/', img: 'Images/satpuda.png' },
          { name: 'VARHAD', link: 'https://varhad.org/', img: 'Images/varhad.png' },
          { name: 'Mahan', link: 'https://www.mahantrust.org/', img: 'Images/mahan.png' },
          { name: 'Disha', link: 'https://www.deeshagroup.org/', img: 'Images/disha.png' },
          { name: 'Apeksha', link: 'https://apekshasociety.org/', img: 'Images/apeksha.png' },
          { name: 'Give India Foundation', link: 'https://www.giveindia.org/', img: 'Images/giveindia.png' },
          { name: 'CRY', link: 'https://www.cry.org/', img: 'Images/cry.png' },
          { name: 'Smile Foundation', link: 'https://www.smilefoundationindia.org/', img: 'Images/smile.png' },
        ].map((ngo, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
              <div className="card-header">
                <center><img src={ngo.img} alt={ngo.name} height="100%" width="100%" /></center>
              </div>
              <div className="card-body">
                <center><a href={ngo.link}><b>{ngo.name}</b></a></center>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="location" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className="col-md-6">
            {mapSrc ? (
              <iframe
                src={mapSrc}
                width="100%"
                height="400px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            ) : (
              <img src="Images/map.png" alt="map" />
            )}
          </div>
          <div className="col-md-6">
            <h4 style={{ marginTop: "40px" }}>
              Discover NGO's in your <b><i>state</i></b> and <b><i>city</i></b>
            </h4>
            <div className="searchbar">
              <select
                id="state-dropdown"
                onChange={(e) => handleStateChange(e.target.value)}
                value={selectedState}
              >
                <option value="">Select a state</option>
                {Object.keys(stateCityMap).map((state, index) => (
                  <option value={state} key={index}>
                    {state}
                  </option>
                ))}
              </select>

              <select
                id="city-dropdown"
                onChange={(e) => setSelectedCity(e.target.value)}
                value={selectedCity}
                disabled={!selectedState}
              >
                <option value="">Select a city</option>
                {cities.map((city, index) => (
                  <option value={city} key={index}>
                    {city}
                  </option>
                ))}
              </select>

              <button className="btn" onClick={fetchNgos}>
                Search
              </button>
            </div>
            <div className="ngo-list">
              {ngos.length > 0 ? (
                ngos.map((ngo, index) => (
                  <div key={index} className="ngo-item">
                    <p><b>{ngo.name}</b></p>
                    <p>{ngo.address}</p>
                    <button>{ngo.website && <a id="link" href={ngo.website} target="_blank" rel="noopener noreferrer">Visit Website</a>}</button>
                  </div>
                ))
              ) : (
                <p>No NGOs found</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <p>&copy; 2025 Unicare - All Rights Reserved</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Ngo;











                              //  Here the new code started
// import React, { useState } from "react";
// import "./Ngo.css";

// const Ngo = () => {
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [cities, setCities] = useState([]);
//   const [ngos, setNgos] = useState([]);
//   const [mapSrc, setMapSrc] = useState("");

//   const apiKey = "AIzaSyCaW5-FsuXUsTyw_SnhBwlMx0H6J8zk3FU"; // Replace with a valid API key

//   const stateCityMap = {
//     "Andaman and Nicobar Island":["Port Blair"],
//     "Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur"],
//     "Arunachal Pradesh":["Itanagar"],
//     "Assam":["	Guwahati"],
//     "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
//     "Chandigarh": ["Chandigarh"],
//     "Chhattisgarh":["	Raipur"],
//     "DaDadra & Nagar Haveli ":["Daman"],
//     "Daman & Diu":["Daman"],
//     "Delhi": ["New Delhi", "Dwarka", "Karol Bagh"],
//     "Goa":["	Panaji"],
//     "Gujarat":["Ahmedabad"],
//     "Haryana":["Ambala"],
//     "Himachal Pradesh":["Shimla"],
//     "Jammu and Kashmir":["Srinagar"],
//     "Jharkhand":["Ranchi"],
//     "Karnataka":["Bangalore", "Mysore", "Mangalore"],
//     "Kerala":["Thiruvananthapuram"],
//     "Ladakh":["Leh"],
//     "Lakshadweep":["	Kavaratti"],
//     "Madhya Pradesh":["Bhopal"],
//     "Maharashtra":["Mumbai", "Pune", "Nagpur","Amravati","Akola","Yavatmal","Sambhaji Nagar","Kolhapur"],
//     "Manipur":["Imphal"],
//     "Meghalaya":["Shillong"],
//     "Mizoram":["Aizawl"],
//     "Nagaland":["Kohima"],
//     "Odisha":["Bhubaneswar"],
//     "Puducherry":["	Pondicherry"],
//     "Punjab":["Chandigarh"],
//     "Rajasthan":["Jaipur"],
//     "Sikkim":["Gangtok"],
//     "Tamil Nadu":["Chennai", "Coimbatore", "Madurai"],
//     "Telangana":["Hyderabad"],
//     "Tripura":["Agartala"],
//     "Uttarakhand":["Dehradun"],
//     "Uttar Pradesh":["Lucknow", "Kanpur", "Varanasi"],
//     "West Bengal":["Kolkata", "Howrah", "Durgapur"],
//     };
    
 

//   const ngoData = {
//     "Vijayawada": [
//       { name: "Helping Hands", address: "Vijayawada, AP", website: "http://helpinghands.org" },
//       { name: "Good Samaritans", address: "Eluru Road, Vijayawada", website: "http://goodsamaritans.com" }
//     ],
//     "Patna": [
//       { name: "Patna Relief", address: "Gandhi Maidan, Patna", website: "http://patnarelief.org" }
//     ],
//     "Mumbai": [
//       { name: "Mumbai Care", address: "Bandra, Mumbai", website: "http://mumbaicare.org" }
//     ]
//   };

//   const handleStateChange = (state) => {
//     setSelectedState(state);
//     setCities(stateCityMap[state] || []);
//     setSelectedCity("");
//     setNgos([]);
//     setMapSrc("");
//   };

//   const fetchNgos = async () => {
//     if (!selectedState || !selectedCity) return;
    
//     if (ngoData[selectedCity]) {
//       setNgos(ngoData[selectedCity]);
//       setMapSrc(`https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=NGOs in ${selectedCity}, ${selectedState}`);
//       return;
//     }
    
//     const query = `NGOs in ${selectedCity}, ${selectedState}, India`;
//     const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       if (data.results) {
//         setNgos(
//           data.results.map((place) => ({
//             name: place.name,
//             address: place.formatted_address,
//             website: place.website || "#"
//           }))
//         );
//         setMapSrc(`https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${query}`);
//       } else {
//         setNgos([]);
//         setMapSrc("");
//       }
//     } catch (error) {
//       console.error("Error fetching NGOs:", error);
//       setNgos([]);
//       setMapSrc("");
//     }
//   };

//   return (
//     <>
//       <div className="location" style={{ backgroundColor: "white" }}>
//         <div className="row">
//           <div className="col-md-6">
//             {mapSrc ? (
//               <iframe
//                 src={mapSrc}
//                 width="100%"
//                 height="400px"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             ) : (
//               <img src="Images/map.png" alt="map" />
//             )}
//           </div>
//           <div className="col-md-6">
//             <h4 style={{ marginTop: "40px" }}>
//               Discover NGO's in your <b><i>state</i></b> and <b><i>city</i></b>
//             </h4>
//             <div className="searchbar">
//               <select
//                 id="state-dropdown"
//                 onChange={(e) => handleStateChange(e.target.value)}
//                 value={selectedState}
//               >
//                 <option value="">Select a state</option>
//                 {Object.keys(stateCityMap).map((state, index) => (
//                   <option value={state} key={index}>
//                     {state}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 id="city-dropdown"
//                 onChange={(e) => setSelectedCity(e.target.value)}
//                 value={selectedCity}
//                 disabled={!selectedState}
//               >
//                 <option value="">Select a city</option>
//                 {cities.map((city, index) => (
//                   <option value={city} key={index}>
//                     {city}
//                   </option>
//                 ))}
//               </select>
              
//               <button className="btn" onClick={fetchNgos}>
//                 Search
//               </button>
//             </div>
//             <div className="ngo-list">
//               {ngos.length > 0 ? (
//                 ngos.map((ngo, index) => (
//                   <div key={index} className="ngo-item">
//                     <p><b>{ngo.name}</b></p>
//                     <p>{ngo.address}</p>
//                     {ngo.website && <a href={ngo.website} target="_blank" rel="noopener noreferrer">Visit Website</a>}
//                   </div>
//                 ))
//               ) : (
//                 <p>No NGOs found</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Ngo;
