import React, { useContext} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './NotificationStyle'
import theme from '../../../Core/theme'
const { strings, images, icons, colors } = theme;
import IconComponent from '../../../Components/Icon';
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';

const NotificationData=[
    {id:0, title:'Your favorite wishlist item is running out of stock', detail:'Mini Invisible Ultra Bluetooth Mini Bluetooth Wireless Stereo Headset/Earphone/Handsfree/Headphone With Mic@1X.png'},
    {id:1, title:'Your favorite wishlist item is running out of stock', detail:'Mini Invisible Ultra Bluetooth Mini Bluetooth Wireless Stereo Headset/Earphone/Handsfree/Headphone With Mic@1X.png'},
    {id:2, title:'Your favorite wishlist item is running out of stock', detail:'Mini Invisible Ultra Bluetooth Mini Bluetooth Wireless Stereo Headset/Earphone/Handsfree/Headphone With Mic@1X.png'},
    {id:3, title:'Your favorite wishlist item is running out of stock', detail:'Mini Invisible Ultra Bluetooth Mini Bluetooth Wireless Stereo Headset/Earphone/Handsfree/Headphone With Mic@1X.png'},
    {id:4, title:'Your favorite wishlist item is running out of stock', detail:'Mini Invisible Ultra Bluetooth Mini Bluetooth Wireless Stereo Headset/Earphone/Handsfree/Headphone With Mic@1X.png'},
    {id:5, title:'Your favorite wishlist item is running out of stock', detail:'Mini Invisible Ultra Bluetooth Mini Bluetooth Wireless Stereo Headset/Earphone/Handsfree/Headphone With Mic@1X.png'},
]

const Notification = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const renderItem = ({item}) => {
        return(
            <View style={styles.listItemContainer}>
                <View style={styles.listItemView}>
                    <View style={{...styles.icon, backgroundColor:themeColor.theme}}>
                        <IconComponent source={icons.notification}/>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.Text}>{item.title}</Text>
                    </View>
                 </View>
                 <View style={{...styles.productView,backgroundColor:themeColor.theme == colors.orangetheme? colors.orangeBackgroundColor:colors.blueBackgroundColor}}>
                     <Image source={images.companylogo} style={styles.image}/>
                     <Text style={styles.productText}>{item.detail}</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>           
            <Header title={strings.Notification} nav={nav} Screen='Home'/>
            <View style={styles.FlatList}>
                <FlatList
                    data={NotificationData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
export default Notification