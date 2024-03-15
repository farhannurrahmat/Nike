
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
const Nav = () => {
    return (
        <header>
            <nav>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height/>
                </a>
            </nav>
      </header>
  )
};

export default Nav;
