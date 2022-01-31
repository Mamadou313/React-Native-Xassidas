import React, {useContext} from 'react';
import { StyleSheet,View,Text,Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import theme from '../Core/theme'
const { font, images } = theme;
import Text_Size_Type from './Font'
import Context from '../Core/Context';

const Header = ({title, nav}) => {
    const themeColor = useContext(Context)
    return (
        <View style={{...styles.Container, backgroundColor:themeColor.theme}}>
            {title === 'Home'?<View style={{marginHorizontal:Platform.OS === 'ios'?'4%':'4%'}}></View> :
            title === 'My Profile'?<View style={{marginHorizontal:Platform.OS === 'ios'?'3%':'4%'}}></View> :
            title === 'Edit Profile'?<View style={{marginHorizontal:Platform.OS === 'ios'?'3%':'4%'}}></View> :
            <TouchableOpacity onPress={() => nav.goBack()}>
                <Image source={images.backIcon} style={styles.icon}/>
            </TouchableOpacity>
            }
            { title === 'Shipping Address'?
                <Text style={{...styles.titleText, marginLeft:'27%' }}>
                    {title}
                </Text>    
                :title === 'Payment Method'?
                <Text style={{...styles.titleText, marginLeft:'27%' }}>
                    {title}
                </Text>    
                :title === 'Write a Review'?
                <Text style={{...styles.titleText, marginLeft:'30%' }}>
                    {title}
                </Text>    
                :
                <Text style={{...styles.titleText, marginLeft:Platform.OS === 'ios'? '35%%':'32%' }}>
                    {title}
                </Text>
            }
                    
        </View>
    );
}
const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'4%',
        marginBottmaom:'2%',
        paddingTop:Platform.OS === 'ios' ? '12%': '4%',
        paddingBottom:Platform.OS === 'ios' ? '5%': '4%',
    },
    titleText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_6,
        color:'white',
    },
    icon:{
        tintColor:'white',
    },
});
export default Header;
