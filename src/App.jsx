import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Students from "./Components/student";
import Contact from "./Components/contact";
import NotFound from "./Components/notFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;