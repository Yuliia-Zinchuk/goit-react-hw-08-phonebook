import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <ul className={css.linkList}>
        <li>
          <NavLink className={css.link} to="/" end>
            Home
          </NavLink>
        </li>
        {token && (
          <li>
            <NavLink className={css.link} to="/contacts">
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
