import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { CardProps } from "./types";
import { ScreenWidth } from "../shared";
import { colors } from "../colors";

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: ${ScreenWidth * 0.67}px;
  background-color: ${colors.accent};
  border-radius: 25px;
  margin-right: 25px;
  overflow: hidden;
`;
const CardTouchable = styled.TouchableHighlight`
  height: 100%;
  border-radius: 25px;
`;
const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex: 1;
`;

const CardItem: FunctionComponent<CardProps> = (props) => {
  return <TouchableView></TouchableView>;
};

export default CardItem;
