import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import styles from './FavouriteStyle'
import theme from '../../../Core/theme'
const { strings, images, icons, colors } = theme;
import IconComponent from '../../../Components/Icon';
import Header from '../../../Components/Header';
import Modal from "react-native-modal";
import Context from '../../../Core/Context';
import Swipeable from 'react-native-swipeable';

const ItemList = [
    { id:1, itemName: 'Irul Chair', companyName:'by Seto', Price:'$102', number:2, outOfStock:false},
    { id:2, itemName: 'Irul', companyName:'by Seto', Price:'$102', number:2, outOfStock:false},
    { id:3, itemName: 'Chai ', companyName:'by Seto', Price:'$102', number:2, outOfStock:false},
    { id:4, itemName: 'Irul Chai ', companyName:'by Seto', Price:'$102', number:2, outOfStock:true},
    // { id:5, itemName: 'Irul Chair', companyName:'by Seto', Price:'$102', number:2, flag:true},
    // { id:6, itemName: 'Irul Chair', companyName:'by Seto', Price:'$102', number:2, flag:true},
    // { id:7, itemName: 'Irul Chai ', companyName:'by Seto', Price:'$102', number:2, flag:true},
    // { id:8, itemName: 'Irul Chai ', companyName:'by Seto', Price:'$102', number:2, flag:true},

]
const WhishList = [
    { id:1, itemName: 'Irul Chair', companyName:'by Seto', Price:'$102', number:2},
    { id:2, itemName: 'Irul Chair', companyName:'by Seto', Price:'$102', number:2},
    { id:3, itemName: 'Irul Chai ', companyName:'by Seto', Price:'$102', number:2},
    { id:4, itemName: 'Irul Chai ', companyName:'by Seto', Price:'$102', number:2},
    
]
const Favourite = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const [productName, setProductName] = useState('')
    const [modalView, setModalView] = useState('')
    const [isAlertModalVisible, setAlertModalVisible] = useState(false);
    const toggleModal = () => {
        setAlertModalVisible(!isAlertModalVisible);
    };
    const rightButtons = [
        <TouchableHighlight style={{...styles.deleteContainer, backgroundColor:themeColor.theme}} 
        onPress={()=>{setModalView('del'),toggleModal()}}>
            <View style={styles.deleteView}> 
                <Image source={images.garbage} />
            </View>
        </TouchableHighlight>
    ];
    const FavouriteCard = ({item}) => {
        const {outOfStock} = item;
        return (
            <Swipeable rightButtons={rightButtons} rightButtonWidth={45} style={styles.swipeContainer}>
            <View style={{...styles.itemContanier}}>
            <View style={styles.itemImageView}>
                <Image source={images.itemImage} style={styles.itemImage}/>
            </View>
            <View style={styles.itemDetailContainer}>
                <View style={styles.headerView}>
                    <View>
                    <Text style={styles.itemNameText}>{item.itemName}</Text>
                    <Text style={styles.itemCompanyText}>{item.companyName}</Text>
                    </View>
                </View>
                <View style={styles.buyContatiner}>
                    <Text style={{...styles.itemPriceText,color:themeColor.theme}}>{item.Price}</Text>
                    <View style={styles.buyView}>
                        <TouchableOpacity style={{...styles.buyButton,backgroundColor:themeColor.theme}} onPress={()=> nav.navigate('Cart')}>
                            <Text style={styles.buyText}>{strings.buybutton}</Text>
                            {/* <IconComponent source={icons.bag}/> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.buyButton, backgroundColor:themeColor.theme}} onPress={()=>{setProductName(item.itemName),toggleModal()}}>
                            <Text style={styles.buyText}>{strings.cart}</Text>
                            {/* <IconComponent source={icons.cart} /> */}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>     
            {outOfStock && (
                <Image style={styles.OFSimage} source={images.graylayer}/>
            )}
            {outOfStock && 
                <Text style={styles.OFSText}>{strings.outofstock}</Text>
            }
        </View>
            </Swipeable>
        )
    }
    const renderItem = ({ item }) =>(<FavouriteCard item={item}/> );
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.whishlist} nav={nav} Screen='Home'/>
            <View style={styles.Flatlist}>
                <FlatList
                    data={ItemList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <Modal isVisible={isAlertModalVisible}>
                {modalView == 'del'?
                <View style={styles.modalWindow}>
                    <Image source={images.success} style={styles.successIcon} />
                    <Text style={styles.Text}>Item has Deleted from your Whishlist</Text>
                    <TouchableOpacity style={{...styles.Button,backgroundColor:themeColor.theme}} onPress={()=> toggleModal()}>
                        <Text style={styles.buttonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View> :<View style={styles.modalWindow}>
                    <Image source={images.success} style={styles.successIcon} />
                    <Text style={styles.Text}>{productName} {strings.addtocart}</Text>
                    <TouchableOpacity style={{...styles.Button,backgroundColor:themeColor.theme}} onPress={()=> toggleModal()}>
                        <Text style={styles.buttonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View> }
            </Modal>
        </View>
    )
}
export default Favourite