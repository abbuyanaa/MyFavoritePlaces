import React from "react";

import { useDispatch } from "react-redux";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { addPlace } from "../store/places-actions";
import ImagePicker from "../components/ImagePicker";

const NewPlaceScreen = (props) => {
  const dispatch = useDispatch();
  const [place, setPlace] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState();

  const savePlace = () => {
    dispatch(addPlace(place, selectedImage));
    props.navigation.goBack();
  };
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text style={{ marginVertical: 15 }}>Газрын нэрийг оруул</Text>

      <TextInput
        value={place}
        onChangeText={(text) => setPlace(text)}
        style={{
          marginBottom: 15,
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
          paddingHorizontal: 2,
          paddingVertical: 4,
        }}
      />

      <ImagePicker
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

      <View style={{ paddingHorizontal: 110 }}>
        <Button title="Хадгал" onPress={savePlace} />
      </View>
    </View>
  );
};

export default NewPlaceScreen;

const styles = StyleSheet.create({});
