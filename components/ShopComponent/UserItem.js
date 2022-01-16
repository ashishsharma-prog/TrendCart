import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as productActions from "../../store/action/productAction"
const UserItem = (props) => {
    

    const dispatch = useDispatch()
   const EditProductHandler = (id)=>{
     
    props.navigation.navigate('EditProduct', {
        id: id,
    })
   }
    return (
        <ScrollView>
        <View style={styles.container} >


            <TouchableOpacity style={styles.card}
                onPress={()=>{
                    EditProductHandler(props.id)
                }}
            >


                <Image style={styles.img} source={{ uri: props.image }} />

                <View style={styles.details}>
                    <Text  style={styles.text}>{props.title}</Text>


                    <Text style={styles.text}> ${props.price.toFixed(2)}</Text>


                    <Text style={styles.text}>Description:</Text>
                    <Text numberOfLines={1}>{props.description}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.btnContainer}>
                <View style={styles.btn}>< Button title="Edit" color="#F0851B"
                    onPress={()=>{
                        EditProductHandler(props.id)
                    }} /></View>
                <View style={styles.btn}><Button color="#F0851B" title="Delete"
                    onPress={() => {
                       dispatch(productActions.deleteProduct(props.id))
                    }} /></View>


            </View>


        </View>
        </ScrollView>
    )
}

export default UserItem

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 280,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14


    },
    btnContainer: {
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20



    },
    btn: {
        padding: 10,
        width: 140,


    },
    card: {

        backgroundColor: '#fef4f4',
        borderRadius: 20,
        elevation: 5,
        marginVertical: 18,

    },
    details: {
        padding: 25
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },


})
