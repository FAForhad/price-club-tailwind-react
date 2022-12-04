import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Pricing from './Component/Pricing/Pricing';
import Rechart from './Component/Rechart/Rechart';
import Phonebar from './Component/Phonebar/Phonebar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <div className='lg:flex'>
        <Rechart></Rechart>
        <Phonebar></Phonebar>
      </div>
    </div>
  );
}

export default App;
