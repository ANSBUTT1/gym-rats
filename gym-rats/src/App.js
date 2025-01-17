import React from "react";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom"; // Import necessary components from react-router-dom
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Plans from './components/Plans';
import About from "./pages/About";
// import Trainers from './components/Trainers';
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
         <Router>
      <div>
        <Navbar />
        <main>
          {/* Use the Routes component to wrap all Route components */}
          <Routes>
            {/* Define individual Route elements for each path */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/plan" element={<Plans />} /> */}
            <Route path="/about" element={<About />} />
            {/* <Route path="/trainer" element={<Trainers />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  );
};

export default App;
