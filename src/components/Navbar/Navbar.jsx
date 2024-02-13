import { Link, WraperNav } from './Navbar.styled';

const Navbar = () => {
  return (
    <WraperNav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </WraperNav>
  );
};

export default Navbar;
