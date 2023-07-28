import currencyImg from "../../assets/images/bcg_fon_card_1x.png";
import currencyImgRetina from "../../assets/images/bcg_fon_card_2x.png";

import currencyImgWebp from "../../assets/images/bcg_fon_card_1x.webp";
import currencyImgWebpRetina from "../../assets/images/bcg_fon_card_2x.webp";
import {
  StyledAvatar,
  StyledBtn,
  StyledCard,
  StyledDiscWrapper,
  StyledImg,
  StyledSpanCircle,
  StyledSpanLine,
  StyledSpanWrapper,
  Wrapper,
} from "./Tweets.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../../redux/UserCard/operations";
import { selectUsers } from "../../redux/UserCard/selector";

export const Tweets = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(selectUsers);
  console.log(usersData);

  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

  return (
    <Wrapper>
      {usersData.map((el) => (
        <>
          <StyledCard>
            <StyledImg>
              <source
                media=""
                srcSet={`${currencyImg} 1x, ${currencyImgRetina} 2x`}
                type="image/png"
              />
              <source
                media=""
                srcSet={`${currencyImgWebp} 1x, ${currencyImgWebpRetina} 2x`}
                type="image/webp"
              />
              <img
                src={currencyImg}
                alt="currency img"
                loading="lazy
          "
              />
            </StyledImg>
            <StyledSpanWrapper>
              <StyledSpanCircle>
                <StyledAvatar src={el.avatar} alt={el.name} />
              </StyledSpanCircle>
              <StyledSpanLine></StyledSpanLine>
            </StyledSpanWrapper>

            <StyledDiscWrapper>
              <p>{el.tweets}</p>
              <p>{el.followers} FOLLOWERS</p>
            </StyledDiscWrapper>
            <StyledBtn>follow</StyledBtn>
          </StyledCard>
        </>
      ))}
    </Wrapper>
  );
};
