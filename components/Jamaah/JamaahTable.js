import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons/build/Icons";

export default function JamaahTable({ item, index, navigation }) {
  const gotoEditJamaah = (voucherCode) => {
    navigation.navigate("Edit Jamaah", { voucherCode: voucherCode }, item = { item });
  };

  return (
    <View style={csstyle.row}>
      <Text style={[csstyle.cell, { width: 35, textAlign: "left" }]}>
        {index + 1}
      </Text>
      <Text style={[csstyle.cell, { width: 95, fontWeight: "bold" }]}>
        {item.fullName}
      </Text>
      <Text style={csstyle.cell}>{item.gender ? "Perempuan" : "Laki-laki"}</Text>
      <Text style={csstyle.cell}>{item.productName}</Text>
      <Text style={[csstyle.cell, { width: 95 }]}>{item.mobileNo}</Text>
      <Text style={csstyle.cell}>{item.partnerName}</Text>
      <Text style={csstyle.cell}>{item.branchName}</Text>
      <Text style={[csstyle.cell, { width: 95 }]}>{item.voucherCode}</Text>
      <Text style={[csstyle.cell, { width: 88 }]}>{item.customerStatus}</Text>
      <Text style={csstyle.cell}>
        <View style={csstyle.iconContainer}>
          <TouchableOpacity onPress={() => gotoEditJamaah(item.voucherCode)}>
            <FontAwesome5
              name="pencil-alt"
              size={15}
              color="#870144"
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
          <Feather
            name="printer"
            size={15}
            color="#870144"
            style={{ marginRight: 5 }}
          />
          <MaterialCommunityIcons
            name="credit-card-check-outline"
            size={15}
            color="#870144"
          />
        </View>
      </Text>
    </View>
  );
}
const csstyle = StyleSheet.create({
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
