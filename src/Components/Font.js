import {Dimensions} from 'react-native'

const width_Screen = Dimensions.get('window').width;
const height_Screen = Dimensions.get('window').height;

const Text_Size_Type = {
    Scalling: {
        Text_Type_0:width_Screen * 0.01,
        Text_Type_1:width_Screen * 0.015,
        Text_Type_2:width_Screen * 0.02,
        Text_Type_3:width_Screen * 0.025,
        Text_Type_4:width_Screen * 0.03,
        Text_Type_5:width_Screen * 0.035,
        Text_Type_6:width_Screen * 0.04,
        Text_Type_7:width_Screen * 0.045,
        Text_Type_8:width_Screen * 0.05,
        Text_Type_9:width_Screen * 0.055,
        Text_Type_10:width_Screen * 0.06,
        Text_Type_11:width_Screen * 0.065,
        Text_Type_12:width_Screen * 0.07,
        Text_Type_13:width_Screen * 0.075,
        Text_Type_14:width_Screen * 0.08,
        Text_Type_15:width_Screen * 0.085,
        Text_Type_16:width_Screen * 0.09,
        Text_Type_17:width_Screen * 0.095,
        Text_Type_18:width_Screen * 0.1,
        Text_Type_19:width_Screen * 0.15,
        Text_Type_20:width_Screen * 0.2,
        Text_Type_21:width_Screen * 0.25,
        Text_Type_22:width_Screen * 0.3,
    },
}
const Text_Size = Text_Size_Type.Scalling
export default Text_Size