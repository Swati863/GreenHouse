import logo from './logo.svg';
import './App.css';
// import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Greenhouse from './Pages/Greenhouse';
import AllRoutes from './Components/AllRoutes';
import { useEffect } from 'react';
import Footer from './Components/Footer';



function App() {

   useEffect(()=>{
    document.title = "Applicant tracking system & recruiting software | Greenhouse"
   })

  return (
    <div className="App">
      <Navbar />
      {/* <Greenhouse /> */}
      <AllRoutes />
    
     
    </div>
  );
}

export default App;
