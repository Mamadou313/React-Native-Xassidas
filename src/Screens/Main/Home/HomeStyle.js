import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../Core/theme'
const { colors, font} = theme;
import Text_Size_Type from '../../../Components/Font'

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    SearchContainer:{
        marginHorizontal:'5%',
        flexDirection:'row',
        marginTop:'3%'
    },
    searchb:{
        flex:5,
        marginRight:'2%'
    },
    filterContainer:{
        flex:1,
        backgroundColor:'white',
        borderRadius:Dimensions.get('window').width*0.015,
        elevation:3,
    },
    filterIcon:{
        alignSelf:'center',
        marginVertical:'20%'
    },
    horizontalFlatList:{
        marginHorizontal:'1%',
        marginVertical:'5%',
    },
    menuButton:{
        borderRadius:Dimensions.get('window').width*0.05,
        marginHorizontal:5,
        paddingHorizontal:9,
        paddingVertical:7,
    },
    menuText:{
        fontSize:Text_Size_Type.Text_Type_6,
        fontFamily:font.regular,
    },
    Flatlist:{
        marginHorizontal:'5%',
        marginBottom:Platform.OS === 'ios'? '56%' :'46%'
    },
    linespace:{
        marginVertical:'3%'
    },
    itemContanier:{
        marginVertical:'2%',
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderRadius:Dimensions.get('window').width*0.02
    },
    itemImageView:{
        backgroundColor:'rgba(245, 245, 245, 1)',
        marginVertical:'2%',
        paddingVertical:Platform.OS === 'ios'? '2.5%':'2.5%',
        paddingHorizontal:'7%',
        borderRadius:Dimensions.get('window').width*0.015,
    },
    itemImage:{
        width:Dimensions.get('window').width*0.23,
        height:Platform.OS === 'ios'?Dimensions.get('window').height*0.12: Dimensions.get('window').height*0.14,
    },
    heartView:{
        backgroundColor:'white',
        width:Platform.OS === 'ios'? Dimensions.get('window').width*0.043 : Dimensions.get('window').width*0.049,
        height:Platform.OS === 'ios'? Dimensions.get('window').height*0.02 :Dimensions.get('window').height*0.027,
        borderRadius:Dimensions.get('window').width*0.5,
        position:'absolute',
        top:'4%',
        right:'4%',
        justifyContent:'center',
        alignSelf:'center'
    },
    iconHeart:{
        alignSelf:'center',
    },
    itemDetailContainer:{
        justifyContent:'center',
    },
    itemNameText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_6,
    },
    itemCompanyText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_4
    },
    itemDetailText:{
        fontFamily:font.regular,
        marginVertical:'5%',
        fontSize:Text_Size_Type.Text_Type_4,
        width:Dimensions.get('window').width*0.5
    },
    buyContatiner:{
        marginVertical:'4%',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
    },
    itemPriceText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_6,
    },
    buyView:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    buyButton:{
        // marginLeft:'2%',
        padding:'4%'
    },
    buyText:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_4,
        color:'white',
        paddingHorizontal:'3%',
        paddingVertical:'2%'
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
        fontSize:Text_Size_Type.Text_Type_6,
        color:'white',
    },
    successIcon:{
        alignSelf:'center'
    },
})
export default styles