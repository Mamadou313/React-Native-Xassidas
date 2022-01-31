import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity,TouchableHighlight,  SafeAreaView, FlatList, TextInput, Platform, Keyboard } from 'react-native';
import styles from './CarStyle'
import theme from '../../../Core/theme'
const { strings, images, colors } = theme;
import Swipeable from 'react-native-swipeable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Header from '../../../Components/Header';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from '../../../Core/Context';

const empty = false
const CartList = [
    { id:0, itemName: 'Irul Chair', companyName:'by Seto', Price:'$102', number:1},
    { id:1, itemName: 'Irul Chair', companyName:'by Seto', Price:'$102', number:1},
    { id:2, itemName: 'Irul Chai ', companyName:'by Seto', Price:'$102', number:1},
    { id:3, itemName: 'Irul Chai ', companyName:'by Seto', Price:'$102', number:1},
]
const Cart = (props) => {
    const themeColor = useContext(Context)
    const nav= props.navigation
    const [displayTotal, setDisplayTotal] = useState('flex')
    const [modalView, setModalView] = useState('')
    const [isAlertModalVisible, setAlertModalVisible] = useState(false);
    const toggleModal = () => {
        setAlertModalVisible(!isAlertModalVisible);
    };
    async function getToken() {
        try {
            const token1 = await AsyncStorage.getItem('token')
            let token = JSON.parse(token1)
            if (token == "1") {
                nav.navigate('Delivery')
            }else{
                toggleModal()
            }
            return token
        }
        catch (error) {
            alert("Token Get Error", error)
        }
    }
    const rightButtons = [
        <TouchableHighlight style={{...styles.deleteContainer, backgroundColor:themeColor.theme}} 
        onPress={()=>{setModalView('del'),toggleModal()}}>
            <View style={styles.deleteView}> 
                <Image source={images.garbage} />
            </View>
        </TouchableHighlight>
    ];
    const CartCard = ({item}) => {
        const [number, setNumber] = useState(1)
        const increment = () =>{
            setNumber(number+1)
        }
        const decrement = () =>{
        setNumber(number-1)
        }
        return (
            <Swipeable rightButtons={rightButtons} rightButtonWidth={45} style={styles.swipeContainer}>
            <View style={styles.itemContanier}>
                
                <View style={styles.itemImageView}>
                    <Image source={images.itemImage} style={styles.itemImage}/>
                </View>
                <View style={styles.itemDetailContainer}>
                    <Text style={styles.itemNameText}>{item.itemName}</Text>
                    <Text style={styles.itemCompanyText}>{item.companyName}</Text>
                    <View style={styles.listContatiner}>
                        <Text style={{...styles.itemPriceText, color:themeColor.theme}}>{item.Price}</Text>
                        <View style={styles.selectItem}>
                            <TouchableOpacity onPress={()=>decrement(item.number)}>
                                <Text style={styles.operator}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.operatorText}>{number}</Text>
                            <TouchableOpacity onPress={()=>increment(item.number)}>
                                <Text style={styles.operator}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            </Swipeable>
        )
    }
    const renderItem = ({ item }) => (<CartCard item={item} />);
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.mycart} nav={nav} Screen='Home'/>
            {empty ? <View style={styles.cartContainer}>
                <View style={styles.emptyCartContainer}>
                    <Image source={themeColor.theme == colors.orangetheme? images.emptyCart:images.emptyCart2} />
                    <Text style={styles.emptycartText}>{strings.emptyCart}</Text>
                    <Text style={styles.emptycartDetailText}>{strings.emptyCartDetail}</Text>
                    <TouchableOpacity style={{...styles.buttonStart, backgroundColor:themeColor.theme}} onPress={() => nav.navigate('Home')}>
                        <Text style={styles.startShoppingText}>{strings.startshopping}</Text>
                    </TouchableOpacity>
                </View>
                </View> : <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView
                style={styles.container} 
                contentContainerStyle={{ flexGrow: 1 }}
                enableOnAndroid
                enableAutoAutomaticScroll={(Platform.OS === 'ios')}
                extraScrollHeight={270}
                scrollEnabled={false}
                keyboardShouldPersistTaps={"handled"}
                >
                    <View style={styles.Flatlist}>
                        <FlatList
                            data={CartList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.downContainer}>
                        <View style={styles.textFieldContainer}>
                            <TextInput placeholder='Promo Code' style={styles.codeInput} selectionColor='black'/>
                            <TouchableOpacity style={{...styles.buttonApply, backgroundColor:themeColor.theme}} onPress={Keyboard.dismiss}>
                                <Text style={styles.applyText}>{strings.apply}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.totalContainer}>
                            <View style={{...styles.totalView,display:displayTotal}}>
                                <Text style={styles.subtotalText}>{strings.subtotal}</Text>
                                <Text style={styles.subpriceText}>$1000.00</Text>
                            </View>
                            <View style={{...styles.totalView,display:displayTotal}}>
                                <Text style={styles.subtotalText}>{strings.shipping}</Text>
                                <Text style={styles.subpriceText}>$225.00</Text>
                            </View>
                            <View style={styles.totalView}>
                                <Text style={styles.totalText}>{strings.total}</Text>
                                <View style={styles.itemView}>
                                <Text style={{...styles.itemText, display:displayTotal}}>(4 {strings.item})</Text>
                                <Text style={styles.priceText}>$1225.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.proceedContainer}>
                            <TouchableOpacity style={{...styles.buttonProceed, backgroundColor:themeColor.theme}} onPress={()=> getToken()}>
                                <Text style={styles.proceedText}>{strings.proceedtocheckout}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                </SafeAreaView>
            }
            <Modal isVisible={isAlertModalVisible}>
                {modalView == 'del'?
                <View style={styles.modalWindow}>
                    <Image source={images.success} style={styles.successIcon} />
                    <Text style={styles.Text}>Removed from Cart</Text>
                    <TouchableOpacity style={{...styles.Button,backgroundColor:themeColor.theme}} onPress={()=>{toggleModal(),setModalView('')}}>
                        <Text style={styles.buttonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View> : <View style={styles.modalWindow}>
                    <Text style={styles.Title}>{strings.ops}</Text>
                    <Text style={styles.Text}>{strings.alertMessage}</Text>
                    <TouchableOpacity style={{...styles.Button, backgroundColor:themeColor.theme}} onPress={()=>{nav.navigate('SignIn'),toggleModal()}}>
                        <Text style={styles.buttonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View> }
            </Modal>
        </View>
    )
}
export default Cart;