import React, {useState, useContext} from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './SettingStyle'
import theme from '../../../Core/theme'
const { strings, colors } = theme;
import { Switch } from 'react-native-paper';
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const settingData=[
    {id:0, title:'Enable All', paragraph:'Tap to receive all Notifications', enable:true},
    {id:1, title:'Social Notifications', paragraph:'Get notified when someone follows your profile, or when you get likes & comments', enable:true},
    {id:2, title:'Promos and Offers', paragraph:'Receive coupons, promotions and offers', enable:false},
    {id:3, title:'Orders and Purchases', paragraph:'Receive Updates related to order status, Membership & more', enable:true},
]

const Setting = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)

    const SettingCard = ({item}) => {
        const [isSwitchOn, setIsSwitchOn] = useState(item.enable);
        const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
        return(
            <View style={styles.listView}>
                <View style={styles.listItemView}>
                <View>
                    <Text style={styles.settingHeadingText}>{item.title}</Text>
                    <Text style={styles.settingParagText}>{item.paragraph}</Text>
                </View>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={themeColor.theme}/>
                 </View>
                <View style={styles.line}></View>
            </View>
        )
    }
    const ThemeSet = async (payload) => {  
        const color = JSON.stringify(payload)
        try{  
            await AsyncStorage.setItem('theme',color)
            getTheme()
        }  
        catch(error){  
            console.log("Token Set Error",error)  
        }  
    } 
    const getTheme = async () => {
        try {
            const color1 = await AsyncStorage.getItem('theme')
            let color = JSON.parse(color1)
            themeColor.setTheme(color)
            return color
        }
        catch (error) {
            console.log("Theme Get Error", error)
        }
    }
    const renderItem = ({item}) => {return( <SettingCard item={item} />)}
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.setting} nav={nav} Screen='User'/>
            <View style={styles.themeContainer}>
                <TouchableOpacity style={{...styles.themeButton, 
                    backgroundColor:colors.orangetheme}}
                    onPress={()=> ThemeSet(colors.orangetheme)}>
                        <Text style={styles.themeSelectionText}>{strings.themeselection}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.themeButton, 
                    backgroundColor:colors.bluetheme}}
                    onPress={()=> ThemeSet(colors.bluetheme)}>
                        <Text style={styles.themeSelectionText}>{strings.themeselection}</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                style={styles.flatlist}
                data={settingData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default Setting