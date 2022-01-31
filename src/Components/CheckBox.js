import React, {useContext} from 'react';
import { Checkbox } from 'react-native-paper';
import {  View,StyleSheet, Platform } from 'react-native';

import Context from '../Core/Context';

const CheckBox = ({value, setValue}) => {
  const themeColor = useContext(Context)
    return (
      <View style={styles.checkView}>
        <Checkbox
          status={value ? 'checked' : 'unchecked'}
          onPress={() => {
            setValue(!value);
        }}
        color={themeColor.theme}
        />
      </View>
    );
}
const styles = StyleSheet.create({
  checkView:{
    borderWidth:0.2,
    borderColor:Platform.OS === 'ios'? 'black' : 'transparent',
  }
});
export default CheckBox;
