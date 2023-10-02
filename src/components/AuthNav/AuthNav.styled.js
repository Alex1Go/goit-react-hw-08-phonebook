import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Login = styled.ul`
  margin-left: auto;
  display: flex;
  gap: 20px;
`;
export const StyledLink = styled(NavLink)`
  display: block;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 20px;
  color: red;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #000000;
    background-color: rgba(250, 187, 24, 0.1);
  }
`;
