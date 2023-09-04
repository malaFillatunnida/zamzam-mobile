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
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const login = async () => {
    //     try {
    //         const { data, status } = await axios.post(`/login`, {
    //             email: email,
    //             password: password,
    //         });

    //         if (status === 200) {
    //             storeData("token", data.token);
    //             // storeData("role", data.userData.role);
    //             // console.log(data.userData.role);

    //             navigation.navigate("Home");

    //             const idUser = data.userData.id;
    //             storeData("id", idUser.toString());
    //         } else {
    //             throw new Error("Login bermasalah");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //         Alert.alert("Error login");
    //     }
    // };

    // const registerPage = () => {
    //     navigation.navigate("Register");
    // };

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Login your Account.</Text>
            {/* <Image style={styles.image} source={require("../assets/login.png")} />
            <Text style={styles.welcome}>Login your Account.</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    // onChangeText={setEmail}
                    // value={email}
                    placeholder="Email."
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={setPassword}
                    // value={password}
                    // secureTextEntry={true}
                    placeholder="Password."
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}
            // onPress={login}
            >
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.acount}>
                <Text style={styles.dont}>Don't have an account ? </Text>
                <TouchableOpacity>
                    <Text style={styles.registerText}
                    // onPress={registerPage}
                    >
                        Register
                    </Text>
                </TouchableOpacity>
            </View> */}
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
        color: "#B22222",
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
        backgroundColor: "#B22222",
    },

    loginText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "white",
    },

    acount: {
        flexDirection: "row",
        marginTop: 20,
    },

    registerText: {
        color: "#B22222",
        textDecorationLine: "underline",
    },
});
