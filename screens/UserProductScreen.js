import React,{useState,useEffect,useLayoutEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import UserItem from '../components/ShopComponent/UserItem'
import { FontAwesome5 } from '@expo/vector-icons'; 
const UserProductScreen = ({navigation,route}) => {
    const UserProduct = useSelector(state=>state.products.userProducts)
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
        
                    <TouchableOpacity style={{marginRight:20}} onPress={()=>{
                        navigation.navigate('EditProduct')
                    }} >
                    <FontAwesome5 name="user-edit" size={24} color="black" />
                  
                   </TouchableOpacity> 
              
               
            ),
        })
    })
    return (
       <FlatList  data={UserProduct} 
       keyExtractor={item =>item.id}
       renderItem={itemData =>
         <UserItem 
        image={itemData.item.imageUrl}
        id={itemData.item.id}
        title={itemData.item.title}
        description={itemData.item.description}
        price={itemData.item.price}  
        navigation={navigation}
       
       
       />}
       
       
       />
    )
}

export default UserProductScreen

const styles = StyleSheet.create({})
