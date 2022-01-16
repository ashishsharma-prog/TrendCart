import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../store/action/productAction";
const EditScreen = ({ navigation, route }) => {
  const productId = route.params?.id;
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === productId)
  );
  const [title, setTitle] = useState(editedProduct ? editedProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ""
  );
  const [price, setPrice] = useState(editedProduct ? editedProduct.price : "");
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ""
  );
  const dispatch = useDispatch();
  const SubmitHandler = () => {
    if (editedProduct) {
      dispatch(
        productActions.updateProduct(productId, title, imageUrl, description)
      );
      navigation.navigate("Product");
    } else {
      dispatch(
        productActions.createProduct(title, imageUrl, description, +price)
      );
      navigation.navigate("Product");
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#F0851B",
      },

      title: productId ? "Edit Product" : "Add Product",
      headerRight: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity style={{ marginRight: 20 }} onPress={SubmitHandler}>
            <AntDesign name="save" size={30} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  });
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            type="title"
            autoFocus
            onChangeText={(text) => setTitle(text)}
            placeholder="Enter Your Title"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image Url</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            type="image"
            onChangeText={(text) => setImageUrl(text)}
            placeholder="Enter Product Image Url"
            placeholderTextColor="grey"
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              keyboardType="numeric"
              onChangeText={(text) => setPrice(text)}
              placeholder="Enter Product Price"
              placeholderTextColor="grey"
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            style={styles.input}
            value={description}
            type="text"
            onChangeText={(text) => setDescription(text)}
            placeholder="Enter Product Description"
            placeholderTextColor="grey"
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
