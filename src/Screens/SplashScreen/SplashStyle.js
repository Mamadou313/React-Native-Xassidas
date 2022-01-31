import { StyleSheet } from 'react-native';
import theme from '../../Core/theme'
const { colors } = theme;
import Text_Size_Type from '../../Components/Font'

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    appName:{
        fontSize:Text_Size_Type.Text_Type_8,
        fontWeight:'bold',
        color:colors.App_Name_Color
    },
    brandName:{
        fontSize:Text_Size_Type.Text_Type_3,
        letterSpacing:2,
        color:colors.App_Name_Color
    }
})
export default styles;