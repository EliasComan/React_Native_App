import React,{useState} from 'react'
import { Text, View } from 'react-native';

import AuthNavigation from './auth.navigation';
import CartNavigation from './cart.navigation'
import HomeNavigation from './home.navigation'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import Orders from '../orders/orders';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux';

const boottomTabs = createBottomTabNavigator();


const Tabs = () => {
  const user = useSelector(state => state.auth.userId)
  console.log(user)

  return (
    <NavigationContainer >
       {
       user ?
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
                        <Ionicons name="cart" size={22} color="black" />
                     
                      :
                      <Ionicons name="cart-outline" size={22} color="black" />
                     
                    } 
                        <Text>Cart</Text>
                    </View>
                    )
            }}
            />
            <boottomTabs.Screen 
            name='OrdersTab'
            component={Orders}
            options={{tabBarLabel:' ',
            tabBarIcon: ({focused}) => (
                
                <View>
                  {focused ? 
                   <Ionicons name="albums" size={22} color="black" />
                  :
                  <Ionicons name="albums-outline" size={22} color="black" />
                } 
                    <Text>Orders</Text>
                </View>
            )
            }}
            />

        </boottomTabs.Navigator>
        :
        <AuthNavigation/>
        }
    </NavigationContainer>

    )
}

export default Tabs