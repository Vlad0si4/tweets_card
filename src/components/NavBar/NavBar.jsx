import { StyledHeader, StyledLink, StyledNav } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLink to={"/"}>Home</StyledLink>
        <StyledLink to={"tweets"}>Tweets</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};
