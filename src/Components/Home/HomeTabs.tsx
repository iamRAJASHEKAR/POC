import React from "react";
import { Platform, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeTabParamList } from "../../Navigation/TypeParams";
import { normalize } from "../../Utils/normalize";
import { CommonColors } from "../../Theme/ColorCodes";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import AccountScreen from "./AccountScreen";
import StylesHomeBottom from "./Style.tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductDetails from "../Product/ProductDetails";
import { ScreenName } from "../../Navigation/Screens";
import AddProduct from "../Product/AddProduct";

const BottomTabBus = createBottomTabNavigator<HomeTabParamList>();

function BottomTabNav(props: any) {
    const styles = StylesHomeBottom.getStyles();
    return (
        <BottomTabBus.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                "tabBarHideOnKeyboard": true,
                "tabBarActiveTintColor": CommonColors.green,
                "tabBarInactiveTintColor": CommonColors.black,
                "tabBarShowLabel": false,
                "tabBarLabelStyle": {
                    "fontSize": 8,
                    "textTransform": "capitalize",
                    "lineHeight": normalize(12),
                    "marginTop": normalize(2.5),

                },

                "tabBarLabelPosition": "below-icon",
                "tabBarStyle": [
                    {
                        backgroundColor: CommonColors.ColorWhite,
                        position: "absolute",
                        borderRadius: normalize(10),
                        margin: normalize(7),
                        height: normalize(Platform.OS == 'android' ? normalize(65) : normalize(85)),
                        borderWidth: 1,
                        borderColor: CommonColors.shadowClr,
                        shadowColor: CommonColors.shadowClr,
                        borderBottomWidth: 0,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 12,
                        elevation: 5,
                    },
                    null
                ]
            }}
        >
            <BottomTabBus.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        focused ? <View style={styles.containerAct}>
                            <View style={styles.subCont}>
                                <Text style={styles.tabNameAct} >{'Home'}</Text>
                            </View>
                        </View>
                            : <View style={styles.containerInAct}>
                                <View style={styles.subCont}>
                                    <Text style={styles.tabNameInAct} >{'Home'}</Text>
                                </View>
                            </View>
                    ),
                }} />

            <BottomTabBus.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    lazy: true,
                    headerShown: false,
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ focused }) => (
                        focused ? <View style={styles.containerAct}>
                            <View style={styles.subCont}>
                                <Text style={styles.tabNameAct} >{'Search'}</Text>
                            </View>
                        </View>
                            : <View style={styles.containerInAct}>
                                <View style={styles.subCont}>
                                    <Text style={styles.tabNameInAct} >{'Search'}</Text>
                                </View>
                            </View>
                    ),
                }} />

            <BottomTabBus.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Account',

                    tabBarIcon: ({ focused }) => (
                        focused ? <View style={styles.containerAct}>
                            <View style={styles.subCont}>
                                <Text style={styles.tabNameAct} >{'Account'}</Text>
                            </View>
                        </View>
                            : <View style={styles.containerInAct}>
                                <View style={styles.subCont}>
                                    <Text style={styles.tabNameInAct} >{'Account'}</Text>
                                </View>
                            </View>
                    ),
                }} />
        </BottomTabBus.Navigator>
    );
}
const Stack = createNativeStackNavigator<HomeTabParamList>();

const HomeTabs = (props: any) => {

    return (<SafeAreaProvider style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName='HomeTabs' {...props}>
            <Stack.Screen name="HomeTabs" component={BottomTabNav} options={{ headerShown: false }} />
            <Stack.Screen name={ScreenName.ProductDetails} component={ProductDetails} options={{ headerShown: false }} />
            <Stack.Screen name={ScreenName.AddProduct} component={AddProduct} options={{ headerShown: false }} />


        </Stack.Navigator>
    </SafeAreaProvider>)
}
export default HomeTabs;