import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './CouponStyle'
import theme from '../../../Core/theme'
const { strings, images, colors } = theme;
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';

const CouponsList = [
    { id:0, expiryDate:'30 December, 2021', color:'#703F87', couponDetail: "Adida's gift value packed 50% OFF for every pack, Gift card cost 200 POINTS"},
    { id:1, expiryDate:'30 December, 2021', color:'#517D90', couponDetail: "Mcdonald's gift value packed 50% OFF for every pack, Gift card cost 200 POINTS"},
    { id:2, expiryDate:'30 December, 2021', color:'#FF913D', couponDetail: "KFC gift value packed 50% OFF for every pack, Gift card cost 200 POINTS"},
    { id:3, expiryDate:'30 December, 2021', color:'#009DFF', couponDetail: "Warner Bro's gift value packed 50% OFF for every pack, Gift card cost 200 POINTS"},

]

const Coupon = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const renderItem = ({ item }) => (
        <View style={styles.itemContanier}>
            <View style={{...styles.discountView,backgroundColor:item.color}}>
                <View style={styles.circle}></View>
                <Text style={styles.discountText}>{strings.discount.toLocaleUpperCase()}</Text>
            </View>
            <View style={styles.DetailView}>
                <View style={styles.imageContainer}>
                    <Image source={images.coupon} style={styles.couponsImage}/>
                    <Text style={styles.couponText} numberOfLines={3}>{item.couponDetail}</Text>
                </View>
                <View style={styles.expiryView}>
                    <View style={styles.expiry}>
                        <Text style={styles.couponExpiryText}>Expires</Text>
                        <Text style={styles.couponExpiryDate}>{item.expiryDate}</Text>
                    </View>
                    <TouchableOpacity style={{...styles.redeemButton,backgroundColor:themeColor.theme}} onPress={() => props.navigation.navigate('CouponDetail')}>
                        <Text style={styles.redeemButtonText}>{strings.redeem}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.coupons} nav={nav} Screen='User'/>
            <View style={styles.Flatlist}>
                <FlatList
                    data={CouponsList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
export default Coupon;