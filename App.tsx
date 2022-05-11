import React from "react";
import Welcome from "./Screens/Welcome";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import RootStack from "./navigators/RookStack";
import 'react-native-gesture-handler'

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Reqular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <RootStack />;
}
