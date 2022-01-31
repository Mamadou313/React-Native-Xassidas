import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './CouponStyle'
import theme from '../../../Core/theme'
const { strings, images } = theme;
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Context from '../../../Core/Context';

const Coupondetail = [
    { id:0, brand:'brand logo', expiryDate:'30 December, 2021', discount:'50 %', couponDetail: "Adida's gift value packed 50% OFF for every pack, Gift card cost 200 POINTS"},
]

const CouponDetail = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    return (
        <View style={styles.couponcontainer}>
            {Coupondetail.map((item)=>{
                return(
                    <View style={{...styles.couponview, backgroundColor:themeColor.theme}}>
                        <View style={styles.logoContainer}>
                            <Image source={images.companylogo}/>
                        </View>
                        <View style={styles.offContainer}>
                            <Text style={styles.offText}>{item.discount} {strings.off.toLocaleUpperCase()}</Text>
                        </View>
                        <View style={styles.expireContainer}>
                            <View style={styles.expireView}>
                                <Text style={styles.expireText}>{strings.expires}</Text>
                                <Text style={[styles.expireText,styles.bold]}>{item.expiryDate}</Text>
                            </View>
                            <View style={styles.redeemButton}>
                                <Text style={styles.expireText}>Reedem</Text>
                            </View>
                        </View>
                        <View style={styles.paragContainer}>
                            <Text style={[styles.expireText, styles.jutify]}>{strings.testText}</Text>
                        </View>
                        <View style={styles.lineBarContainer}>
                            <Text style={styles.lineBarText} numberOfLines={1}>|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</Text>
                        </View>
                        <TouchableOpacity style={styles.closeContainer} onPress={()=> nav.navigate('Coupon')}>
                            <Icon name='times' size={30} color='white' style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )
}
export default CouponDetail;