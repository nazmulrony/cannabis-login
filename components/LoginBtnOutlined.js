import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const LoginBtnOutlined = () => {
    return (
        <Pressable style={styles.loginBtn} android_ripple={{ color: '#e3e3e3' }}>
            <View style={styles.textContainer}>
                <AntDesign name="google" size={30} color="black" />
                <Text style={styles.text}>Login With Google</Text>
            </View>
        </Pressable >
    );
};

export default LoginBtnOutlined;

const styles = StyleSheet.create({
    loginBtn: {
        width: '100%',
        borderRadius: 8,
        padding: 12,
        marginVertical: 24,
        alignItems: "center",
        borderWidth: 1
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginLeft: 3
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    }

})