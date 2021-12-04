import { HeaderContainer } from "../componentsCss/styles";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Blog de Anthony</h1>
      <nav>
        <ul>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
