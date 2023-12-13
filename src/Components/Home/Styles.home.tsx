import { Platform, StyleSheet } from "react-native";
import { CommonColors } from "../../Theme/ColorCodes";
import { Cfont } from "../../Theme/FontFamily";
import { normalize } from "../../Utils/normalize";

export default class StylesHomeScreen {
    static getStyles() {
        return StyleSheet.create({

            loginBtn: {
                backgroundColor: CommonColors.ColorPrimary,
                borderRadius: 25,
            },
            loginText: {
                color: CommonColors.ColorWhite,
                fontFamily: Cfont.M_SemiBols
            }
        })

    }

}