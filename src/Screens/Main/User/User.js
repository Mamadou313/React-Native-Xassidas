import React, { useState, useEffect,useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './UserStyle'
import theme from '../../../Core/theme'
const { strings, icons, colors } = theme;
import IconComponent from '../../../Components/Icon';
import Header from '../../../Components/Header';
import Profile from '../../../Components/Profile'
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from '../../../Core/Context';

const options=[
    {id:0, text:'My orders', path:'Order', success:'1'},
    {id:1, text:'Messages', path:'Messages', success:'1'},
    {id:2, text:'Shipping Addressess', path:'ShippingAddress', success:'1'},
    {id:3, text:'Payment Method', path:'PaymentMethod', success:'0'},
    {id:4, text:'Coupons', path:'Coupon', success:'0'},
    {id:5, text:'Wallets', path:'Wallet', success:'1'},
    {id:6, text:'Settings', path:'Setting', success:'0'},
]
const User = ({navigation}) => {
    const nav= navigation
    const themeColor = useContext(Context)

    const [isAlertModalVisible, setAlertModalVisible] = useState(false);
    const toggleModal = () => {
        setAlertModalVisible(!isAlertModalVisible);
    };
    const [key, setKey]= useState()
    useEffect(() =>{
        getToken()
    },[key])
    const getToken = async () =>{
        try {
            const token1 = await AsyncStorage.getItem('token')
            let token = JSON.parse(token1)
            setKey(token)
            return token
        }
        catch (error) {
            console.log("Token Get Error", error)
        }
    }
    const renderItem = ({item}) => {
        return(
            <View style={styles.listView}>
                {item.path == 'ShippingAddress'?<View>
                <TouchableOpacity style={styles.listItemView} onPress={()=> {
                        item.success == key ? nav.navigate(item.path, { addr: 0 })
                        :item.success == '0'? nav.navigate(item.path, { addr: 0 })
                        :toggleModal()}}>
                        <Text style={styles.listText}>{item.text}</Text>
                        <IconComponent source={icons.forawrd} />
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                </View> : <View>
                    <TouchableOpacity style={styles.listItemView} onPress={()=> {
                        item.success == key ? nav.navigate(item.path)
                        :item.success == '0'? nav.navigate(item.path)
                        :toggleModal()}}>
                        <Text style={styles.listText}>{item.text}</Text>
                        <IconComponent source={icons.forawrd} />
                    </TouchableOpacity>
                    <View style={styles.line}></View>
                </View>}
            </View>
        )
    }
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.myprofile} nav={nav} Screen='User'/>
            <Profile nav={nav} link='EditUser' screen='SignIn' show={true}/>
            <View style={styles.downContainer}>
                <FlatList 
                    data={options}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <Modal isVisible={isAlertModalVisible}>
                <View style={styles.modalWindow}>
                    <Text style={{...styles.Title, color:themeColor.theme}}>{strings.ops}</Text>
                    <Text style={styles.Text}>{strings.alertMessage}</Text>
                    <TouchableOpacity style={{...styles.Button, backgroundColor:themeColor.theme}} onPress={toggleModal}>
                        <Text style={styles.buttonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View> 
            </Modal>
        </View>
    )
}
export default User