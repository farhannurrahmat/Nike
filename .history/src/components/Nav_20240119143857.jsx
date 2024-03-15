
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../assets/constant';
const Nav = () => {
    return (
        <header className='padding-x py-6 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container '>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}
                             className='font-monts errat leading-normal text-lg text'>

                            </a>
            </li>
        ))}
                </ul>
            </nav>
      </header>
  )
};

export default Nav;