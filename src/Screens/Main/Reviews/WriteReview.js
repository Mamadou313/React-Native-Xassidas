import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './ReviewsStyle'
import theme from '../../../Core/theme'
const { strings, images, icons, colors } = theme;
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../Components/Header';
import { Rating } from 'react-native-ratings';
import Context from '../../../Core/Context';

const ReviewWrite = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.writeareview} nav={nav} Screen='User'/>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                enableOnAndroid
                extraScrollHeight={270}
                scrollEnabled={false}
                keyboardShouldPersistTaps={"handled"}
            >
            <View style={styles.imageContainer}>
                <Image source={themeColor.theme === colors.orangetheme ? images.reviewOrange : images.reviewBlue}/>
            </View>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingExpText}>{strings.rateyourexperiencewithus}</Text>
                <View style={styles.starContainer}>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={25}
                        startingValue={0}
                        //   onFinishRating={this.ratingCompleted}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Write Here....' maxLength={250} multiline={true} style={styles.input}/>
                <View style={styles.letterContainer}>
                    <Text style={styles.letterCount}>0/250</Text>
                </View>
            </View>
            <TouchableOpacity style={{...styles.buttonContainer,backgroundColor:themeColor.theme}} onPress={()=> nav.navigate('Review')}>
                <Text style={styles.buttonText}>{strings.submit}</Text>
            </TouchableOpacity>
            </KeyboardAwareScrollView>
        </ScrollView>
    )
}
export default ReviewWrite