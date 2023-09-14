import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store.js";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen.js";
import Login from "./screens/Login.js";
import Tambah_jamaah from "./screens/Jamaah/Tambah_jamaah.js";
import Edit_jamaah from "./screens/Jamaah/Edit_jamaah.js";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tambah_jamaah">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Tambah Jamaah"
          component={Tambah_jamaah}
          options={{
            headerStyle: {
              backgroundColor: "#870144",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="Edit Jamaah"
          component={Edit_jamaah}
          options={{
            headerStyle: {
              backgroundColor: "#870144",
            },
            headerTintColor: "white",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "center",
    justifyContent: "center",
  },
});
