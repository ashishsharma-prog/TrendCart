import React,{useState} from 'react'
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import ProductItem from './ShopComponent/ProductItem';
const SearchBar = (props) => {
  
const[searchResults,setSearchResults] = useState("")
    const handleSearch=(text)=>{
    if(!text){
        setSearchResults([])
        return
    }
    setSearchResults(text)
    }
    console.log(searchResults)
    return (
        <View style={{...styles.Container,width:'100%',position:'relative'}}>
        <TextInput 
        
        style={{
            ...styles.search,
            backgroundColor:'lightgrey',
            color:"black",
            borderRadius:10
        }}
        onChangeText={(text)=>handleSearch(text)}
        
        placeholder='Search for Products'
        placeholderTextColor="grey"
        
        
        />
         <Ionicons
                style={{
                   marginHorizontal: 10,
                   overflow: 'hidden'
                  
                  }}
                name="search" size={32}
                color="black"
                
               
              />
        
             
              
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({

    search:{
        flex: 1,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:10,
        fontSize:15,
        marginBottom:15,
        marginHorizontal:10

    },
    Container:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
    }
})
