import React,{useLayoutEffect,useEffect,useState} from 'react'
import { StyleSheet, Text, View,FlatList,StatusBar,TouchableOpacity ,ActivityIndicator} from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import ProductItem from '../components/ShopComponent/ProductItem'
import SearchBar from '../components/SearchBar'
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { auth } from '../firebase'
import * as productActions from "../store/action/productAction"
import { Ionicons } from '@expo/vector-icons'; 
const productScreen = (props) => {
   
    const [loading, setLoading] = useState(false)
    const [Error, setError] = useState()
    const products = useSelector(state=>state.products.availableProducts)
    const dispatch = useDispatch()
    
    const signOutUser = ()=>{
     auth.signOut().then(()=>{
         props.navigation.replace('LoginScreen')
     })
    }
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerLeft: () => (
                <View style={{marginLeft:20}}>
                    <TouchableOpacity onPress={signOutUser} >
                    <SimpleLineIcons name="logout" size={24} color="black" />
                  
                   </TouchableOpacity> 
                </View>
               
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('YourCart')
                   }}>
                    <View style={{flex:1, alignItems: 'center',  justifyContent:'center'}}>
                    <Ionicons
                  style={{
                     marginHorizontal: 10,
                     overflow: 'hidden',
                     position: 'relative'
                    }}
                  name="md-cart" size={32}
                  color="black"
                  
                  
                />
                <View style={{
                     
                     position: 'absolute',
                     backgroundColor: 'red',
                     width: 16,
                     height: 16,
                     borderRadius: 15 / 2,
                     right: 10,
                     top: +10,
                     alignItems: 'center',
                     justifyContent: 'center',
                   }}>
                    <Text style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: "#FFFFFF",
                        fontSize: 8,
                      }}>
                       10    
                    </Text>
                </View>
                    </View>
               
                </TouchableOpacity>
              ),
        })
    })
    useEffect(()=>{
        
        const loadProduct = async()=>{
            setLoading(true)
            try{
                await dispatch(productActions.fetchProducts())
            }catch(err){
            setError(err.message)
            }
          
           setLoading(false)
        }
      loadProduct()
    },[dispatch])
    if(Error){
        <View style={styles.loader}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>An Error Occured!!!</Text>
</View> 
    }
if(loading){
    <View style={styles.loader}>
        <ActivityIndicator size="large" color="#F0851B"/>
    </View>
}
if(!loading &&products.length===0){
    <View style={styles.loader}>
    <Text  style={{fontSize:20,fontWeight:'bold'}}>No Product Found.Please Start Adding Some!!!</Text>
</View>
}


    return (
        <View style={styles.container}>
          
        <FlatList 
        data={products}
        renderItem={itemData=>
        
        <ProductItem
        id={itemData.item.id}
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        description={itemData.item.description}
        price={itemData.item.price}
        navigation={props.navigation}
        itemData={itemData.item}
        >
   
        </ProductItem>
        
        
        }
        
        
        />
        </View>
    )
}

export default productScreen

const styles = StyleSheet.create({
    loader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flex:1,
        
    }
    
    
})
