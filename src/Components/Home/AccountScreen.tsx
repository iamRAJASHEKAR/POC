import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import StylesProductDetails from "../Product/Styles.product";
import { LabelProd } from "../../Utils/Labels";
import FastImage from "react-native-fast-image";

const AccountScreen = () => {
    const { profileData } = useSelector((state: any) => state.app);
    console.log('>>>>>profileData', profileData);
    const styles = StylesProductDetails.getStyles();

    return (<SafeAreaView>
        <FastImage source={{
            uri: profileData?.image,
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.immutable,
        }} style={{ width: '100%', height: 200 }} />
        <View style={[styles.courseName, { flexDirection: 'row' }, styles.marTop10]}>
            <Text style={styles.courseNamestyle}>
                {LabelProd.fName} {':'}
            </Text>
            <Text numberOfLines={3} style={[styles.productNameVal, styles.marginH10]}>
                {`${profileData?.firstName}`}
            </Text>

        </View>
        <View style={[styles.courseName, { flexDirection: 'row' }, styles.marTop10]}>
            <Text style={styles.courseNamestyle}>
                {LabelProd.lname} {':'}
            </Text>
            <Text numberOfLines={3} style={[styles.productNameVal, styles.marginH10]}>
                {`${profileData?.lastName}`}
            </Text>

        </View>
        <View style={[styles.courseName, { flexDirection: 'row' }, styles.marTop10]}>
            <Text style={styles.courseNamestyle}>
                {LabelProd.gender} {':'}
            </Text>
            <Text numberOfLines={3} style={[styles.productNameVal, styles.marginH10]}>
                {`${profileData?.gender}`}
            </Text>

        </View>
        <View style={[styles.courseName, { flexDirection: 'row' }, styles.marTop10]}>
            <Text style={styles.courseNamestyle}>
                {LabelProd.email} {':'}
            </Text>
            <Text numberOfLines={3} style={[styles.productNameVal, styles.marginH10]}>
                {`${profileData?.email}`}
            </Text>

        </View>
    </SafeAreaView>
    )
}
export default AccountScreen;