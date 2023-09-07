import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Tambah_jamaah({ tambahJamaah }) {
    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [noTelepon, setNoTelepon] = useState('');
    const [selectedPaket, setSelectedPaket] = useState('');
    const [selectedMitra, setSelectedMitra] = useState('');

    const handleSubmit = () => {
        if (!nama || !nik || !noTelepon || !selectedPaket) {
            alert('Ada field yang wajid di isi!');
            return;
        }

        tambahJamaah({ nama, nik, noTelepon, paket: selectedPaket, mitra: selectedMitra });

        setNama('');
        setNik('');
        setNoTelepon('');
        setSelectedPaket('');
        setSelectedMitra('');
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
                    <Picker.Item style={styles.pickerItemStyle} label="Paket A" value="Paket A" />
                    <Picker.Item style={styles.pickerItemStyle} label="Paket B" value="Paket B" />
                    <Picker.Item style={styles.pickerItemStyle} label="Paket C" value="Paket C" />
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
                    <Picker.Item style={styles.pickerItemStyle} label="Mitra A" value="Mitra A" />
                    <Picker.Item style={styles.pickerItemStyle} label="Mitra B" value="Mitra B" />
                    <Picker.Item style={styles.pickerItemStyle} label="Mitra C" value="Mitra C" />
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
        fontSize: 14,
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
