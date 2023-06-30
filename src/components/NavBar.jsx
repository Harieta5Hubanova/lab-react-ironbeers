import { NavLink } from 'react-router-dom';
const imgURL =
  'https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png';
const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink to="/">
        <img src={imgURL} alt="header" className="header-img" />
      </NavLink>
    </nav>
  );
};

export default Navbar;
