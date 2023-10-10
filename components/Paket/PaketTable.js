import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PaketTable({ item, index }) {
    return (
        <View style={styles.row}>
            <Text style={[styles.cell, { width: 40, textAlign: "left" }]}>
                {index + 1}
            </Text>
            <Text style={[styles.cell, { width: 100 }]}>{item.productName}</Text>
            <Text style={[styles.cell, { width: 70 }]}>{item.price}</Text>
            <Text style={styles.cell}>{item.downPayment}</Text>
            <Text style={styles.cell}>{item.currency}</Text>
            <Text style={[styles.cell, { width: 80 }]}>{item.lengthOfJourney}</Text>
            <Text style={[styles.cell, { width: 120 }]}>{item.lengthOfJourney}</Text>
            <Text style={[styles.cell, { width: 95 }]}>
                {item.productType.typeName}
            </Text>
            <Text style={[styles.cell]}>
                {item.jenis}
            </Text>
            <Text style={[styles.cell, { width: 90 }]}>
                {item.status}
            </Text>
            <Text style={[styles.cell, { width: 105 }]}>
                {item.branch.name}
            </Text>
            <Text style={[styles.cell, { width: 50 }]}>
                {item.pax}
            </Text>
            <Text style={[styles.cell, { width: 70 }]}>
                {item.issued}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    cell: {
        flex: 1,
        padding: 3,
        textAlign: "left",
        paddingHorizontal: 10,
        fontSize: 15,
        width: 105,
    },
    iconContainer: {
        flexDirection: "row",
        marginLeft: 10,
    },
});
