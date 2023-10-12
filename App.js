import { StyleSheet } from "react-native";
import { Provider } from 'react-redux';
import store from './store/store.js'; // Import your Redux store
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen.js";
import Login from "./screens/Auth/Login.js";
import EditJamaah from "./screens/Jamaah/EditJamaah.js";
import UploadDetail from "./screens/Jamaah/UploadDetail.js";
import TambahJamaah from "./screens/Jamaah/TambahJamaah.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
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
            component={TambahJamaah}
            options={{
              headerStyle: {
                backgroundColor: "#870144",
              },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="Edit Jamaah"
            component={EditJamaah}
            options={{
              headerStyle: {
                backgroundColor: "#870144",
              },
              headerTintColor: "white",
            }}
          />

          <Stack.Screen
            name="Upload Detail"
            component={UploadDetail}
            options={{
              headerStyle: {
                backgroundColor: "#870144",
              },
              headerTintColor: "white",
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
