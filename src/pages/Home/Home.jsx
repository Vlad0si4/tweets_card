import { NavLink } from "react-router-dom";
import { Title, Wrapper } from "./Home.styled";

export const Home = () => {
  return (
    <Wrapper>
      <NavLink to={"/tweets"}>
        <Title>
          Hello, you have entered the tweets site, please go to the tweets tab
          or click this message to see who you would like to follow
        </Title>
      </NavLink>
    </Wrapper>
  );
};
