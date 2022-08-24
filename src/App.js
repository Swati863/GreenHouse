import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Greenhouse from './Pages/Greenhouse';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greenhouse />
      {/* <AllRoutes /> */}
     
    </div>
  );
}

export default App;
