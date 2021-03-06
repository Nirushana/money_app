import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Container } from "../Components/shared";
import { colors } from "../Components/colors";
import background from "../assets/bgs/background_v1.png";
import BigText from "../Components/Text/BigText";
import SmallText from "../Components/Text/SmallText";
import RegularBotton from '../Components/Bottons/RegularBotton';

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;
const TopImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best payment methods, connects your money to your friends, family.
          </SmallText>
          <RegularBotton btnStyles={{marginTop: 20, marginBottom: 20}} onPress={() => {}}>
            Get Started
          </RegularBotton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
