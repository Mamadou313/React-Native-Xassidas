import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Text_Size_Type from './Font'
import theme from '../Core/theme'
const { colors, font } = theme;

const Textinput= ({label, placeHolder, securenEntry,value, setValue, keyboardtype}) =>{
    return(
        <TextInput
            placeholder={placeHolder}
            label={label}
            value={value}
            mode='flat'
            onChangeText={text => setValue(text)}
            style={styles.inputField}
            activeUnderlineColor={colors.activeTextInputColor}
            secureTextEntry={securenEntry}
            keyboardType={keyboardtype}
        />
    )
}

const styles= StyleSheet.create({
    inputField:{
        fontFamily:font.regular,
        fontSize:Text_Size_Type.Text_Type_5,
        backgroundColor:'white',
        opacity:0.6,
    },
})
export default Textinput;