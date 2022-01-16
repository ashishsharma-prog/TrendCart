import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,KeyboardAvoidingView,Image,TextInput,Button } from 'react-native'
import { createUserWithEmailAndPassword,updateProfile,onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const RegisterScreen = ({navigation,route}) => {
    
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,authUser=>{
        if(authUser){
            navigation.replace('Product')
        }
    })
    return unsubscribe
   },[])
    const registerUser = ()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(()=>{
     updateProfile(auth.currentUser,{
         displayName:name,
         phoneNumber:number
     })
    }).catch((err)=>{
        alert(err.message)
    })
    }
    return (
       <KeyboardAvoidingView behavior='padding' style={styles.conatiner}>
           <Text style={styles.headerText}>Register Your First<Text style={{fontSize:20,fontWeight:'bold', color:'#F0851B'}}> TrendCart</Text> Account</Text>
           <View>

           
           <TextInput  style={{
                ...styles.Search,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 10,
                margin: 10
            }}
            value={name}
            keyboardType='default'
            autoFocus
            onChangeText={(text) => setName(text)}
            placeholder='Enter Your Name'
            placeholderTextColor='grey'/>
             <TextInput  style={{
                ...styles.Search,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 10,
                margin: 10
            }}
            value={number}
           keyboardType='numeric'
            onChangeText={(text) => setNumber(text)}
            placeholder='Enter Your Number'
            placeholderTextColor='grey'/>
             <TextInput  style={{
                ...styles.Search,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 10,
                margin: 10
            }}
            value={email}
            type = 'email'
            autoFocus
            onChangeText={(text) => setEmail(text)}
            placeholder='Enter Your Email'
            placeholderTextColor='grey'/>
             <TextInput  style={{
                ...styles.Search,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 10,
                margin: 10
            }}
            value={password}
            secureTextEntry 
            type = 'password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder='Enter Your Password'
            placeholderTextColor='grey'
           />
           </View>
           <View style={{margin:10 ,width:160}}>
           <Button title='Register' color='#F0851B' onPress={registerUser}/>
           </View>
           
       </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    conatiner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:130
    },
    Search:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 15,
        width: 300,
        
    },
    headerText:{
        fontSize:18,
        fontWeight:'bold'
    }
})
