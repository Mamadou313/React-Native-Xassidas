import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../Core/theme'
const { colors, font} = theme;
import Text_Size_Type from '../../../Components/Font'

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'5%',
        marginTop:Platform.OS === 'ios' ? '13%': '4%',
    },
    heartView:{
        backgroundColor:'white',
        width:Dimensions.get('window').width*0.067,
        height:Platform.OS === 'ios'? Dimensions.get('window').height*0.03 : Dimensions.get('window').height*0.035,
        borderRadius:Dimensions.get('window').width*0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    carouselContainer:{
        flex:7,
    },
    sliderImage:{
        alignSelf:'center',
    },
    themeColor:{
        color:colors.themeColor
    },
    itemDetailContainer:{
        flex:6,
        borderTopRightRadius:Dimensions.get('window').width*0.1,
        borderTopLeftRadius:Dimensions.get('window').width*0.1,
        backgroundColor:'white',
        paddingHorizontal:'5%',
        paddingVertical:Platform.OS === 'ios'?'10%':'5%'
    },
    nameContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginVertical:'7%'
    },
    itemNameText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_7,
        color:'black',
    },
    itemCNameText:{
        fontFamily:font.bold,
        marginTop:'3%',
        fontSize:Text_Size_Type.Text_Type_4,
    },
    rating:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    rateNumber:{},
    itemDetail:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_5,
        textAlign:'justify',
        marginVertical:Platform.OS === 'ios'? '3%': 0,
    },
    imageContainer:{
        marginVertical:'5%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    imageView:{
        backgroundColor:'rgba(245, 245, 245, 1)',
        borderRadius:Dimensions.get('window').width*0.02,
        paddingVertical:'4%',
        paddingHorizontal:'2.5%'
    },
    selectionImage:{
        height:Dimensions.get('window').height*0.04,
        width:Dimensions.get('window').width*0.14
    },
    colorSelectionContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginVertical:Platform.OS === 'ios'? '5%': 0,
    },
    selectionColor:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center'
    },
    colorText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_5,
        marginRight:'5%',
        color:'black'
    },
    colorBox:{
        height:Platform.OS === 'ios' ? Dimensions.get('window').height*0.03 : Dimensions.get('window').height*0.035,
        width:Dimensions.get('window').width*0.065,
        borderRadius:Dimensions.get('window').width*0.04,
        marginHorizontal:'1%',
    },
    selectItem:{
        backgroundColor:'rgba(245, 245, 245, 1)',
        paddingHorizontal:'4%',
        flexDirection:'row',
        borderRadius:Dimensions.get('window').width*0.04,
        alignItems:'center'
    },
    operator:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_6,
        fontWeight:'bold',
    },
    operatorText:{
        fontSize:Text_Size_Type.Text_Type_5,
        paddingHorizontal:'4%',
    },
    priceContainer:{
        flex:1,
        backgroundColor:'white',
        marginTop:'0.5%',
        paddingBottom:Platform.OS === 'ios'? '3%': 0,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'5%',
        alignItems:'center'
    },
    priceText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_7,
        color:'black'
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'flex-end',
        flexWrap:'wrap'
    },
    button:{
        marginLeft:'3%',
        paddingHorizontal:'5%',
        paddingVertical:'3%',
        borderRadius:Dimensions.get('window').width*0.04
    },
    buttonText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_3,
        color:'white',
    },

     //Modal Style
     modalWindow:{
        backgroundColor:'white',
        borderRadius:Dimensions.get('window').width*0.08,
        padding:'5%',
        marginHorizontal:'5%',
    },
    Text:{
        fontFamily:font.regular,
        textAlign:'center',
        fontSize:Text_Size_Type.Text_Type_5,
        marginVertical:'3%'
    },
    Button:{
        marginTop:'5%',
        padding:'5%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Dimensions.get('window').width*0.5,
    },
    buttonText:{ 
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_5,
        color:'white',
    },
    successIcon:{
        alignSelf:'center'
    },
})
export default styles