import React, {useState, useContext} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../AuthStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import InputField from '../../../Components/TextInput'
import CheckBox from '../../../Components/CheckBox';
import SoicalButton from '../../../Components/SocialButton';
import theme from '../../../Core/theme';
const { strings, images, icons, colors } = theme;
import Modal from "react-native-modal";
import { Auth } from '../../../Storage/Auth';
import Context from '../../../Core/Context';

const SignUp = (props) => { 
    const nav= props.navigation
    const themeColor = useContext(Context)

    const [isCongras, setCongras] = useState('');
    const [isAlertModalVisible, setAlertModalVisible] = useState(false);
    const [activeText, setActiveText] = useState('')
    const alertToggleModal = (text) => {
        setAlertModalVisible(!isAlertModalVisible);
        setActiveText(text)
    };

    const [name, setName]= useState('')
    const [phone, setPhone]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [conPassword, setConPassword]= useState('')
    const [isChecked, setIsChecked]= useState(false)

    const passwordMatch = (text) => {
        if (text === password) {
          return true
        } else {
          return false
        }
    };
    const emailValidation = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email); // this will return true of false
    };
    const passwordValidation = (password) => {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password); // this will return true of false
    };
    const SignUp = () =>{
        if(name == ''){
            let text = "Please Provide Your Name!"
            alertToggleModal(text)
        }else if(name.length < 3 ){
            let text = "Please Provide Valid Name"
            alertToggleModal(text)
        }else if(phone == '' ){
            let text = "Please Provide Your Phone Number!"
            alertToggleModal(text)
        }else if(phone.length !== 11 ){
            let text = "Please Provide Valid Phone Number"
            alertToggleModal(text)
        }else if(email == ''){
            let text = "Please Provide Your Email!"
            alertToggleModal(text)
        }else if(!emailValidation(email.trim())){
            let text = "Invalid Email Forrmat"
            alertToggleModal(text)
        }else if(password === "") {
            let text = "Please Enter Your Password!"
            alertToggleModal(text)
        }else if(!passwordValidation(password)) {
            let text = "Password should have at least 8 characters,1 uppercase, 1 number and 1 symbol"
            alertToggleModal(text)
        }else if(conPassword === "") {
            let text = "Please Rewrite Your Password!"
            alertToggleModal(text)
        }else if(!passwordMatch(conPassword)) {
            let text = "Password Doesn't Matched"
            alertToggleModal(text)
        }else if (!isChecked) {
            let text = "Please check the term of services!"
            alertToggleModal(text)
        }else{
            setCongras('Congras')
            let obj ={
                name:name,
                phone:phone,
                email:email.trim().toLocaleLowerCase(),
                password:password,
                DOB:"",
                address:"",
                congras:strings.congras,
                modal:alertToggleModal
            }
            Auth.SignUpData(obj)
        }
    }
    return(
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
                    <TouchableOpacity style={styles.touchButton} onPress={() => nav.goBack()}>
                        <Image source={images.backIcon} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.rectangle}> 
                        <Image source={images.SignUp} style={styles.signUpImage}/>
                    </View>
                    <TouchableOpacity style={{...styles.touchButton}} onPress={async () => {
                        nav.navigate('HomeNavigation')
                        await AsyncStorage.setItem("token", "0")
                    }}>
                        <Text style={styles.skipText}>{strings.skip}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SignupContainer}>
                    <Text style={{...styles.textRegister, color:themeColor.theme}}>{strings.Register}</Text>
                    <Text style={styles.text}>Sign up to continue</Text>
                </View>
                <View style={styles.formContainer}>
                    <InputField placeHolder={strings.formName} value={name} setValue={setName} />
                    <InputField placeHolder={strings.formPhone} value={phone} setValue={setPhone}  keyboardtype={'number-pad'}/>
                    <InputField placeHolder={strings.formEmail} value={email} setValue={setEmail}/>
                    <InputField placeHolder={strings.formPassword} value={password} setValue={setPassword} securenEntry={true}/>
                    <InputField placeHolder={strings.formConfirmPassword} value={conPassword} setValue={setConPassword} securenEntry={true}/>
                    <View style={styles.checkBox}>
                        <CheckBox value={isChecked} setValue={setIsChecked}/>
                        <Text style={styles.checkBoxText}>I agre to</Text>
                        <TouchableOpacity>
                                <Text style={{...styles.termService, color:themeColor.theme}}> {strings.TermOfServices}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lowerRow}>
                        <Text style={styles.textSignup}>{strings.SignUp.toLocaleUpperCase()}</Text>
                        <TouchableOpacity style={{...styles.button, backgroundColor:themeColor.theme}} onPress={() => SignUp()}>
                            <Image source={images.nextIcon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.topLineSpace}><Text style={styles.text}>or login using social media</Text></View>
                    <View style={styles.connectRow}>
                        <View style={styles.socialIconRow}>
                        <SoicalButton icon={icons.fb}/>
                        <SoicalButton icon={icons.google}/>
                        </View>
                        <TouchableOpacity onPress={() => nav.navigate('SignIn')}>
                            <Text style={[styles.underlineText,styles.link]}>{strings.login}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <Modal isVisible={isAlertModalVisible}>
                {isCongras == 'Congras'? <View style={styles.alertModalWindow}>
                    <Image source={images.success} style={styles.successIcon} />
                    <Text style={{...styles.alertText,color:themeColor.theme}}>{activeText}! {strings.registered}</Text>
                    <Text style={styles.alertText}>{strings.congrasMessage}</Text>
                    <TouchableOpacity style={{...styles.alertButton, backgroundColor:themeColor.theme}} onPress={()=> {alertToggleModal(''),setCongras(''), nav.navigate('SignIn')}}>
                        <Text style={styles.alertButtonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View>:<View style={styles.alertModalWindow}>
                    <Text style={{...styles.alertTitle,color:themeColor.theme}}>{strings.ops}</Text>
                    <Text style={styles.alertText}>{activeText}</Text>
                    <TouchableOpacity style={{...styles.alertButton,backgroundColor:themeColor.theme}} onPress={()=>alertToggleModal('')}>
                        <Text style={styles.alertButtonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View> 
                }
            </Modal>
        </ScrollView>
    )
}
export default SignUp;