
import './App.css';
import { HashRouter as Router, Route, Routes, } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';

import Contact from "./components/ContactPage/contact"
import Home from './components/Home/home'


function App() {
  return (
    <Router>
    <div className="App">
      <div>
      <NavBar />
      <Routes>
      {/* <Routes>

            
            {/* <Route path="/" index element={<ParallaxPages />}/>
            <Route path="/about" index element={<AboutMe />}/>
            <Route path="/skills" index element={<Skills />}/>
            <Route path="/portfolio" index element={<Portfolio />}/> */}
            <Route path="/contact" index element={<Contact />}/>


        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
