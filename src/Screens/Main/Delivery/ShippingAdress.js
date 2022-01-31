import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './DilveryStyle'
import theme from '../../../Core/theme'
const { strings, icons, colors } = theme;
import Icon from 'react-native-vector-icons/FontAwesome';
import IconComponent from '../../../Components/Icon';
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';

const AdressList = [
    { id:0, userName: 'John Doe', Adress:'Long Street - 67-2 Essentially - Rando St. - 12 - Albany,New York ', Phone:'03648976543'},
    { id:1, userName: 'John Doe', Adress:'Long Street - 67-2 Essentially - Rando St. - 12 - Albany,New York ', Phone:'03648976543'},
]
const ShippingAdress = ({route, navigation}) => {
    const {addr} = route.params
    const nav= navigation
    const themeColor = useContext(Context)
    const [select, setSelect]= useState('')

    useEffect(()=>{
        if(addr == ''){
            setSelect(0)
        }else{
            setSelect(addr)
        }
    },[addr])
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.adressContanier} onPress={()=> nav.navigate('Delivery')}>
                <View style={styles.adressView}>
                    <View>
                        <Text style={styles.addressUserText}>{item.userName}</Text>
                        <Text style={styles.addressText}>{item.Adress}</Text>
                    </View>
                    <TouchableOpacity style={{...styles.iconView,
                        backgroundColor:select == item.id ? themeColor.theme:colors.shippingAdressColor}} 
                        onPress={()=>{setSelect(item.id)}}>
                        <Icon name='heart' size={10} color='white'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.adressView}>
                    <Text style={styles.addressUserText}>{item.Phone}</Text>
                    <View style={styles.iconSepView}>
                        <TouchableOpacity style={styles.iconSepButton}>
                            <IconComponent source={icons.update} tintColor={'black'} space={'3.5%'}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconComponent source={icons.garbage} tintColor={themeColor.theme}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.shippingadress} nav={nav} Screen='Delivery'/>
            <View style={styles.shippingFlatlist}>
                <FlatList
                    data={AdressList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.addButtonContainer}>
                <View style={{...styles.addButtonView, backgroundColor:themeColor.theme }}>
                    <Icon name='plus' size={18} color='white' onPress={()=> nav.navigate('DeliveryForm')}/>
                </View>
                <Text style={styles.addButtonText}>{strings.addnewadress}</Text>
            </View>
            </View>
            
        </View>
    )
}
export default ShippingAdress;