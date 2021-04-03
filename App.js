import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PlacesListScreen from "./src/screen/PlacesListScreen";
import NewPlaceScreen from "./src/screen/NewPlaceScreen";
import PlaceDetailScreen from "./src/screen/PlaceDetailScreen";
import MapScreen from "./src/screen/MapScreen";
import { initDB, insertPlace, getPlaces, clearPlaces } from "./src/helpers/db";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    initDB()
      .then((result) => {
        (async () => {
          console.log("Өгөгдлүүдийг баазд хийх гэж байна...");
          await insertPlace("Кофе", "file://hello.jpg", "хаяг", 23.12, -33.233);
          await insertPlace(
            "Бассейн",
            "file://bassein.jpg",
            "хаяг",
            33.12,
            -22.233
          );
          const result = await getPlaces();
          console.log("Үр дүн: ", result.rows._array);
          await clearPlaces();
        })();
        console.log("Баазыг бэлтгэж дууслаа...");
      })
      .catch((err) => console.log("Баазыг бэлтгэхэд асуудал гарлаа!", err));
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Places"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: 22,
          },
        }}
      >
        <Stack.Screen name="Places" component={PlacesListScreen} />
        <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
        <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
