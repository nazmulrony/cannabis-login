import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Login = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/login.png')} />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.loginText}>Login</Text>
                <View style={styles.formGroup}>
                    <Entypo name="email" size={18} color="rgba(40, 40, 40, 0.5)" />
                    <TextInput style={styles.textInput} placeholder="E-mail ID" />
                </View>
                <View style={styles.formGroup}>
                    <MaterialIcons name="lock" size={24} color="rgba(40, 40, 40, 0.5)" />
                    <TextInput style={styles.textInput} placeholder="E-mail ID" />
                </View>
                <Text>Forgot password?</Text>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 36,
        alignItems: "center",
    },
    imageContainer: {
        width: 225,
        height: 210,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    formContainer: {
        flex: 1,
        marginTop: 36,
        width: '100%',

    },
    loginText: {
        textAlign: "left",
        fontSize: 20
    },
    formGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    },
    textInput: {
        marginLeft: 8,
        padding: 8,
        borderBottomWidth: 1,
        borderColor: 'rgba(40, 40, 40, 0.5)',
        color: '#363636',
        flex: 1
    }
})