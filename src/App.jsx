import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
