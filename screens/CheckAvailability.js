import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import HairTypePicker from "../components/HairTypePicker";
import SalonPicker from "../components/SalonPicker";
import Card1 from "../components/Card1";
import Navbar from "../components/Navbar";
import Card2 from "../components/Card2";


const CheckAvailability = () => {

    return (
        <>
            <View style={styles.screen}>
                <ScrollView>
                    <View style={styles.topContainer}>
                        <MaterialIcons name="location-pin" size={36} color="#FF3D00" />
                        <View>
                            <Text>Game Olso</Text>
                            <Text style={{ color: '#29292980' }}>NO</Text>
                        </View>
                        <View style={{ flex: 1, borderRightWidth: 1, borderRightColor: '#29292980', height: '100%', marginRight: 8 }}></View>
                        <Feather name="calendar" size={24} color="#29292980" />
                        <Text style={{ color: '#29292980' }}>When?</Text>
                    </View>
                    <View style={styles.pickersContainer}>
                        <HairTypePicker />
                        <SalonPicker />
                    </View>
                    <Text style={styles.text}>100 results of 355</Text>
                    <Card1 />
                    <Card2 />
                    <Card1 />
                    <Card2 />
                    <Card1 />
                </ScrollView>
            </View>
            <Navbar />
        </>
    );
};

export default CheckAvailability;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 80,
    },
    topContainer: {
        borderRadius: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#29292980',
        width: '100%',
        flexDirection: 'row',
        alignItems: "center"
    },
    pickersContainer: {
        width: '100%',
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: "center",
    },
    text: {
        textAlign: "left",
        color: '#29292980'
    }
})