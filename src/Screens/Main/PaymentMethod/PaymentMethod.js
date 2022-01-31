import React, {useState, useContext} from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './PaymentMethodStyle'
import theme from '../../../Core/theme'
const { strings, icons, colors, images } = theme;
import Header from '../../../Components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import Context from '../../../Core/Context';

const card=[
    {id:0, cardType:'Visa', name:'Valentino Morose', date:'04/24', cardNo:'1234 **** **** 5678', color:'#FFD6CD'},
    {id:1, cardType:'card', name:'Jake Weary', date:'10/26', cardNo:'3456 **** **** 1234', color:'#DADADA'}

]

const PaymentMethod = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const [isFavourite, setIsFavourite] = useState('Visa')

    const renderItem = ({item}) => {
        return(
         <View style={{...styles.cardContainer, backgroundColor:item.color}}>
            <View style={styles.cardView}>
                <View style={styles.carTypeContainer}>
                    {item.cardType == 'Visa'? <Image source={images.visaLogo}/>:<Image source={images.cardLogo}/>}
                </View>
                <TouchableOpacity style={{...styles.iconView,
                    backgroundColor:item.cardType == isFavourite ? themeColor.theme:colors.shippingAdressColor}} 
                    onPress={()=>{setIsFavourite(item.cardType)}}>
                    <Icon name='heart' size={10} color='white'/>
                </TouchableOpacity>
            </View>
            <View style={styles.cardNoView}>                
                <Text style={styles.cardNoText}>{item.cardNo}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.nameText}>{item.date}</Text>
            </View>
          </View>
        )
     }
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.paymentMethod} nav={nav} Screen='User'/>  
            <FlatList
                style={styles.Flatlist}
                data={card}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default PaymentMethod