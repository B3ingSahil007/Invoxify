import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import Contact from './pages/Contact';

import Footer from './components/Footer';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <style>
        {`
          .custom-shadow {
              transition: text-shadow 0.4s ease;
            }

          .custom-shadow:hover {
              text-shadow: 3px 3px 5px grey;
          }
            `}
      </style>
    </>
  )
}

export default App
