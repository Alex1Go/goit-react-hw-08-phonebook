import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const Logo = styled(NavLink)`
//   font-family: 'Poppins';
//   font-style: normal;
//   font-weight: 800;
//   font-size: 36px;

//   margin-right: 114px;

//   color: #000000;
//   > span {
//     color: #fabb18;

//     transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   }

//   transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   &:hover,
//   &:focus {
//     color: #fabb18;
//     > span {
//       color: #000000;
//     }
//   }
// `;

export const MainLink = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;

  color: #000000;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    font-weight: 700;
    color: red;
  }
`;
