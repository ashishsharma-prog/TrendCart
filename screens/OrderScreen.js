import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList ,Button,TouchableOpacity} from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import OrderItem from '../components/ShopComponent/OrderItem'
import * as orderActions from "../store/action/orderAction"
const OrderScreen = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state=>state.orders.orders)
useEffect(()=>{
dispatch(orderActions.fetchOrders())
},[dispatch])
    return (
       <View style={styles.screen}>
           <View style={styles.head}>
               <Text style={styles.text}>Hello Ashish ,<Text style={{color:"#F0851B"}}>this is Your orders!</Text></Text>
           </View>
       <FlatList
       data={orders}
       keyExtractor={item=>item.id}
       renderItem={itemData=> <OrderItem
       id={itemData.item.id}
       items={itemData.item.items}
       amount={itemData.item.totalAmount}
       date={itemData.item.readableDate}
       
       
       />}
       
       
       />
        
       </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
       
    },
    head:{
        marginTop:20,
       padding: 10
    },
    text:{
     fontSize:20
    },
   
})
