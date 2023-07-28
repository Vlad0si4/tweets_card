import currencyImg from "../../assets/images/bcg_fon_card_1x.png";
import currencyImgRetina from "../../assets/images/bcg_fon_card_2x.png";
// import lineCard from "../../assets/images/rectangle_1x.png";
// import lineCardRetina from "../../assets/images/rectangle_2x.png";

import currencyImgWebp from "../../assets/images/bcg_fon_card_1x.webp";
import currencyImgWebpRetina from "../../assets/images/bcg_fon_card_2x.webp";
import {
  StyledBtn,
  StyledCard,
  StyledDiscWrapper,
  StyledImg,
  StyledSpanCircle,
  StyledSpanLine,
  StyledSpanWrapper,
  Wrapper,
} from "./Tweets.styled";

export const Tweets = () => {
  return (
    <Wrapper>
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
          <StyledSpanCircle></StyledSpanCircle>
          <StyledSpanLine></StyledSpanLine>
        </StyledSpanWrapper>

        <StyledDiscWrapper>
          <p>777 TWEETS</p>
          <p>100,500 FOLLOWERS</p>
        </StyledDiscWrapper>
        <StyledBtn>follow</StyledBtn>
      </StyledCard>
    </Wrapper>
  );
};