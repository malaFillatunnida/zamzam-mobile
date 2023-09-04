import { View, Text, FlatList, StyleSheet,ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
// import { instance as axios } from "../Util/api";
// import { getStoreData } from "../Util/Util";
// import Book from "../components/Book";
import { FontAwesome5 } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";


const data = [
    { id: '1', name: 'Faza Sania', jekel: 'Perempuan', paket: 'Paket 1', phoneNumber: '123456789', partner: 'Mitra 1', voucherCode: 'ABC123', status: 'Active' },
    { id: '2', name: 'Mala Fillatunnida', jekel: 'Perempuan', paket: 'Paket 2', phoneNumber: '987654321', partner: 'Mitra 2', voucherCode: 'XYZ789', status: 'Inactive' },
    { id: '3', name: 'Kamilia Qotrunnada', jekel: 'Perempuan', paket: 'Paket 3', phoneNumber: '555555555', partner: 'Mitra 3', voucherCode: 'DEF456', status: 'Active' },
    { id: '4', name: 'Riska Amelia', jekel: 'Perempuan', paket: 'Paket 4', phoneNumber: '111111111', partner: 'Mitra 4', voucherCode: 'GHI789', status: 'Inactive' },
    { id: '5', name: 'Aveecena ', jekel: 'Laki', paket: 'Paket 5', phoneNumber: '999999999', partner: 'Mitra 5', voucherCode: 'JKL123', status: 'Active' },
  ];
  
export default function Jamaah() {
  return (
    <ScrollView horizontal>
    <View style={styles.container}>
      <View style={styles.all}>
      <ScrollView horizontal={true}>
      <DataTable>
        <DataTable.Header style={styles.wid}>
          <DataTable.Title style={styles.id}>NO</DataTable.Title>
          <DataTable.Title style={styles.nama}>NAMA LENGKAP</DataTable.Title>
          <DataTable.Title style={styles.title}>JENIS KELAMIN</DataTable.Title>
          <DataTable.Title style={styles.total}>PAKET</DataTable.Title>
          <DataTable.Title style={styles.borrow}>NO TELP/HP</DataTable.Title>
          <DataTable.Title style={styles.return}>MITRA</DataTable.Title>
          <DataTable.Title style={styles.count}>VOUCHER CODE</DataTable.Title>
          <DataTable.Title style={styles.count}>ACTION</DataTable.Title>
        </DataTable.Header>

        <FlatList
          data={data}
          renderItem={({ item }) => 
          <View>
          <DataTable.Row style={styles.row}>
            <DataTable.Cell style={{ width: 5 }}>{item.id}</DataTable.Cell>
            <DataTable.Cell style={styles.nama}>
              {item.name}
            </DataTable.Cell>
            <DataTable.Cell style={styles.title}>
              {item.jekel}
            </DataTable.Cell>
            <DataTable.Cell style={{ marginLeft: 25 }}>
              {item.paket}
            </DataTable.Cell>
            <DataTable.Cell style={styles.total}>
              {" "}
              {item.phoneNumber}
            </DataTable.Cell>
            <DataTable.Cell style={styles.borrow}>
              {" "}
              {item.partner}
            </DataTable.Cell>
            <DataTable.Cell style={styles.borrow}>
              {" "}
              {item.voucherCode}
            </DataTable.Cell>
            <DataTable.Cell style={styles.borrow}>
              {" "}
              {item.status}
            </DataTable.Cell>
         
          </DataTable.Row>
        </View>
        }
          keyExtractor={(item, index) => index}
        />
      </DataTable>
    </ScrollView>
     
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     // padding: 10,
    //     top:50
    //   },
    //   Hrow: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     // padding: 10,
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#ccc',
    //   },
    //   row: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     padding: 5,
    //     borderBottomWidth: 1,
    //     borderBottomColor: '#ccc',
    //   },
    //   cell: {
    //     flex: 1,
    //     padding: 5,
    //     textAlign: 'center',
    //     paddingHorizontal: 10,
    //   },
    //   Hcell: {
    //     flex: 1,
    //     padding: 3,
    //     paddingHorizontal: 10,
    //     textAlign: 'center',
    //     backgroundColor:"#870144"
    //   },
    //   header: {
    //     fontWeight: 'bold',
    //     padding:3
    //   },
    //   specialHeaderText: {
    //     width: 50,
    //   },


      nama: {
        width: 30,
      },
      wid: {
        width: 600,
      },
  });
