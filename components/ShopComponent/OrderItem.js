import React,{useState} from 'react'
import { StyleSheet, Text, View ,Button,TouchableOpacity} from 'react-native'

import CartItemProduct from './CartItemProduct'
const OrderItem = (props) => {
const [showDetails,setShowDetails] = useState(false)
const [showReceipt,setShowReceipt] = useState(false)

    return (
        <View style={{flex:1}}>
        <View style={styles.orderScreen}>
        <View style={styles.details}>
            
            <Text style={styles.amount}> $ {props.amount.toFixed(2)}</Text>
            <Text style={styles.date} numberOfLines={2}>{props.date}</Text>
        </View>
        <View style={styles.btn}>
         <Button title={showDetails?'Hide Details':'Show Details'}
         color="#F0851B"
         onPress={()=>{
             setShowDetails(prevState => !prevState)
         }}
         />
        </View>
       
       {showDetails&&<View>
           {props.items.map(cartItem=><CartItemProduct
           key={cartItem.productId}
           imageUrl={cartItem.imageUrl}
           quantity={cartItem.quantity}
           title={cartItem.productTitle}
           amount={cartItem.total}
           
           
           />)}
           
           
           </View>}
           
        </View>
        <TouchableOpacity
         style={styles.ordersReceiptScreen}
         onPress={()=>{
             setShowReceipt(prevState=>!prevState)
         }}
         >
         <Text style={styles.receiptText} >{showReceipt? 'Hide Your Receipt':'Check Your Receipt'}</Text>
           </TouchableOpacity>
           {showReceipt&&
           <View style={styles.receiptDetails}>
               <Text style={styles.Text}>Shipping Charges:-<Text style={{color:"#F0851B"}}>$2</Text></Text>
               <Text style={styles.Text}>Product Amount:-<Text style={{color:"#F0851B"}}> ${props.amount.toFixed(2)}</Text></Text>
               <Text style={styles.Text}>Total Amount:-<Text style={{color:"#F0851B"}}>${Math.round(props.amount.toFixed(2))+ 2}</Text></Text>
               </View>}
        </View>
        
    )
}

export default OrderItem

const styles = StyleSheet.create({
    orderScreen:{
       
        backgroundColor: '#eeeeee',
        borderRadius: 20,
        elevation: 5,
        marginVertical: 18,
        marginHorizontal: 18,
        padding: 10
    },
   details:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       width:'100%',
       marginBottom:15
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        position: 'relative',
        padding: 10
    },
    date:{
        fontSize:13,
        color:'#888',
        fontWeight:'bold',
        marginLeft:10
    },
    amount:{
        fontSize:16,
        fontWeight:'bold',
    },
    receiptText:{
        position: 'absolute',
        marginLeft:85,
        fontWeight:'bold',
        fontSize:19,
        marginVertical:18,
        color:'#F0851B'
      },
      ordersReceiptScreen:{
          height: 60,
          backgroundColor: '#eeeeee',
          borderRadius: 20,
          elevation: 5,
          marginVertical: 18,
          marginHorizontal: 18,
          padding: 10,
          position: 'relative',
          
      },
      receiptDetails:{
          padding: 10,
          marginHorizontal:30,
          backgroundColor:'#99cccc',
          elevation: 5,
      },
      Text:{
        fontSize:16,
        fontWeight:'bold',
      }
  
})
