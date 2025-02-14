import navbar from './components/navbar'
import MainPage from './pages/MainPage';
import { Outlet } from 'react-router-dom';

function App() {
  
  return(
    <>
      <navbar/>
      <Outlet/>
    </>
  );
}

export default App
