import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import styles from './UserStyle'
import theme from '../../../Core/theme'
const { strings, icons, colors, images } = theme;
import IconComponent from '../../../Components/Icon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Header from '../../../Components/Header';
import Profile from '../../../Components/Profile'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import { Auth } from '../../../Storage/Auth';
import Context from '../../../Core/Context';
import { useIsFocused } from '@react-navigation/native';

const InputField = ({label, text, icon, setValue, editable, color}) => {
    return(
        <View style={styles.inputView}>
            <View style={styles.iconView}>
                <IconComponent source={icon} tintColor={color}/>
            </View>
            <TextInput 
                placeholder={label} 
                value={text} 
                onChangeText={text => setValue(text)} 
                style={styles.inputText}
                editable={editable}
                selectionColor='black'
            />
        </View>
    )
}
const User = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const isFocused = useIsFocused()

    const [user, setUser]= useState('')
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [phone, setPhone]= useState('')
    const [password, setPassword]= useState('')
    const [DOB, setDOB]= useState('')
    const [address, setAddress]= useState('')
    useEffect(() =>{
        getUser()
    },[])
    const getUser = async () =>{
        const userData = await AsyncStorage.getItem('auth')
        let parsedUserData = JSON.parse(userData)
        setUser(parsedUserData)
        setName(parsedUserData.name)
        setEmail(parsedUserData.email)
        setPassword(parsedUserData.password)
        setPhone(parsedUserData.phone)
        setDOB(parsedUserData.DOB)
        setAddress(parsedUserData.address)
    }
    
    const [modalView, setModalView]= useState('')
    const [activeText, setActiveText] = useState('')
    const [alertToggleModal, setAlertToggleModal] = useState(false);
    const toggleModal = (text) => {
        setAlertToggleModal(!alertToggleModal);
        setActiveText(text)
    }
    const emailValidation = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email); // this will return true of false
    };
    const UpdateUser = () =>{
        if(name == ''){
            let text = "Please Provide Your Name!"
            toggleModal(text)
        }else if(name.length < 3 ){
            let text = "Please Provide Valid Name"
            toggleModal(text)
        }else if(phone == '' ){
            let text = "Please Provide Your Phone Number!"
            toggleModal(text)
        }else if(phone.length !== 11 ){
            let text = "Please Provide Valid Phone Number"
            toggleModal(text)
        }else if(email == ''){
            let text = "Please Provide Your Email!"
            toggleModal(text)
        }else if(!emailValidation(email.trim())){
            let text = "Invalid Email Forrmat"
            toggleModal(text)
        }else{
            setModalView('update')
            let mod = 'update'
            let obj ={
                name:name,
                phone:phone,
                // password:password,
                DOB:DOB,
                address:address,
                congras:strings.recordupdate,
                modal:toggleModal
            }
            Auth.UpdateUserData(user,obj, mod)
        }
    }
    const logout = () =>{
        let obj={
            key:"0",
            nav: nav,
            scrn:'SignIn'
        }
        Auth.TokenSet(obj)        
    }

    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.editprofile} nav={nav} Screen='User'/>
            <ScrollView>
            <Profile nav={nav} link='EditUser' screen='SignIn' show={false}/>
                <KeyboardAwareScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    enableOnAndroid
                    extraScrollHeight={270}
                    scrollEnabled={false}
                    keyboardShouldPersistTaps={"handled"}>
                    <View style={styles.downContainer}>
                        <View style={styles.inputContainer}>
                            <InputField label='user Name' text={name} editable={true} setValue={setName} color={themeColor.theme} icon={icons.username}/>                    
                            <InputField label='user Email' text={email} editable={false} color={themeColor.theme} icon={icons.useremail}/>                    
                            <InputField label='Phone Number' text={phone} setValue={setPhone} color={themeColor.theme} icon={icons.userphone}/>                    
                            <InputField label='Date of Birth' text={DOB} setValue={setDOB} color={themeColor.theme} icon={icons.userdob}/>                    
                            <InputField label='Address' text={address} setValue={setAddress} color={themeColor.theme} icon={icons.useradress}/>                    
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={{...styles.buttonView, backgroundColor:themeColor.theme}} onPress={()=>UpdateUser()}>
                            <Text style={styles.buttonText}>{strings.save}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </ScrollView>
            <Modal isVisible={alertToggleModal}>
                {modalView == 'update'?
                <View style={styles.modalWindow}>
                    <Image source={images.success} style={styles.successIcon} />
                    <Text style={styles.Text}>{strings.recordupdate}</Text>
                    <TouchableOpacity style={{...styles.Button, backgroundColor:themeColor.theme}} onPress={()=> {toggleModal(),setModalView(''),logout()}}>
                        <Text style={styles.buttonText}>{strings.backtologin}</Text>
                    </TouchableOpacity>
                </View> :<View style={styles.modalWindow}>
                    <Text style={{...styles.Title, color:themeColor.theme}}>{strings.ops}</Text>
                    <Text style={styles.Text}>{activeText}</Text>
                    <TouchableOpacity style={{...styles.Button, backgroundColor:themeColor.theme}} onPress={()=> {toggleModal()}}>
                        <Text style={styles.buttonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View> }
            </Modal>
        </View>
    )
}
export default User