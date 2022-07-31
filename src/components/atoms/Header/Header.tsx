import classNames from 'classnames';

import Heading from '@atoms/Heading';

import { ReactComponent as Pokeball } from 'images/pokeball.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const headerClasses = classNames(
    'h-20',
    'sticky',
    'bg-white/30',
    'text-black',
    'shadow-md',
    'backdrop-blur-sm',
    'top-0',
    'relative',
    'z-10',
    'px-4 md:px-6',
    'flex',
    'gap-4',
    'items-center',
  );

  return (
    <header className={headerClasses}>
      <NavLink to="/" className="flex gap-4 items-center">
        <span className="sr-only">Go to homepage</span>
        <Pokeball className="w-10 h-10" />
        <Heading>Pokedex</Heading>
      </NavLink>
    </header>
  );
};

export default Header;
