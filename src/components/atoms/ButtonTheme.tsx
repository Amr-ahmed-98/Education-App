import type { JSX } from 'react';
import { useTheme } from '../../hooks/useTheme';
import * as Icons from './../../assets/icons/icons';

function ButtonTheme(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className='px-6 py-2 rounded-lg border-primary border-1 bg-light-secondary dark:bg-dark-primary text-white  transition'
    >
      {theme === 'dark' ? (
        <Icons.Moon className='w-5 h-5 text-primary' />
      ) : (
        <Icons.SunMedium className='w-5 h-5 text-primary' />
      )}
    </button>
  );
}

export default ButtonTheme;
