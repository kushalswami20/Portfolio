import Home from './components/Home'
import Navbar from './shared/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './components/contact';
function App() {
  return (
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    
  )
}

export default App
