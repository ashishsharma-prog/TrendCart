import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import productScreen from '../screens/productScreen';
import CartScreen from '../screens/CartScreen';
import OrderScreen from "../screens/OrderScreen"
import productDetailsScreen from "../screens/productDetailsScreen"
import { Ionicons } from '@expo/vector-icons'; 
import {TouchableOpacity} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import LoginScreen from '../AuthScreen/LoginScreen';
import RegisterScreen from '../AuthScreen/RegisterScreen';
import UserProductScreen from '../screens/UserProductScreen';
import { MaterialIcons } from '@expo/vector-icons'; 
import EditScreen from '../screens/EditScreen';
const Stack = createStackNavigator()

function AppNavigator(){
    return (
        <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="LoginScreen"
           component={LoginScreen} 
           options={({ navigation, route }) => ({
            
            headerStyle: {
              backgroundColor: '#F0851B'
            },
          
           
            title:'Login here'
    
          })}
          
           
           />
           <Stack.Screen name="RegisterScreen"
           component={RegisterScreen}
           options={({ navigation, route }) => ({
            
            headerStyle: {
              backgroundColor: '#F0851B'
            },
           
           
            title:'Register here'
    
          })}
           />

          
          <Stack.Screen name="Product"
           component={ AppTabNavigator} 
           options={({ navigation, route }) => ({
            headerShown:false
          })}
           
           />
          <Stack.Screen name="ProductDetails" 
          component={productDetailsScreen} 
          options={({ navigation, route }) => ({
            
            headerStyle: {
              backgroundColor: '#F0851B'
            },
            headerRight: () => (
              <TouchableOpacity>
              <Ionicons
                style={{
                   marginHorizontal: 10,
                   overflow: 'hidden'
                  
                  }}
                name="md-cart" size={32}
                color="black"
                
                onPress={() => {
                  navigation.navigate('YourCart')
                }}
              />
              </TouchableOpacity>
            ),
           
            title:route.params?.title

          })}
          
          />
      
      <Stack.Screen name="YourCart"
       component={CartScreen} 
       options={({ navigation, route }) => ({
            
        headerStyle: {
          backgroundColor: '#F0851B'
        },
        
       
        title:'Your Cart'

      })}
       
       />
      <Stack.Screen name="YourOrder" component={OrderScreen} />
      <Stack.Screen name="EditProduct"
       component={EditScreen} 
      
       
       />
        </Stack.Navigator>
        
        </NavigationContainer>
      );
}

const Tab = createBottomTabNavigator();
 function AppTabNavigator() {
  return (
    
      <Tab.Navigator>
     
      <Tab.Screen
                    name="AllProducts"
                    component={productScreen}
                    options={({ navigation,route }) => ({

                        tabBarIcon: ({ focused }) => {
                            return (
                              <FontAwesome5 name="tshirt" size={24} color="#F0851B" />

                            )

                        },
                        headerStyle: {
                          backgroundColor: '#F0851B'
                        },
                        
                       
                        title:route.params?.title
            

                      
                    })}
                />
         <Tab.Screen
          name="YourOrder"
           component={OrderScreen}
           options={({ navigation }) => ({

            tabBarIcon: ({ focused }) => {
                return (
                  <FontAwesome name="reorder" size={28} color="#F0851B" />

                )

            },

            headerStyle: {
              backgroundColor: '#F0851B'
            },
            
           
            title:'Your Orders'  

        })}
           />
           <Tab.Screen
          name="Admin"
           component={UserProductScreen}
           options={({ navigation }) => ({

            tabBarIcon: ({ focused }) => {
                return (
                  <MaterialIcons name="admin-panel-settings" size={28} color="#F0851B"  />

                )

            },

            headerStyle: {
              backgroundColor: '#F0851B'
            },
            
           
            title:'Admin'  

        })}
           />
           
      </Tab.Navigator>
    
  );
}


export default AppNavigator