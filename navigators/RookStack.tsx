import React, { FunctionComponent } from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../Components/colors";
import Avi from "../assets/avi/avatar.png";

//Screen
import Welcome from "../Screens/Welcome";
import Home from "../Screens/Home";
import Greeting from "../Components/Header/Greeting";
import Profile from "../Components/Header/Profile";

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
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{ backgroundColor: colors.tertiary }}
            />
          ),
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hey Nirushana!"
                subText="Welcome back"
                {...props}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
