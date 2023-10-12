import { BackHandler, StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import Jamaah from "./Jamaah/Jamaah.js";
import { FontAwesome5 } from "@expo/vector-icons/build/Icons.js";
import Paket from "./paket/Paket.js";


const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    })
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#870144",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name="Data Mitra"
          component={Jamaah}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="edit-off" size={25} color="#870144" />
            ),
          }}
        />
        <Tab.Screen
          name="Data Jamaah"
          component={Jamaah}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                name="user-circle"
                size={25}
                color="#870144"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Data Paket"
          component={Paket}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome
                name="table"
                size={25}
                color="#870144"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Data Kafalah"
          component={Jamaah}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="money-bill" size={24} color="#870144" />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
