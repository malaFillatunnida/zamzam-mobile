import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, CheckBox, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Switch } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";

export default function Edit_jamaah({ navigation, editJamaah }) {
    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [noTelepon, setNoTelepon] = useState('');
    const [selectedPaket, setSelectedPaket] = useState('');
    const [selectedMitra, setSelectedMitra] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [switchOnGender, setSwitchOnGender] = useState(false);
    const [switchOnWarga, setSwitchOnWarga] = useState(false);
    const genderText = switchOnGender ? 'Perempuan' : 'Laki-laki';
    const warga = switchOnWarga ? 'WNI' : 'WNA';
    const [postImage, setPostImage] = useState(null);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        async function requestMediaLibraryPermissions() {
            if (Platform.OS !== 'web') {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Permintaan ditolak');
                }
            }
        }
        requestMediaLibraryPermissions();
    }, []);

    const PickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.cancelled) {
            const imageUri = result.assets[0].uri;
            // console.log(imageUri);
            setPostImage(imageUri);
        }
    };

    const gotoUploadDetail = () => {
        if (postImage) {
            navigation.navigate('Upload Detail', { imageUri: postImage });
        }
    };

    const handleSubmit = () => {
        if (!nama || !nik || !noTelepon || !selectedPaket) {
            alert('Ada field yang wajid di isi!');
            return;
        }

        editJamaah({ nama, nik, noTelepon, paket: selectedPaket, mitra: selectedMitra });

        setNama('');
        setNik('');
        setNoTelepon('');
        setSelectedPaket('');
        setSelectedMitra('');
    };

    return (
        <View style={styles.container}>
            {/* Checkbox */}
            <ScrollView>
                <ScrollView horizontal={true} style={styles.checklist}>
                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={handleToggle}>
                            <View style={styles.checkboxAndText}>
                                <View style={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}>
                                    {isChecked && <Text style={styles.checkIcon}>&#10003;</Text>}
                                </View>
                                <Text style={styles.checkboxLabel}>Registrasi</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity onPress={handleToggle}>
                            <View style={styles.checkboxAndText}>
                                <View style={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}>
                                    {isChecked && <Text style={styles.checkIcon}>&#10003;</Text>}
                                </View>
                                <Text style={styles.checkboxLabel}>Pelunasan</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity onPress={handleToggle}>
                            <View style={styles.checkboxAndText}>
                                <View style={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}>
                                    {isChecked && <Text style={styles.checkIcon}>&#10003;</Text>}
                                </View>
                                <Text style={styles.checkboxLabel}>Manasik</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity onPress={handleToggle}>
                            <View style={styles.checkboxAndText}>
                                <View style={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}>
                                    {isChecked && <Text style={styles.checkIcon}>&#10003;</Text>}
                                </View>
                                <Text style={styles.checkboxLabel}>Siskopatuh</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity onPress={handleToggle}>
                            <View style={styles.checkboxAndText}>
                                <View style={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}>
                                    {isChecked && <Text style={styles.checkIcon}>&#10003;</Text>}
                                </View>
                                <Text style={styles.checkboxLabel}>Perlengkapan</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity onPress={handleToggle}>
                            <View style={styles.checkboxAndText}>
                                <View style={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}>
                                    {isChecked && <Text style={styles.checkIcon}>&#10003;</Text>}
                                </View>
                                <Text style={styles.checkboxLabel}>Take Off</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.horizontalLine} />
                        <TouchableOpacity onPress={handleToggle}>
                            <View style={styles.checkboxAndText}>
                                <View style={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked}>
                                    {isChecked && <Text style={styles.checkIcon}>&#10003;</Text>}
                                </View>
                                <Text style={styles.checkboxLabel}>Completed</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={{ marginBottom: 40 }}>
                    {/* Data Pribadi */}
                    <Text style={styles.title}>Data Pribadi</Text>
                    <Text>Nama sesuai NIK *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setNama(text)}
                        placeholder="Nama sesuai NIK"
                        selectionColor="#870144"
                    />
                    <Text>NIK *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setNik(text)}
                        keyboardType="numeric"
                        placeholder="NIK"
                        selectionColor="#870144"
                    />
                    <Text>No Telepon *</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setNoTelepon(text)}
                        keyboardType="phone-pad"
                        placeholder="No Telepon"
                        selectionColor="#870144"
                    />
                    <Text>Tanggal Lahir</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNoTelepon(text)}
                        keyboardType="numeric"
                        placeholder="YYYY-MM-DD"
                        selectionColor="#870144"
                    />
                    <Text style={{ marginTop: 5 }}>Jenis Kelamin</Text>
                    <View style={styles.toggle}>
                        <Switch
                            value={switchOnGender}
                            onValueChange={() => {
                                setSwitchOnGender(!switchOnGender);
                            }}
                            thumbColor={switchOnGender ? '#870144' : '#fff'}
                            trackColor={{ false: '#ddd', true: '#ddd' }}
                        />
                        <Text style={styles.genderText}>{genderText}</Text>
                    </View>
                    <Text style={{ marginTop: 10 }}>Kewarganegaraan</Text>
                    <View style={styles.toggle}>
                        <Switch
                            value={switchOnWarga}
                            onValueChange={() => {
                                setSwitchOnWarga(!switchOnWarga);
                            }}
                            thumbColor={switchOnWarga ? '#870144' : '#fff'}
                            trackColor={{ false: '#ddd', true: '#ddd' }}
                        />
                        <Text style={styles.genderText}>{warga}</Text>
                    </View>
                    <Text>Tempat Lahir</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Tempat Lahir"
                        selectionColor="#870144"
                    />
                    <Text>Pendidikan</Text>
                    <View style={styles.inputOption}>
                        <Picker
                            selectedValue={selectedPaket}
                            // onValueChange={(itemValue, itemIndex) => setSelectedPaket(itemValue)}
                            style={styles.pickerItemStyle}
                        >
                            <Picker.Item style={styles.pickerItemPilih} label="Pilih Pendidikan" value="" />
                            <Picker.Item style={styles.pickerItemStyle} label="Pendidikan A" value="Pendidikan A" />
                            <Picker.Item style={styles.pickerItemStyle} label="Pendidikan B" value="Pendidikan B" />
                            <Picker.Item style={styles.pickerItemStyle} label="Pendidikan C" value="Pendidikan C" />
                        </Picker>
                    </View>
                    <Text>Pekerjaan</Text>
                    <View style={styles.inputOption}>
                        <Picker
                            selectedValue={selectedPaket}
                            // onValueChange={(itemValue, itemIndex) => setSelectedPaket(itemValue)}
                            style={styles.pickerItemStyle}
                        >
                            <Picker.Item style={styles.pickerItemPilih} label="Pilih Pekerjaan" value="" />
                            <Picker.Item style={styles.pickerItemStyle} label="Pekerjaan A" value="Pekerjaan A" />
                            <Picker.Item style={styles.pickerItemStyle} label="Pekerjaan B" value="Pekerjaan B" />
                            <Picker.Item style={styles.pickerItemStyle} label="Pekerjaan C" value="Pekerjaan C" />
                        </Picker>
                    </View>
                    <Text>Status Pernikahan</Text>
                    <View style={styles.inputOption}>
                        <Picker
                            selectedValue={selectedPaket}
                            // onValueChange={(itemValue, itemIndex) => setSelectedPaket(itemValue)}
                            style={styles.pickerItemStyle}
                        >
                            <Picker.Item style={styles.pickerItemPilih} label="Pilih Status Pernikahan" value="" />
                            <Picker.Item style={styles.pickerItemStyle} label="Status Pernikahan A" value="Status Pernikahan A" />
                            <Picker.Item style={styles.pickerItemStyle} label="Status Pernikahan B" value="Status Pernikahan B" />
                            <Picker.Item style={styles.pickerItemStyle} label="Status Pernikahan C" value="Status Pernikahan C" />
                        </Picker>
                    </View>
                    <Text>Hubungan Mahram</Text>
                    <View style={styles.inputOption}>
                        <Picker
                            selectedValue={selectedPaket}
                            // onValueChange={(itemValue, itemIndex) => setSelectedPaket(itemValue)}
                            style={styles.pickerItemStyle}
                        >
                            <Picker.Item style={styles.pickerItemPilih} label="Pilih Hubungan Mahram" value="" />
                            <Picker.Item style={styles.pickerItemStyle} label="Hubungan Mahram A" value="Hubungan Mahram A" />
                            <Picker.Item style={styles.pickerItemStyle} label="Hubungan Mahram B" value="Hubungan Mahram B" />
                            <Picker.Item style={styles.pickerItemStyle} label="Hubungan Mahram C" value="Hubungan Mahram C" />
                        </Picker>
                    </View>
                    <Text>Nama Ayah</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Nama Ayah"
                        selectionColor="#870144"
                    />

                    {/* Data Tempat Tinggal */}
                    <Text style={styles.title}>Data Tempat Tinggal</Text>
                    <Text>Alamat</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Alamat"
                        selectionColor="#870144"
                    />
                    <Text>Kelurahan</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Kelurahan"
                        selectionColor="#870144"
                    />
                    <Text>Kecamatan</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Kecamatan"
                        selectionColor="#870144"
                    />
                    <Text>Kota</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Kota"
                        selectionColor="#870144"
                    />
                    <Text>Propinsi</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Propinsi"
                        selectionColor="#870144"
                    />
                    <Text>Kode Pos</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNik(text)}
                        keyboardType="numeric"
                        placeholder="Kode Pos"
                        selectionColor="#870144"
                    />

                    {/* Data Passport */}
                    <Text style={styles.title}>Data Passport</Text>
                    <Text>No Passport</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNik(text)}
                        keyboardType="numeric"
                        placeholder="No Passport"
                        selectionColor="#870144"
                    />
                    <Text>Nama Passport</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Nama Passport"
                        selectionColor="#870144"
                    />
                    <Text>Kota Passport</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Kota Passport"
                        selectionColor="#870144"
                    />
                    <Text>Tanggal Pengeluaran</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNoTelepon(text)}
                        keyboardType="numeric"
                        placeholder="YYYY-MM-DD"
                        selectionColor="#870144"
                    />
                    <Text>Tanggal Habis Berlaku</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNoTelepon(text)}
                        keyboardType="numeric"
                        placeholder="YYYY-MM-DD"
                        selectionColor="#870144"
                    />

                    {/* Data Visa */}
                    <Text style={styles.title}>Data Visa</Text>
                    <Text>Visa Provider</Text>
                    <View style={styles.inputOption}>
                        <Picker
                            selectedValue={selectedPaket}
                            // onValueChange={(itemValue, itemIndex) => setSelectedPaket(itemValue)}
                            style={styles.pickerItemStyle}
                        >
                            <Picker.Item style={styles.pickerItemPilih} label="Pilih Visa Provider" value="" />
                            <Picker.Item style={styles.pickerItemStyle} label="Visa Provider A" value="Visa Provider A" />
                            <Picker.Item style={styles.pickerItemStyle} label="Visa Provider B" value="Visa Provider B" />
                            <Picker.Item style={styles.pickerItemStyle} label="Visa Provider C" value="Visa Provider C" />
                        </Picker>
                    </View>
                    <Text>No Visa</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="No Visa"
                        selectionColor="#870144"
                    />
                    <Text>Nama Visa</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Nama Visa"
                        selectionColor="#870144"
                    />
                    <Text>Tanggal Berlaku</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNoTelepon(text)}
                        keyboardType="numeric"
                        placeholder="YYYY-MM-DD"
                        selectionColor="#870144"
                    />
                    <Text>Tanggal Akhir</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNoTelepon(text)}
                        keyboardType="numeric"
                        placeholder="YYYY-MM-DD"
                        selectionColor="#870144"
                    />

                    {/* Data Asuransi */}
                    <Text style={styles.title}>Data Asuransi</Text>
                    <Text>Data Asuransi</Text>
                    <View style={styles.inputOption}>
                        <Picker
                            selectedValue={selectedPaket}
                            // onValueChange={(itemValue, itemIndex) => setSelectedPaket(itemValue)}
                            style={styles.pickerItemStyle}
                        >
                            <Picker.Item style={styles.pickerItemPilih} label="Pilih Data Asuransi" value="" />
                            <Picker.Item style={styles.pickerItemStyle} label="Data Asuransi A" value="Data Asuransi A" />
                            <Picker.Item style={styles.pickerItemStyle} label="Data Asuransi B" value="Data Asuransi B" />
                            <Picker.Item style={styles.pickerItemStyle} label="Data Asuransi C" value="Data Asuransi C" />
                        </Picker>
                    </View>
                    <Text>No Polis</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="No Polis"
                        selectionColor="#870144"
                    />
                    <Text>Nama Polis</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Nama Polis"
                        selectionColor="#870144"
                    />
                    <Text>Tanggal Input</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNoTelepon(text)}
                        keyboardType="numeric"
                        placeholder="YYYY-MM-DD"
                        selectionColor="#870144"
                    />
                    <Text>Tanggal Berlaku</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNoTelepon(text)}
                        keyboardType="numeric"
                        placeholder="YYYY-MM-DD"
                        selectionColor="#870144"
                    />
                    <Text>Tanggal Akhir</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNoTelepon(text)}
                        keyboardType="numeric"
                        placeholder="YYYY-MM-DD"
                        selectionColor="#870144"
                    />

                    {/* Keanggotaan */}
                    <Text style={styles.title}>Keanggotaan</Text>
                    <Text>Paket *</Text>
                    <View style={styles.inputOption}>
                        <Picker
                            selectedValue={selectedPaket}
                            onValueChange={(itemValue, itemIndex) => setSelectedPaket(itemValue)}
                            style={styles.pickerItemStyle}
                        >
                            <Picker.Item style={styles.pickerItemPilih} label="Pilih Paket" value="" />
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

                    {/* Kondisi Kesehatan */}
                    <Text style={styles.title}>Kondisi Kesehatan</Text>
                    <Text>Kondisi Kesehatan</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Kondisi Kesehatan"
                        selectionColor="#870144"
                    />

                    {/* Data Berkas */}
                    <Text style={styles.title}>Data Berkas (*ukuran file max 500kb)</Text>
                    <View>
                        <View>
                            <Text>KTP</Text>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="KTP"
                                    selectionColor="#870144"
                                    value={postImage}
                                    onChangeText={(text) => setPostImage(text)}
                                />
                                <TouchableOpacity style={styles.uploadButton} onPress={PickImage}>
                                    <Text style={styles.uploadText} onPress={PickImage}>Upload</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.uploadButton} onPress={gotoUploadDetail}>
                                    <Text style={styles.uploadText} onPress={gotoUploadDetail}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text>KK</Text>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="KK"
                                    selectionColor="#870144"
                                    value={postImage}
                                    onChangeText={(text) => setPostImage(text)}
                                />
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={PickImage}>Upload</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={gotoUploadDetail}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text>Passport</Text>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Passport"
                                    selectionColor="#870144"
                                    value={postImage}
                                    onChangeText={(text) => setPostImage(text)}
                                />
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={PickImage}>Upload</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={gotoUploadDetail}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text>Pas Foto</Text>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Pas Foto"
                                    selectionColor="#870144"
                                    value={postImage}
                                    onChangeText={(text) => setPostImage(text)}
                                />
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={PickImage}>Upload</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={gotoUploadDetail}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text>Vaksin</Text>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Vaksin"
                                    selectionColor="#870144"
                                    value={postImage}
                                    onChangeText={(text) => setPostImage(text)}
                                />
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={PickImage}>Upload</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={gotoUploadDetail}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text>Buku Kuning</Text>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Buku Kuning"
                                    selectionColor="#870144"
                                    value={postImage}
                                    onChangeText={(text) => setPostImage(text)}
                                />
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={PickImage}>Upload</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={gotoUploadDetail}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text>Vaksin 2</Text>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Vaksin 2"
                                    selectionColor="#870144"
                                    value={postImage}
                                    onChangeText={(text) => setPostImage(text)}
                                />
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={PickImage}>Upload</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={gotoUploadDetail}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text>Boarding Pass</Text>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Boarding Pass"
                                    selectionColor="#870144"
                                    value={postImage}
                                    onChangeText={(text) => setPostImage(text)}
                                />
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={PickImage}>Upload</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={gotoUploadDetail}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text>Vaksin 3</Text>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Vaksin 3"
                                    selectionColor="#870144"
                                    value={postImage}
                                    onChangeText={(text) => setPostImage(text)}
                                />
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={PickImage}>Upload</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.uploadButton}
                                >
                                    <Text style={styles.uploadText} onPress={gotoUploadDetail}>View</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View >
                        <Text style={styles.permintaan}>Permintaan Khusus</Text>
                        <Text style={styles.permintaandes}>*)Harga paket akan berubah menyesuaikan permintaan khusus Jamaah </Text>
                    </View>

                    {/* Tambah Infant */}
                    <Text style={styles.title}>Tambah Infant</Text>
                    <Text>Nama sesuai NIK</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Nama sesuai NIK"
                        selectionColor="#870144"
                    />
                    <Text>NIK Infant</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNik(text)}
                        keyboardType="numeric"
                        placeholder="NIK"
                        selectionColor="#870144"
                    />
                    <Text>Tanggal Lahir Infant</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNoTelepon(text)}
                        keyboardType="numeric"
                        placeholder="YYYY-MM-DD"
                        selectionColor="#870144"
                    />
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        keyboardType="numeric"
                        placeholder="Biaya tambahan untuk Infant"
                        selectionColor="#870144"
                    />

                    {/* Tambah Infant */}
                    <Text style={styles.title}>Upgrade Hotel</Text>
                    <Text>Nama Hotel</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Nama Hotel"
                        selectionColor="#870144"
                    />
                    <Text>Bintang Hotel</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Bintang Hotel"
                        selectionColor="#870144"
                    />
                    <Text>Tipe Kamar Hotel</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Tipe Kamar Hotel"
                        selectionColor="#870144"
                    />
                    <Text>Biaya Upgrade Hotel</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNik(text)}
                        keyboardType="numeric"
                        placeholder="Biaya Upgrade Hotel"
                        selectionColor="#870144"
                    />

                    {/* Upgrade Maskapai */}
                    <Text style={styles.title}>Upgrade Maskapai</Text>
                    <Text>Nama Maskapai</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Nama Maskapai"
                        selectionColor="#870144"
                    />
                    <Text>Kode Maskapai</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Kode Maskapai"
                        selectionColor="#870144"
                    />
                    <Text>Kelas</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Kelas"
                        selectionColor="#870144"
                    />
                    <Text>Biaya Upgrade Maskapai</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNik(text)}
                        keyboardType="numeric"
                        placeholder="Biaya Upgrade Maskapai"
                        selectionColor="#870144"
                    />

                    {/* Permintaan Khusus Lainnya */}
                    <Text style={styles.title}>Permintaan Khusus Lainnya</Text>
                    <Text>Permintaan khusus lainnya</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNama(text)}
                        placeholder="Permintaan khusus lainnya"
                        selectionColor="#870144"
                    />
                    <Text>Biaya Tambahan</Text>
                    <TextInput
                        style={styles.input}
                        // onChangeText={text => setNik(text)}
                        keyboardType="numeric"
                        placeholder="Biaya tambahan"
                        selectionColor="#870144"
                    />
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
            >
                <Text style={styles.submitText}>Update</Text>
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
    title: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        fontSize: 17,
        textAlign: 'center',
    },
    permintaan: {
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 17,
        color: 'red'
    },
    permintaandes: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 15,
        color: 'red',
        fontStyle: 'italic',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 20,
        marginTop: 3,
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
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: '#870144',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 5,
        width: 100
    },
    submitText: {
        color: 'white',
        fontWeight: 'bold',
        height: 28,
        lineHeight: 28,
    },
    toggle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    genderText: {
        flex: 1,
        marginVertical: 10,
    },
    checklist: {
        backgroundColor: '#fff',
        marginTop: 15,
        marginBottom: 30,
    },
    checkboxContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    checkboxUnchecked: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#aaa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#870144',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        color: '#fff',
        fontSize: 16,
    },
    checkboxAndText: {
        alignItems: 'center',
    },
    horizontalLine: {
        // flex: 1,
        height: 1,
        backgroundColor: '#870144',
        marginTop: 10,
        width: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 20,
        marginTop: 3,
        borderRadius: 6
    },
    uploadButton: {
        backgroundColor: '#870144',
        padding: 8,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 3,
        borderRadius: 6,
        marginLeft: 10,
        width: 100
    },
    uploadText: {
        color: 'white',
        fontWeight: 'bold',
        height: 28,
        lineHeight: 28,
    },
});
