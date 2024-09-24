import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home';
import Contact from './Components/Contact/Contact';
import Travel from './Components/Travel/Travel';

function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travel" element={<Travel/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
