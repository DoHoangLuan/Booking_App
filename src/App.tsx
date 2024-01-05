import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
import Header from "./layout/Header/Header";
import AboutUs from "./page/Us/Us";
import Job from "./page/Jobs/jobs";
import Contact from "./page/Contact/Contact";
import Service from "./page/Service/service";
import Footer from "./layout/Footer/Footer";
import { useState } from "react";
import ShoppingSlide from "./layout/Shopping/Shopping";
import ProfileUser from "./page/Profile/Profile";
import Booking from "./page/Booking/Booking";
const App = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handOpen = () => {
    setOpen(!open);
  };
  return (
    <BrowserRouter>
      <div>
        {open ? (
          <ShoppingSlide />
        ) : (
          <div>
            <Header handleClick={handOpen} />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/job" element={<Job />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
                <Route path="/profile" element={<ProfileUser />} />
                <Route path="/booking" element={<Booking />} />
              </Routes>
            </div>
            <Footer />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
