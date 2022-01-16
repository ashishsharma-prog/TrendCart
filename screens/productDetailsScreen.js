import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { StyleSheet, Text, View,Image,Button ,ScrollView} from 'react-native'
import * as cartActions from "../store/action/cartAction"
const productDetailsScreen = ({navigation,route}) => {

const productId = route.params?.id
const selectedId = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))
 const dispatch = useDispatch()
    return (
        <ScrollView>
        <View style={{padding:20}}>
            <Text style={styles.head}>Product Details</Text>
            <View style={styles.card}>
                <Image style={styles.img} source={{uri:selectedId.imageUrl}}/>
            </View>
            <View numberOfLines={2} style={styles.infoContainer}>
                <Text  style={styles.text}>Product Name :-</Text>
                <Text  style={styles.text}>{selectedId.title}</Text>
               
            </View>
            <View style={styles.infoContainer}>
                <Text  style={styles.text}>Price :-</Text>
                <Text style={styles.text}>$ {selectedId.price.toFixed(2)}</Text>
               
            </View>
           <View style={styles.description}>
               <Text style={styles.text}>Description:-</Text>
               <Text>{selectedId.description}</Text>
           </View>
           <View style={styles.btn}>
           <Button color="#F0851B" title="Add To Cart" 
           onPress={()=>{
            dispatch(cartActions.addToCart(selectedId))
           }}/>
           </View>
        </View>
        </ScrollView>
    )
}

export default productDetailsScreen

const styles = StyleSheet.create({
    card: {

        backgroundColor: '#fef4f4',
        borderRadius: 10,
        elevation: 5,
        marginVertical: 18,
        
        
    },
    img: {
        width: '100%',
        height: 280,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10


    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10
        
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        
    },
    description:{
        marginHorizontal:10,
        marginTop:30
    },
    head:{
        marginLeft:'32%',
        fontWeight:'bold',
        fontSize:18
    },
    btn:{
        padding: 20,
        borderRadius:20,
        marginTop:50,
    }
})
