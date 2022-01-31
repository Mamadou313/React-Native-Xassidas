import React from 'react';
import { StyleSheet,View,Image, TouchableOpacity } from 'react-native';

const SoicalButton = ({icon, onpress }) => {
    return (
        <TouchableOpacity>
          <Image source={icon} style={styles.socialIcon}/>
        </TouchableOpacity>
    );
} 

const styles= StyleSheet.create({
    socialIcon:{
        marginHorizontal:'3%',
    }
})
export default SoicalButton;
