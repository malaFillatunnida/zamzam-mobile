import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { connect, useDispatch, useSelector } from 'react-redux'; // Import connect and useDispatch
import { postCustomerData } from '../../store/Actions/JamaahActions.js';
import { fetchPartners } from '../../store/Actions/MitraActions.js';
import { fetchDataPaket } from '../../store/Actions/PaketActions.js';

function TambahJamaah({ navigation }) {
    const partnerData = useSelector(state => state.mitra.partnerData); // get data mitra
    const paketData = useSelector(state => state.paket.paketData); // get data paket

    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [noTelepon, setNoTelepon] = useState('');
    const [selectedPaket, setSelectedPaket] = useState('');
    const [selectedMitra, setSelectedMitra] = useState('');
    const branch_id = partnerData.map((partner) => partner.branchId).toString();
    const dispatch = useDispatch();

    // add jamaah
    const tambahJamaah = async () => {
        try {
            const formData = {
                icNo: nik,
                mobileNo: noTelepon,
                fullName: nama,
                productId: selectedPaket,
                partnerId: selectedMitra,
                branchId: branch_id, // Isi dengan ID cabang yang sesuai
                gender: true,
                wni: true
            };

            console.log("ini form data", formData);
            await dispatch(postCustomerData(formData));

            Alert.alert("Jamaah successfully added");
            navigation.navigate("Home");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        dispatch(fetchPartners());
        dispatch(fetchDataPaket());
    }, [dispatch]);

    const handleReset = () => {
        setNama('');
        setNik('');
        setNoTelepon('');
        setSelectedPaket('');
        setSelectedMitra('');
    };

    const handleSubmit = () => {
        if (!nama || !nik || !noTelepon || !selectedPaket) {
            alert('Ada field yang wajib diisi!');
            return;
        }

        // Periksa status produk yang dipilih
        const selectedProduct = paketData.find(product => product.id === selectedPaket);
        if (selectedProduct && selectedProduct.status !== 'OPEN') {
            Alert.alert('Maaf', `Produk ${selectedProduct.productName} belum tersedia.`);
            return;
        }

        tambahJamaah();
        handleReset();

    };

    return (
        <View style={styles.container}>
            <Text style={styles.dataPribadi}>Data Pribadi</Text>
            <Text>Nama sesuai NIK *</Text>
            <TextInput
                style={styles.input}
                value={nama}
                onChangeText={text => setNama(text)}
                placeholder="Nama sesuai NIK"
                selectionColor="#870144"
            />
            <Text>NIK *</Text>
            <TextInput
                style={styles.input}
                value={nik}
                onChangeText={text => setNik(text)}
                keyboardType="numeric"
                placeholder="NIK"
                selectionColor="#870144"
            />
            <Text>No Telepon *</Text>
            <TextInput
                style={styles.input}
                value={noTelepon}
                onChangeText={text => setNoTelepon(text)}
                keyboardType="phone-pad"
                placeholder="No Telepon"
                selectionColor="#870144"
            />
            <Text style={styles.keanggotaan}>Keanggotaan</Text>
            <Text>Paket *</Text>
            <View style={styles.inputOption}>
                <Picker
                    selectedValue={selectedPaket}
                    onValueChange={(itemValue, itemIndex) => setSelectedPaket(itemValue)}
                    style={styles.pickerItemStyle}
                >
                    <Picker.Item style={styles.pickerItemPilih} label="Pilih Paket " value="" />
                    {paketData.map((product) => (
                        <Picker.Item
                            key={product.id}
                            style={styles.pickerItemStyle}
                            label={product.productName}
                            value={product.id}
                        />
                    ))}
                </Picker>
            </View>
            <Text>Mitra</Text>
            <View style={styles.inputOption}>
                <Picker
                    selectedValue={selectedMitra}
                    onValueChange={(itemValue, itemIndex) => setSelectedMitra(itemValue)}
                    style={styles.pickerItemStyle}
                >
                    <Picker.Item style={styles.pickerItemPilih} label="Pilih Mitra" value="" />
                    {partnerData.map((partner) => (
                        <Picker.Item
                            key={partner.id}
                            style={styles.pickerItemStyle}
                            label={partner.fullName}
                            value={partner.id}
                        />
                    ))}
                </Picker>
            </View>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
            >
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => ({
    paketData: state.jamaah.paketData,
    partnerData: state.jamaah.partnerData,
    customerData: state.jamaah.customerData
});

const mapDispatchToProps = {
    fetchDataPaket,
    fetchPartners,
    postCustomerData
};

export default connect(mapStateToProps, mapDispatchToProps)(TambahJamaah);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 16,
    },
    dataPribadi: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 17,
        textAlign: 'center',
    },
    keanggotaan: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        fontSize: 17,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 6
    },
    inputOption: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 6,
        height: 48,
        lineHeight: 48
    },
    pickerItemPilih: {
        fontSize: 18,
        color: '#bbb',
    },
    pickerItemStyle: {
        fontSize: 14,
    },
    submitButton: {
        backgroundColor: '#870144',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 5
    },
    submitText: {
        color: 'white',
        fontWeight: 'bold',
        height: 28,
        lineHeight: 28,
    },
});
