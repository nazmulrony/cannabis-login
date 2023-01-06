import { Pressable, StyleSheet, Text } from "react-native";


const LoginBtn = () => {
    return (
        <Pressable style={styles.loginBtn} android_ripple={{ color: '#484747' }}>
            <Text style={styles.text}>Login</Text>
        </Pressable >
    );
};

export default LoginBtn;

const styles = StyleSheet.create({
    loginBtn: {
        width: '100%',
        backgroundColor: '#282828',
        borderRadius: 8,
        padding: 12,
        marginVertical: 24,
        alignItems: "center",
    },
    text: {
        color: 'white',
        fontSize: 18
    }

})

