import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../Core/theme'
const { colors, font } = theme;
import Text_Size_Type from '../../Components/Font'

const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    carouselImageView:{
        flex:10,
        marginVertical:'10%',
        justifyContent:'center'
    },
    carouselImage:{
        alignSelf:'center',
    },
    carouselView:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
    },
    carouselLineHighLight:{
        width:Dimensions.get('window').width *0.03,
        height:Dimensions.get('window').height*0.006,
        borderRadius:Dimensions.get('window').width*0.04,
        marginHorizontal:'0.7%',
    },
    carouselLine:{
        width:Dimensions.get('window').width *0.03,
        height:Dimensions.get('window').height*0.006,
        backgroundColor:colors.carouselLine,
        borderRadius:Dimensions.get('window').width*0.04,
        marginHorizontal:'0.7%'
    },
    titleText:{
        fontFamily:font.bold,
        fontSize:Text_Size_Type.Text_Type_9,
        color:colors.titleTextColor,
    },
    paragraph:{
        flex:4,
        alignItems:'center',
        marginHorizontal:'5%'
    },
    paragraphText:{
        marginTop:'3%',
        fontSize:Text_Size_Type.Text_Type_5,
        fontFamily:font.regular,
        textAlign:'justify',
    },
    button:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:Dimensions.get('window').width*0.1,
        marginHorizontal:'15%',
        marginVertical:'5%',
        paddingVertical:Platform.OS === 'ios'? '0.5%' : '1.5%'
    },
    buttonText:{
        color:colors.nextButtonColor,
        fontSize:Text_Size_Type.Text_Type_6,
        fontFamily:font.bold,
    },
})
export default styles;