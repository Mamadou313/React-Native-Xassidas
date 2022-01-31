import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../Core/theme'
const { colors, font} = theme;
import Text_Size_Type from '../../../Components/Font'

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    flatlist:{
        margin:'5%',
        borderRadius:Dimensions.get('window').width*0.08,
    },
    listView:{
        backgroundColor:'#FFFFFF',
        paddingHorizontal:'5%',
    },
    line:{
        backgroundColor:'lightgray',
        height:Dimensions.get('window').height*0.001,
        width:Dimensions.get('window').width*0.8
    },
    listItemView:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginVertical:'7%'
    },
    settingHeadingText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_5,
        color:'black',
    },
    settingParagText:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_4,
        width:Dimensions.get('window').width*0.65,
    },
    themeContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginHorizontal:'10%',
        marginTop:'3%',
    },
    themeButton:{
        width:Dimensions.get('window').width*0.38,
        height:Platform.OS === 'ios'? Dimensions.get('window').height*0.035:Dimensions.get('window').height*0.045,
        borderRadius:Dimensions.get('window').width*0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    themeSelectionText:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_3,
        color:'white',
    },
})
export default styles