import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList,ScrollView } from 'react-native';
import styles from './DilveryStyle'
import theme from '../../../Core/theme'
const { strings, images, icons, colors } = theme;
import IconComponent from '../../../Components/Icon';
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';

const ItemList = [
    { id:1, itemName: 'Irul Chair', itemPrice:'$102', book:1, Total:'102'},
    { id:2, itemName: 'Irul Chair', itemPrice:'$102', book:1, Total:'102'},
    { id:3, itemName: 'Irul Chai ', itemPrice:'$102', book:1, Total:'102'},
    { id:4, itemName: 'Irul Chai ', itemPrice:'$102', book:1, Total:'102'},
]
const SelectionField = ({name, color, backgroundColor}) => {
    return(
        <View style={{...styles.selectionBox, backgroundColor:backgroundColor}}>
            <Text style={{...styles.selectionText, color:color}}>{name}</Text>
            <View style={{...styles.circle, borderColor:color}}></View>
        </View>
    )
}

const Delivery = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const [paymentMethod, setPaymentMethod] = useState('COD')
    const DeliveryCard = ({item}) => {
        return (
            <View style={styles.itemContanier}>
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
        )
    }
    const renderItem = ({ item }) => (<DeliveryCard item={item} />);
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.placeorder} nav={nav} Screen='Cart'/>
            <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
                <View style={styles.adressContainer}>   
                    <View style={styles.addressView}>
                        <View style={styles.address}>
                            <Text style={styles.addressTitle}>{strings.street}:</Text>
                            <Text style={styles.adrdressText}>32512 pearl street</Text>
                        </View>
                        <View style={styles.address}>
                            <Text style={styles.addressTitle}>{strings.city}:</Text>
                            <Text style={styles.adrdressText}>Lorem Ipsum</Text>
                        </View>
                        <View style={styles.address}>
                            <Text style={styles.addressTitle}>{strings.state}:</Text>
                            <Text style={styles.adrdressText}>California</Text>
                        </View>
                        <View style={styles.address}>
                            <Text style={styles.addressTitle}>{strings.formPhone}:</Text>
                            <Text style={styles.adrdressText}>969-62-5512</Text>
                        </View>
                        <View style={styles.address}>
                            <Text style={styles.addressTitle}>{strings.zipcode}:</Text>
                            <Text style={styles.adrdressText}>6400</Text>
                        </View>
                        <View style={styles.address}>
                            <Text style={styles.addressTitle}>{strings.countrycallingcode}:</Text>
                            <Text style={styles.adrdressText}>+1</Text>
                        </View>
                        <View style={styles.address}>
                            <Text style={styles.addressTitle}>{strings.country}:</Text>
                            <Text style={styles.adrdressText}>United State</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.editView} onPress={() => nav.navigate('ShippingAddress', {addr :0})}>
                        <IconComponent source={icons.edit} tintColor={themeColor.theme}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.paymentContainter}>
                    <Text style={styles.paymentText}>{strings.paymentMethod}</Text>
                    <TouchableOpacity onPress={()=>setPaymentMethod('COD')}>
                    <SelectionField name={strings.cashondelivery} color={paymentMethod === 'COD'? 'white':'lightgray'} backgroundColor={paymentMethod === 'COD'? themeColor.theme:'white'}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setPaymentMethod('CC')}>
                    <SelectionField name={strings.creditcard} color={paymentMethod === 'CC'? 'white':'lightgray'} backgroundColor={paymentMethod === 'CC'? themeColor.theme:'white'}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setPaymentMethod('Wal')}>
                    <SelectionField name={strings.wallets} color={paymentMethod === 'Wal'? 'white':'lightgray'} backgroundColor={paymentMethod === 'Wal'? themeColor.theme:'white'}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setPaymentMethod('NB')}>
                    <SelectionField name={strings.netbanking} color={paymentMethod === 'NB'? 'white':'lightgray'} backgroundColor={paymentMethod === 'NB'? themeColor.theme:'white'}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.orderContainter}>
                    <Text style={styles.paymentText}>{strings.Orderdetails}</Text>
                    <View style={styles.Flatlist}>
                        <FlatList
                            data={ItemList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity style={{...styles.buttonPlaceOrder,backgroundColor:themeColor.theme}} onPress={()=> props.navigation.navigate('PlaceOrder')}>
                <Text style={styles.placeOrderText}>{strings.placeorder}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Delivery