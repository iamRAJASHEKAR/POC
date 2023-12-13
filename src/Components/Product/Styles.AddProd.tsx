import { Platform, StyleSheet } from "react-native";
import { CommonColors } from "../../Theme/ColorCodes";
import { Cfont } from "../../Theme/FontFamily";
import { normalize } from "../../Utils/normalize";

export default class StylesAddProd {
    static getStyles() {
        return StyleSheet.create({

            loginBtn: {
                backgroundColor: CommonColors.ColorPrimary,
                borderRadius: 25,
                width: "80%",
            },
            loginText: {
                color: CommonColors.ColorWhite,
                fontFamily: Cfont.M_SemiBols
            },
            inputView: {
                width: "80%",
                backgroundColor: CommonColors.ColorWhite,
                borderRadius: 25,
                height: 50,
                marginBottom: 20,
                justifyContent: "center",
                padding: 20
            },
            inputText: {
                height: 50,
                color: CommonColors.ColorPrimary,
                fontFamily: Cfont.M_Medium
            },
        })


    }

}