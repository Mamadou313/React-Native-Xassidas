import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../Core/theme'
const { colors, font} = theme;
import Text_Size_Type from '../../../Components/Font'

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    FlatList:{
        marginBottom:Platform.OS === 'ios'? '24%' : '13%',
    },
    listItemContainer:{
        paddingVertical:'6%',
        borderBottomWidth:0.5,
    },
    listItemView:{
        marginHorizontal:'3%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    listView:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center'
    },
    icon:{
        borderRadius:Dimensions.get('window').width*0.5,
        paddingVertical:Platform.OS === 'ios'? '1.5%' : '2%',
        paddingHorizontal:'2.5%',
        backgroundColor:'maroon',
        justifyContent:'center',
    },
    textView:{
        width:Dimensions.get('window').width*0.66,
        marginHorizontal:'2%'
    },
    headingText:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_6,
        color:'black',
        
    },
    titleText:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_4,
        color:'gray'
    },
    dateView:{
        // alignItems:'flex-end'
    },
    date:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_2,
    },
    
})
export default styles