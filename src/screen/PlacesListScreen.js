import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import MyHeaderButton from "../components/MyHeaderButton";

export default ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
          <Item
            title="Шинэ газар нэмэх"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => navigation.navigate("NewPlace")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>PlacesList</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
