import { Platform, StyleSheet } from "react-native";
import { CommonColors } from "../../Theme/ColorCodes";
import { Cfont } from "../../Theme/FontFamily";
import { normalize } from "../../Utils/normalize";

export default class StylesProductDetails {
    static getStyles() {
        return StyleSheet.create({
            courseName: {
                marginHorizontal: normalize(10),
            },
            courseNamestyle: {
                color: CommonColors.darkTitle,
                fontSize: normalize(14),
                fontFamily: Cfont.M_SemiBols,
            },
            productNameVal: {
                color: CommonColors.black,
                fontSize: normalize(14),
                fontFamily: Cfont.M_SemiBols,
            },
            marginH10: {
                marginHorizontal: normalize(10)
            },
            marTop10: {
                marginTop: normalize(10),
            },
            headerContainer: {
                marginTop: normalize(15),
                marginHorizontal:normalize(10),
                flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'center',
            },
            headerText: {
                color: CommonColors.black,
                fontFamily: Cfont.M_SemiBols,
                fontSize: normalize(17),
                marginHorizontal: normalize(20),
                // alignSelf: 'center'

            },
        })

    }

}