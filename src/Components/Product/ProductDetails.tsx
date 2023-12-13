import React, { useState, useRef, useEffect } from 'react';
import { Text, View, Dimensions, Image, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { CommonColors } from '../../Theme/ColorCodes';
import FastImage from 'react-native-fast-image';
import StylesProduct from '../Shared/Styles.product';
import { useSelector } from 'react-redux';
import StylesProductDetails from './Styles.product';
import { Cfont } from '../../Theme/FontFamily';
import CommonHeader from '../Shared/CommonHeader';
import CNavigator from '../../Utils/CNavigator'

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);



const renderItem = (itemData: any) => {
    const { item } = itemData;

    return (
        <View
            style={{
                padding: 20,
                borderRadius: 20,
                alignItems: 'center',
            }}>
            <FastImage source={{
                uri: item,
                priority: FastImage.priority.high,
                cache: FastImage.cacheControl.immutable,
            }} style={{ width: '100%', height: 200 }} />
            <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold' }}>
                {item.name}
            </Text>
        </View>
    );
};

const ProductDetails = () => {
    const { productData } = useSelector((state: any) => state.app);

    const [index, setIndex] = useState(0);
    const [imagesData, setimagesData] = useState([]);

    const isCarousel = useRef(null);
    const styles = StylesProductDetails.getStyles();
    useEffect(() => {
        if (productData) {
            setimagesData(productData?.images)
        }

    }, [productData])
    const onBackClick = () => {
        CNavigator.pop();
    }
    return (<SafeAreaView>
        <CommonHeader title={productData?.title} onBackClick={onBackClick} />
        <View style={{ marginVertical: 10 }}>
            {imagesData?.length > 0 ?
                <>
                    <Carousel
                        ref={isCarousel}
                        data={imagesData}
                        renderItem={renderItem}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        onSnapToItem={(index: any) => setIndex(index)}
                    />
                    <View style={{ marginTop: -50 }}>
                        <Pagination
                            dotsLength={imagesData.length}
                            activeDotIndex={index}
                            carouselRef={isCarousel}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 8,
                                backgroundColor: '#F4BB41',
                            }}
                            tappableDots={true}
                            inactiveDotStyle={{
                                backgroundColor: CommonColors.ColorPrimary,
                                // Define styles for inactive dots here
                            }}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                        />
                    </View>
                </> : <></>

            }

            <View style={[styles.courseName, { flexDirection: 'row' }, styles.marTop10]}>
                <Text style={styles.courseNamestyle}>
                    {'Brand'} {':'}
                </Text>
                <Text numberOfLines={3} style={[styles.productNameVal, styles.marginH10]}>
                    {productData?.brand}
                </Text>

            </View>
            <Text numberOfLines={3} style={[styles.productNameVal, styles.marginH10, styles.marTop10]}>
                {productData?.description}
            </Text>

            <View style={[styles.courseName, { flexDirection: 'row' }, styles.marTop10]}>
                <Text style={styles.courseNamestyle}>
                    {'Price'} {':'}
                </Text>
                <Text numberOfLines={3} style={[styles.productNameVal, styles.marginH10, { color: CommonColors.black }]}>
                    {productData?.price}
                </Text>
                <Text style={[styles.courseNamestyle, { fontFamily: Cfont.M_Medium, color: CommonColors.greenClr }]}>
                    {`(${productData?.discountPercentage} %Off)`}
                </Text>
            </View>

        </View>
    </SafeAreaView>

    );
};

export default ProductDetails;