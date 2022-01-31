import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native';
import styles from './filterStyle'
import theme from '../../../Core/theme'
const { strings, images, icons, colors } = theme;
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Header from '../../../Components/Header';
import Context from '../../../Core/Context';

const filterbyName=[
    {id:0, name:'Furniture'},
    {id:1, name:'Electronics'},
    {id:2, name:'Clothes'},
    {id:3, name:'Appliances'},
    {id:4, name:'Gym & Sports'},
    {id:5, name:'Food'},
    {id:6, name:'Kids'},
    {id:7, name:'Cosmetic'},
    {id:8, name:'Health & Fitness'},
]
const filterbyPrice=[
    {id:0, name:'Price (Low to High)'},
    {id:1, name:'Price (High to Low)'},
    {id:2, name:'Best Selling'},
    {id:3, name:'A to Z'},
    {id:4, name:'Z to A'},
]
const PriceCard = ({color, values,onValuesChange, multiSliderValue}) =>{
    return(
        <View>
            <View>
                <View style={styles.priceListContainer}>
                    <View style={styles.priceListView}>
                        <Text style={styles.priceListText}>{multiSliderValue[0]}</Text>
                    </View>
                    <View style={styles.priceListView}>
                        <Text style={styles.priceListText}>{multiSliderValue[1]}</Text>                
                    </View>
                </View>
            </View>
            <View style={styles.multiSliderView}>
                <MultiSlider
                    markerStyle={{
                        ...Platform.select({
                            ios: {
                                height: 18,
                                width: 18,
                                shadowColor: color,
                                shadowOffset: {
                                width: 0,
                                height: 2
                                },
                                shadowRadius: 1,
                                shadowOpacity: 0.1
                            },
                            android: {
                                height: 18,
                                width: 18,
                                borderRadius: 50,
                                backgroundColor: color,
                            }
                        })
                    }}
                    pressedMarkerStyle={{
                        ...Platform.select({
                            android: {
                                height: 25,
                                width: 25,
                                borderRadius: 20,
                                backgroundColor: color
                            },
                            ios: {
                                height: 20,
                                width: 20,
                                borderRadius: 20,
                                backgroundColor: color
                            },
                        })
                    }}
                    selectedStyle={{
                        backgroundColor: color
                    }}
                    trackStyle={{
                        backgroundColor: '#CECECE'
                    }}
                    touchDimensions={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        slipDisplacement: 40
                    }}
                    sliderLength={Dimensions.get('window').width*0.85}
                    values={values}
                    onValuesChange={onValuesChange}
                    min={1}
                    max={5000}
                    allowOverlap={false}
                    step={1}
                    minMarkerOverlapDistance={10}
                />
            </View>
        </View>
    )
}
const Filter = (props) => {
    const nav= props.navigation
    const themeColor = useContext(Context)
    const [multiSliderValue, setMultiSliderValue] = useState([0, 5000])
    const [filterName, setFilterName] = useState('')
    const [filterPrice, setFilterPrice] = useState('')
    const [colorSelect, setColorSelect] = useState('')

    const clearScreen = () =>{
        setMultiSliderValue([1,5000])
        setFilterName('')
        setFilterPrice('')
        setColorSelect('')
    }
    const ColorSelection = ({color}) => {
        return(
            <TouchableOpacity style={{...styles.circle, backgroundColor:color,
            borderWidth:1,borderColor:colorSelect === color?'black':'transparent'}}
            onPress={()=> setColorSelect(color)}>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{...styles.container, backgroundColor: themeColor.theme === colors.orangetheme? 'transparent':colors.blueBackgroundColor}}>
            <Header title={strings.filter} nav={nav} Screen='Home'/>
            <View style={styles.topCategory}>
                <Text style={styles.catoryText}>{strings.categories}</Text>
                <View style={styles.categoryList}>
                    {filterbyName.map((item)=>{
                        return(
                        <TouchableOpacity style={{...styles.categoryView,
                            backgroundColor:filterName ===item.name? themeColor.theme: 'white'}} 
                            onPress={()=> setFilterName(item.name)}>
                            <Text style={{...styles.categoryText,color:filterName ===item.name? 'white':'#707070'}}>{item.name}</Text>
                        </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            <View style={styles.downCategory}>
                <Text style={styles.catoryText}>{strings.categories}</Text>
                <View style={styles.categoryList}>
                    {filterbyPrice.map((item)=>{
                        return(
                            <TouchableOpacity style={{...styles.categoryView,
                                backgroundColor:filterPrice ===item.name? themeColor.theme: 'white'}} 
                                onPress={()=> setFilterPrice(item.name)}>
                                <Text style={{...styles.categoryText,color:filterPrice ===item.name? 'white':'#707070'}}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                    
                </View>
            </View>
            <View style={styles.colorContainer}>
                <Text style={styles.catoryText}>{strings.color}</Text>
                <View style={styles.ColorView}>
                    <ColorSelection color={colors.filtercolorone} />
                    <ColorSelection color={colors.filtercolortwo} />
                    <ColorSelection color={colors.filtercolorthree} />
                    <ColorSelection color={colors.filtercolorfour} />
                    <ColorSelection color={colors.filtercolorfive} />
                    <ColorSelection color={colors.filtercolorsix} />
                </View>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.catoryText}>{strings.priceRange}</Text>
                <PriceCard
                color={themeColor.theme}
                multiSliderValue={multiSliderValue}
                values={multiSliderValue}
                onValuesChange={(values) => {
                    setMultiSliderValue(values)
                }}
              />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={{...styles.buttonApply, backgroundColor:themeColor.theme}} onPress={()=> props.navigation.navigate('Home')}>
                    <Text style={styles.applyText}>{strings.apply}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonClear} onPress={()=> clearScreen()}>
                    <Text style={{...styles.clearText, color:themeColor.theme}}>{strings.clearall}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Filter