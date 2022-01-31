import React, {useContext, useState} from 'react';
import { View, FlatList,Image,Text, Dimensions, TouchableOpacity,TextInput, Keyboard } from 'react-native';
import styles from './CustomerSupportStyle'
import theme from '../../../Core/theme'
const { strings, icons, colors } = theme;
import Header from '../../../Components/Header';
import IconComponent from '../../../Components/Icon';
import Context from '../../../Core/Context';

const data=[
    {id:0, message:'Lorem ipsum dolor sit', date:'3- January,2022', time:'02:23', recieve:true},
    {id:1, message:'Lorem ipsum', date:'3- January,2022', time:'02:25', recieve:false},
    {id:2, message:'Lorem ipsum dolor sit', date:'3- January,2022', time:'03:23', recieve:false},
    {id:3, message:'Lorem ipsum dolor', date:'3- January,2022', time:'03:25', recieve:true},
    {id:4, message:'Lorem ipsum dolor sit', date:'3- January,2022', time:'02:23', recieve:true},
    // {id:5, message:'Lorem ipsum', date:'3- January,2022', time:'02:25', recieve:false},
    // {id:6, message:'Lorem ipsum dolor sit', date:'3- January,2022', time:'03:23', recieve:false},
    // {id:7, message:'Lorem ipsum dolor', date:'3- January,2022', time:'03:25', recieve:true},
    // {id:8, message:'Lorem ipsum dolor sit', date:'3- January,2022', time:'02:23', recieve:true},
    // {id:9, message:'Lorem ipsum', date:'3- January,2022', time:'02:25', recieve:false},
    // {id:10, message:'Lorem ipsum dolor sit', date:'3- January,2022', time:'03:23', recieve:false},
    // {id:11, message:'Lorem ipsum dolor', date:'3- January,2022', time:'03:25', recieve:true},
]

const CustomerSupport = (props) => {
    const nav= props.navigation
    const [messageText, setMessageText] = useState('')
    const themeColor = useContext(Context)
    const MessageBubble = (props) =>{
        return(
        <View>
            <Text style={styles.time}>{props.time}</Text>
            <View style={[styles.messages, 
                props.mine ? styles.mine:styles.not_mine]}>
                    <View style={[styles.cloud,{
                        backgroundColor: themeColor.theme == colors.orangetheme ? 
                        props.mine ? colors.orangeBackgroundColor:themeColor.theme :
                        props.mine ? 'white':themeColor.theme
                        }]}>
                        {props.image ? <Image source={props.image} 
                        style={{alignSelf:props.mine? 'flex-start':'flex-end',
                        borderRadius:Dimensions.get('window').width*0.02}}/>
                        : null
                        }
                        {props.text ? <Text style={[styles.messageText,
                        {color:props.mine?'black':'white'}]}>{props.text}</Text>
                        :null}
                    </View>
            </View>
        </View>
    )}
    const renderItem = ({item}) => {
        return(
            <View>
                {item.recieve? <MessageBubble mine text={item.message} time={item.time}/>
                :<MessageBubble text={item.message} time={item.time} />
                }
            </View>
        )
    }
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.customersupport} nav={nav} Screen='User'/>
            <View style={styles.flatList}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={{...styles.messageInputView, 
                backgroundColor:themeColor.theme === colors.orangetheme? '#D3CDCD':'white'}}>
                <TextInput multiline={true} value={messageText} onChangeText={text=> setMessageText(text)}
                placeholder='Type Your Message here...' 
                selectionColor='black'
                style={{...styles.textInput, color:'black'}}/>
                <TouchableOpacity style={{...styles.circle, backgroundColor:themeColor.theme}}
                    onPress={()=>{Keyboard.dismiss(),setMessageText('')}}>
                    <IconComponent source={icons.send} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default CustomerSupport