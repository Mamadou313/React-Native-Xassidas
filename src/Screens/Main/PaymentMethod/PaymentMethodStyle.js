import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../../Core/theme'
const { colors,font } = theme;
import Text_Size_Type from '../../../Components/Font'

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    Flatlist:{
        margin:'5%'
    },
    cardContainer:{
        marginVertical:'5%',
        borderRadius:Dimensions.get('window').width*0.04,
    },
    cardView:{
        padding:'5%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    cardNoView:{},
    carTypeContainer:{},
    carTypeText:{},
    iconView:{
        borderRadius:Dimensions.get('window').width*0.05,
        height:Dimensions.get('window').width*0.05,
        width:Dimensions.get('window').width*0.05,
        justifyContent:'center',
        padding:'1%',
        alignItems:'center'
    },
    cardNoView:{
        alignItems:'center',
        marginVertical:'5%'
    },
    cardNoText:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_8,
        letterSpacing:2
    },
    nameText:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_5,
    },
})
export default styles