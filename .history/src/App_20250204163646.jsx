import './index.css'
import { createBrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'

import NotFound from './pages/NotFound'
import Layout from './components/layout'

function App() {
  
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
          <Route path="/" element={<MainPage />} />  
          
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
  );
}

export default App
