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
import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons/build/Icons";
import SelectDropdown from "react-native-select-dropdown";

const data = [
  {
    id: "1",
    name: "Faza Sania",
    jekel: "Perempuan",
    paket: "Paket 1",
    phoneNumber: "123456789",
    partner: "Mitra 1",
    cabang: "Cabang Jakarta",
    voucherCode: "ABC123",
    status: "Active",
  },
  {
    id: "2",
    name: "Mala Fillatunnida",
    jekel: "Perempuan",
    paket: "Paket 2",
    phoneNumber: "987654321",
    partner: "Mitra 2",
    cabang: "Cabang Jakarta",
    voucherCode: "XYZ789",
    status: "Inactive",
  },
  {
    id: "3",
    name: "Kamilia Qotrunnada",
    jekel: "Perempuan",
    paket: "Paket 3",
    phoneNumber: "555555555",
    partner: "Mitra 3",
    cabang: "Cabang Jakarta",
    voucherCode: "DEF456",
    status: "Active",
  },
  {
    id: "4",
    name: "Riska Amelia",
    jekel: "Perempuan",
    paket: "Paket 4",
    phoneNumber: "111111111",
    partner: "Nurjana Wahidudin",
    cabang: "Cabang Jakarta",
    voucherCode: "GHI789",
    status: "Inactive",
  },
  {
    id: "5",
    name: "Aveecena ",
    jekel: "Laki",
    paket: "Paket 5",
    phoneNumber: "999999999",
    partner: "Syahla Azifatul 5",
    cabang: "Cabang Jakarta",
    voucherCode: "JKL123",
    status: "Active",
  },
  {
    id: "6",
    name: "Aveecena ",
    jekel: "Laki",
    paket: "Paket 5",
    phoneNumber: "999999999",
    partner: "Syahla Azifatul 5",
    cabang: "Cabang Jakarta",
    voucherCode: "JKL123",
    status: "Active",
  },
  {
    id: "7",
    name: "Aveecena ",
    jekel: "Laki",
    paket: "Paket 5",
    phoneNumber: "999999999",
    partner: "Syahla Azifatul 5",
    cabang: "Cabang Jakarta",
    voucherCode: "JKL123",
    status: "Active",
  },
  {
    id: "8",
    name: "Aveecena ",
    jekel: "Laki",
    paket: "Paket 5",
    phoneNumber: "999999999",
    partner: "Syahla Azifatul 5",
    cabang: "Cabang Jakarta",
    voucherCode: "JKL123",
    status: "Active",
  },
  {
    id: "9",
    name: "Aveecena ",
    jekel: "Laki",
    paket: "Paket 5",
    phoneNumber: "999999999",
    partner: "Syahla Azifatul 5",
    cabang: "Cabang Jakarta",
    voucherCode: "JKL123",
    status: "Active",
  },
  {
    id: "10",
    name: "Aveecena ",
    jekel: "Laki",
    paket: "Paket 5",
    phoneNumber: "999999999",
    partner: "Syahla Azifatul 5",
    cabang: "Cabang Jakarta",
    voucherCode: "JKL123",
    status: "Active",
  },
];

const itemsPerPage = 2; // Number of rows per page

