import navbar from './components/navbar'
import Showcase1 from './pages/Showcase1'
import Showcase2 from './pages/Showcase2'
import Showcase3 from './pages/Showcase3'
import ContactForm from './ContactForm'
import TaxCalculator from './pages/TaxCalculator'

function App() {
  
  return(
    <>
      <navbar/>
      <Showcase1/>
      <TaxCalculator/>
      <Showcase2/>
      <Showcase3/>
      <ContactForm/>
      
    </>
    
  );
}

export default App
