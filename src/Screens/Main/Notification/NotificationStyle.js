import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../Core/theme'
const { colors,font } = theme;
import Text_Size_Type from '../../../Components/Font'

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    FlatList:{
        marginHorizontal:'5%',
        marginBottom:Platform.OS === 'ios'? '25%' : '16%',
        marginTop:'2%'
    },
    listItemContainer:{
        marginVertical:'2%',
        backgroundColor:'white',
        padding:'3%',
        borderRadius:Dimensions.get('window').width*0.02
    },
    listItemView:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center'
    },
    icon:{
        borderRadius:Dimensions.get('window').width*0.5,
        paddingHorizontal:'1%',
        paddingVertical:'0.5%',
        justifyContent:'center',
    },
    textView:{
        width:Dimensions.get('window').width*0.78,
    },
    Text:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_4,
        color:'black',
        marginLeft:'3%'
    },
    productView:{
        marginHorizontal:'1%',
        marginTop:'3%',
        borderRadius:Dimensions.get('window').width*0.02,
        padding:'2%',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    image:{
        height:Dimensions.get('window').height*0.05,
        width:Dimensions.get('window').width*0.1,
    },
    productText:{
        fontFamily:font.regular,
        marginLeft:'3%',
        fontSize:Text_Size_Type.Text_Type_3,
        width:Dimensions.get('window').width*0.65,
        textAlign:'justify',
    },
})
export default styles