import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './OrderStyle'
import theme from '../../../Core/theme'
const { strings, images, icons, colors } = theme;
import IconComponent from '../../../Components/Icon';
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';

const order=[
    {id:0, orderId:'98765032', address:'15 RUE GENIN 93200 SAINT DENIS.', phone:'618-32-4450', paymentMethod:'Paiement à la Livraison', subTotal:'€120.00', shipping:'€12',}
]
const ItemList = [
    { id:1, itemName: 'Ikfini', itemPrice:'€12', book:1, Total:'12'},
    { id:2, itemName: 'Nourou Darayni', itemPrice:'€18', book:1, Total:'18'},
    { id:3, itemName: 'Taysiroul Hanssir ', itemPrice:'€8', book:1, Total:'8'},
    { id:4, itemName: 'Dialibatou Maraxibi ', itemPrice:'€12', book:1, Total:'12'},
]

const Delivery = (props) => {
    const themeColor = useContext(Context)
    const nav= props.navigation
    const renderItem = ({ item }) => {
        return (
            <View style={styles.placeItemContanier}>
                <View style={styles.placeItemImageView}>
                    <Image source={images.itemImage} style={styles.itemImage}/>
                </View>
                <View style={styles.placeItemDetailContainer}>
                    <View>
                        <Text style={styles.placeItemNameText}>{item.itemName}</Text>
                        <Text style={styles.placeItemPriceText}>Rs  {item.itemPrice}</Text>
                    </View>
                    <View>
                        <Text style={{...styles.placeItemText,textAlign:'right',color:themeColor.theme}}> * {item.book}</Text>
                        <Text style={styles.placeItemPriceText}>Total: {item.Total}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.orderDetail} nav={nav} Screen='Delivery'/>
            <Text style={styles.heading}>Delivery Information</Text>
            {order.map((item)=>{
                return(
                    <View style={styles.placeOrderContainer}>
                        <Text style={styles.placeTextHeading}>Order Id: 
                            <Text style={styles.placeText}> #{item.orderId}</Text>
                        </Text>
                        <Text style={styles.placeTextHeading}>Delivery Adress: 
                            <Text style={styles.placeText}> {item.address}</Text>
                        </Text>
                        <Text style={styles.placeTextHeading}>Phone No: 
                            <Text style={styles.placeText}> {item.phone}</Text>
                        </Text>
                        <Text style={styles.placeTextHeading}>Payment Method: 
                            <Text style={styles.placeText}> {item.paymentMethod}</Text>
                        </Text>
                    </View>
                )
            })}
            <Text style={styles.heading}>Ordered Items</Text>
            <View style={styles.placeOrderFlatlist}>
                <FlatList
                    data={ItemList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            {order.map((item)=>{ return(
                <View style={styles.totalContainer}>
                    <View style={styles.totalView}>
                        <Text style={styles.subtotalText}>{strings.subtotal}</Text>
                        <Text style={styles.subpriceText}>{item.subTotal}</Text>
                    </View>
                    <View style={styles.totalView}>
                        <Text style={styles.subtotalText}>{strings.shipping}</Text>
                        <Text style={styles.subpriceText}>{item.shipping}</Text>
                    </View>
                    <View style={styles.totalView}>
                        <Text style={styles.totalText}>{strings.total}</Text>
                        <View style={styles.placeitemView}>
                        <Text style={{...styles.itemText}}>(4 {strings.item})</Text>
                        <Text style={styles.priceText}>$1225.00</Text>
                        </View>
                    </View>
                </View>
            )})}
            <TouchableOpacity style={{...styles.confirmContainer,backgroundColor:themeColor.theme}} onPress={()=> nav.navigate('ConfirmOrder')}>
                <Text style={styles.confirmText}>{strings.confirmorder}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Delivery