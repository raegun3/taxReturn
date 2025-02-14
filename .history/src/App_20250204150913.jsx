import { Outlet } from 'react-router-dom'
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
