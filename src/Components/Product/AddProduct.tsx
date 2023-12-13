import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import StylesAddProd from "./Styles.AddProd";
import CommonHeader from "../Shared/CommonHeader";
import { LabelProd } from "../../Utils/Labels";
import CNavigator from '../../Utils/CNavigator'
import { CommonColors } from "../../Theme/ColorCodes";
import { normalize } from "../../Utils/normalize";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddProd } from "../../Redux/Actions/AppActions";

const AddProduct = () => {
    const styles = StylesAddProd.getStyles();
    const [brans, setBrand] = useState('');
    const [descr, setDescr] = useState('');
    const [price, setPrice] = useState('');
    const [showError, setShowError] = useState(false)
    const dispatch = useDispatch();
    const onBackClick = () => {
        CNavigator.pop();
    }
    const onPressAddPro = () => {
        if (brans && descr && price) {
            const dataObj = {
                brand: brans,
                description: descr,
                price: price
            }
            dispatch(AddProd(dataObj, success, failure))
        } else {
            setShowError(true);
        }
    }
    const success = (res: any) => {
        console.log('>>>>>>>res', res);
        //function to make two option alert
        Alert.alert(
            //title
            'Success',
            //body
            'Adding product is successful !!',
            [
                {
                    text: 'Ok',
                },

            ],
            { cancelable: false },
            //clicking out side of alert will not cancel
        );
    }
    const failure = (error: any) => {

        Alert.alert(
            //title
            'Failed',
            //body
            'Adding product failed !!',
            [
                {
                    text: 'Ok',
                },

            ],
            { cancelable: false },
            //clicking out side of alert will not cancel
        );
    }
    return (<SafeAreaView style={{ flex: 1, alignContent: 'center' }}>
        <CommonHeader title={LabelProd.addProduct} onBackClick={onBackClick} />
        <ScrollView>
            <View style={{ alignItems: 'center', marginTop: normalize(10) }}>

                <View style={styles.inputView}>

                    <TextInput
                        style={styles.inputText}
                        placeholder="Brand"
                        placeholderTextColor={CommonColors.ColorPrimary}
                        onChangeText={text => {
                            setShowError(false);
                            setBrand(text);
                        }} />

                </View>
                <View style={styles.inputView}>

                    <TextInput
                        style={styles.inputText}
                        placeholder="Description"
                        placeholderTextColor={CommonColors.ColorPrimary}
                        onChangeText={text => {
                            setShowError(false);
                            setDescr(text);
                        }} />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Price"
                        placeholderTextColor={CommonColors.ColorPrimary}
                        onChangeText={text => {
                            setShowError(false);
                            setPrice(text);
                        }} />
                </View>
                {showError ? <Text style={[styles.loginText, { color: CommonColors.redError }]}>{LabelProd.allFields}</Text>
                    : <></>}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={onPressAddPro}
                    style={[styles.loginBtn, { justifyContent: 'center', marginTop: normalize(10) }]}>
                    <Text style={[styles.loginText, { alignSelf: 'center', margin: normalize(10) }]}>{LabelProd.addProduct} </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    </SafeAreaView>
    )
}
export default AddProduct;