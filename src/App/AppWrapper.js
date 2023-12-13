import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigationContainer from '../Navigation/Index.Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Indicator from './Indicator';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();
import CNavigator from '../Utils/CNavigator'
// Wrap app level context here eg.. NotificationProvider
const AppNavigator = () => {
    const { loader, } = useSelector(state => state.app);

    return (
        <SafeAreaProvider>
            <NavigationContainer ref={(navigatorRef) => CNavigator.setTopLevelNavigator(navigatorRef)} >
                <Stack.Navigator
                    headerMode="none"
                    screenOptions={{ animationEnabled: false, headerShown: false, }}>
                    <Stack.Screen name="AppContainer" component={AppNavigationContainer} />
                </Stack.Navigator>
            </NavigationContainer>
            {loader == true && <Indicator />}

        </SafeAreaProvider>
    );
};

export default AppNavigator;