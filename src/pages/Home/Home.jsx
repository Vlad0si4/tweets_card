import { NavLink } from "react-router-dom";
import { Title, Wrapper } from "./Home.styled";

export const Home = () => {
  return (
    <Wrapper>
      <NavLink to={"/tweets"}>
        <Title>
          Hello, you have entered the tweet site, please go to the tweets tab to
          see who you would like to follow
        </Title>
      </NavLink>
    </Wrapper>
  );
};
