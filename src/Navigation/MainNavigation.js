import React,{useContext} from 'react';
import { Image , View, Dimensions, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconComponent from '../Components/Icon';
import theme from '../Core/theme'
const { icons } = theme;
// Splash Screen
import Splash from '../Screens/SplashScreen/Splash'

// Carousel Screen
import Carousel1 from '../Screens/CarouselScreen/Carousel1'
import Carousel2 from '../Screens/CarouselScreen/Carousel2'
import Carousel3 from '../Screens/CarouselScreen/Carousel3'

// Auth Screens
import SignUp from '../Screens/Auth/SignUp/SignUp'
import SignIn from '../Screens/Auth/SignIn/SignIn'

//Bottom Tab Screen
import Home from '../Screens/Main/Home/Home'
import Favourite from '../Screens/Main/Favourite/Favourite';
import Cart from '../Screens/Main/Cart/Cart'
import Notification from '../Screens/Main/Notification/Notification'
import User from '../Screens/Main/User/User'

//Others Stack Screens
import SingleItem from '../Screens/Main/SingleItem/SingleItem'
import DeliveryForm from '../Screens/Main/Delivery/DeliveryForm'
import Delivery from '../Screens/Main/Delivery/Delivery'
import Filter from '../Screens/Main/Filter/Filter'
import EditUser from '../Screens/Main/User/EditUser'
import Order from '../Screens/Main/Order/Order'
import PlaceOrder from '../Screens/Main/Order/PlaceOrder'
import ConfirmOrder from '../Screens/Main/Order/ConfirmOrder'
import ShippingAddress from '../Screens/Main/Delivery/ShippingAdress'
import Setting from '../Screens/Main/Setting/Setting'
import Coupon from '../Screens/Main/Coupon/Coupon'
import CouponDetail from '../Screens/Main/Coupon/CouponDetail'
import Review from '../Screens/Main/Reviews/Reviews'
import ReviewWrite from '../Screens/Main/Reviews/WriteReview'
import Wallet from '../Screens/Main/Wallet/Wallet'
import Messages from '../Screens/Main/Message/Messages'
import PaymentMethod from '../Screens/Main/PaymentMethod/PaymentMethod'
import CustomerSupport from '../Screens/Main/CustomerSupport/CustomerSupport'

import ContextState from '../Core/ContextState';
import Context from '../Core/Context';

const BagImage = () =>{
  const themeColor = useContext(Context)
  return(
    <View style={{
      top:Platform.OS === 'ios'? -12:-20,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:themeColor.theme,
      height:Platform.OS === 'ios'? Dimensions.get('window').height*0.055 : Dimensions.get('window').height*0.063,
      width:Dimensions.get('window').width*0.12,
      borderRadius:Dimensions.get('window').width*0.8,
      borderWidth:6,
      borderColor:'#F5F5F5'
    }}>
      <Image source={icons.bag}
        resizeMode='contain'
        style={{
          tintColor:'white',
          height:Dimensions.get('window').height*0.04,
          width:Dimensions.get('window').width*0.04,
        }}
      />
    </View>
  )
}
const Stack = createStackNavigator();
const MainNavigation = () => {
  return(
    <NavigationContainer>
      <ContextState>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="LoginNavigation" component={LoginNavigation}/> 
        <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
      </ContextState>
    </NavigationContainer>
  )
}
const LoginStack = createStackNavigator();
const LoginNavigation =() =>{
  return(
    // <NavigationContainer>
      <LoginStack.Navigator screenOptions={{headerShown:false}}>

        {/* Carousel Screens */}
        <LoginStack.Screen name="Carousel1" component={Carousel1} />
        <LoginStack.Screen name="Carousel2" component={Carousel2} />
        <LoginStack.Screen name="Carousel3" component={Carousel3} />

        {/* Auth Screens */}
        <LoginStack.Screen name="SignIn" component={SignIn} />
        <LoginStack.Screen name="SignUp" component={SignUp} />

      </LoginStack.Navigator>
    // </NavigationContainer>
  )
}
const HomeStack = createStackNavigator();
const HomeNavigation =() =>{
  return(
    // <NavigationContainer>
      <HomeStack.Navigator screenOptions={{headerShown:false}}>

        {/* Home Screens */}
        <HomeStack.Screen name="MyTabs" component={MyTabs} />
        <HomeStack.Screen name="Filter" component={Filter} />
        <HomeStack.Screen name="SingleItem" component={SingleItem} />

        {/* Cart Screens */}
        <HomeStack.Screen name="ConfirmOrder" component={ConfirmOrder} />
        <HomeStack.Screen name="PlaceOrder" component={PlaceOrder} />

        {/* User Screens */}
        <HomeStack.Screen name="EditUser" component={EditUser} />
        <HomeStack.Screen name="Order" component={Order} />
        <HomeStack.Screen name="Setting" component={Setting} />
        <HomeStack.Screen name="Wallet" component={Wallet} />

        {/* Address Screens */}
        <HomeStack.Screen name="DeliveryForm" component={DeliveryForm} />
        <HomeStack.Screen name="Delivery" component={Delivery} />
        <HomeStack.Screen name="ShippingAddress" component={ShippingAddress} />

        {/* Other Screens */}
        <HomeStack.Screen name="Coupon" component={Coupon} />
        <HomeStack.Screen name="CouponDetail" component={CouponDetail} />
        <HomeStack.Screen name="Review" component={Review} />
        <HomeStack.Screen name="ReviewWrite" component={ReviewWrite} />
        <HomeStack.Screen name="Messages" component={Messages} />
        <HomeStack.Screen name="PaymentMethod" component={PaymentMethod} />
        <HomeStack.Screen name="CustomerSupport" component={CustomerSupport} />

      </HomeStack.Navigator>
    // </NavigationContainer>
  )
}
const Tab = createBottomTabNavigator();
function MyTabs() {
  const themeColor = useContext(Context)
  return (
    <Tab.Navigator screenOptions={{headerShown:false, 
      tabBarShowLabel:false, 
      tabBarStyle:{height:Dimensions.get('window').height*0.065}}}>
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({ focused }) => (
            <IconComponent source={icons.home} tintColor={focused? themeColor.theme:'#D3CDCD'}/>
          ),
        }}
      />
      <Tab.Screen name="Favourite" component={Favourite} 
        options={{
          tabBarIcon: ({ focused }) => (
            <IconComponent source={icons.heart} tintColor={focused? themeColor.theme:'#D3CDCD'}/>
          ),
        }}
      />
       <Tab.Screen name="Cart" component={Cart} 
        options={{
          tabBarIcon: () => (
            <BagImage />
          ),
        }}
      />
      <Tab.Screen name="Notification" component={Notification} 
        options={{
          tabBarIcon: ({ focused }) => (
            <IconComponent source={icons.notification} tintColor={focused? themeColor.theme:'#D3CDCD'}/>
          ),
        }}
      />
      <Tab.Screen name="User" component={User} 
        options={{
          title:'',
          tabBarIcon: ({ focused }) => (
            <IconComponent source={icons.user} tintColor={focused? themeColor.theme:'#D3CDCD'}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;