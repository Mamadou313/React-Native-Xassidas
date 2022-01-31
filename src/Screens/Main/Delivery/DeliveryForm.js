import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from './DilveryStyle'
import theme from '../../../Core/theme'
const { strings, icons, colors } = theme;
import IconComponent from '../../../Components/Icon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';

const DeliveryForm = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const InputField = ({title, icon}) => {
        return(
            <View style={styles.addressInputContainer}>
                <View style={styles.nameTitleView}>
                    <IconComponent source={icon} tintColor={themeColor.theme}/>
                    <Text style={styles.inputFieldTitle}>{title}</Text>
                </View>
                <TextInput placeholder={title} style={styles.inputText}/>
            </View>
        )
    }
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.deliveryaddress} nav={nav} Screen='ShippingAddress'/>
            <ScrollView style={styles.scrollViewForm} showsVerticalScrollIndicator={false}>
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    enableOnAndroid
                    extraScrollHeight={270}
                    scrollEnabled={false}
                    keyboardShouldPersistTaps={"handled"}
                >
                    <InputField title={strings.street} icon={icons.street}/>
                    <InputField title={strings.city} icon={icons.city}/>
                    <InputField title={strings.state} icon={icons.state}/>
                    <InputField title={strings.formPhone} icon={icons.phone}/>
                    <InputField title={strings.zipcode} icon={icons.zip}/>
                    <InputField title={strings.countrycallingcode} icon={icons.countrycalling}/>
                    <InputField title={strings.country} icon={icons.country}/>

                </KeyboardAwareScrollView>
                <TouchableOpacity style={{...styles.buttonAdressSave, backgroundColor:themeColor.theme}} onPress={()=> nav.navigate('ShippingAddress',{addr :0})}>
                    <Text style={styles.placeOrderText}>{strings.save}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default DeliveryForm