import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const MyHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color="white"
    />
  );
};

export default MyHeaderButton;

const styles = StyleSheet.create({});
