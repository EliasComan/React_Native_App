import { Text, View } from 'react-native';

import CartNavigation from './cart.navigation'
import HomeNavigation from './home.navigation'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const boottomTabs = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer >
        <boottomTabs.Navigator initialRouteName='ShopTab'screenOptions={{headerShown:false}} >
            <boottomTabs.Screen 
                name='ShopTab' 
                component={HomeNavigation}
                options={{tabBarLabel:'',
                tabBarIcon: ({focused}) => (
                    
                    <View>
                      {focused ? 
                      <Ionicons name="home" size={22} color="black" />
                      :
                      <Ionicons name="home-outline" size={22} color="black" />
                    } 
                        <Text>Shop</Text>
                    </View>
                    )
            }} 
            />
            <boottomTabs.Screen 
                name='CartShopTab' 
                component={CartNavigation}
                options={{tabBarLabel:' ',
                tabBarIcon: ({focused}) => (
                    
                    <View>
                      {focused ? 
                      <Ionicons name="cart" size={24} color="black" />
                      :
                      <Ionicons name="cart-outline" size={24} color="black" />
                    } 
                        <Text>Shop</Text>
                    </View>
                    )
            }}
            />
        </boottomTabs.Navigator>
    </NavigationContainer>

    )
}

export default Tabs