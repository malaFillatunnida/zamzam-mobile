import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  CheckBox,
  Image,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Switch } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { getStoreData } from "../../util/util";
import { instance as axios } from "../../util/api";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Edit_jamaah({ navigation, route }) {
  const [jamaah, setJamaah] = useState([]);
  const { voucherCode } = route.params;
  // state input
  const [fullName, setNama] = useState("");
  const [icNo, setNik] = useState("");
  const [mobileNo, setNoTelepon] = useState("");
  const [productId, setProductId] = useState("");
  const [selectedMitra, setSelectedMitra] = useState("");
  const [visaProvider, setVisa] = useState("");
  const [insurance, setInsurance] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [infantName, setInfantName] = useState("");
  const [infantNik, setInfantNik] = useState("");
  const [infantDob, setInfantDob] = useState("");
  const [infantChargedAmount, setInfantChargedAmount] = useState(0);
  const [upgradedHotelName, setUpgradedHotelName] = useState("");
  const [upgradedHotelStar, setUpgradedHotelStar] = useState("");
  const [upgradedHotelRoomType, setUpgradedHotelRoomType] = useState("");
  const [upgradedHotelPrice, setUpgradedHotelPrice] = useState(0);
  const [upgradedAirlineName, setUpgradedAirlineName] = useState("");
  const [upgradedAirlineCode, setUpgradedAirlineCode] = useState("");
  const [upgradedAirlineClass, setUpgradedAirlineClass] = useState("");
  const [upgradedAirlinePrice, setUpgradedAirlinePrice] = useState(0);
  const [specialPrice, setSpecialPrice] = useState(0);
  const [specialPriceDescription, setSpecialPriceDescription] = useState("");
  const [email, setEmail] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [occupation, setOccupation] = useState("");
  const [mahram, setMahram] = useState("");
  const [mahramRelationship, setMahramRelationship] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [icFile, setIcFile] = useState("");
  const [kkNo, setKkNo] = useState("");
  const [kkFile, setKkFile] = useState("");
  const [passportNo, setPassportNo] = useState("");
  const [nameOnPassport, setNameOnPassport] = useState("");
  const [passportName, setPassportName] = useState("");
  const [passportFile, setPassportFile] = useState("");
  const [passportIssuedOn, setPassportIssuedOn] = useState("");
  const [passportIssuedAt, setPassportIssuedAt] = useState(null);
  const [passportExpiredOn, setPassportExpiredOn] = useState(null);
  const [visaNo, setVisaNo] = useState("");
  const [visaName, setVisaName] = useState("");
  const [visaIssuedOn, setVisaIssuedOn] = useState(null);
  const [visaExpiredAt, setVisaExpiredAt] = useState(null);
  const [visaIssuedAt, setVisaIssuedAt] = useState("");
  const [insuranceCustomerName, setInsuranceCustomerName] = useState("");
  const [insurancePolicyNo, setInsurancePolicyNo] = useState("");
  const [policyEntryDate, setPolicyEntryDate] = useState(null);
  const [policyStartingDate, setPolicyStartingDate] = useState(null);
  const [policyEndingDate, setPolicyEndingDate] = useState(null);
  const [healthCondition, setHealthCondition] = useState("");
  const [education1, setEducation1] = useState("");
  const [education2, setEducation2] = useState("");
  const [education3, setEducation3] = useState("");
  const [education4, setEducation4] = useState("");
  const [education5, setEducation5] = useState("");
  const [vaccineCertFile, setVaccineCertFile] = useState("");
  const [vaccineCert2File, setVaccineCert2File] = useState("");
  const [vaccineCert3File, setVaccineCert3File] = useState("");
  const [yellowBookFile, setYellowBookFile] = useState("");
  const [photoFile, setPhotoFile] = useState("");
  const [arrivalBoardingPassFile, setArrivalBoardingPassFile] = useState("");
  const [manasikCompleted, setManasikCompleted] = useState(true); // manasik
  const [siskopatuhCompleted, setSiskopatuhCompleted] = useState(false); //siskopatuh
  const [amenitiesCompleted, setAmenitiesCompleted] = useState(true); // perlengkapan
  const [takeOff, setTakeOff] = useState(false); //take off
  const [journeyCompleted, setJourneyCompleted] = useState(true); //completed
  const [isChecked, setIsChecked] = useState(false);

  const [gender, setGender] = useState(true);
  const [wni, setWni] = useState(true);
  
  // Define gender and warga based on the switch state
  const gndr = gender ? "Perempuan" : "Laki-laki";
  const warga = wni ? "WNI" : "WNA";
  
  // Define text color based on the switch state
  // const genderTextColor = gender ? "#870144" : "#ffffff"; // Change to your desired color
  const genderTextColor = gender ? "#870144" : "#000000";
  const wargaTextColor = wni ? "#870144" : "#000000"; 

  const [postImage, setPostImage] = useState(null);
  const [loading, setLoading] = useState(true);
  //fetch data
  const [partnerData, setPartnerData] = useState([]);
  const [paketData, setPaketData] = useState([]);
  const [visaData, setVisaData] = useState([]);
  const [insuranceData, setInsuranceData] = useState([]);

  //  date picker
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [activeInput, setActiveInput] = useState(true); // State untuk mengontrol ke-editabilitasan TextInput

  const updateJamaah = async () => {
    try {
      const formData = {
        icNo: icNo,
        mobileNo: mobileNo,
        fullName: fullName,
        fatherName: fatherName,
        productId: productId,
        partnerId: selectedMitra,
        gender: gender,
        wni: wni,
        maritalStatus: maritalStatus,
        infantName: infantName,
        infantNik: infantNik,
        infantDob: infantDob || null,
        infantChargedAmount: infantChargedAmount,
        upgradedHotelName: upgradedHotelName,
        upgradedHotelStar: upgradedHotelStar,
        upgradedHotelRoomType: upgradedHotelRoomType,
        upgradedHotelPrice: upgradedHotelPrice,
        upgradedAirlineName: upgradedAirlineName,
        upgradedAirlineCode: upgradedAirlineCode,
        upgradedAirlineClass: upgradedAirlineClass,
        upgradedAirlinePrice: upgradedAirlinePrice,
        specialPrice: specialPrice,
        specialPriceDescription: specialPriceDescription,
        email: email,
        placeOfBirth: placeOfBirth,
        dateOfBirth: dateOfBirth || null,
        occupation: occupation,
        mahram: mahram,
        mahramRelationship: mahramRelationship,
        streetAddress: streetAddress,
        city: city,
        province: province,
        district: district,
        subDistrict: subDistrict,
        postalCode: postalCode,
        icFile: icFile,
        kkNo: kkNo,
        kkFile: kkFile,
        passportNo: passportNo,
        nameOnPassport: nameOnPassport,
        passportName: passportName,
        passportFile: passportFile,
        passportIssuedOn: passportIssuedOn || null,
        passportIssuedAt: passportIssuedAt,
        passportExpiredOn: passportExpiredOn || null,
        visaNo: visaNo,
        visaName: visaName,
        visaIssuedOn: visaIssuedOn || null,
        visaExpiredAt: visaExpiredAt || null,
        visaIssuedAt: visaIssuedAt,
        visaProvider: visaProvider,
        insurance: insurance,
        insuranceCustomerName: insuranceCustomerName,
        insurancePolicyNo: insurancePolicyNo,
        policyEntryDate: policyEntryDate || null,
        policyStartingDate: policyStartingDate || null,
        policyEndingDate: policyEndingDate || null,
        healthCondition: healthCondition,
        education1: education1,
        education2: education2,
        education3: education3,
        education4: education4,
        education5: education5,
        vaccineCertFile: vaccineCertFile,
        vaccineCert2File: vaccineCert2File,
        vaccineCert3File: vaccineCert3File,
        yellowBookFile: yellowBookFile,
        photoFile: photoFile,
        manasikCompleted: manasikCompleted,
        siskopatuhCompleted: siskopatuhCompleted,
        amenitiesCompleted: amenitiesCompleted,
        takeOff: takeOff,
        journeyCompleted: journeyCompleted,
        arrivalBoardingPassFile: arrivalBoardingPassFile,
      };
      
      console.log("ini form data", formData);

      await axios.put(`/customers/${voucherCode}`, formData, {
        headers: {
          Authorization: `Bearer ${await getStoreData("access_token")}`,
        },
      });

      Alert.alert("Jamaah successfully updated");
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCustomerId = async () => {
    try {
      const response = await axios.get(`/customers/${voucherCode}`, {
        headers: {
          Authorization: `Bearer ${await getStoreData("access_token")}`,
        },
      });
      setNama(response.data.data.fullName);
      setNik(response.data.data.icNo);
      setNoTelepon(response.data.data.mobileNo);
      setProductId(response.data.data.productId);
      setSelectedMitra(response.data.data.partnerId);
      setFatherName(response.data.data.fatherName);
      setGender(response.data.data.gender);
      setWni(response.data.data.wni);
      setMaritalStatus(response.data.data.maritalStatus);
      setInfantName(response.data.data.infantName);
      setInfantNik(response.data.data.infantNik);
      setInfantDob(formatDateArray(response.data.data.infantDob));
      setInfantChargedAmount(response.data.data.infantChargedAmount);
      setUpgradedHotelName(response.data.data.upgradedHotelName);
      setUpgradedHotelStar(response.data.data.upgradedHotelStar);
      setUpgradedHotelRoomType(response.data.data.upgradedHotelRoomType);
      setUpgradedHotelPrice(response.data.data.upgradedHotelPrice);
      setUpgradedAirlineName(response.data.data.upgradedAirlineName);
      setUpgradedAirlineCode(response.data.data.upgradedAirlineCode);
      setUpgradedAirlineClass(response.data.data.upgradedAirlineClass);
      setUpgradedAirlinePrice(response.data.data.upgradedAirlinePrice);
      setSpecialPrice(response.data.data.specialPrice);
      setSpecialPriceDescription(response.data.data.specialPriceDescription);
      setEmail(response.data.data.email);
      setPlaceOfBirth(response.data.data.placeOfBirth);
      setDateOfBirth(formatDateArray(response.data.data.dateOfBirth));
      setOccupation(response.data.data.occupation);
      setMahram(response.data.data.mahram);
      setMahramRelationship(response.data.data.mahramRelationship);
      setStreetAddress(response.data.data.streetAddress);
      setCity(response.data.data.city);
      setProvince(response.data.data.province);
      setDistrict(response.data.data.district);
      setSubDistrict(response.data.data.subDistrict);
      setPostalCode(response.data.data.postalCode);
      setIcFile(response.data.data.icFile);
      setKkNo(response.data.data.kkNo);
      setKkFile(response.data.data.kkFile);
      setNameOnPassport(response.data.data.nameOnPassport);
      setPassportNo(response.data.data.passportNo);
      setPassportName(response.data.data.passportName);
      setPassportFile(response.data.data.passportFile);
      setPassportIssuedOn(formatDateArray(response.data.data.passportIssuedOn));
      setPassportIssuedAt(response.data.data.passportIssuedAt);
      setPassportExpiredOn(formatDateArray(response.data.data.passportExpiredOn));
      setVisaNo(response.data.data.visaNo);
      setVisaName(response.data.data.visaName);
      setVisaIssuedOn(formatDateArray(response.data.data.visaIssuedOn));
      setVisaIssuedAt(response.data.data.visaIssuedAt);
      setVisaExpiredAt(formatDateArray(response.data.data.visaExpiredAt));
      setVisa(response.data.data.visaProvider);
      setInsurance(response.data.data.insurance);
      setInsuranceCustomerName(response.data.data.insuranceCustomerName);
      setInsurancePolicyNo(response.data.data.insurancePolicyNo);
      setPassportIssuedAt(response.data.data.passportIssuedAt);
      setPolicyEntryDate(formatDateArray(response.data.data.policyEntryDate));
      setPolicyStartingDate(formatDateArray(response.data.data.policyStartingDate));
      setPolicyEndingDate(formatDateArray(response.data.data.policyEndingDate));
      setHealthCondition(response.data.data.healthCondition);
      setEducation1(response.data.data.education1);
      setVaccineCertFile(response.data.data.vaccineCertFile);
      setVaccineCert2File(response.data.data.vaccineCert2File);
      setVaccineCert3File(response.data.data.vaccineCert3File);
      setYellowBookFile(response.data.data.yellowBookFile);
      setPhotoFile(response.data.data.photoFile);
      setManasikCompleted(response.data.data.manasikCompleted);
      setSiskopatuhCompleted(response.data.data.siskopatuhCompleted);
      setAmenitiesCompleted(response.data.data.amenitiesCompleted);
      setTakeOff(response.data.data.takeOff);
      setJourneyCompleted(response.data.data.journeyCompleted);
      setArrivalBoardingPassFile(response.data.data.arrivalBoardingPassFile);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

   // Fungsi untuk mengonversi format tanggal ke "dd/MM/yyyy"
   const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };  
   
  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
      const formattedDate = formatDate(selectedDate);
      if (activeInput === 'dateOfBirth') {
        setDateOfBirth(formattedDate);
      } else if (activeInput === 'passportIssuedOn') {
        setPassportIssuedOn(formattedDate);
      } else if (activeInput === 'passportExpiredOn') {
        setPassportExpiredOn(formattedDate);
      } else if (activeInput === 'visaIssuedOn') {
        setVisaIssuedOn(formattedDate);
      } else if (activeInput === 'visaExpiredAt') {
        setVisaExpiredAt(formattedDate);
      } else if (activeInput === 'policyEntryDate') {
        setPolicyEntryDate(formattedDate);
      } else if (activeInput === 'policyStartingDate') {
        setPolicyStartingDate(formattedDate);
      } else if (activeInput === 'policyEndingDate') {
        setPolicyEndingDate(formattedDate);
      } else if (activeInput === 'infantDob') {
        setInfantDob(formattedDate);
      }
    }
  };

  const showDatePickerHandler = (inputType) => {
    setActiveInput(inputType);// Menonaktifkan ke-editabilitasan TextInput saat DateTimePicker ditampilkan
    setShow(true);
  };

  useEffect(() => {
    async function requestMediaLibraryPermissions() {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permintaan ditolak");
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
      navigation.navigate("Upload Detail", { imageUri: postImage });
    }
  };

  // fetch partners
  const fetchPartners = async () => {
    try {
      // Mengirim permintaan GET dengan Axios
      const response = await axios.get("/partners", {
        headers: {
          Authorization: `Bearer ${await getStoreData("access_token")}`,
        },
      });

      // Menggunakan data dari response
      setPartnerData(response.data);
      setLoading(false);
    } catch (error) {
      // Handle error dengan benar
      console.error("Error fetching data:", error);
    }
  };

  // fetch paket
  const fetchDataPaket = async () => {
    try {
      // Mengirim permintaan GET dengan Axios
      const response = await axios.get("/products", {
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
      console.error("Error fetching data:", error);
    }
  };
  // fetch Insurance
  const fetchDataInsurance = async () => {
    try {
      // Mengirim permintaan GET dengan Axios
      const response = await axios.get("/insurances", {
        headers: {
          Authorization: `Bearer ${await getStoreData("access_token")}`,
        },
      });

      // Menggunakan data dari response
      setInsuranceData(response.data);
      // console.log(response.data);
      setLoading(false);
    } catch (error) {
      // Handle error dengan benar
      console.error("Error fetching data:", error);
    }
  };
  // fetch Visa
  const fetchDataVisa = async () => {
    try {
      // Mengirim permintaan GET dengan Axios
      const response = await axios.get("/visa_providers", {
        headers: {
          Authorization: `Bearer ${await getStoreData("access_token")}`,
        },
      });

      // Menggunakan data dari response
      setVisaData(response.data);
      // console.log(response.data);
      setLoading(false);
    } catch (error) {
      // Handle error dengan benar
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPartners();
    fetchDataPaket();
    fetchDataInsurance();
    fetchDataVisa();
  }, []);

  function formatDateArray(dateArray) {
    if (Array.isArray(dateArray) && dateArray.length === 3) {
      const [year, month, day] = dateArray;
      const formattedMonth = month.toString().padStart(2, '0'); // Tambahkan nol jika bulan kurang dari 10
      const formattedDate = `${day}/${formattedMonth}/${year}`;
      return formattedDate;
    }
    return ""; // Default jika data tidak valid
  } 

  function formatMultipleDates(jamaah) {
    const formattedData = {};

    formattedData.dateOfBirth = formatDateArray(jamaah.dateOfBirth);
    formattedData.passportIssuedOn = formatDateArray(jamaah.passportIssuedOn);
    formattedData.passportExpiredOn = formatDateArray(jamaah.passportExpiredOn);
    formattedData.visaIssuedOn = formatDateArray(jamaah.visaIssuedOn);
    formattedData.visaExpiredAt = formatDateArray(jamaah.visaExpiredAt);
    formattedData.policyEntryDate = formatDateArray(jamaah.policyEntryDate);
    formattedData.policyStartingDate = formatDateArray(
      jamaah.policyStartingDate
    );
    formattedData.policyEndingDate = formatDateArray(jamaah.policyEndingDate);
    formattedData.infantDob = formatDateArray(jamaah.infantDob);

    return formattedData;
  }

  const formattedData = formatMultipleDates(jamaah);
  //   console.log(formattedData);
 
  useEffect(() => {
    // Ambil nilai dari database atau sumber data lainnya
    // Di sini, saya akan menggunakan objek sumber data sebagai contoh
    const dataFromDatabase = {
      journeyCompleted: true,
      siskopatuhCompleted: false,
      amenitiesCompleted: true,
      takeOff: false,
      manasikCompleted: true,
    };

    // Setel nilai state berdasarkan nilai dari database atau sumber data
    setJourneyCompleted(dataFromDatabase.journeyCompleted);
    setSiskopatuhCompleted(dataFromDatabase.siskopatuhCompleted);
    setAmenitiesCompleted(dataFromDatabase.amenitiesCompleted);
    setTakeOff(dataFromDatabase.takeOff);
    setManasikCompleted(dataFromDatabase.manasikCompleted);
  }, []);

  const handleToggle = (setter) => {
    // Pastikan untuk menonaktifkan cekbok jika nilainya false
    if (setter === false) {
      return;
    }

  };

  useEffect(() => {
    fetchCustomerId();
  }, []);

  const handleSubmit = () => {
    if (!fullName || !icNo || !mobileNo || !productId || !fatherName) {
      alert('Ada field yang wajib diisi!');
      return;  
    }

  // Periksa status produk yang dipilih
  const selectedProduct = paketData.find(product => product.id === productId);
  if (selectedProduct && selectedProduct.status !== 'OPEN') {
      Alert.alert('Maaf', `Produk ${selectedProduct.productName} belum tersedia.`);
      return;
  }

    updateJamaah();
  };

  return (
    <View style={styles.container}>
      {/* Checkbox */}
      <ScrollView>
        <ScrollView horizontal={true} style={styles.checklist}>
          <View style={styles.checkboxContainer}>
            {/* registrasi */}
            <TouchableOpacity onPress={handleToggle}>
              <View style={styles.checkboxAndText}>
                <View
                  style={
                    isChecked
                      ? styles.checkboxChecked
                      : styles.checkboxUnchecked
                  }
                >
                  {isChecked && <Text style={styles.checkIcon}>&#10003;</Text>}
                </View>
                <Text style={styles.checkboxLabel}>Registrasi</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.horizontalLine} />
            {/* pelunasan */}
            <TouchableOpacity onPress={handleToggle}>
              <View style={styles.checkboxAndText}>
                <View
                  style={
                    isChecked
                      ? styles.checkboxChecked
                      : styles.checkboxUnchecked
                  }
                >
                  {isChecked && <Text style={styles.checkIcon}>&#10003;</Text>}
                </View>
                <Text style={styles.checkboxLabel}>Pelunasan</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.horizontalLine} />

            {/* Manasik Checkbox */}
            <TouchableOpacity
              onPress={() => handleToggle(setManasikCompleted)}
              disabled={!manasikCompleted}
            >
              <View style={styles.checkboxAndText}>
                <View
                  style={
                    manasikCompleted
                      ? styles.checkboxChecked
                      : styles.checkboxUnchecked
                  }
                >
                  {manasikCompleted && (
                    <Text style={styles.checkIcon}>&#10003;</Text>
                  )}
                </View>
              </View>
              <Text style={styles.checkboxLabel}>Manasik</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine} />

            {/* Siskopatuh Checkbox */}
            <TouchableOpacity
              onPress={() => handleToggle(setSiskopatuhCompleted)}
              disabled={!siskopatuhCompleted}
            >
              <View style={styles.checkboxAndText}>
                <View
                  style={
                    siskopatuhCompleted
                      ? styles.checkboxChecked
                      : styles.checkboxUnchecked
                  }
                >
                  {siskopatuhCompleted && (
                    <Text style={styles.checkIcon}>&#10003;</Text>
                  )}
                </View>
              </View>
              <Text style={styles.checkboxLabel}>Siskopatuh</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine} />

            {/* Perlengkapan Checkbox */}
            <TouchableOpacity
              onPress={() => handleToggle(setAmenitiesCompleted)}
              disabled={!amenitiesCompleted}
            >
              <View style={styles.checkboxAndText}>
                <View
                  style={
                    amenitiesCompleted
                      ? styles.checkboxChecked
                      : styles.checkboxUnchecked
                  }
                >
                  {amenitiesCompleted && (
                    <Text style={styles.checkIcon}>&#10003;</Text>
                  )}
                </View>
              </View>
              <Text style={styles.checkboxLabel}>Perlengkapan</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine} />

            {/* Take Off Checkbox */}
            <TouchableOpacity
              onPress={() => handleToggle(setTakeOff)}
              disabled={!takeOff}
            >
              <View style={styles.checkboxAndText}>
                <View
                  style={
                    takeOff ? styles.checkboxChecked : styles.checkboxUnchecked
                  }
                >
                  {takeOff && <Text style={styles.checkIcon}>&#10003;</Text>}
                </View>
              </View>
              <Text style={styles.checkboxLabel}>Take Off</Text>
            </TouchableOpacity>
            <View style={styles.horizontalLine} />

            {/* Completed Checkbox */}
            <TouchableOpacity
              onPress={() => handleToggle(setJourneyCompleted)}
              disabled={!journeyCompleted}
            >
              <View style={styles.checkboxAndText}>
                <View
                  style={
                    journeyCompleted
                      ? styles.checkboxChecked
                      : styles.checkboxUnchecked
                  }
                >
                  {journeyCompleted && (
                    <Text style={styles.checkIcon}>&#10003;</Text>
                  )}
                </View>
              </View>
              <Text style={styles.checkboxLabel}>Completed</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={{ marginBottom: 40 }}>
          {/* Data Pribadi */}
          <Text style={styles.title}>Data Pribadi</Text>
          <Text>Nama sesuai NIK *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNama}
            placeholder="Nama Sesuai NIK"
            selectionColor="#870144"
            value={fullName}
          />
          <Text>NIK *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNik}
            keyboardType="numeric"
            placeholder="NIK"
            selectionColor="#870144"
            value={icNo}
          />
          <Text>No Telepon *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNoTelepon}
            keyboardType="phone-pad"
            placeholder="No Telepon"
            selectionColor="#870144"
            value={mobileNo}
          />
          <View>
             {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
          </View>
          <Text>Tanggal Lahir</Text>
          <TextInput
            style={styles.input}
            selectionColor="#870144"
            placeholder="dd/MM/yyyy"
            onFocus={() => showDatePickerHandler('dateOfBirth')}
            value={dateOfBirth}
            editable={!show}
            onValueChange={setDateOfBirth}
            defaultValue={formatDateArray(dateOfBirth)} 
          />
          <Text style={{ marginTop: 5 }}>Jenis Kelamin</Text>
    <View style={styles.toggle}>
      <Switch
        value={gender}
        onValueChange={() => {
          setGender(!gender);
        }}
        thumbColor={gender ? "#870144" : "#fff"}
        trackColor={{ false: "#ddd", true: "#ddd" }}
      />
      <Text style={{ ...styles.genderText, color: genderTextColor }}>{gndr}</Text>
    </View>
    <Text style={{ marginTop: 10 }}>Kewarganegaraan</Text>
    <View style={styles.toggle}>
      <Switch
        value={wni}
        onValueChange={() => {
          setWni(!wni);
        }}
        thumbColor={wni ? "#870144" : "#fff"}
        trackColor={{ false: "#ddd", true: "#ddd" }}
      />
      <Text style={{ ...styles.genderText, color: wargaTextColor }}>{warga}</Text>
    </View>
        
          <Text>Tempat Lahir</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPlaceOfBirth}
            placeholder="Tempat Lahir"
            selectionColor="#870144"
            value={placeOfBirth}
          />
          <Text>Pendidikan</Text>
          <View style={styles.inputOption}>
            <Picker
              selectedValue={education1}
              onValueChange={(itemValue, itemIndex) => setEducation1(itemValue)}
              style={styles.pickerItemStyle}
              value={education1}
            >
              <Picker.Item
                style={styles.pickerItemPilih}
                label="Pilih Pendidikan"
                value=""
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="TIDAK SEKOLAH"
                value="TIDAK SEKOLAH"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="SD/MI"
                value="SD/MI"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="SMP/MTS"
                value="SMP/MTS"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="SMA/MA"
                value="SMA/MA"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="D1"
                value="D1"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="D2"
                value="D2"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="D3"
                value="D3"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="D4/S1"
                value="D4/S1"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="S2"
                value="S2"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="S3"
                value="S3"
              />
            </Picker>
          </View>
          <Text>Pekerjaan</Text>
          <View style={styles.inputOption}>
            <Picker
              selectedValue={occupation}
              onValueChange={(itemValue, itemIndex) => setOccupation(itemValue)}
              style={styles.pickerItemStyle}
              value={occupation}
            >
              <Picker.Item
                style={styles.pickerItemPilih}
                label="Pilih Pekerjaan"
                value=""
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="PNS"
                value="PNS"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="PEG.SWASTA"
                value="PEG.SWASTA"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="WIRAUSAHA"
                value="WIRAUSAHA"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="TNI / POLRI"
                value="TNI / POLRI"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="PETANI"
                value="PETANI"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="NELAYAN"
                value="NELAYAN"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="GURU / DOSEN"
                value="GURU / DOSEN"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="SALES"
                value="SALES"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="LAINNYA"
                value="LAINNYA"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="TIDAK BEKERJA"
                value="TIDAK BEKERJA"
              />
            </Picker>
          </View>
          <Text>Status Pernikahan</Text>
          <View style={styles.inputOption}>
            <Picker
              selectedValue={maritalStatus}
              onValueChange={(itemValue, itemIndex) =>
                setMaritalStatus(itemValue)
              }
              style={styles.pickerItemStyle}
              value={maritalStatus}
            >
              <Picker.Item
                style={styles.pickerItemPilih}
                label="Pilih Status Pernikahan"
                value=""
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="BELUM MENIKAH"
                value="BELUM MENIKAH"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="MENIKAH"
                value="MENIKAH"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="JANDA/DUDA"
                value="JANDA/DUDA"
              />
            </Picker>
          </View>
          <Text>Hubungan Mahram</Text>
          <View style={styles.inputOption}>
            <Picker
              selectedValue={mahramRelationship}
              onValueChange={(itemValue, itemIndex) =>
                setMahramRelationship(itemValue)
              }
              style={styles.pickerItemStyle}
              value={mahramRelationship}
            >
              <Picker.Item
                style={styles.pickerItemPilih}
                label="Pilih Hubungan Mahram"
                value=""
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="Husband"
                value="Husband"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="Father"
                value="Father"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="Brother"
                value="Brother"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="Grandfather"
                value="Grandfather"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="Son"
                value="Son"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="Uncle"
                value="Uncle"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="Son In Law"
                value="Son In Law"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="Nephew"
                value="Nephew"
              />
            </Picker>
          </View>
          <Text>Nama Mahram</Text>
          <TextInput
            style={styles.input}
            onChangeText={setMahram}
            placeholder="Nama Mahram"
            selectionColor="#870144"
            value={mahram}
          />
          <Text>Nama Ayah *</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFatherName}
            placeholder="Nama Ayah"
            selectionColor="#870144"
            value={fatherName}
          />

          {/* Data Tempat Tinggal */}
          <Text style={styles.title}>Data Tempat Tinggal</Text>
          <Text>Alamat</Text>
          <TextInput
            style={styles.input}
            // onValueChange={setStreetAddress}
            onChangeText={setStreetAddress}
            placeholder="Alamat"
            selectionColor="#870144"
            value={streetAddress}
          />
          <Text>Kelurahan</Text>
          <TextInput
            style={styles.input}
            // onValueChange={setSubDistrict}
            onChangeText={setSubDistrict}
            placeholder="Kelurahan"
            selectionColor="#870144"
            value={subDistrict}
          />
          <Text>Kecamatan</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDistrict}
            placeholder="Kecamatan"
            selectionColor="#870144"
            value={district}
          />
          <Text>Kota</Text>
          <TextInput
            style={styles.input}
            onChangeText={setCity}
            placeholder="Kota"
            selectionColor="#870144"
            value={city}
          />
          <Text>Propinsi</Text>
          <TextInput
            style={styles.input}
            onChangeText={setProvince}
            placeholder="Propinsi"
            selectionColor="#870144"
            value={province}
          />
          <Text>Kode Pos</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPostalCode}
            keyboardType="numeric"
            placeholder="Kode Pos"
            selectionColor="#870144"
            value={postalCode}
          />

          {/* Data Passport */}
          <Text style={styles.title}>Data Passport</Text>
          <Text>No Passport</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassportNo}
            keyboardType="numeric"
            placeholder="No Passport"
            selectionColor="#870144"
            value={passportNo}
          />
          <Text>Nama Passport</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassportName}
            placeholder="Nama Passport"
            selectionColor="#870144"
            value={passportName}
          />
          <Text>Kota Passport</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassportIssuedAt}
            placeholder="Kota Passport"
            selectionColor="#870144"
            value={passportIssuedAt}
          />
          <Text>Tanggal Pengeluaran</Text>
          <TextInput
            style={styles.input}
            selectionColor="#870144"
            placeholder="dd/MM/yyyy"
            onFocus={() => showDatePickerHandler('passportIssuedOn')}
            value={passportIssuedOn}
            editable={!show}
            onChangeText={setPassportIssuedOn}
            defaultValue={formatDateArray(passportIssuedOn)}
          />
          <Text>Tanggal Habis Berlaku</Text>
          <TextInput
            style={styles.input}
            selectionColor="#870144"
            placeholder="dd/MM/yyyy"
            onFocus={() => showDatePickerHandler('passportExpiredOn')}
            value={passportExpiredOn}
            editable={!show}
             Text={setPassportExpiredOn}
            defaultValue={formatDateArray(passportExpiredOn)}
          />

          {/* Data Visa */}
          <Text style={styles.title}>Data Visa</Text>
        
          <Text>Visa Provider </Text>
          <View style={styles.inputOption}>
            <Picker
              selectedValue={visaProvider}
              onValueChange={(itemValue, itemIndex) => setVisa(itemValue)}
              style={styles.pickerItemStyle}
              value={visaProvider}
            >
              <Picker.Item
                style={styles.pickerItemPilih}
                label="Pilih Visa Provider "
                value=""
              />
              {visaData.map((provider) => (
                <Picker.Item
                  key={provider.id}
                  style={styles.pickerItemStyle}
                  label={provider.providerName}
                  value={provider.id}
                />
              ))}
            </Picker>
          </View>
          <Text>No Visa</Text>
          <TextInput
            style={styles.input}
            onChangeText={setVisaNo}
            placeholder="No Visa"
            selectionColor="#870144"
            value={visaNo}
          />
          <Text>Nama Visa</Text>
          <TextInput
            style={styles.input}
            onChangeText={setVisaName}
            placeholder="Nama Visa"
            selectionColor="#870144"
            value={visaName}
          />
          <Text>Tanggal Berlaku</Text>
          <TextInput
            style={styles.input}
            selectionColor="#870144"
            placeholder="dd/MM/yyyy"
            onFocus={() => showDatePickerHandler('visaIssuedOn')}
            value={visaIssuedOn}
            editable={!show}
            onChangeText={setVisaIssuedOn}
            defaultValue={formatDateArray(visaIssuedOn)}
          />
          <Text>Tanggal Akhir</Text>
          <TextInput
            style={styles.input}
            selectionColor="#870144"
            placeholder="dd/MM/yyyy"
            onFocus={() => showDatePickerHandler('visaExpiredAt')}
            value={visaExpiredAt}
            editable={!show}
            onChangeText={setVisaExpiredAt}
            defaultValue={formatDateArray(visaExpiredAt)}
          />
          {/* Data Asuransi */}
          <Text style={styles.title}>Data Asuransi</Text>
          <Text>Data Asuransi</Text>
          <View style={styles.inputOption}>
            <Picker
              selectedValue={insurance}
              onValueChange={(itemValue, itemIndex) => setInsurance(itemValue)}
              style={styles.pickerItemStyle}
              value={insurance}
            >
              <Picker.Item
                style={styles.pickerItemPilih}
                label="Pilih Insurance "
                value=""
              />
              {insuranceData.map((insurance) => (
                <Picker.Item
                  key={insurance.id}
                  style={styles.pickerItemStyle}
                  label={insurance.providerName}
                  value={insurance.id}
                />
              ))}
            </Picker>
          </View>
          <Text>No Polis</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInsurancePolicyNo}
            placeholder="No Polis"
            selectionColor="#870144"
            value={insurancePolicyNo}
          />
          <Text>Nama Polis</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInsuranceCustomerName}
            placeholder="Nama Polis"
            selectionColor="#870144"
            value={insuranceCustomerName}
          />
          <Text>Tanggal Input</Text>
          <TextInput
            style={styles.input}
            selectionColor="#870144"
            placeholder="dd/MM/yyyy"
            onFocus={() => showDatePickerHandler('policyEntryDate')}
            value={policyEntryDate}
            editable={!show}
            onChangeText={setPolicyEntryDate}
            defaultValue={formatDateArray(policyEntryDate)}
          />
          <Text>Tanggal Berlaku</Text>
          <TextInput
            style={styles.input}
            selectionColor="#870144"
            placeholder="dd/MM/yyyy"
            onFocus={() => showDatePickerHandler('policyStartingDate')}
            value={policyStartingDate}
            editable={!show}
            onChangeText={setPolicyStartingDate}
            defaultValue={formatDateArray(policyStartingDate)}
          />
          <Text>Tanggal Akhir</Text>
          <TextInput
            style={styles.input}
            selectionColor="#870144"
            placeholder="dd/MM/yyyy"
            onFocus={() => showDatePickerHandler('policyEndingDate')}
            value={policyEndingDate}
            editable={!show}
            onChangeText={setPolicyEndingDate}
            defaultValue={formatDateArray(policyEndingDate)}
          />

          {/* Keanggotaan */}
          <Text style={styles.title}>Keanggotaan</Text>
          <Text>Paket *</Text>
          <View style={styles.inputOption}>
            <Picker
              selectedValue={productId}
              onValueChange={(itemValue, itemIndex) => setProductId(itemValue)}
              style={styles.pickerItemStyle}
            >
              <Picker.Item
                style={styles.pickerItemPilih}
                label="Pilih Paket "
                value=""
              />
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
            {loading ? (
              <Text>Loading...</Text> // Tampilkan pesan loading selama data dimuat
            ) : (
              <Picker
                selectedValue={selectedMitra}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedMitra(itemValue)
                }
                style={styles.pickerItemStyle}
              >
                <Picker.Item
                  style={styles.pickerItemPilih}
                  label="Pilih Mitra"
                  value=""
                />
                {partnerData.map((partner) => (
                  <Picker.Item
                    key={partner.id}
                    style={styles.pickerItemStyle}
                    label={partner.fullName}
                    value={partner.id}
                  />
                ))}
              </Picker>
            )}
          </View>

          {/* Kondisi Kesehatan */}
          <Text style={styles.title}>Kondisi Kesehatan</Text>
          <Text>Kondisi Kesehatan</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHealthCondition}
            multiline={true}
            numberOfLines={4}
            placeholder="Kondisi Kesehatan"
            selectionColor="#870144"
            value={healthCondition}
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
                  onValueChange={(text) => setPostImage}
                />
                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={PickImage}
                >
                  <Text style={styles.uploadText} onPress={PickImage}>
                    Upload
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={gotoUploadDetail}
                >
                  <Text style={styles.uploadText} onPress={gotoUploadDetail}>
                    View
                  </Text>
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
                  onValueChange={(text) => setPostImage}
                />
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={PickImage}>
                    Upload
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={gotoUploadDetail}>
                    View
                  </Text>
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
                  onValueChange={(text) => setPostImage}
                />
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={PickImage}>
                    Upload
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={gotoUploadDetail}>
                    View
                  </Text>
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
                  onValueChange={(text) => setPostImage}
                />
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={PickImage}>
                    Upload
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={gotoUploadDetail}>
                    View
                  </Text>
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
                  onValueChange={(text) => setPostImage}
                />
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={PickImage}>
                    Upload
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={gotoUploadDetail}>
                    View
                  </Text>
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
                  onValueChange={(text) => setPostImage}
                />
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={PickImage}>
                    Upload
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={gotoUploadDetail}>
                    View
                  </Text>
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
                  onValueChange={(text) => setPostImage}
                />
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={PickImage}>
                    Upload
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={gotoUploadDetail}>
                    View
                  </Text>
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
                  onValueChange={(text) => setPostImage}
                />
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={PickImage}>
                    Upload
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={gotoUploadDetail}>
                    View
                  </Text>
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
                  onValueChange={(text) => setPostImage}
                />
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={PickImage}>
                    Upload
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                  <Text style={styles.uploadText} onPress={gotoUploadDetail}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.permintaan}>Permintaan Khusus</Text>
            <Text style={styles.permintaandes}>
              *)Harga paket akan berubah menyesuaikan permintaan khusus Jamaah{" "}
            </Text>
          </View>

          {/* Tambah Infant */}
          <Text style={styles.title}>Tambah Infant</Text>
          <Text>Nama sesuai NIK</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInfantName}
            placeholder="Nama sesuai NIK"
            selectionColor="#870144"
            value={infantName}
          />
          <Text>NIK Infant</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInfantNik}
            keyboardType="numeric"
            placeholder="NIK"
            selectionColor="#870144"
            value={infantNik}
          />
          <Text>Tanggal Lahir Infant</Text>
          <TextInput
            style={styles.input}
            selectionColor="#870144"
            placeholder="dd/MM/yyyy"
            onFocus={() => showDatePickerHandler('infantDob')}
            value={infantDob}
            editable={!show}
            onChangeText={setInfantDob}
            defaultValue={formatDateArray(infantDob)}
          />
          <Text>Biaya tambahan untuk Infant</Text>
          <TextInput
            style={styles.input}
            onTextChange={setInfantChargedAmount}
            keyboardType="numeric"
            placeholder="Biaya tambahan untuk Infant"
            selectionColor="#870144"
            value={infantChargedAmount.toString()}
          />

          {/* Tambah Infant */}
          <Text style={styles.title}>Upgrade Hotel</Text>
          <Text>Nama Hotel</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUpgradedHotelName}
            placeholder="Nama Hotel"
            selectionColor="#870144"
            value={upgradedHotelName}
          />
          <Text>Bintang Hotel</Text>
          <View style={styles.inputOption}>
            <Picker
              selectedValue={upgradedHotelStar}
              onValueChange={(itemValue, itemIndex) =>
                setUpgradedHotelStar(itemValue)
              }
              style={styles.pickerItemStyle}
              value={upgradedHotelStar}
            >
              <Picker.Item
                style={styles.pickerItemPilih}
                label="Pilih Bintang Hotel"
                value=""
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="FOUR_STAR"
                value="FOUR_STAR"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="FIVE_STAR"
                value="FIVE_STAR"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="SIX_STAR"
                value="SIX_STAR"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="SEVEN_STAR"
                value="SEVEN_STAR"
              />
            </Picker>
          </View>
          <Text>Tipe Kamar Hotel</Text>
          <View style={styles.inputOption}>
            <Picker
              selectedValue={upgradedHotelRoomType}
              onValueChange={(itemValue, itemIndex) =>
                setUpgradedHotelRoomType(itemValue)
              }
              style={styles.pickerItemStyle}
              value={upgradedHotelRoomType}
            >
              <Picker.Item
                style={styles.pickerItemPilih}
                label="Pilih Tipe Kamar Hotel"
                value=""
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="DOUBLE"
                value="DOUBLE"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="TRIPLE"
                value="TRIPLE"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="QUAD"
                value="QUAD"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="QUAD_FAMILY"
                value="QUAD_FAMILY"
              />
            </Picker>
          </View>
          <Text>Biaya Upgrade Hotel</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUpgradedHotelPrice}
            keyboardType="numeric"
            placeholder="Biaya Upgrade Hotel"
            selectionColor="#870144"
            value={upgradedHotelPrice.toString()}
          />

          {/* Upgrade Maskapai */}
          <Text style={styles.title}>Upgrade Maskapai</Text>
          <Text>Nama Maskapai</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUpgradedAirlineName}
            placeholder="Nama Maskapai"
            selectionColor="#870144"
            value={upgradedAirlineName}
          />
          <Text>Kode Maskapai</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUpgradedAirlineCode}
            placeholder="Kode Maskapai"
            selectionColor="#870144"
            value={upgradedAirlineCode}
          />
          <Text>Kelas</Text>
          <View style={styles.inputOption}>
            <Picker
              selectedValue={upgradedAirlineClass}
              onValueChange={(itemValue, itemIndex) =>
                setUpgradedAirlineClass(itemValue)
              }
              style={styles.pickerItemStyle}
              value={upgradedAirlineClass}
            >
              <Picker.Item
                style={styles.pickerItemPilih}
                label="Pilih Kelas"upgradedAirlinePrice
                value=""
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="VIP"
                value="VIP"
              />
              <Picker.Item
                style={styles.pickerItemStyle}
                label="Business"
                value="Business"
              />
            </Picker>
          </View>
          <Text>Biaya Upgrade Maskapai</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUpgradedAirlinePrice}
            keyboardType="numeric"
            placeholder="Biaya Upgrade Maskapai"
            selectionColor="#870144"
            value={upgradedAirlinePrice.toString()}
          />

          {/* Permintaan Khusus Lainnya */}
          <Text style={styles.title}>Permintaan Khusus Lainnya</Text>
          <Text>Permintaan khusus lainnya</Text>
          <TextInput
            style={styles.input}
            onChangeText={setSpecialPriceDescription}
            placeholder="Permintaan khusus lainnya"
            selectionColor="#870144"
            value={specialPriceDescription}
          />
          <Text>Biaya Tambahan</Text>
          <TextInput
            style={styles.input}
            onChangeText={setSpecialPrice}
            keyboardType="numeric"
            placeholder="Biaya tambahan"
            selectionColor="#870144"
            value={specialPrice.toString()}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
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
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    fontSize: 17,
    textAlign: "center",
  },
  permintaan: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 17,
    color: "red",
  },
  permintaandes: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 15,
    color: "red",
    fontStyle: "italic",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 20,
    marginTop: 3,
    borderRadius: 6,
  },
  inputOption: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 6,
    height: 48,
    lineHeight: 48,
  },
  pickerItemPilih: {
    fontSize: 14,
    color: "#bbb",
  },
  pickerItemStyle: {
    fontSize: 14,
  },
  submitButton: {
    position: "absolute",
    bottom: 10,
    right: 15,
    backgroundColor: "#870144",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 5,
    width: 100,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    height: 28,
    lineHeight: 28,
  },
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  genderText: {
    flex: 1,
    marginVertical: 10,
  },
  checklist: {
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: "row",
    // alignItems: 'center',
  },
  checkboxUnchecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#aaa",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#870144",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    color: "#fff",
    fontSize: 16,
  },
  checkboxAndText: {
    alignItems: "center",
  },
  horizontalLine: {
    // flex: 1,
    height: 1,
    backgroundColor: "#870144",
    marginTop: 10,
    width: 50,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 20,
    marginTop: 3,
    borderRadius: 6,
  },
  uploadButton: {
    backgroundColor: "#870144",
    padding: 8,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 3,
    borderRadius: 6,
    marginLeft: 10,
    width: 100,
  },
  uploadText: {
    color: "white",
    fontWeight: "bold",
    height: 28,
    lineHeight: 28,
  },
});
