import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Screens/Main/User/UserStyle'
import theme from '../Core/theme'
const { strings, images, icons } = theme;
import IconComponent from './Icon';
import Modal from "react-native-modal";
import {Auth} from '../Storage/Auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from '../Core/Context';

const Profile = ({nav, link, screen, show}) => {
    const themeColor = useContext(Context)
    const [user, setUser]= useState([])
    const [key, setKey]= useState()

    useEffect(() =>{
        getUser()
        getToken()
    },[key])
    const getUser = async () =>{
        const userData = await AsyncStorage.getItem('auth')
        let parsedUserData = JSON.parse(userData)
        setUser(parsedUserData)
    }
    const getToken = async () =>{
        try {
            const token1 = await AsyncStorage.getItem('token')
            let token = JSON.parse(token1)
            setKey(token)
            return token
        }
        catch (error) {
            alert("Token Get Error", error)
        }
    }
    const logout = () =>{
        let obj={
            key:"0",
            nav: nav,
            scrn:screen
        }
        Auth.TokenSet(obj)        
    }
    const [isAlertModalVisible, setAlertModalVisible] = useState(false);
    const toggleModal = () => {
        setAlertModalVisible(!isAlertModalVisible);
    };
    return (
        <View style={styles.midContainer}>
            <View style={styles.userImageView}>
                <Image source={images.user} style={styles.userImage}/>           
            </View>
            <TouchableOpacity style={styles.cameraIconView}>
                    <IconComponent source={icons.camera} tintColor={themeColor.theme}/>
            </TouchableOpacity> 
            <View style={styles.userContainer}>
                <TouchableOpacity style={styles.editIconView} onPress={() => {
                    key=='1'? nav.navigate(link):toggleModal()}}>
                    <IconComponent source={icons.edit} tintColor={themeColor.theme}/>
                </TouchableOpacity>
                    <View style={styles.detailView}>
                        {key =='1'?<View>
                            <Text style={styles.userName}>{user?.name}</Text>
                            <Text style={styles.userEmail}>{user?.email}</Text>
                            </View>:<View>
                            <Text style={styles.userName}>{strings.userName}</Text>
                            <Text style={styles.userEmail}>{strings.userEmail}</Text>
                            </View>
                        }
                    </View>
                    {show ?
                    key =='0'?<TouchableOpacity style={{...styles.logoutView, backgroundColor:themeColor.theme}} onPress={() => nav.replace(screen)}>
                        <Text style={styles.logoutText}>{strings.login}</Text>
                    </TouchableOpacity> : <TouchableOpacity style={{...styles.logoutView, backgroundColor:themeColor.theme}} onPress={() => logout()}>
                        <Text style={styles.logoutText}>{strings.logout}</Text>
                    </TouchableOpacity>
                    : <View></View>}
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
export default Profile