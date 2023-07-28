import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const StyledCard = styled.div`
  display: flex;
  width: 380px;
  height: 460px;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);

  box-shadow: -2.5776965618133545px 6.873857021331787px 20.621572494506836px 0px
    rgba(0, 0, 0, 0.23);
`;

export const StyledImg = styled.picture`
  min-width: 308px;
  min-height: 148px;
  margin-top: 20px;
`;

export const StyledSpanWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const StyledSpanCircle = styled.span`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #ebd8ff;
  border-color: #ebd8ff;
  background: linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%);
  z-index: 1;
`;
export const StyledSpanLine = styled.span`
  position: absolute;
  top: 50%;
  left: 0%;

  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
`;

export const StyledDiscWrapper = styled.div`
  margin: 26px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const StyledBtn = styled.button`
  display: flex;
  width: 196px;
  padding: 14px 28px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  border-radius: 10px;
  background: #ebd8ff;
  margin-bottom: 36px;
  /* box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px
    rgba(0, 0, 0, 0.25); */

  color: #373737;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;

  text-transform: uppercase;
  &:hover {
    background: #5cd3a8;
  }
`;

export const StyledAvatar = styled.img`
  border-radius: 50%;
`;
