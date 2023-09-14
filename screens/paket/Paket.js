import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Dimensions,
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
import { getStoreData } from "../../util/util";
import { instance as axios } from "../../util/api";

export default function Paket() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default value

  // Paket
  const [paketData, setPaketData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Handle perubahan jumlah baris per halaman
  const changeItemsPerPage = (newPerPage) => {
    setItemsPerPage(newPerPage);

  };
  const itemsPerPageOptions = ["5", "10", "20"];

  // Calculate the start and end indexes for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data to display only the rows for the current page
  const pageData = paketData.slice(startIndex, endIndex);

  // Function to handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(paketData.length / itemsPerPage);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const fetchDataPaket = async () => {
    try {

      // Mengirim permintaan GET dengan Axios
      const response = await axios.get('/products', {
        headers: {
          Authorization: `Bearer ${await getStoreData("access_token")}`,
        },
      });

      // Menggunakan data dari response
      setPaketData(response.data);
      // console.log(response.data);
      setLoading(false);
    } catch (error) {
      // Handle error dengan benar
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataPaket();
  }, []);


  return (
        <ScrollView vertical={true} >
    <View>
      <View style={styles.head}>
        <Text style={{ fontSize: 18, fontWeight: "bold", top: 4 }}>
          Daftar Paket
        </Text>
      </View>
      <View style={styles.card}>
        <ScrollView horizontal={true} style={{ width: "auto" }}>
          <View style={styles.container}>
            {/* Search */}
            <View style={styles.searchContainer}>
              {/* Kotak Pencarian */}
              <TextInput
                style={styles.searchInput}
                placeholder="Cari Nama Paket"
                autoFocus={false}
              />
             
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
                  {/* <Text style={[styles.Hcell, styles.header]}>ACTION</Text> */}
                </View>
              )}
              renderItem={({ item, index}) => (
                <View style={styles.row}>
                  <Text style={[styles.cell, { width: 40, textAlign: "left" }]}>
                    {index + 1}
                  </Text>
                  <Text style={[styles.cell, { width: 100 }]}>{item.productName}</Text>
                  <Text style={[styles.cell,{ width: 70 }]}>{item.price}</Text>
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
                  {/* <Text style={styles.cell}>
                    <View style={styles.iconContainer}>
                      <FontAwesome5
                        name="pencil-alt"
                        size={15}
                        color="#870144"
                        style={{ marginRight: 1 }}
                      />
                      <Feather
                        name="printer"
                        size={15}
                        color="#870144"
                        style={{ marginRight: 1 }}
                      />
                      <MaterialCommunityIcons
                        name="credit-card-check-outline"
                        size={15}
                        color="#870144"
                      />
                    </View>
                  </Text> */}
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
                currentPage === Math.ceil(paketData.length / itemsPerPage) - 1
              }
            />
          </View>
        </View>
      </View>
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flex: 1,
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
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
    width: 100,
  },
  cell: {
    flex: 1,
    padding: 3,
    textAlign: "left",
    paddingHorizontal: 10,
    fontSize: 15,
    width: 100,
  },
  card: {
    backgroundColor: "white",
    elevation: 4, // Efek shadow kartu
    marginHorizontal: 10,
    marginVertical:10,
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
