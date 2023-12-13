import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts, updateChoosenProduct } from "../../Redux/Actions/AppActions";
import { FlatList, SafeAreaView, Text, TouchableOpacity } from "react-native";
import ProductTile from "../Shared/ProductTile";
import { normalize } from "../../Utils/normalize";
import CNavigator from '../../Utils/CNavigator'
import { ScreenName } from "../../Navigation/Screens";
import StylesHomeScreen from "./Styles.home";
import { LabelProd } from "../../Utils/Labels";
const HomeScreen = () => {
    const styles = StylesHomeScreen.getStyles();

    const dispatch = useDispatch();
    const [productsData, setProductData] = useState([])
    useEffect(() => {
        dispatch(getProducts(success, failure))
    }, [])
    const success = (res: any) => {
        const { products = [] } = res || {};
        setProductData(products);
    }
    const failure = (error: any) => {

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
    const onPressAddPro = () => {
        CNavigator.pushView(ScreenName.AddProduct);
    }
    return (<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: normalize(100) }}>

        <FlatList
            data={productsData}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            initialNumToRender={8}
        />
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPressAddPro}
            style={[styles.loginBtn, { justifyContent: 'center', position: 'absolute', bottom: 10, right: 25 }]}>
            <Text style={[styles.loginText, { alignSelf: 'center', margin: normalize(10) }]}>{LabelProd.addProduct} </Text>
        </TouchableOpacity>
    </SafeAreaView>
    )
}
export default HomeScreen;