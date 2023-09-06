import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Paket() {
    const data = [
        {
            no: 1,
            namaPaket: 'Wisata A',
            harga: '$100',
            uangMuka: '$20',
            mataUang: 'IDR',
            lamaHari: 7,
            namaTourGuide: 'Tour Guide A',
            tipePaket: 'Paket A',
            jenis: 'Jenis A',
            status: 'Aktif',
            cabang: 'Cabang A',
            pnr: 'PNR A',
            pax: 2,
            issued: 'Yes',
            action: 'Action A',
        },
        {
            no: 2,
            namaPaket: 'Wisata A',
            harga: '$100',
            uangMuka: '$20',
            mataUang: 'IDR',
            lamaHari: 7,
            namaTourGuide: 'Tour Guide A',
            tipePaket: 'Paket A',
            jenis: 'Jenis A',
            status: 'Aktif',
            cabang: 'Cabang A',
            pnr: 'PNR A',
            pax: 2,
            issued: 'Yes',
            action: 'Action A',
        },
    ];
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <DataTable>
                    <DataTable.Header style={styles.tableHeader}>
                        <DataTable.Title><Text style={styles.shortColumnHeader}>No</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.columnHeader}>Nama Paket</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.shortColumnHeader}>Harga</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.columnHeader}>Uang Muka</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.columnHeader}>Mata Uang</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.columnHeader}>Lama Hari</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.columnHeader}>Nama Tour Guide</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.columnHeader}>Tipe Paket</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.columnHeader}>Jenis</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.columnHeader}>Status</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.columnHeader}>CABANG</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.shortColumnHeader}>PNR</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.shortColumnHeader}>Pax</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.shortColumnHeader}>Issued</Text></DataTable.Title>
                        <DataTable.Title><Text style={styles.shortColumnHeader}>Action</Text></DataTable.Title>
                    </DataTable.Header>

                    {data.map((item, index) => (
                        <DataTable.Row key={index}>
                            <DataTable.Cell style={styles.shortCell}><Text>{item.no}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.cell}><Text>{item.namaPaket}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.cell}><Text>{item.harga}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.cell}><Text>{item.uangMuka}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.cell}><Text>{item.mataUang}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.cell}><Text>{item.lamaHari}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.cell}><Text>{item.namaTourGuide}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.cell}><Text>{item.tipePaket}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.cell}><Text>{item.jenis}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.cell}><Text>{item.status}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.cell}><Text>{item.cabang}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.shortCell}><Text>{item.pnr}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.shortCell}><Text>{item.pax}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.shortCell}><Text>{item.issued}</Text></DataTable.Cell>
                            <DataTable.Cell style={styles.shortCell}><Text>{item.action}</Text></DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    tableHeader: {
        backgroundColor: '#870144', // Warna latar belakang tabel head
    },
    columnHeader: {
        width: 100,
        marginHorizontal: 8,
        fontWeight: 'bold',
        color: "white",
    },
    shortColumnHeader: {
        width: 60,
        marginHorizontal: 8,
        fontWeight: 'bold',
        color: "white",
    },
    cell: {
        width: 100,
        marginHorizontal: 8,
    },
    shortCell: {
        width: 60,
        marginHorizontal: 8,
    },
    tableRow: {
        borderBottomWidth: 1, // Garis pemisah antar baris
        borderBottomColor: '#e0e0e0', // Warna garis pemisah
    },
});