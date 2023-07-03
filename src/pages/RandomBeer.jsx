import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../components/NavBar';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState('');
  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers/random'
        );
        console.log('axios response', response.data);
        setRandomBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRandomBeer();
  }, []);
  return (
    <div>
      <Navbar />

      {
        <>
          <img src={randomBeer.image_url} alt="" width={50} />

          <h2>{randomBeer.name}</h2>
          <p>{randomBeer.tagline}</p>
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </>
      }
    </div>
  );
};

export default RandomBeer;
