import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  color: #2a363b;

  &.active {
    color: blue;
  }
`;
