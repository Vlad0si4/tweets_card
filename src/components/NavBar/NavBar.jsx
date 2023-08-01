import { useLocation } from "react-router";
import { ButtonGoBack } from "../Button/ButtonGoBack";
import {
  HeaderWrapper,
  StyledHeader,
  StyledLink,
  StyledNav,
} from "./NavBar.styled";

export const NavBar = () => {
  const location = useLocation();
  return (
    <HeaderWrapper>
      <StyledHeader>
        <StyledNav>
          <StyledLink to={"/"}>Home</StyledLink>
          <StyledLink to={"tweets"}>Tweets</StyledLink>
          {location.pathname === "/tweets" && (
            <ButtonGoBack>Go Back</ButtonGoBack>
          )}
        </StyledNav>
      </StyledHeader>
    </HeaderWrapper>
  );
};
