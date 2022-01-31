import React, { useState, useRef, useEffect, useContext } from 'react';
import { Keyboard, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../AuthStyle'
import theme from '../../../Core/theme'
const { strings, images, icons, colors } = theme;
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/FontAwesome';
import InputField from '../../../Components/TextInput'
import SoicalButton from '../../../Components/SocialButton'
import { Auth } from '../../../Storage/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from '../../../Core/Context';

const SignIn = ({ navigation}) => {
    const nav = navigation
    const themeColor = useContext(Context)

    const [otp1, setotp1] = useState('');
    const [otp2, setotp2] = useState('');
    const [otp3, setotp3] = useState('');
    const [otp4, setotp4] = useState('');

    const ref_input1 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();

    const [focus, setFocus] = useState('otp1');
    const setVal = () => {
        if (otp1 == '') {
        } else if (otp2 == '') {
        } else if (otp3 == '') {
        } else if (otp4 == '') {
        } else {
            setotp1('')
            setotp2('')
            setotp3('')
            setotp4('')
            setFocus('otp1')
            setActiveModal('ResetPassword')
        }
    }
    const [isModalVisible, setModalVisible] = useState(false);
    const [activeModal, setActiveModal] = useState('')
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const [isAlertModalVisible, setAlertModalVisible] = useState(false);
    const [activeText, setActiveText] = useState('')
    const alertToggleModal = (text) => {
        setAlertModalVisible(!isAlertModalVisible);
        setActiveText(text)
    };
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [resPassword, setResPassword] = useState('')

    const emailValidation = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email); // this will return true of false
    }
    const passwordValidation = (password) => {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password); // this will return true of false
    };
    const passwordMatch = (text) => {
        if (text === password) {
          return true
        } else {
          return false
        }
    };
    const login = () => {
        if (email == '') {
            let text = "Email shouldn't empty!"
            alertToggleModal(text)
        }else if(!emailValidation(email.trim())){
            let text = "Invalid Email Forrmat"
            alertToggleModal(text)
        }else if (password === "") {
            let text = "Password shouldn't empty!"
            alertToggleModal(text)
        }else {
            let obj = {
                email: email.trim().toLocaleLowerCase(),
                password: password,
                key: "1",
                nav: nav,
                scrn: 'HomeNavigation',
                error:'Email or Password unmatched',
                modal:alertToggleModal
            }
            Auth.LoginData(obj)
        }
    }
    const forgotEmail = async () => {
        if (email == '') {
            let text = "Email shouldn't empty!"
            alertToggleModal(text)
        }else if(!emailValidation(email.trim())){
            let text = "Invalid Email Forrmat"
            alertToggleModal(text)
        }else{
            const userData = await AsyncStorage.getItem('auth')
            let parsedUserData = JSON.parse(userData)
            if(parsedUserData.email === email){
                setActiveModal('OTP')
            }else{
                let text = "Email is not Correct"
                alertToggleModal(text)
            }
        }
    }
    const ResetPassword = async () => {
        if(password === "") {
            let text = "Please Enter Your Password!"
            alertToggleModal(text)
        }else if(!passwordValidation(password)) {
            let text = "Password should have at least 8 characters,1 uppercase, 1 number and 1 symbol"
            alertToggleModal(text)
        }else if(resPassword === "") {
            let text = "Please Rewrite Your Password!"
            alertToggleModal(text)
        }else if(!passwordMatch(resPassword)) {
            let text = "Password Doesn't Matched"
            alertToggleModal(text)
        }else{
            const userData = await AsyncStorage.getItem('auth')
            let parsedUserData = JSON.parse(userData)
            setActiveModal('')
            let mod = 'reset'
            let obj ={
                password:password,
            }
            Auth.UpdateUserData(parsedUserData,obj,mod)
        }
    }
    return (
        <ScrollView style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}
        showsVerticalScrollIndicator={false}>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                enableOnAndroid
                extraScrollHeight={270}
                scrollEnabled={false}
                keyboardShouldPersistTaps={"handled"}
            >
                <View style={styles.abc}>
                    <TouchableOpacity style={styles.touchButton} onPress={() => nav.navigate('LoginNavigation')}>
                        <Image source={images.backIcon} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.rectangle}>
                        <Image source={images.SignIn} style={styles.signUpImage} />
                    </View>
                    <TouchableOpacity style={styles.touchButton} onPress={async () => {
                        nav.navigate('HomeNavigation')
                        await AsyncStorage.setItem("token", "0")
                    }}>
                        <Text style={styles.skipText}>{strings.skip}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SignupContainer}>
                    <Text style={{...styles.textRegister,color:themeColor.theme}}>{strings.Welcome}</Text>
                    <Text style={styles.text}>Signin to continue</Text>
                </View>
                <View style={styles.formContainer}>
                    <InputField placeHolder={strings.formEmail} value={email} setValue={setEmail} />
                    <InputField placeHolder={strings.formPassword} value={password} setValue={setPassword} securenEntry={true} />
                    <View style={[styles.lowerRow, styles.topSpace]}>
                        <Text style={styles.textSignup}>{strings.SignIn.toLocaleUpperCase()}</Text>
                        <TouchableOpacity s style={{...styles.button, backgroundColor:themeColor.theme}} onPress={() => login()}>
                            <Image source={images.nextIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.social}><Text style={styles.text}>or login using social media</Text></View>
                    <View style={styles.connectRow}>
                        <View style={styles.socialIconRow}>
                            <SoicalButton icon={icons.fb} />
                            <SoicalButton icon={icons.google} />
                        </View>
                        <TouchableOpacity onPress={() => {setEmail(''), setPassword(''),nav.navigate('SignUp')}}>
                            <Text style={[styles.underlineText, styles.link]}>{strings.SignUp}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.forgetView}
                        onPress={() => { toggleModal(), setEmail(''), setPassword(''), setResPassword('') ,setActiveModal('forget') }}>
                        <Text style={{...styles.forgetText, color:themeColor.theme}}>{strings.forgetText}{strings.questionMark}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
            <Modal isVisible={isModalVisible}>
                {activeModal === 'forget' ?
                    <View style={styles.modalWindow}>
                        <Icon name="times" size={30} color="black" onPress={toggleModal} style={styles.closeIcon} />
                        <Text style={{...styles.forgetTitle, color:themeColor.theme}}>{strings.forgetText}</Text>
                        <Text style={styles.labelText}>Enter your email to get verificaton code</Text>
                        <InputField placeHolder={strings.formEmail} value={email} setValue={setEmail} />
                        <TouchableOpacity style={[styles.submitButton, styles.topSpace,{backgroundColor:themeColor.theme}]} 
                        onPress={() => forgotEmail()}>
                            <Text style={styles.submitText}>{strings.submit}</Text>
                        </TouchableOpacity>
                    </View> : activeModal === 'OTP' ? <View style={styles.modalWindow}>
                        <Icon name="times" size={30} color="black" onPress={toggleModal} style={styles.closeIcon} />
                        <Text style={{...styles.forgetTitle,color:themeColor.theme}}>{strings.otp}</Text>
                        <Text style={styles.labelText}>Please enter the code that was sent to you via email</Text>
                        <View style={styles.otpView}>
                            <TouchableOpacity style={[styles.otpInputView, focus === 'otp1' ? { borderColor: themeColor.theme } : { borderColor: '#F5F5F5' }]}>
                                <TextInput maxLength={1} keyboardType='number-pad' value={otp1}
                                    onChange={() => { otp1 === '' ? ref_input2.current.focus() : ref_input1.current.focus() }}
                                    onChangeText={val => setotp1(val)}
                                    ref={ref_input1}
                                    autoFocus={true}
                                    onFocus={() => setFocus('otp1')}
                                    selectionColor={'black'}
                                    style={styles.otpInput}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.otpInputView, focus === 'otp2' ? { borderColor: themeColor.theme } : { borderColor: '#F5F5F5' }]}>
                                <TextInput maxLength={1} keyboardType='number-pad' value={otp2}
                                    onChangeText={val => setotp2(val)}
                                    onChange={() => otp2 === '' ? ref_input3.current.focus() : ref_input2.current.focus()}
                                    ref={ref_input2}
                                    onFocus={() => setFocus('otp2')}
                                    selectionColor={'black'}
                                    style={styles.otpInput}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.otpInputView, focus === 'otp3' ? { borderColor: themeColor.theme } : { borderColor: '#F5F5F5' }]}>
                                <TextInput maxLength={1} keyboardType='number-pad' value={otp3}
                                    onChangeText={val => setotp3(val)}
                                    ref={ref_input3}
                                    onChange={() => otp3 === '' ? ref_input4.current.focus() : ref_input3.current.focus()}
                                    onFocus={() => setFocus('otp3')}
                                    selectionColor={'black'}
                                    style={styles.otpInput}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.otpInputView, focus === 'otp4' ? { borderColor: themeColor.theme } : { borderColor: '#F5F5F5' }]}>
                                <TextInput maxLength={1} keyboardType='number-pad' value={otp4}
                                    onChangeText={val => setotp4(val)}
                                    ref={ref_input4}
                                    onChange={() => otp4 === '' ? ref_input4.current.focus() : Keyboard.dismiss}
                                    onFocus={() => setFocus('otp4')}
                                    selectionColor={'black'}
                                    style={styles.otpInput}
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.submitButton, styles.topSpace,{backgroundColor:themeColor.theme}]} onPress={() => setVal()}>
                            <Text style={styles.submitText}>{strings.submit}</Text>
                        </TouchableOpacity>
                    </View> : activeModal === 'ResetPassword' ? <View style={styles.modalWindow}>
                        <Icon name="times" size={30} color="black" onPress={toggleModal} style={styles.closeIcon} />
                        <Text style={{...styles.forgetTitle, color:themeColor.theme}}>{strings.resetpassword}</Text>
                        <Text style={styles.labelText}>Reset your password to recover & login to your account.</Text>
                        <InputField placeHolder={strings.newpassword} value={password} setValue={setPassword} securenEntry={true} />
                        <InputField placeHolder={strings.formConfirmPassword} value={resPassword} setValue={setResPassword} securenEntry={true} />
                        <TouchableOpacity style={[styles.submitButton, styles.topSpace,{backgroundColor:themeColor.theme}]} 
                        onPress={() => ResetPassword()}>
                            <Text style={styles.submitText}>{strings.submit}</Text>
                        </TouchableOpacity>
                    </View> : <View style={styles.modalWindow}>
                        <Icon name="times" size={30} color="black" onPress={toggleModal} style={styles.closeIcon} />
                        <Image source={images.success} style={styles.successIcon} />
                        <Text style={styles.forgetTitle}>{strings.success}</Text>
                        <Text style={styles.labelText}>Your has been reset</Text>
                        <TouchableOpacity style={{...styles.submitButton, backgroundColor:themeColor.theme}} 
                        onPress={() => { nav.navigate('SignIn'), toggleModal(), setEmail(''), setPassword(''), setResPassword('') }}>
                            <Text style={styles.submitText}>{strings.backprofile}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </Modal>
            <Modal isVisible={isAlertModalVisible}>
                <View style={styles.alertModalWindow}>
                    <Text style={{...styles.alertTitle,color:themeColor.theme}}>{strings.ops}</Text>
                    <Text style={styles.alertText}>{activeText}</Text>
                    <TouchableOpacity style={{...styles.alertButton,backgroundColor:themeColor.theme}} onPress={()=>alertToggleModal('')}>
                        <Text style={styles.alertButtonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View> 
            </Modal>
        </ScrollView>
    )
}
export default SignIn;