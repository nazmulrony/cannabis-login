import { Picker } from "@react-native-picker/picker";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

const SalonPicker = () => {
    const [pickerValue, setPickerValue] = useState('HairStyle')
    return (
        <View style={styles.pickerContainer}>
            <Picker
                style={styles.picker}
                selectedValue={pickerValue}
                onValueChange={(itemValue) =>
                    setPickerValue(itemValue)
                }
            >
                <Picker.Item label="Home Salon" value="Home Salon" />
                <Picker.Item label="Onsite Salon" value="Onsite Salon" />
            </Picker>
        </View>
    );
};

export default SalonPicker;

const styles = StyleSheet.create({
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#29292980',
        borderRadius: 34,
        flex: 1,
        backgroundColor: 'rgba(40, 40, 40, 0.1)',
    },
})