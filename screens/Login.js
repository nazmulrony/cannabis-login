import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import LoginBtn from "../components/LoginBtn";
import LoginBtnOutlined from "../components/LoginBtnOutlined";

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
                    <MaterialIcons name="lock" size={18} color="rgba(40, 40, 40, 0.5)" />
                    <TextInput style={styles.textInput} placeholder="Password" />
                </View>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                <LoginBtn />
                <View style={styles.divider}>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#29292980', flex: 1, marginTop: 8, marginHorizontal: 8 }}></View>
                    <Text style={{ color: '#29292980' }}>OR</Text>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#29292980', flex: 1, marginTop: 8, marginHorizontal: 8 }}></View>
                </View>
                <LoginBtnOutlined />
                <Text style={{ color: '#29292980', textAlign: 'center' }}>Don't have account? <Text style={{ fontSize: 18, color: 'black' }}>Sign Up</Text></Text>


            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 80,
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
    },
    forgotPasswordText: {
        textAlign: 'right',
        color: 'rgba(40, 40, 40, 0.5)',
    },
    divider: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }

})