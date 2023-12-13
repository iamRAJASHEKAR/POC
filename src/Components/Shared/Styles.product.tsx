import { Platform, StyleSheet } from "react-native";
import { CommonColors } from "../../Theme/ColorCodes";
import { Cfont } from "../../Theme/FontFamily";
import { normalize } from "../../Utils/normalize";

export default class StylesProduct {
    static getStyles() {
        return StyleSheet.create({

            cardContainer: {
                margin: normalize(5),
                width: normalize(150),
                height: normalize(210),
                borderRadius: normalize(12),
                backgroundColor: CommonColors.ColorWhite,
            },

            shadowNewHover: {
                borderWidth: 0,
                borderRadius: 12,
                borderColor: CommonColors.ColorPrimary,
                shadowColor: CommonColors.ColorPrimary,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 5,
            },
            shadowNew: {
                borderWidth: 0,
                borderRadius: 12,
                borderColor: CommonColors.shadowClr,
                shadowColor: CommonColors.shadowClr,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: 5,
            },

            courseName: {
                marginHorizontal: normalize(10),
            },

            courseNamestyle: {
                color: CommonColors.darkTitle,
                fontSize: normalize(12),
                fontFamily: Cfont.M_SemiBols,
            },

            courseCode: {

                height: normalize(65),
                marginHorizontal: normalize(10),
            },

            courseCodestyle: {
                color: CommonColors.description,
                fontSize: normalize(11),
                fontFamily: Cfont.M_Medium,
            },

            cardImage: {
                borderRadius: normalize(10),
                margin: normalize(10),
            },
            margBtm: {
                marginBottom: normalize(10)
            },
            margTop: {
                marginTop: normalize(10)
            }
        })

    }

}