import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const PlaceItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
      }}
    >
      <Image
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#ccc",
          borderColor: Colors.primary,
          borderWidth: 1,
        }}
        source={{ uri: item.imageUri }}
      />
      <View
        style={{
          marginLeft: 25,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text style={{ color: "black", fontSize: 18 }}>{item.title}</Text>
        <Text style={{ color: "#666", fontSize: 16 }}>{item.address}</Text>
      </View>
    </View>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
