import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenName } from "./Screens";
import SplashScreen from "../Components/Splash/SplashScreen";
import HomeTabs from "../Components/Home/HomeTabs";

const Stack = createNativeStackNavigator();

const AppNavigationContainer = ({ navigation }) => {


    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName={ScreenName.Screens}
            screenOptions={{ animationEnabled: false, headerShown: false, }}>

            <Stack.Screen
                component={SplashScreen}
                name={ScreenName.SplashScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />
            <Stack.Screen
                component={HomeTabs}
                name={ScreenName.HomeScreen}
                options={{ headerShown: false, gestureEnabled: false }}
            />
        </Stack.Navigator>
    )
}
export default AppNavigationContainer;