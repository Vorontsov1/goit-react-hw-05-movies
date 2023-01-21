import { NavLink } from "react-router-dom";
import s from './AppBar.module.scss';

const navItems = [
    {href: '/', text: 'Home'},
    {href: 'movies', text: 'Movies'},
];

const AppBar = () => {
    return (
        <header className={s.header}>
         <nav>
         {navItems.map(({href, text}) =>
         <NavLink 
         key={href}
         to={href}
         className={({isActive}) => 
          isActive ? `${s.active}` : `${s.link}` 
        }
        >
            {text}
        </NavLink>
         )}
         </nav>
        </header>
    );
};

export default AppBar;