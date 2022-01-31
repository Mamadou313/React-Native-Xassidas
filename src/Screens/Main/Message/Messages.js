import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './MessagaesStyle'
import theme from '../../../Core/theme'
const { strings, colors, images } = theme;
import IconComponent from '../../../Components/Icon';
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';

const MessageData=[
    {id:0, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:true},
    {id:1, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:false},
    {id:2, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:true},
    {id:3, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:false},
    {id:4, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:false},
    {id:5, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:false},
    {id:6, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:true},
    {id:7, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:false},
    {id:8, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:false},
    {id:9, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:false},
    {id:10, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:false},
    {id:11, off:'50% off', title:'in Ultraboost All Terrain Ltd Shoes', date:'20 June, 2021', read:true},

]
const Messages = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const renderItem = ({item}) => {
        return(
            <View style={{...styles.listItemContainer, backgroundColor:item.read? 
            themeColor.theme === colors.orangetheme? 
            colors.orangeBackgroundColor : colors.blueBackgroundColor:'white'}}>
                <TouchableOpacity style={styles.listItemView} onPress={()=>nav.navigate('CustomerSupport')}>
                    <View style={styles.listView}>
                        <View style={styles.icon}>
                            <IconComponent source={images.companylogo} tintColor={'white'}/>
                        </View>
                        <View style={styles.textView}>
                            <Text style={{...styles.headingText, color:themeColor.theme === colors.orangetheme? themeColor.theme:'black'}}>{strings.customersupport}</Text>
                            <Text style={styles.titleText} numberOfLines={1}>{item.off} {item.title}</Text>
                        </View>
                        <View style={styles.dateView}>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                    </View>
                    
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Header title={strings.messages} nav={nav} Screen='User'/>
            <View style={styles.FlatList}>
                <FlatList
                    data={MessageData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}
export default Messages