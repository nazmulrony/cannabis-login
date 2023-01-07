import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const HairTypePicker = () => {
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
                <Picker.Item label="Hair Type" value="Hair Type" />
                <Picker.Item label="Curly" value="Curly" />
                <Picker.Item label="Straight" value="Straight" />
            </Picker>
        </View>
    );
};

export default HairTypePicker;

const styles = StyleSheet.create({
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#29292980',
        borderRadius: 34,
        flex: 1,
        marginRight: 16
    },
})