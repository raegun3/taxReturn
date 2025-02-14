import { Outlet } from 'react-router-dom'
import './App.css'
import './components/navbar'

function App() {
  
  return(
    <>
      <navbar/>
      <Outlet/>
    </>
  );
}

export default App
