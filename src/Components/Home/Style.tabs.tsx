import { Platform, StyleSheet } from "react-native";
import { CommonColors } from "../../Theme/ColorCodes";
import { Cfont } from "../../Theme/FontFamily";
import { normalize } from "../../Utils/normalize";

export default class StylesHomeBottom {
    static getStyles() {
        return StyleSheet.create({
            containerAct: {
                backgroundColor: CommonColors.bottomNavActive,
                borderRadius: normalize(10),
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                alignContent: 'center',
            },
            subCont: {
                marginVertical: normalize(5),
                marginHorizontal: normalize(15),
                alignItems: 'center'

            },containerInAct: {
                backgroundColor: CommonColors.ColorWhite,
                borderRadius: normalize(10),
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                alignContent: 'center',
            },
            tabNameInAct: {
                color: CommonColors.bottomTabInac,
                fontSize: normalize(9),
                fontFamily: Cfont.M_SemiBols,
                lineHeight: normalize(10),
                marginTop: normalize(5),
            },
            tabNameAct: {
                color: CommonColors.ColorPrimary,
                fontSize: Platform.OS == 'android' ? normalize(9) : normalize(9),
                marginTop: normalize(5),
                fontFamily: Cfont.M_SemiBols,
                lineHeight: normalize(10)
            },
        })

    }

}