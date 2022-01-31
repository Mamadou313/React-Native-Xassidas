import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Share } from 'react-native';
import styles from './SingleItemStyle'
import theme from '../../../Core/theme'
const { strings, images, colors } = theme;
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from "react-native-snap-carousel";
import { Rating } from 'react-native-ratings';
import Modal from "react-native-modal";
import Context
 from '../../../Core/Context';
const carousel=[
    {id:1, Image:images.carouselImage},
    {id:2, Image:images.carouselImage},
    {id:3, Image:images.carouselImage},
    {id:4, Image:images.carouselImage},
]
const renderItem = ({item}) => {
    return (
        <View style={styles.sliderContainer}>
            <Image source={item.Image} style={styles.sliderImage}/>
        </View>
    );
}
const SingleItem = ({route, navigation}) => {
    const Prod = route.params.product
    const themeColor = useContext(Context)
    const [heartCheck, setHeartCheck] = useState(false)
    const [activeColor, setActiveColor] = useState('')

    const [isAlertModalVisible, setAlertModalVisible] = useState(false);
    const toggleModal = () => {
        setAlertModalVisible(!isAlertModalVisible);
    };

    const [number, setNumber] = useState(0)
    const increment = () =>{
            setNumber(number+1)
    }
    const decrement = () =>{
        setNumber(number-1)
    }
    function UpdateCart(id){
        console.log("Update Cart Function on id ",id)
    }

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <View style={styles.carouselContainer}>
                <View style={styles.topContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={images.backIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.heartView} onPress={()=>{setHeartCheck(!heartCheck)}}>
                        <Icon name="heart" size={15} color={heartCheck ? 'red':'#D3CDCD'} />
                    </TouchableOpacity>
                </View>
                <Carousel
                // ref={(c) => { renderItem = c; }}
                data={carousel}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                />
            </View>
            <View style={styles.itemDetailContainer}>
                <View style={styles.nameContainer}>
                    <View style={styles.nameView}>
                        <Text style={styles.itemNameText}>{Prod.itemName}</Text>
                        <Text style={styles.itemCNameText}>by <Text style={{color:themeColor.theme}}>{Prod.companyName}</Text></Text>
                    </View>
                    <View style={styles.rating}>
                        <TouchableOpacity style={styles.rating} onPress={()=> navigation.navigate('Review')}>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={17}
                                startingValue={Prod.rating}
                                readonly={true}
                            />
                            <Text style={styles.rateNumber}>({Prod.rating})</Text>
                        </TouchableOpacity>
                        <Icon name="share-alt" size={20} color={'#009DFF'} style={{marginLeft:'5%'}} onPress={onShare}/>
                    </View>
                </View>
                <Text style={styles.itemDetail} numberOfLines={5}>{Prod.detail} {strings.testText}</Text>
                <View style={styles.imageContainer}>
                    <View style={styles.imageView}>
                        <Image source={images.carouselImage} style={styles.selectionImage}/>
                    </View>
                    <View style={styles.imageView}>
                        <Image source={images.carouselImage} style={styles.selectionImage}/>
                    </View>
                    <View style={styles.imageView}>
                        <Image source={images.carouselImage} style={styles.selectionImage}/>
                    </View>
                    <View style={styles.imageView}>
                        <Image source={images.carouselImage} style={styles.selectionImage}/>
                    </View>
                </View>
                <View style={styles.colorSelectionContainer}> 
                    <View style={styles.selectionColor}>
                        <Text style={styles.colorText}>COLOR</Text>
                        <TouchableOpacity 
                            style={{...styles.colorBox,backgroundColor:colors.selcetedColorone, borderWidth:1, 
                            borderColor:activeColor === colors.selcetedColorone ? themeColor.theme:'transparent'}}
                            onPress={()=>{setActiveColor(colors.selcetedColorone)}}></TouchableOpacity>
                        <TouchableOpacity 
                            style={{...styles.colorBox,backgroundColor:colors.selcetedColorSecond, borderWidth:1, 
                            borderColor:activeColor === colors.selcetedColorSecond? themeColor.theme:'transparent'}}
                            onPress={()=>{setActiveColor(colors.selcetedColorSecond)}}></TouchableOpacity>
                        <TouchableOpacity 
                            style={{...styles.colorBox,backgroundColor:colors.selcetedColorThird, borderWidth:1, 
                            borderColor:activeColor === colors.selcetedColorThird? themeColor.theme:'transparent'}}
                            onPress={()=>{setActiveColor(colors.selcetedColorThird)}}></TouchableOpacity>
                        <TouchableOpacity 
                            style={{...styles.colorBox,backgroundColor:colors.selcetedColorFour, borderWidth:1, 
                            borderColor:activeColor === colors.selcetedColorFour? themeColor.theme:'transparent'}}
                            onPress={()=>{setActiveColor(colors.selcetedColorFour)}}></TouchableOpacity>
                    </View>
                    <View style={styles.selectItem}>
                        <TouchableOpacity onPress={()=> decrement()}><Text style={styles.operator}>-</Text></TouchableOpacity>
                        <Text style={styles.operatorText}>{number}</Text>
                        <TouchableOpacity onPress={()=> increment()}><Text style={styles.operator}>+</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{Prod.Price}</Text>
                <View style={styles.buttonView}>
                <TouchableOpacity style={{...styles.button, backgroundColor:themeColor.theme}} onPress={() => {UpdateCart(Prod.id), toggleModal()}}>
                    <Text style={styles.buttonText}>{strings.adtocart.toLocaleUpperCase()}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.button, backgroundColor:themeColor.theme}} onPress={() => {UpdateCart(Prod.id), navigation.navigate('Cart')}}>
                    <Text style={styles.buttonText}>{strings.buynowbutton.toLocaleUpperCase()}</Text>
                </TouchableOpacity>
                </View>
            </View>
            <Modal isVisible={isAlertModalVisible}>
                <View style={styles.modalWindow}>
                    <Image source={images.success} style={styles.successIcon} />
                    <Text style={styles.Text}>{Prod.itemName} {strings.addtocart}</Text>
                    <TouchableOpacity style={{...styles.Button, backgroundColor:themeColor.theme}} onPress={()=> toggleModal()}>
                        <Text style={styles.buttonText}>{strings.okay}</Text>
                    </TouchableOpacity>
                </View> 
            </Modal>
        </View>
    )
}
export default SingleItem