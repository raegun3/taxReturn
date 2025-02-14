import navbar from './components/navbar'
import Showcase1 from './pages/Mains/Showcase1'
import Showcase2 from './pages/Mains/Showcase2'
import Showcase3 from './pages/Mains/Showcase3'
import ContactForm from './ContactForm'
import TaxCalculator from './pages/Mains/TaxCalculator'
import { createBrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  
  return(
      <navbar/>
      <Outlet/>
      
  );
}

export default App
