
import { header-ogo } from '../assets/images';
import { hamburger } from '../assets/icons';
const Nav = () => {
    return (
        <header>
            <nav>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
            </nav>
      </header>
  )
};

export default Nav;
