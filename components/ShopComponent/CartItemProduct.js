import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 

const CartItemProduct = (props) => {


    return (
        
          
        <View style={styles.container}> 
            <View style={styles.imgData}>
                <Image style={styles.img} source={{uri:props.imageUrl}}/>
            </View>
         
            <View style={styles.details}>
            <Text style={styles.text}>{props.title}</Text>
            <View style={styles.Quantity}>
                
            <Text style={styles.text}>Qty: <Text style={{color:'#ff7f50'}}>{props.quantity}</Text></Text>
        
            {props.deletable&& <TouchableOpacity 
            style={styles.icon}
            onPress={props.onRemove}
            
            >
            <MaterialIcons 
            name="delete"
             size={30} color="red"
             
             
             />
            </TouchableOpacity>}
            </View>
               
                <Text style={styles.text}>Price:<Text style={{color:'#ff7f50'}}>$ {props.amount}</Text> </Text>
            </View>
            </View>
        
        
    )
}

export default CartItemProduct

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eeeeee',
        borderRadius: 20,
        elevation: 5,
        marginVertical: 18,
        flexDirection:'row',
        padding: 10
   
    },
img:{
    width:'50%',
    height:90,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    
},
imgData:{
    flexDirection:'row',
    marginLeft:20,
    marginBottom:15
},
details:{
    padding: 10,
    
    
},
text:{
fontSize:17,
fontWeight:'bold',


},
icon:{
    marginLeft:10
},
Quantity:{
    flexDirection:'row',
    padding: 10
    
}
})