export default function Jamaah({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default value

  // Handle perubahan jumlah baris per halaman
  const changeItemsPerPage = (newPerPage) => {
    setItemsPerPage(newPerPage);

  };
  const itemsPerPageOptions = ["5", "10", "20"];

  // Calculate the start and end indexes for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data to display only the rows for the current page
  const pageData = data.slice(startIndex, endIndex);

  // Function to handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const buttonColor = "#870144";

  const gotoAddJamaah = () => {
    navigation.navigate("Tambah Jamaah");
  };

  const gotoEditJamaah = () => {
    navigation.navigate("Edit Jamaah");
  };

  return (
    <View>
      <View style={styles.head}>
        <Text style={{ fontSize: 18, fontWeight: "bold", top: 4 }}>
          Daftar Jamaah
        </Text>
        <TouchableOpacity
          onPress={gotoAddJamaah}
          style={styles.buttonContainer}
        >
          <View>
            <AntDesign name="plus" size={14} color="#fff" />
          </View>
          <Text style={styles.buttonText}>Tambah Jamaah</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <ScrollView horizontal={true} style={{ width: "auto" }}>
          <View style={styles.container}>
            {/* Search */}
            <View style={styles.searchContainer}>
              {/* Kotak Pencarian */}
              <TextInput
                style={styles.searchInput}
                placeholder="Cari Nama Lengkap"
                autoFocus={false}
              />
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name="image-search"
                  style={styles.icons}
                  size={20}
                  color="#870144"
                />
                <MaterialIcons
                  name="person-search"
                  style={styles.icons}
                  size={20}
                  color="#870144"
                />
                <MaterialCommunityIcons
                  name="text-search"
                  style={styles.icons}
                  size={20}
                  color="#870144"
                />
              </View>
            </View>
            <FlatList
              data={pageData}
              keyExtractor={(item) => item.id.toString()}
              ListHeaderComponent={() => (
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
                  <Text style={[styles.Hcell, styles.header]}>CABANG</Text>
                  <Text style={[styles.Hcell, styles.header]}>
                    VOUCHER CODE
                  </Text>
                  <Text style={[styles.Hcell, styles.header]}>STATUS</Text>
                  <Text style={[styles.Hcell, styles.header]}>ACTION</Text>
                </View>
              )}
              renderItem={({ item }) => (
                <View style={styles.row}>
                  <Text style={[styles.cell, { width: 40, textAlign: "left" }]}>
                    {item.id}
                  </Text>
                  <Text style={[styles.cell, { width: 100 }]}>{item.name}</Text>
                  <Text style={styles.cell}>{item.jekel}</Text>
                  <Text style={styles.cell}>{item.paket}</Text>
                  <Text style={[styles.cell, { width: 95 }]}>{item.phoneNumber}</Text>
                  <Text style={styles.cell}>{item.partner}</Text>
                  <Text style={styles.cell}>{item.cabang}</Text>
                  <Text style={[styles.cell, { width: 95 }]}>
                    {item.voucherCode}
                  </Text>
                  <Text style={[styles.cell, { width: 88 }]}>
                    {item.status}
                  </Text>
                  <Text style={styles.cell}>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity onPress={gotoEditJamaah}>
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
              )}
            />
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            margin: 8,
          }}
        >
          <View style={styles.iconContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex",
                alignItems: "center",
                height: 30,
              }}
            >
              <Text>Rows per page</Text>
              <Text style={{ marginHorizontal: 5 }}>
                <SelectDropdown
                  data={itemsPerPageOptions}
                  onSelect={(selectedItem, index) => {
                    changeItemsPerPage(parseInt(selectedItem));
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item;
                  }}
                  defaultButtonText={itemsPerPage} // Text pada tombol dropdown
                  buttonStyle={{
                    height: 32,
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    width: 48,
                    elevation: 2,
                  }}
                  buttonTextStyle={{ fontSize: 12 }}
                  renderDropdownIcon={() => (
                    <Text style={{ fontSize: 13 }}>▼</Text>
                  )}
                  dropdownTextStyle={{ fontSize: 20 }}
                  dropdownTextHighlightStyle={{ backgroundColor: "#6E759F" }}
                />
              </Text>
            </View>

            <Button
              title="<"
              onPress={handlePrevPage}
              buttonStyle={{ height: 5 }}
              color="#6E759F"
              disabled={currentPage === 0}
            />
            <Button
              title=">"
              onPress={handleNextPage}
              buttonStyle={{ height: 5 }}
              color="#870144"
              disabled={
                currentPage === Math.ceil(data.length / itemsPerPage) - 1
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 18,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  Hrow: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
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
  cell: {
    flex: 1,
    padding: 3,
    textAlign: "left",
    paddingHorizontal: 10,
    fontSize: 15,
    width: 105
  },
  card: {
    backgroundColor: "white",
    elevation: 4, // Efek shadow kartu
    marginHorizontal: 10,
    padding: 0,
    borderRadius: 4,
    //   paddingBottom:10
  },
  searchInput: {
    height: 30,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  icons: {
    padding: 10,
  },
  iconAction: {
    flexDirection: "row",
  },
  head: {
    margin: 20,
    fontWeight: "bold",
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#870144",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
