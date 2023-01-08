import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
const Navbar = () => {
    return (
        <View style={styles.navContainer}>
            <View style={styles.iconContainer}>
                <Ionicons name="home" size={24} color="black" />
                <Text>Home</Text>
            </View>
            <View style={styles.iconContainer}>
                <Fontisto name="wheelchair" size={24} color="#BDBDBD" />
                <Text style={styles.text}>Salon</Text>
            </View>
            <View style={styles.iconContainer}>
                <MaterialIcons
                    name="account-circle"
                    size={24}
                    color="#BDBDBD"
                />
                <Text style={styles.text}>Account</Text>
            </View>
        </View>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    navContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 8,
        borderTopWidth: 1,
        borderTopColor: "rgba(0, 0, 0, 0.1)",
    },
    iconContainer: {
        alignItems: "center",
    },
    text: {
        color: "#BDBDBD",
    },
});
