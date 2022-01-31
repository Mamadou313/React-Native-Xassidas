import React, { useContext } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './OrderStyle'
import theme from '../../../Core/theme'
const { strings, images, colors, icons } = theme;
import Header from '../../../Components/Header';
import IconComponent from '../../../Components/Icon';
import Context from '../../../Core/Context';

const OrderDelivery = [
    {id:'09678', startDate:'25 December, 2021', endDate:'31 December, 2021', nameUser:'Samento', addressUser:'New York'},
]
const orderList = [
    { id:0, orderId:'09678', itemName: 'Irul Chair', itemPrice:'$102', book:1, Total:'102'},
    { id:1, orderId:'09678', itemName: 'Irul Chair', itemPrice:'$102', book:1, Total:'102'},
    { id:2, orderId:'09678', itemName: 'Irul Chai ', itemPrice:'$102', book:1, Total:'102'},
    { id:3, orderId:'09678', itemName: 'Irul Chai ', itemPrice:'$102', book:1, Total:'102'},
]
const orderTrack =[
    {id:0, startProgress:true, dispatch:true, ontheway:false, finishProgress:false}
]

const Order = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const renderItem = ({ item }) => (
        <View style={styles.itemContanier}>
            <View style={styles.itemView}>
                <Text style={styles.itemIdText}>{strings.orderid}{item.orderId}</Text>
                <View style={{...styles.deliverButton, backgroundColor:themeColor.theme}}>
                    <Text style={styles.deliverButtonText}>{strings.delivered}</Text>
                </View>
            </View>
            <View style={styles.ItemViewDown}>
                <View style={styles.itemImageView}>
                    <Image source={images.itemImage} style={styles.itemImage}/>
                </View>
                <View style={styles.itemDetailContainer}>
                    <View>
                        <Text style={styles.itemNameText}>{item.itemName}</Text>
                        <Text style={styles.itemPriceText}>Rs  {item.itemPrice}</Text>
                    </View>
                    <View>
                        <Text style={{...styles.itemText,textAlign:'right'}}> * {item.book}</Text>
                        <Text style={styles.itemPriceText}>Total: <Text style={{color:themeColor.theme}}>{item.Total}</Text></Text>
                    </View>
                </View>
            </View>
        </View>
    );
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
                <Header title={strings.myorder} nav={nav} Screen='User'/>
                {OrderDelivery.map((item, index)=>{
                return(
                    <View style={styles.orderContainer}>
                        <View style={styles.newView}>
                            <Text style={styles.orderIdText}>{strings.orderid}{item.id}</Text>
                        </View>
                            {orderTrack.map((item)=>{
                                return(
                                    <View style={[styles.trackView, styles.newView]}>
                                        <View style={{...styles.circle,backgroundColor:item.startProgress? themeColor.theme:colors.orderTrackColor}}></View>
                                        <View style={{...styles.line,backgroundColor:item.dispatch? themeColor.theme:colors.orderTrackColor}}></View>
                                        {item.dispatch ? 
                                            <View style={{...styles.selectCircle,backgroundColor:themeColor.theme}}>
                                                <IconComponent source={icons.orderdeliver} />
                                            </View> : 
                                            <View style={{...styles.circle,backgroundColor:colors.orderTrackColor}}>
                                        </View>}
                                        <View style={{...styles.line,backgroundColor:item.ontheway? themeColor.theme:colors.orderTrackColor}}></View>
                                        <View style={{...styles.circle,backgroundColor:item.ontheway? themeColor.theme:colors.orderTrackColor}}></View>
                                        <View style={{...styles.line,backgroundColor:item.finishProgress? themeColor.theme:colors.orderTrackColor}}></View>
                                        <View style={{...styles.circle,backgroundColor:item.finishProgress? themeColor.theme:colors.orderTrackColor}}></View>
                                    </View>
                                )})}
                        <View style={styles.trackContainer}>
                            <View style={styles.trackView}>
                                <View style={styles.dateView}>
                                    <Text style={styles.dateText}>{item.startDate}</Text>
                                </View>
                                <View style={styles.dateView}>
                                    <Text style={styles.dateText}>{item.endDate}</Text>
                                </View>
                            </View>
                            <View style={styles.trackView}>
                                <Text style={styles.userDataText}>{item.nameUser}</Text>
                                <Text style={styles.userDataText}>{item.addressUser}</Text>
                            </View>
                        </View>
                    </View>
                )})}    
                <View style={styles.Flatlist}>
                    <Text style={styles.trackingText}>{strings.tracking}</Text>
                    <FlatList
                        data={orderList}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
        </View>
    )
}
export default Order;