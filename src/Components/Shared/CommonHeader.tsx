import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import StylesProductDetails from "../Product/Styles.product";
import { LabelProd } from "../../Utils/Labels";

const CommonHeader = (props:any) => {
    const {title}=props;
    const styles = StylesProductDetails.getStyles()
    return (<View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>{props?.onBackClick()}}>
            <Text style={styles.courseNamestyle}>{LabelProd.back}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
        
    </View>
    )
}
export default CommonHeader;