import currencyImg from "../../assets/images/bcg_fon_card_1x.png";
import currencyImgRetina from "../../assets/images/bcg_fon_card_2x.png";

import currencyImgWebp from "../../assets/images/bcg_fon_card_1x.webp";
import currencyImgWebpRetina from "../../assets/images/bcg_fon_card_2x.webp";

import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/UserCard/selector";
import {
  StyledAvatar,
  StyledBtn,
  StyledBtnLoad,
  StyledCard,
  StyledDiscWrapper,
  StyledImg,
  StyledItemCard,
  StyledListCard,
  StyledSpanCircle,
  StyledSpanLine,
  StyledSpanWrapper,
  Wrapper,
} from "../../pages/Tweets/Tweets.styled";
import { useState } from "react";
import {
  fetchUpdateThunkFollowed,
  fetchUserThunk,
} from "../../redux/UserCard/operations";
import { selectFilteredData } from "../../redux/Filter/selector";

export const UsersCard = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(selectFilteredData);
  const [showUserCard, setShowUserCard] = useState(3);
  console.log(usersData);

  const handleLoadMore = () => {
    setShowUserCard((prev) => prev + 3);
  };

  const handleToggleBtn = async ({ id, followers, isFollowed }) => {
    dispatch(
      fetchUpdateThunkFollowed({
        id,
        updateState: isFollowed ? followers - 1 : followers + 1,
        isFollowed: !isFollowed,
      })
    ).then(() => {
      dispatch(fetchUserThunk());
    });
  };

  return (
    <Wrapper>
      <StyledListCard>
        {usersData
          .slice(0, showUserCard)
          .map(
            ({ id, avatar, name, tweets, followers, isFollowed = false }) => (
              <StyledItemCard key={id}>
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
                      <StyledAvatar src={avatar} alt={name} />
                    </StyledSpanCircle>
                    <StyledSpanLine></StyledSpanLine>
                  </StyledSpanWrapper>

                  <StyledDiscWrapper key={id}>
                    <p>{tweets.toLocaleString("en-US")} TWEETS</p>
                    <p>{followers.toLocaleString("en-US")} FOLLOWERS</p>
                  </StyledDiscWrapper>
                  <StyledBtn
                    followed={isFollowed ? "true" : "false"}
                    onClick={() =>
                      handleToggleBtn({ id, followers, isFollowed })
                    }
                  >
                    {isFollowed ? "Following" : "Follow"}
                  </StyledBtn>
                </StyledCard>
              </StyledItemCard>
            )
          )}
      </StyledListCard>
      {showUserCard < usersData.length && (
        <StyledBtnLoad onClick={handleLoadMore}>Load more</StyledBtnLoad>
      )}
    </Wrapper>
  );
};
