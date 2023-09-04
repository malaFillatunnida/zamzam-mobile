import { StyleSheet } from "react-native";
// import { Provider } from "react-redux";
// import store from "./store";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Login";
// import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        /> */}

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
