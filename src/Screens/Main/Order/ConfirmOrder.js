import React,{useContext} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './OrderStyle'
import theme from '../../../Core/theme'
const { strings, images, colors } = theme;
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';

const order=[
    {id:0, orderId:'98765032', address:'32512 pearl street, California, United State.', phone:'969-62-5512', paymentMethod:'Cash On Delivery', subTotal:'$1000.00', shipping:'$225',}
]
const ConfirmOrder = (props) => {
    const themeColor = useContext(Context)
    const nav= props.navigation
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.Confirmation} nav={nav} Screen='Delivery'/>
            {order.map((item) => { return(
                <View style={{...styles.ConfirmContainer, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
                <View style={styles.imageContainer}>
                    <Image source={themeColor.theme == colors.orangetheme ? images.confirmationOrangelogo:images.confirmationBluelogo}/>
                </View>
                <View style={styles.thankyouContainer}>
                    <Text style={styles.thankyouText}>{strings.thankyouforshopping}</Text>
                </View>
                <View style={styles.orderNumContainer}>
                    <Text style={styles.orderNumText}>Your Order Number is</Text>
                    <Text style={{...styles.orderNumText, color:themeColor.theme}}>#{item.orderId}</Text>
                </View>
                <View style={styles.subTotalContainer}>
                    <View style={styles.subTotalView}>
                        <Text style={styles.totaText}>Subtotal</Text>
                        <Text style={styles.totalAmount}>{item.subTotal}</Text>
                    </View>
                    <View style={styles.subTotalView}>
                        <Text style={styles.totaText}>Delivery</Text>
                        <Text style={styles.totalAmount}>{item.shipping}</Text>
                    </View>
                    <View style={styles.subTotalView}>
                        <Text style={[styles.totaText, styles.bold, styles.blackColor]}>Total</Text>
                        <Text style={{...styles.totalAmount,fontWeight:'bold',color:themeColor.theme}}>$1225.00</Text>
                    </View>
                </View>
                <TouchableOpacity style={{...styles.buttonSubmit,backgroundColor:themeColor.theme}} onPress={()=>{props.navigation.navigate('Home')}}>
                    <Text style={styles.buttonText}>{strings.submit}</Text>
                </TouchableOpacity>
            </View>
            )})}
        </View>
    )
}
export default ConfirmOrder