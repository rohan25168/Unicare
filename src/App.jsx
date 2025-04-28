import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus';
import Donate from './Pages/Donate';
// import Nopage from './Pages/Nopage'
import Fundraiserfor from './Pages/Fundraiserfor';
import Ngo from './Pages/Ngo';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Form from './Pages/Form';
import Register from './Pages/Register';

// import './App.css'
// import axios from 'axios';

function App() {
//  const [a, setA] = useState("")
//   axios.get('https://dummyjson.com/quotes')
//   .then(function (response) {
//     // handle success
//     console.log(response.data.quotes[1].quote);
//     setA(response.data.quotes[2].quote)
//     // console.log(a);
//   })

  return (
    <>
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route path='home' element={<Home />} />
    <Route path="fundraiser.html" element={<Fundraiserfor/>} />
    <Route path="ngo.html" element={<Ngo/>} />
    <Route path="About.html" element={<Aboutus />} />
    <Route path="contact" element={<Contact />} />
    <Route path="donate.html" element={<Donate />} />
    <Route path="form" element={<Form />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register/>} />

    {/* <Route path="*" element={<Nopage />} /> */}
  </Route>
</Routes>
</BrowserRouter> 

    </>
  )
}

export default App
 