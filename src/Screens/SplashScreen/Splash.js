import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Image } from 'react-native';
import styles from './SplashStyle'
import theme from '../../Core/theme'
const { strings, images } = theme;
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from '../../Core/Context';

const Splash = ({navigation}) => {
    const themeColor = useContext(Context)
    async function getToken() {
        try {
            const token1 = await AsyncStorage.getItem('token')
            let token = JSON.parse(token1)
            if (token == "1") {
                navigation.replace('HomeNavigation')
            }else{
                navigation.replace('LoginNavigation')
            }
            return token
        }
        catch (error) {
            console.log("Token Get Error", error)
        }
    }
    useEffect(()=>{
        clearTimeout(timeout)
        const timeout = setTimeout(() => {
            getToken()
        }, 2000);
    },[])
    
    return(
        <View style={{...styles.container, backgroundColor:themeColor.theme}}>
            <Image
                source={images.cartLogo}
                style={styles.logoImage}
            />
            <View style={{height:hp('1%')}} />
            <Text style={styles.appName}>{strings.app_name.toLocaleUpperCase()}</Text>
            <Text style={styles.brandName}>{strings.brand_name.toLocaleUpperCase()}</Text>
        </View>
    )
}
export default Splash;