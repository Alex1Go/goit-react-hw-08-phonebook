import { Login, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Login>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Login>
  );
};
