import { Route, Routes } from "react-router-dom";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Home from "./component/home/Home";
import Know from "./component/knowledg/Know";
import NavBar from "./component/navBar/NavBar";
import Work from "./component/work/Work";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/know" element={<Know />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h4>Page Not Found</h4>} />
      </Routes>

    </div>
  );
}

export default App;
