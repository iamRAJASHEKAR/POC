import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { CommonColors } from '../../Theme/ColorCodes';
import Stylesplash from './Style.splash';
import { LabelProd } from '../../Utils/Labels';
import { useDispatch } from 'react-redux';
import { LoginAuth } from '../../Redux/Actions/AppActions';
import CNavigator from '../../Utils/CNavigator'
import { ScreenName } from '../../Navigation/Screens';

const SplashScreen = () => {
    const styles = Stylesplash.getStyles();
    const dispatch = useDispatch();
    const onPressLogin = () => {

        if (stateEmail && statePwd) {
            setShowError(false);

            const userData = {
                username: stateEmail,
                password: statePwd
            }
            dispatch(LoginAuth(userData, success, failure))
        } else {
            setShowError(true);
        }
        // Do something about login operation
    };
    const success = (res: any) => {
        CNavigator.replace(ScreenName.HomeScreen)
    }
    const failure = (error: any) => {

        Alert.alert(
            //title
            'Failed',
            //body
            'Login failed please try again !!',
            [
                {
                    text: 'Ok',
                },

            ],
            { cancelable: false },
            //clicking out side of alert will not cancel
        );
    }
    const [stateEmail, setStateEmail] = useState('')
    const [statePwd, setStatePwd] = useState('')
    const [showError, setShowError] = useState(false)

    return (<SafeAreaView style={styles.container}>


        <View style={{
            alignItems: 'center',
        }}>
            <Text style={styles.title}> Login</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor={CommonColors.ColorPrimary}
                    onChangeText={text => {
                        setShowError(false);
                        setStateEmail(text)
                    }} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor={CommonColors.ColorPrimary}
                    onChangeText={text => {
                        setShowError(false);
                        setStatePwd(text)
                    }} />
            </View>

            {showError ? <Text style={[styles.loginText, { color: CommonColors.redError }]}>{LabelProd.errorLogin}</Text>
                : <></>}
            <TouchableOpacity
                onPress={onPressLogin}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN </Text>
            </TouchableOpacity>

        </View>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({

});
export default SplashScreen;