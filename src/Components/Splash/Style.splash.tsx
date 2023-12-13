import { StyleSheet } from "react-native";
import { CommonColors } from "../../Theme/ColorCodes";
import { Cfont } from "../../Theme/FontFamily";

export default class Stylesplash {
    static getStyles() {
        return StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: CommonColors.ColorPrimary,
                justifyContent: 'center',
            },
            title: {
                fontWeight: "bold",
                fontSize: 50,
                color: CommonColors.ColorWhite,
                marginBottom: 40,
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
                fontFamily:Cfont.M_Medium
            },
            forgotAndSignUpText: {
                color: "white",
                fontSize: 11
            },
            loginBtn: {
                width: "80%",
                backgroundColor: CommonColors.ColorWhite,
                borderRadius: 25,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
                marginBottom: 10
            },
            loginText:{
                color:CommonColors.ColorPrimary,
                fontFamily:Cfont.M_SemiBols
            }
        })

    }

}