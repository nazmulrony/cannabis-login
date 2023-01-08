import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Card2 = () => {
    return (
        <View style={styles.cardContainer}>
            <Image
                style={styles.cardImage}
                source={require("../assets/images/person2.png")}
            />
            <View style={styles.infoContainer}>
                <Text style={{ textAlign: "right", color: "#29292980" }}>
                    FROM
                </Text>
                <View style={styles.detailsContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="star" size={16} color="#FFC727" />
                        <FontAwesome name="star" size={16} color="#FFC727" />
                        <FontAwesome name="star" size={16} color="#FFC727" />
                        <FontAwesome name="star" size={16} color="#FFC727" />
                        <Text style={{ color: "#BDBDBD", marginLeft: 4 }}>
                            4
                        </Text>
                    </View>
                    <View style={styles.pricingContainer}>
                        <Text style={{ marginRight: 16 }}>
                            Kr63<Text style={{ color: "#BDBDBD" }}>/h</Text>
                        </Text>
                        <Text>
                            Kr480<Text style={{ color: "#BDBDBD" }}>/day</Text>
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.distance}>
                <MaterialIcons name="location-pin" size={20} color="#FF3D00" />
                <Text style={{ color: "#ffffff", fontSize: 12 }}>240m</Text>
            </View>
            <View style={styles.salonType}>
                <Text style={{ color: "#ffffff", fontSize: 12 }}>
                    Home Salon
                </Text>
            </View>
        </View>
    );
};

export default Card2;
const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 8,
    },
    cardImage: {
        width: "100%",
    },
    infoContainer: {
        padding: 8,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: "#29292980",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    detailsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    pricingContainer: {
        flexDirection: "row",
    },
    distance: {
        flexDirection: "row",
        position: "absolute",
        top: 16,
        left: 16,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 16,
    },
    salonType: {
        flexDirection: "row",
        position: "absolute",
        top: 16,
        right: 16,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 16,
    },
});
