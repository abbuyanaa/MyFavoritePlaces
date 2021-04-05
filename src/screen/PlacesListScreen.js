import React from "react";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Item, HeaderButtons } from "react-navigation-header-buttons";
import MyHeaderButton from "../components/MyHeaderButton";
import PlaceItem from "../components/PlaceItem";
import { loadPlaces } from "../store/places-actions";

export default ({ navigation }) => {
  const places = useSelector((state) => state.data.places);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadPlaces());
  }, []);

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
      {places && (
        <FlatList
          data={places}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(data) => <PlaceItem item={data.item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
