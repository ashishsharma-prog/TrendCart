import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../store/action/cartAction";
import SearchBar from "../SearchBar";
const ProductItem = (props) => {
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <View style={styles.container}>
    
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            props.navigation.navigate("ProductDetails", {
              id: props.id,
              title: props.title,
            });
          }}
        >
          <Image style={styles.img} source={{ uri: props.image }} />

          <View style={styles.details}>
            <Text style={styles.text}>{props.title}</Text>

            <Text style={styles.text}> ${props.price.toFixed(2)}</Text>

            <Text style={styles.text}>Description:</Text>
            <Text numberOfLines={1}>{props.description}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button
              title="Add To Cart"
              color="#F0851B"
              onPress={() => {
                dispatch(cartActions.addToCart(props.itemData));
              }}
            />
          </View>
          <View style={styles.btn}>
            <Button
              color="#F0851B"
              title="View Details"
              onPress={() => {
                props.navigation.navigate("ProductDetails", {
                  id: props.id,
                  title: props.title,
                });
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 280,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  btnContainer: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
  },
  btn: {
    padding: 10,
    width: 140,
  },
  card: {
    backgroundColor: "#fef4f4",
    borderRadius: 20,
    elevation: 5,
    marginVertical: 18,
  },
  details: {
    padding: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
