import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function ListHeader() {
  return (
    <View style={styles.Hrow}>
      <Text style={[styles.Hcell, styles.header, { width: 50 }]}>
        NO
      </Text>
      <Text style={[styles.Hcell, styles.header]}>
        NAMA LENGKAP
      </Text>
      <Text style={[styles.Hcell, styles.header]}>
        JENIS KELAMIN
      </Text>
      <Text style={[styles.Hcell, styles.header]}>NAMA PAKET</Text>
      <Text style={[styles.Hcell, styles.header]}>NO TELP/HP</Text>
      <Text style={[styles.Hcell, styles.header]}>MITRA</Text>
      <Text style={[styles.Hcell, styles.header]}>
        VOUCHER CODE
      </Text>
      <Text style={[styles.Hcell, styles.header]}>STATUS</Text>
      <Text style={[styles.Hcell, styles.header]}>ACTION</Text>
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
