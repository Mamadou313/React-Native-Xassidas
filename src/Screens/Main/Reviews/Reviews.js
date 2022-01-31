import React, {useState, useContext} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './ReviewsStyle'
import theme from '../../../Core/theme'
const { strings, images, icons, colors } = theme;
import IconComponent from '../../../Components/Icon';
import Header from '../../../Components/Header';
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Context from '../../../Core/Context';

const ReviewsList=[
    {id:0, name:'John Doe', Time:'2 hours ago', rating:'5.0', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'},
    {id:1, name:'John Doe', Time:'2 hours ago', rating:'4.0', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'},
    {id:2, name:'John Doe', Time:'2 hours ago', rating:'0', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'},
    {id:3, name:'John Doe', Time:'2 hours ago', rating:'3.0', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'},
    {id:4, name:'John Doe', Time:'2 hours ago', rating:'5.0', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'},
    
]

const Reviews = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const [isAlertModalVisible, setAlertModalVisible] = useState(false);
    const toggleModal = () => {
        setAlertModalVisible(!isAlertModalVisible);
    };
    async function getToken() {
        try {
            const token1 = await AsyncStorage.getItem('token')
            let token = JSON.parse(token1)
            if (token == "1") {
                nav.navigate('ReviewWrite')
            }else{
                toggleModal()
                // nav.navigate('SignIn')
            }
            return token
        }
        catch (error) {
            alert("Token Get Error", error)
        }
    }
    const renderItem = ({item}) => {
        return(
            <View style={styles.listItemContainer}>
                <View style={styles.listItemView}>
                    <View style={styles.listView}>
                        <View style={styles.imageContainerReview}>
                            <Image source={images.user} style={styles.image}/>
                            <View>
                                <Text style={styles.nameText}>{item.name}</Text>
                                <Text style={styles.timeText}>{item.Time}</Text>
                            </View>
                        </View>
                        <View style={styles.ratingContainerReview}>
                            {item.rating === '0'? <IconComponent source={icons.star} tintColor={themeColor.theme}/>:
                                <IconComponent source={icons.startfill} tintColor={themeColor.theme}/>
                            }
                            <Text style={styles.ratingText}>({item.rating})</Text>
                        </View>
                    </View>
                    <Text style={styles.reviewText}>{item.review}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.reviews} nav={nav} Screen='User'/>
            <View style={styles.reviewsContainer}>
                <TouchableOpacity onPress={() => getToken()}>
                    <IconComponent source={icons.pen} tintColor={themeColor.theme}/>
                </TouchableOpacity>
                <Text style={styles.writereviewsText}>{strings.writeareview}</Text>
            </View>
            <View style={styles.flatList}>
                <FlatList
                    data={ReviewsList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <Modal isVisible={isAlertModalVisible}>
                <View style={styles.modalWindow}>
                    <Text style={{...styles.Title, color:themeColor.theme}}>{strings.ops}</Text>
                    <Text style={styles.Text}>{strings.alertMessage}</Text>
                    <TouchableOpacity style={{...styles.Button, backgroundColor:themeColor.theme}} onPress={()=> toggleModal()}>
                        <Text style={styles.buttonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View> 
            </Modal>
        </View>
    )
}
export default Reviews