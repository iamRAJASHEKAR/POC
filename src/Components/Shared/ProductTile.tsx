import { Image, Text, TouchableOpacity, View } from "react-native";
import StylesProduct from "./Styles.product";
import { useState } from "react";
import { normalize } from "../../Utils/normalize";
import FastImage from "react-native-fast-image";

const ProductTile = (props: any) => {
    const styles = StylesProduct.getStyles();
    const { item } = props;
    const { thumbnail } = item;
    const [btnStatenext, setBtnStateNext] = useState(false)


    return (
        <TouchableOpacity
            onPressIn={() => { setBtnStateNext(true) }}
            onPressOut={() => { setBtnStateNext(false) }}

            activeOpacity={0.9} onPress={() => { props?.onPress ? props.onPress(item) : null }}>
            <View
                style={[styles.cardContainer, btnStatenext ? styles.shadowNewHover : styles.shadowNew]}>
                <View style={[styles.cardImage,]} >

                    <FastImage
                        style={{ borderRadius: normalize(10), height: normalize(100), width: normalize(130) }}
                        source={{
                            uri: thumbnail,
                            priority: FastImage.priority.high,
                            cache: FastImage.cacheControl.immutable,
                        }}
                    />

                </View>
                <View style={styles.courseName}>
                    <Text numberOfLines={3} style={styles.courseNamestyle}>
                        {item.brand}
                    </Text>
                </View>

                <View style={[styles.courseCode,styles.margBtm,styles.margTop]}>
                    <Text numberOfLines={4} ellipsizeMode="tail" style={styles.courseCodestyle}>
                        {item.description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export default ProductTile;