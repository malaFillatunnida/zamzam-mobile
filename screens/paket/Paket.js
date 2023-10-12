import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchPaketDataByLimit } from "../../store/actions/PaketActions";
import PaketTable from "../../components/Paket/PaketTable";
import ListHeader from "../../components/Paket/ListHeader";

function Paket() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItemsPerPage, setSelectedItemsPerPage] = useState(5);
  // pakets
  const paketData = useSelector(state => state.paket.paketData);

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

  useEffect(() => {
    dispatch(fetchPaketDataByLimit(currentPage, selectedItemsPerPage));
  }, [dispatch, currentPage, selectedItemsPerPage, paketData]);

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
                data={paketData}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => (<ListHeader />)}
                renderItem={({ item, index }) => (
                  <PaketTable
                    item={item}
                    index={index + (currentPage - 1) * selectedItemsPerPage}
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
                disabled={paketData.length < selectedItemsPerPage}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const mapStateToProps = (state) => ({
  paketData: state.paket.paketData,
});

const mapDispatchToProps = {
  fetchPaketDataByLimit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Paket);

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
  card: {
    backgroundColor: "white",
    elevation: 4,
    marginHorizontal: 10,
    marginVertical: 10,
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
