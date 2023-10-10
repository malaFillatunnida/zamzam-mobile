import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import React from "react";

export default function ListHeader() {
    return (
        <View style={styles.Hrow}>
            <Text style={[styles.Hcell, styles.header, { width: 50 }]}>
                NO
            </Text>
            <Text style={[styles.Hcell, styles.header]}>
                NAMA PAKET
            </Text>
            <Text style={[styles.Hcell, styles.header, { width: 70 }]}>
                HARGA
            </Text>
            <Text style={[styles.Hcell, styles.header]}>UANG MUKA</Text>
            <Text style={[styles.Hcell, styles.header]}>MATA UANG</Text>
            <Text style={[styles.Hcell, styles.header]}>LAMA HARI	</Text>
            <Text style={[styles.Hcell, styles.header, { width: 120 }]}>NAMA TOUR GUIDE</Text>
            <Text style={[styles.Hcell, styles.header]}>
                TIPE PAKET
            </Text>
            <Text style={[styles.Hcell, styles.header]}>JENIS	</Text>
            <Text style={[styles.Hcell, styles.header]}>STATUS</Text>
            <Text style={[styles.Hcell, styles.header]}>CABANG</Text>
            <Text style={[styles.Hcell, styles.header, { width: 50 }]}>PAX</Text>
            <Text style={[styles.Hcell, styles.header, { width: 90 }]}>DAFTAR</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Hrow: {
        flexDirection: "row",
        alignItems: "center",
        padding: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    Hcell: {
        flex: 1,
        padding: 30,
        paddingHorizontal: 15,
        textAlign: "left",
        backgroundColor: "#870144",
        color: "#fff",
    },
    header: {
        fontWeight: "bold",
        padding: 12,
        width: 120,
    },
});
