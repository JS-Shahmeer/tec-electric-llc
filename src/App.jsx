import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Industries from './pages/Industries'
import Projects from './pages/Projects'
import CommercialLighting from './pages/services/CommercialLighting'
import ElectricalContracting from './pages/services/ElectricalContracting'
import GeneralContracting from './pages/services/GeneralContracting'
import Subcontraction from './pages/services/Subcontraction'
import PageNotFound from './lib/PageNotFound'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Navigate to="/services/general-contracting" replace />} />
        <Route path="/services/general-contracting" element={<GeneralContracting />} />
        <Route path="/services/electrical-contracting" element={<ElectricalContracting />} />
        <Route path="/services/commercial-lighting" element={<CommercialLighting />} />
        <Route path="/services/subcontracting" element={<Subcontraction />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
