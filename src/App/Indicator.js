import React from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { normalize } from "../Utils/normalize";
import { CommonColors } from "../Theme/ColorCodes";
const Indicator = () => {

    return (<>
        <View style={{
            flex: 1, width: '100%', justifyContent: 'center',
            height: '100%', position: 'absolute',
        }}>
            <View style={{
                backgroundColor: CommonColors.ColorWhite, height: normalize(60),
                opacity: 0.6,
                width: normalize(60), justifyContent: 'center',
                alignContent: 'center', alignSelf: 'center', borderRadius: normalize(10)
            }}>
                <ActivityIndicator size="large" color={CommonColors.ColorPrimary} />
            </View>
        </View>

    </>)
}

export default Indicator;