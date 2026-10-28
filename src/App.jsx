import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Make sure this path is correct
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The root path (/) goes to HomePage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutMe" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;