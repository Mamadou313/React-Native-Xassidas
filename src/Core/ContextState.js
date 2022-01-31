import React, {useState, useEffect} from "react";
import Context from "./Context";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContextState = ({children}) => {
  const [theme, setTheme ]= useState('#FF7466')
  const getTheme = async () => {
    try {
        const color1 = await AsyncStorage.getItem('theme')
        let color = JSON.parse(color1)
        if(color != null){
          setTheme(color)
        }
        return color
    }
    catch (error) {
        console.log("Theme Get Error", error)
    }
  }
  useEffect(() =>{
    getTheme()
  },[])
  const themes ={
    theme,
    setTheme,
  }
  return(
    <Context.Provider value={themes}>
      {children}
    </Context.Provider>
  )
}
export default ContextState
  