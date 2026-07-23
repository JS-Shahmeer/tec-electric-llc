import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/layout/ScrollProgress'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import FeaturedProject from './pages/FeaturedProject'
import HowItWork from './pages/HowItWork'
import Industries from './pages/Industries'
import Projects from './pages/Projects'
import ServiceDetail from './pages/ServiceDetail'
import Services from './pages/Services'
import Subcontractor from './pages/Subcontractor'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main className="pb-16 lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/featured-project" element={<FeaturedProject />} />
          <Route path="/how-it-work" element={<HowItWork />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/subcontractor" element={<Subcontractor />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
