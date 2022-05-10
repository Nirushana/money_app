import React, { FunctionComponent } from "react";
import {
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
  TextStyle,
} from "react-native";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Text/RegularText";

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;
interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress}>
      <RegularText>Button</RegularText>
    </ButtonView>
  );
};
