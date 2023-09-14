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
import { getStoreData } from "../../util/util.js";
import { instance as axios } from "../../util/api.js";


export default function Jamaah({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default value
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(itemsPerPage);
  // customers
  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState(true);


  // Handle perubahan jumlah baris per halaman
  const changeItemsPerPage = (newPerPage) => {
  setSelectedItemsPerPage(newPerPage); // Perbarui selectedItemsPerPage
  setItemsPerPage(newPerPage); // Perbarui itemsPerPage
  };
  const itemsPerPageOptions = ["5", "10", "20"];

  // Calculate the start and end indexes for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the customerData to display only the rows for the current page
  const pageData = customerData.slice(startIndex, endIndex);

  // Function to handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    const totalPages = Math.ceil(customerData.length / itemsPerPage);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const gotoAddJamaah = () => {
    navigation.navigate("Tambah Jamaah");
  };
  const gotoEditJamaah = () => {
    navigation.navigate("Edit Jamaah");
  };


  // Fungsi untuk mengambil data dengan token dari AsyncStorage
  const fetchData = async () => {
    try {

      // Mengirim permintaan GET dengan Axios
      const response = await axios.get('/customers', {
        headers: {
          Authorization: `Bearer ${await getStoreData("access_token")}`,
        },
      });

      // Menggunakan data dari response
      setCustomerData(response.data);
      // console.log(response.data);
      setLoading(false);
    } catch (error) {
      // Handle error dengan benar
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



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
              renderItem={({ item, index }) => (
                <View style={styles.row}>
                  <Text style={[styles.cell, { width: 35, textAlign: "left" }]}>
                  {index + 1}
                  </Text>
                  <Text style={[styles.cell, { width: 95, fontWeight: "bold"}]}>{item.fullName}</Text>
                  <Text style={styles.cell}>
                  {item.gender ? "Perempuan" : "Laki-laki"}
                  </Text>
                  <Text style={styles.cell}>{item.productName}</Text>
                  <Text style={[styles.cell, { width: 95 }]}>{item.mobileNo}</Text>
                  <Text style={styles.cell}>{item.partnerName}</Text>
                  <Text style={styles.cell}>{item.branchName}</Text>
                  <Text style={[styles.cell, { width: 95 }]}>
                    {item.voucherCode}
                  </Text>
                  <Text style={[styles.cell, { width: 88 }]}>
                    {item.customerStatus}
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
                  // defaultButtonText={itemsPerPage} // Text pada tombol dropdown
                  defaultButtonText={selectedItemsPerPage.toString()} // Ubah itemsPerPage menjadi selectedItemsPerPage

                  buttonStyle={styles.buttonPage}
                  buttonTextStyle={{ fontSize: 13}}
                  renderDropdownIcon={() => (
                    <Text style={{ fontSize: 13 }}>▼</Text>
                  )}
                  dropdownTextStyle={{ fontSize: 15   }}
                  dropdownTextHighlightStyle={{ backgroundColor: "#6E759F" }}
                />
              </Text>
            </View>

            <Button
              title="<"
              onPress={handlePrevPage}
              // buttonStyle={{ height: 5 }}
              color="#6E759F"
              disabled={currentPage === 0}
            />
            <Button
              title=">"
              onPress={handleNextPage}
              // buttonStyle={{ height: 5 }}
              color="#870144"
              disabled={
                currentPage === Math.ceil(customerData.length / itemsPerPage) - 1
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
  buttonPage: {
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 55,
    elevation: 2
  },
});
