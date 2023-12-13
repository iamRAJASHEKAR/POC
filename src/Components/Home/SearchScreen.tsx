import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TextInput, SafeAreaView } from "react-native";
import Stylesplash from "../Splash/Style.splash";
import { CommonColors } from "../../Theme/ColorCodes";
import { useDispatch } from "react-redux";
import { getSearchProducts, updateChoosenProduct } from "../../Redux/Actions/AppActions";
import ProductTile from "../Shared/ProductTile";
import { LabelProd } from "../../Utils/Labels";
import CNavigator from '../../Utils/CNavigator'
import { ScreenName } from "../../Navigation/Screens";

export default function App() {
    const styles = Stylesplash.getStyles();

    const [noData, setNoData] = useState(false);
    const [results, setResults] = useState([]);
    const [searchTimer, setSearchTimer] = useState(null);
    const dispatch = useDispatch();
    async function fetchData(text: any) {
        const searchData = {
            query: text
        }
        dispatch(getSearchProducts(searchData, success, failure))
    }
    const success = (res: any) => {
        const { products = [] } = res || {}
        console.log('>>>>>>>res', products.length);
        if (products?.length > 0) {
            setNoData(false);
            setResults(products);
        } else {
            setNoData(true);
            setResults([]);
        }


    }
    const failure = (error: any) => {
        console.log('>>>>>>>error', error);

    }
    const onItemPress = (item: any) => {
        dispatch(updateChoosenProduct(item));
        CNavigator.pushView(ScreenName.ProductDetails);

    }
    const renderItem = ({ item, index }: any) => {


        return (
            <>
                <ProductTile item={item} onPress={onItemPress} />
            </>
        );
    };
    return (<SafeAreaView style={{ flex: 1, alignContent: 'center' }}>

        <View style={{ alignItems: 'center' }}>
            <View style={styles.inputView}>

                <TextInput
                    style={styles.inputText}
                    placeholder="Search"
                    placeholderTextColor={CommonColors.ColorPrimary}
                    onChangeText={text => {
                        if (searchTimer) {
                            clearTimeout(searchTimer);
                        }
                        setSearchTimer(
                            setTimeout(() => {
                                fetchData(text);
                            }, 1000),
                        );
                    }} />
            </View>
            {results?.length > 0 ?
                <FlatList
                    data={results}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    initialNumToRender={8}
                /> : <></>
            }
            {noData ?
                <Text style={[styles.loginText, { color: CommonColors.ColorPrimary }]}>{LabelProd.nodata}</Text>
                : <></>}
        </View>
    </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});