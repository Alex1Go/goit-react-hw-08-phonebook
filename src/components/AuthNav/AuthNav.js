import { Login, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Login>
      <StyledLink to="/register">REGISTER</StyledLink>
      <StyledLink to="/login">LOG IN</StyledLink>
    </Login>
  );
};
