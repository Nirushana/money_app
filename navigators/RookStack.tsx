import React, { FunctionComponent } from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../Components/colors";

//Screen
import Welcome from "../Screens/Welcome";
import Home from "../Screens/Home";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: colors.graylight },
          headerTintColor: colors.secondary,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
