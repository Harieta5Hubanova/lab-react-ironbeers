import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/NavBar';

const SingleBeer = () => {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSingleBeer = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        console.log('axios response', response.data);
        setBeer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleBeer();
  }, [beerId]);

  console.log(`beer ${beer}`);

  return (
    <div>
      <Navbar />

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <img src={beer.image_url} alt="" width={50} />

          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </>
      )}
    </div>
  );
};

export default SingleBeer;
