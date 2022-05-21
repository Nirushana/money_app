import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { Container } from "../Components/shared";
import { colors } from "../Components/colors";
import CardSection from "../Components/Cards/CardSection";
import logo1 from '../assets/cards/visa_white.png';
import logo2 from '../assets/cards/mc.png'

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
    const cardsData = [
        {
            id: 1,
            accountNo: "21332342243243",
            balance: 20000.15,
            alias: "Work Debit",
            logo: logo1,
        },
        {
            id: 2,
            accountNo: "245546677545243",
            balance: 120000.05,
            alias: "Personal Perpaid",
            logo: logo2,
        },
        {
            id: 1,
            accountNo: "213258568945853",
            balance: 5600.15,
            alias: "School Prepaid",
            logo: logo1,
        },
        
    ]
  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData}/>
    </HomeContainer>
  );
};

export default Home;
