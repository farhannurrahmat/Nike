
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header>
      <nav>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}/>
                </a>
            </nav>
      </header>
  )
};

export default Nav;
