import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PlacesListScreen from "./src/screen/PlacesListScreen";
import NewPlaceScreen from "./src/screen/NewPlaceScreen";
import PlaceDetailScreen from "./src/screen/PlaceDetailScreen";
import MapScreen from "./src/screen/MapScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Places">
        <Stack.Screen name="Places" component={PlacesListScreen} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
        <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
