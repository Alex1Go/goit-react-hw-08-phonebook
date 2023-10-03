import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainLink = styled(NavLink)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  color: #524a4d;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: auto;
  &:hover {
    color: #34c3da;
    text-shadow: #5c6aeb 1px 0 1px;
  }
`;

export const TwoMainLink = styled(NavLink)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  color: #524a4d;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 50px;

  &:hover {
    color: #34c3da;
    text-shadow: #5c6aeb 1px 0 1px;
  }
`;
