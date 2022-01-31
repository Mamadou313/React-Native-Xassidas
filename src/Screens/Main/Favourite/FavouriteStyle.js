import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../Core/theme'
const { colors,font } = theme;
import Text_Size_Type from '../../../Components/Font'

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    Flatlist:{
        marginHorizontal:'5%',
        marginBottom:'17%',
        marginTop:Platform.OS === 'ios' ? '3%': 0
    },
    itemContanier:{
        flex:1,
        marginVertical:'2%',
        paddingHorizontal:'2%',
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:Dimensions.get('window').width*0.02,
    },
    itemImageView:{
        backgroundColor:'rgba(245, 245, 245, 1)',
        marginVertical:'2.3%',
        paddingVertical:'5%',
        paddingHorizontal:'10%',
        borderRadius:Dimensions.get('window').width*0.015,
    },
    itemImage:{
        width:Dimensions.get('window').width*0.15,
        height:Platform.OS ==='ios'?Dimensions.get('window').height*0.086 : Dimensions.get('window').height*0.095,
        alignSelf:'center',
    },
    itemDetailContainer:{
        flex:1,
        justifyContent:'center',
        marginLeft:'5%',
        // marginTop:'5%',
    },
    headerView:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    itemNameText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_5,
        color:'black',
    },
    itemCompanyText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_4
    },
    itemGrabage:{
        justifyContent:'center'
    },
    buyContatiner:{
        marginTop:'7%',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
    },
    itemPriceText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_5,
    },
    deleteContainer:{
        marginVertical:'2%',
        flex:1
    },
    deleteView:{
        borderTopRightRadius:Dimensions.get('window').width*0.04,
        marginHorizontal:'4%',
        marginVertical:'12%',
    },
    buyView:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    buyButton:{
        borderRadius:Dimensions.get('window').width*0.08,
        marginLeft:'2%'
    },
    buyText:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_5,
        color:'white',
        paddingHorizontal:'5%',
        paddingVertical:'3%'
    },
    OFSimage:{
        position: 'absolute',
        overflow: 'hidden',
        height:Platform.OS === 'ios'? Dimensions.get('window').height*0.145 : Dimensions.get('window').height*0.164,
    },
    OFSText:{
        fontFamily:font.regular,
        fontSize: Text_Size_Type.Text_Type_6,
        position: 'absolute',
        right: '40%', 
        color:'white', 
        top:'40%'
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