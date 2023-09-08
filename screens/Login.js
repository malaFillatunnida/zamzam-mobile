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
import { storeData } from "../Util";

export default function Login({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const login = async () => {
        if (!username || !password) {
            setErrorMessage("* Username dan password tidak boleh kosong!");
            return;
        }

        try {
            const { data, status } = await axios.post(`http://192.168.177.72:9000/users/login`, {
                username: username,
                password: password,
            });

            if (status === 200) {
                // Simpan token ke penyimpanan lokal
                await storeData("access_token", data.access_token);

                // Cetak token ke konsol
                console.log(data.access_token);

                navigation.navigate("Home");

            } else {
                throw new Error("Login bermasalah");
            }
        } catch (err) {
            console.log(err);
            setErrorMessage("Username dan password salah!");
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/login.png")} />
            <Text style={styles.welcome}>
                Retali Travel Umroh <Text style={{ color: "yellow" }}>Sesuai Sunnah</Text>
            </Text>
            <Text style={styles.zamzam}>
                ZAMZAM v2.2.0
            </Text>
            <Text style={styles.version}>
                Current build version 83
                Latest build on
            </Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={setUsername}
                    value={username}
                    placeholder="Username."
                    selectionColor="#870144"
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password."
                    selectionColor="#870144"
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
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: 250,
        height: 250,
    },

    welcome: {
        color: "white",
        fontSize: 26,
        marginBottom: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        textAlign: 'center'
    },

    zamzam: {
        color: 'white'
    },

    version: {
        color: 'white',
        marginBottom: 20,
    },

    inputView: {
        backgroundColor: "white",
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
        marginBottom: 18
    },
});
