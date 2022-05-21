import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Container } from "../Components/shared";
import { colors } from "../Components/colors";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  return (
    <HomeContainer>
      <StatusBar style="dark" />
    </HomeContainer>
  );
};

export default Home;
