import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,TextInput,Image,KeyboardAvoidingView,Button } from 'react-native'
import { auth } from '../firebase'
import { onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth'
const LoginScreen = ({navigation,route}) => {
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
   const signIn = ()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
        onAuthStateChanged(auth,authUser=>{
            if(authUser){
                navigation.replace('Product')
            }
        })
    }).catch((error)=>alert(error))
   }
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.Conatiner}>
            <Text style={styles.headText}>Login Your <Text style={{fontSize:20,fontWeight:'bold', color:'#F0851B'}}>TrendCart</Text>  Account</Text>
            <Image source={{uri:'https://cdn0.iconfinder.com/data/icons/universal-web-mobile-5-4/65/443-512.png'}} style={styles.img}/>
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
            <TextInput 
            style={{
                ...styles.Search,
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 10,
                margin: 10
            }}
            value={password}
            secureTextEntry 
            type = 'password'
            onChangeText={(text) => setPassword(text)}
            placeholder='Enter Your Password'
            placeholderTextColor='grey'
            />
            <View style={styles.btn} >
                <View style={{margin:10,width:130}}>
                <Button title='Login' onPress={signIn} color='#F0851B'/>
                </View>
                <View  style={{margin:10 ,width:130}}>
                <Button title='Register' color='#F0851B' onPress={()=>{
                  navigation.navigate('RegisterScreen')
                }}/>
                </View>
                
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    Conatiner:{
       flex: 1,
       justifyContent:'center',
       alignItems:'center',
       marginBottom:50
    },
    Search:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        fontSize: 15,
        width: 300,
        
    },
    img:{
        width: 200,
        height: 200
    },
    headText:{
     fontSize:18,
     fontWeight:'bold'
    },
    btn:{
       flexDirection:"row"
    }
})
