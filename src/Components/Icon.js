import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const IconComponent = ({source, tintColor, color, space}) => {
  return (
    <View>
      <Image
        source={source}
        style={[styles.imgStyle, 
        {tintColor: tintColor, paddingHorizontal:space}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode:'contain',
    width: Dimensions.get('window').width*0.04,
    height: hp('2.6%'),
  },
});

export default IconComponent;