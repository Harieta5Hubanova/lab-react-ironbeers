import { Link } from 'react-router-dom';
import beer from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';
const Home = () => {
  return (
    <div>
      <ul>
        <img src={beer} alt="all-beers" className="all-img" />
        <Link to="/beers">
          <h3>All Beers</h3>
        </Link>
      </ul>
      <ul>
        <img src={randomBeer} alt="random beer" className="random-img" />
        <Link to="/beers/random">
          <h3>Random Beer</h3>
        </Link>
      </ul>
      <ul>
        <img src={newBeer} alt="new beer" className="new-img" />
        <h3>New Beer</h3>
      </ul>
    </div>
  );
};
export default Home;
