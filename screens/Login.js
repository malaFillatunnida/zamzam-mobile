import axios from "axios";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";

export default function Login({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = async () => {
        if (!username || !password) {
            setErrorMessage("* Username and password cannot be empty!");
            return;
        }

        try {
            const { data, status } = await axios.post(`http://192.168.137.73:8081/users/login`, {
                username: username,
                password: password,
            });

            if (status === 200) {
                localStorage.setItem('token', data.token);
                // console.log(data.token);
                navigation.navigate("HomeScreen");

            } else {
                throw new Error("Login bermasalah");
            }
        } catch (err) {
            console.log(err);
            // Alert.alert("Error login");
            setErrorMessage("Error login");
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/login.png")} />
            <Text style={styles.welcome}>Login your Account.</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="Username."
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password."
                />
            </View>
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <TouchableOpacity style={styles.loginBtn}
                onPress={login}
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: 250,
        height: 250,
    },

    welcome: {
        color: "#870144",
        fontSize: 22,
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#2222",
        borderRadius: 5,
        width: "80%",
        height: 50,
        marginBottom: 20,
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginTop: 10,
    },

    loginBtn: {
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: "#870144",
    },

    loginText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
    },

    errorMessage: {
        color: "red",
        fontWeight: 'bold',
    },
});
