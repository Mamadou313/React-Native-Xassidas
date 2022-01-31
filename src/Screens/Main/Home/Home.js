import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './HomeStyle'
import SearchBar from '../../../Components/SearchBar';
import theme from '../../../Core/theme'
const { strings, images, icons, colors } = theme;
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../../Components/Header';
import Modal from "react-native-modal";
import IconComponent from '../../../Components/Icon';
import Context from '../../../Core/Context';

const MenuList = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Health & Beauty' },
    { id: 2, name: 'Home & LifeStyle' },
    { id: 3, name: 'Women ' },
]
let ItemList = [
    { id: 0, itemName: 'Irul Chair', companyName: 'Seto', detail: 'Ergonomical for humans body curve', Price: '$102.00', rating: 3.5 },
    { id: 1, itemName: 'Irul', companyName: 'Seto', detail: 'Ergonomical for humans body curve', Price: '$102.00', rating: 4.0 },
    { id: 2, itemName: 'Chair', companyName: 'Seto', detail: 'Ergonomical for humans body curve', Price: '$102.00', rating: 5.0 },
    { id: 3, itemName: 'Home ', companyName: 'Seto', detail: 'Ergonomical for humans body curve', Price: '$102.00', rating: 5.0 },
    { id: 4, itemName: 'Women ', companyName: 'Seto', detail: 'Ergonomical for humans body curve', Price: '$102.00', rating: 5.0 },
]
const Home = (props) => {
    const nav = props.navigation
    const themeColor = useContext(Context)
    const [active, setActive] = useState('All')

    const [isAlertModalVisible, setAlertModalVisible] = useState(false);
    const [itemName, setItemName] = useState('')
    const toggleModal = () => {
        setAlertModalVisible(!isAlertModalVisible);
    };
    const MenuItem = ({ item }) => (
        <TouchableOpacity
            style={{ ...styles.menuButton, backgroundColor: active === item.name ? themeColor.theme : 'white' }}
            onPress={() => { setActive(item.name) }}>
            <Text style={{ ...styles.menuText, color: active === item.name ? 'white' : '#707070' }}> {item.name} </Text>
        </TouchableOpacity>
    );
    const HomeCard = ({item}) => {
        const [isFavourite, setIsFavourite] = useState(false)
        return (
            <TouchableOpacity style={styles.itemContanier} 
                onPress={() => nav.navigate('SingleItem', { product: item })}>
                <View style={styles.itemImageView}>
                    <Image source={images.itemImage} style={styles.itemImage} />
                    <TouchableOpacity style={styles.heartView} onPress={() => { setIsFavourite(!isFavourite)}}>
                        <Icon name="heart" size={10} color={isFavourite ? 'red' : 'gray'} style={styles.iconHeart} />
                    </TouchableOpacity>
                </View>
                <View style={styles.itemDetailContainer}>
                    <Text style={{...styles.itemNameText,color:themeColor.theme}}>{item.itemName}</Text>
                    <Text style={styles.itemCompanyText}>by {item.companyName}</Text>
                    <Text style={styles.itemDetailText} numberOfLines={1}>{item.detail}</Text>
                    <View style={styles.buyContatiner}>
                        <Text style={{...styles.itemPriceText,color:themeColor.theme}}>{item.Price}</Text>
                        <View style={styles.buyView}>
                            <TouchableOpacity style={{...styles.buyButton,backgroundColor:themeColor.theme, marginRight:'3%'}} onPress={() => {setItemName(item.itemName),toggleModal()}}>
                                <IconComponent source={icons.cart} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{...styles.buyButton,backgroundColor:themeColor.theme}} onPress={() => nav.navigate('Cart')}>
                                <IconComponent source={icons.bag} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const renderItem = ({ item }) =>( <HomeCard item={item} /> );
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title='Home' nav={nav} Screen='SignIn' />
            <View style={styles.SearchContainer}>
                <View style={styles.searchb}><SearchBar /></View>
                <View style={styles.filterContainer}>
                    <TouchableOpacity onPress={() =>{ nav.navigate('Filter')}}>
                        <Image source={icons.filter} style={{...styles.filterIcon, tintColor:themeColor.theme}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.horizontalFlatList}>
                <FlatList
                    horizontal
                    data={MenuList}
                    renderItem={MenuItem}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.Flatlist}>
                <FlatList
                    data={ItemList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <Modal isVisible={isAlertModalVisible}>
                <View style={styles.modalWindow}>
                    <Image source={images.success} style={styles.successIcon} />
                    <Text style={styles.Text}>{itemName} {strings.addtocart}</Text>
                    <TouchableOpacity style={{...styles.Button, backgroundColor:themeColor.theme}} onPress={()=> {toggleModal(''),setItemName('')}}>
                        <Text style={styles.buttonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
export default Home