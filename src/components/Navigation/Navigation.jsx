//import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import css from './Navigation.module.scss';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav className={css.headerNav}>
      <ul className={css.navList}>
        <li>
          <StyledLink to="/" end>
            Home
          </StyledLink>
        </li>
        {token && (
          <li>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
