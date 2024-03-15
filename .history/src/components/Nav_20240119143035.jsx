
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
const Nav = () => {
    return (
        <header className='padding-x py-6 ab'>
            <nav>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
            </nav>
      </header>
  )
};

export default Nav;
