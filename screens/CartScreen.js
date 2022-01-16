import React from 'react'
import { StyleSheet, Text, View,Button,ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector ,useDispatch} from 'react-redux'

import * as cartActions from "../store/action/cartAction"
import * as orderActions from "../store/action/orderAction"
import CartItemProduct from '../components/ShopComponent/CartItemProduct'
import ProductItem from '../components/ShopComponent/ProductItem'

const CartScreen = (props) => {
    []
    const dispatch = useDispatch()
    const cartTotalAmount = useSelector(state=>state.cart.totalAmount)
    const cartItems = useSelector(state=>{
        const sharedCartItem = [];
        for(const key in state.cart.items){
            sharedCartItem.push({
                productId:key,
                imageUrl:state.cart.items[key].imageUrl,
                productTitle: state.cart.items[key].productTitle,
                productPrice:state.cart.items[key].productPrice,
               quantity:state.cart.items[key].quantity,
               total:state.cart.items[key].total
                
            })
        }
        return sharedCartItem.sort((a, b) =>
            a.productId > b.productId ? 1 : -1);
    })
   console.log(cartItems.length)
    return (
        
        <View style={{flex:1}}>
            <View style={styles.summary}>
           <Text style={styles.priceText}>Total Amount :
               <Text  style={{color:'#ff7f50'}}> $ {Math.round(cartTotalAmount.toFixed(2) * 100) / 100}</Text>
           </Text>

            </View>
            <FlatList
            data={cartItems}
            keyExtractor={item=>item.productId}
            renderItem={itemData=>
            <CartItemProduct
            imageUrl={itemData.item.imageUrl}
            quantity={itemData.item.quantity}
            title={itemData.item.productTitle}
            amount={itemData.item.productPrice}
            deletable
            onRemove={()=>{
                dispatch(cartActions.removeFromCart(itemData.item.productId))
            }}
            
           
            />
            
            }  
            />
           
             <View style={styles.btn}>
               
               <Button title="BUY NOW"
                color="#F0851B" 
                disabled={cartItems.length === 0 }
                onPress={()=>{
                dispatch(orderActions.addOrder(cartItems,cartTotalAmount))
               }}/>
           </View>
           

        </View>
        
    )
}

export default CartScreen

const styles = StyleSheet.create({
    priceText:{
        fontSize:19,
        
    },
    btn:{
        padding: 20,
            borderRadius:20,
            marginTop:50,
            position: 'absolute',
            bottom:0,
            height: 80,
            width:'100%'
    }
})
