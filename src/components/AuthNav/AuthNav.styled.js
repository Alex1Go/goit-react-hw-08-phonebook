import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Login = styled.ul`
  margin-left: auto;
  display: flex;
  gap: 20px;
`;
export const StyledLink = styled(NavLink)`
  display: block;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #34c3da;
    text-shadow: #5c6aeb 1px 0 1px;
  }
`;
