import CartNavigation from './cart.navigation'
import HomeNavigation from './home.navigation'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const boottomTabs = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer >
        <boottomTabs.Navigator initialRouteName='ShopTab'screenOptions={{headerShown:false}} >
            <boottomTabs.Screen name='ShopTab' component={HomeNavigation}/>
            <boottomTabs.Screen name='CartShopTab' component={CartNavigation}/>
        </boottomTabs.Navigator>
    </NavigationContainer>

    )
}

export default Tabs