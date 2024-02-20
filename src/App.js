import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import FetchApiPlanet from './components/API/FetchApiPlanet';
import Home from './components/API/Home';
import FetchApiCrew from './components/API/FetchApiCrew';
import FetchApiTechnology from './components/API/FetchApiTechnology';
import ApiForm from './components/API/ApiForm';
import Showkey from './components/Showkey';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<FetchApiPlanet/>}/>
          <Route path='/crew' element={<FetchApiCrew/>}/>
          <Route path='/technology' element={<FetchApiTechnology/>}/>
          <Route path='/apiform' element={<ApiForm/>}/>
          <Route path='/showkey' element={<Showkey/>}/>
        </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;
