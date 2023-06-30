import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/NavBar';
import { Link } from 'react-router-dom';

const AllBeers = () => {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    const fetchAllBeers = async () => {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        console.log('axios response', response.data);
        setAllBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBeers();
  }, []);
  return (
    <div>
      <Navbar />
      <h1>All Beers</h1>
      {allBeers &&
        allBeers.map(beer => {
          return (
            <div key={beer._id}>
              <hr />
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt="" width={50} />
              </Link>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>{beer.contributed_by}</p>
            </div>
          );
        })}
    </div>
  );
};

export default AllBeers;
