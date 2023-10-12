import React, { useEffect, useState } from "react";
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
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons/build/Icons";
import SelectDropdown from "react-native-select-dropdown";
import ListHeader from "../../components/Jamaah/ListHeader.js";
import JamaahTable from "../../components/Jamaah/JamaahTable.js";
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchCustomerData } from "../../store/actions/jamaahActions.js";

function Jamaah({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(5);
  // customers
  const customerData = useSelector(state => state.jamaah.customerData);

  const dispatch = useDispatch();

  // Handle perubahan jumlah baris per halaman
  const changeItemsPerPage = (newPerPage) => {
    setSelectedItemsPerPage(newPerPage);
    setCurrentPage(1); // Reset currentPage ke 1 saat mengganti jumlah item per halaman
  };

  const itemsPerPageOptions = ["5", "10", "15", "20"];

  // Function to handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // fungsi untuk menuju ke halaman add jamaah
  const gotoAddJamaah = () => {
    navigation.navigate("Tambah Jamaah");
  };

  useEffect(() => {
    dispatch(fetchCustomerData(currentPage, selectedItemsPerPage));
  }, [dispatch, currentPage, selectedItemsPerPage, customerData]);

  return (
    <ScrollView>
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
                data={customerData}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => (<ListHeader />)}
                renderItem={({ item, index }) => (
                  <JamaahTable
                    item={item}
                    index={index + (currentPage - 1) * selectedItemsPerPage}
                    navigation={navigation}
                  />
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
                    defaultButtonText={selectedItemsPerPage.toString()} // Ubah itemsPerPage menjadi selectedItemsPerPage

                    buttonStyle={styles.buttonPage}
                    buttonTextStyle={{ fontSize: 13 }}
                    renderDropdownIcon={() => (
                      <Text style={{ fontSize: 13 }}>▼</Text>
                    )}
                    dropdownTextStyle={{ fontSize: 15 }}
                    dropdownTextHighlightStyle={{ backgroundColor: "#6E759F" }}
                  />
                </Text>
              </View>

              <Button
                title="<"
                onPress={handlePrevPage}
                color="#6E759F"
                disabled={currentPage === 1}
              />
              <Button
                title=">"
                onPress={handleNextPage}
                color="#870144"
                disabled={customerData.length < selectedItemsPerPage}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = (state) => ({
  customerData: state.jamaah.customerData,
});

const mapDispatchToProps = {
  fetchCustomerData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Jamaah);

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
  card: {
    backgroundColor: "white",
    elevation: 4,
    marginHorizontal: 10,
    padding: 0,
    borderRadius: 4,
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
