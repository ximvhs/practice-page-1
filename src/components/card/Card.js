import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
`;

const StyledImage = styled.div`
  display: inline-block;
  width: 400px;
  height: 400px;
  border-radius: 8px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
`;

const StyledContent = styled.div`
  position: absolute;
  z-index: 10;
  background-color: white;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  width: 360px;
  height: 125px;
  border-radius: 20px;
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ContentImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const StyledFooterTop = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.span`
  color: #333333;
  font-size: 16px;
  font-weight: 300;
`;

const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledText = styled.span`
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  color: transparent;
  font-weight: bold;
  font-size: 18px;
  -webkit-background-clip: text;
  background-clip: text;
`;

const StyledHeader = styled.div`
  display: flex;
  margin-right: 10px;
`;

const ImgHeart = styled.img`
  margin-right: 8px;
`;

const Card = () => {
  return (
    <div>
      <StyledCard>
        <StyledImage>
          <StyledImg
            src="https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1200x900"
            alt="#"
          />
        </StyledImage>
        <StyledContent>
          <StyledTop>
            <StyledFooterTop>
              <ContentImg
                src="https://cdn.dribbble.com/userupload/11087035/file/original-d18e5383bf37c6baaf074a8b3c5b5447.png?resize=1200x900"
                alt="#"
              />
              <Name>@zndrson</Name>
            </StyledFooterTop>
            <div>
              <StyledHeader>
                <ImgHeart src="/coolicon.svg" alt="heart" />
                <span>256</span>
              </StyledHeader>
            </div>
          </StyledTop>
          <StyledBottom>
            <h3>Cosmic Perspective</h3>
            <StyledText>12,000 PSL</StyledText>
          </StyledBottom>
        </StyledContent>
      </StyledCard>
    </div>
  );
};

export default Card;
