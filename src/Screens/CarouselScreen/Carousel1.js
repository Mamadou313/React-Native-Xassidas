import React, {useContext} from 'react';
import { View, Text , Image,TouchableOpacity} from 'react-native';
import styles from './CarouselStyle'
import theme from '../../Core/theme'
const { strings, images, colors } = theme;
import Context from '../../Core/Context';

const Carousel1 = ({navigation,route}) => {
    const themeColor = useContext(Context)
    return(
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <View style={styles.carouselImageView}>
                <Image source={themeColor.theme == colors.orangetheme ? images.carousel1:images.carouselb1} style={styles.carouselImage}/>
            </View>
            <View style={styles.carouselView}> 
                <View style={{...styles.carouselLineHighLight, backgroundColor:themeColor.theme}}></View>
                <View style={styles.carouselLine}></View>
                <View style={styles.carouselLine}></View>
            </View>
            <View style={styles.paragraph}>
                <Text style={styles.titleText}>{strings.carouselText1}</Text>
                <Text style={styles.paragraphText} numberOfLines={5}>{strings.testText}{strings.testText}</Text>
            </View>
            <TouchableOpacity style={{...styles.button, backgroundColor:themeColor.theme}} onPress={() => navigation.navigate('Carousel2')}>
                <Text style={styles.buttonText}>{strings.next}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Carousel1;