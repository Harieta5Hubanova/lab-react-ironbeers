import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/beers/random" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
