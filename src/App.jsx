import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
