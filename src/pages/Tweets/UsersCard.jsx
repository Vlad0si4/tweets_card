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
} from "./Tweets.styled";
import { useState } from "react";
import {
  fetchUpdateThunkFollowed,
  fetchUserThunk,
} from "../../redux/UserCard/operations";

export const UsersCard = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(selectUsers);
  const [showUserCard, setShowUserCard] = useState(3);
  const [followingUsers, setFollowingUsers] = useState(false);

  const handleLoadMore = () => {
    setShowUserCard((prev) => prev + 3);
  };

  const handleToggleBtn = async (id, followers) => {
    const newFollowingState = !followingUsers[id];

    setFollowingUsers((prev) => ({
      ...prev,
      [id]: newFollowingState,
    }));

    try {
      await dispatch(
        fetchUpdateThunkFollowed({
          id,
          updateState: !newFollowingState ? followers - 1 : followers + 1,
        })
      );

      dispatch(fetchUserThunk());
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <Wrapper>
      <StyledListCard>
        {usersData.slice(0, showUserCard).map((el) => (
          <StyledItemCard key={el.id}>
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

              <StyledDiscWrapper key={el.id}>
                <p>{el.tweets} TWEETS</p>
                <p>{el.followers} FOLLOWERS</p>
              </StyledDiscWrapper>
              <StyledBtn onClick={() => handleToggleBtn(el.id, el.followers)}>
                {followingUsers[el.id] ? "Following" : "Follow"}
              </StyledBtn>
            </StyledCard>
          </StyledItemCard>
        ))}
      </StyledListCard>
      {showUserCard < usersData.length && (
        <StyledBtnLoad onClick={handleLoadMore}>Load more</StyledBtnLoad>
      )}
    </Wrapper>
  );
};
