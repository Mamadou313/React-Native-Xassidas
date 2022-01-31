import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../Core/theme'
const { colors, font } = theme;
import Text_Size_Type from '../../../Components/Font'

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    cardContainer:{
        flex:2,
        borderRadius:Dimensions.get('window').width*0.04,
        margin:'5%'
    },
    cardView:{
        padding:'7%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    amountText:{
        fontFamily:font.regular,
        color:'white',
        fontSize:Text_Size_Type.Text_Type_8,
        letterSpacing:3
    },
    bold:{
        fontWeight:'bold'
    },
    nameText:{
        fontFamily:font.regular,
        color:'white',
        fontSize:Text_Size_Type.Text_Type_6,
        letterSpacing:1,
    },
    FlatList:{
        flex:Platform.OS === 'ios'? 6:5,
        marginBottom:Platform.OS === 'ios'? '5%' : '0.5%',
        marginHorizontal:'5%',
    },
    recentTransText:{
        marginVertical:'3%',
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_6,
        color:'black'
    },
    da:{
        fontFamily:font.regular,
        marginVertical:'2%',
        fontSize:Text_Size_Type.Text_Type_4,
        textAlign:'center'
    },
    listItemContainer:{
        backgroundColor:'white',
        marginVertical:'2%',
        padding:'2%',
        borderRadius:Dimensions.get('window').width*0.02
    },
    listItemView:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    listView:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    icon:{
        margin:'3%',
        borderRadius:Dimensions.get('window').width*0.5,
        paddingHorizontal:'6.5%',
        justifyContent:'center',
    },
    nameView:{
        margin:'3%',
    },
    Text:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_4,
    },
    date:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_3,
    },
    debitView:{
        marginHorizontal:'3%',
        justifyContent:'center',
    },
    debitText:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_4,
    },
})
export default styles