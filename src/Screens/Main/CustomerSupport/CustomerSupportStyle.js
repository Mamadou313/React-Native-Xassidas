import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../Core/theme'
const { colors, font} = theme;
import Text_Size_Type from '../../../Components/Font'
import { moderateScale } from 'react-native-size-matters'

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    flatList:{
        marginBottom:Platform.OS === 'ios'? '46%' : '26%',
    },
    messages:{
        flexDirection:'row',
        marginVertical:moderateScale(7,2)
    },
    mine:{
        marginLeft:'5%',
    },
    not_mine:{
        alignSelf:'flex-end',
        marginRight:'5%',
    },
    cloud:{
        maxWidth:moderateScale(250,2),
        paddingHorizontal:moderateScale(10,2),
        paddingTop:moderateScale(5,2),
        paddingBottom:moderateScale(7,2),
        borderRadius:Dimensions.get('window').width*0.02
    },
    messageText:{
        paddingTop:'1%',
        fontSize:Text_Size_Type.Text_Type_5,
        fontFamily:font.regular,
        lineHeight:30,
    },
    time:{
        textAlign:'center',
        fontSize:Text_Size_Type.Text_Type_3,
        fontFamily:font.regular,
        marginVertical:'2%',
    },
    messageInputView:{
        paddingVertical:Platform.OS === 'ios' ?'3%':0,
        paddingHorizontal:'4%',
        width:Dimensions.get('window').width,
        backgroundColor:'#ffffff',
        position:'absolute',
        bottom:Platform.OS === 'ios'? Dimensions.get('window').width*0.06 : 0,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center'
    },
    textInput:{
        width:Dimensions.get('window').width*0.8,
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_5,
    },
    circle:{
        alignItems:'center',
        paddingHorizontal:'2%',
        paddingVertical:Platform.OS === 'ios' ? '1%':'1.5%',
        borderRadius:Dimensions.get('window').width*0.5,
    },
})
export default styles
