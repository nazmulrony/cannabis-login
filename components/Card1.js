import { Image, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Card1 = () => {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.cardImage} source={require('../assets/images/person1.png')} />
            <View style={styles.infoContainer}>
                <Text style={{ textAlign: 'right', color: '#29292980' }}>FROM</Text>
                <View style={styles.detailsContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome name="star" size={16} color="#FFC727" />
                        <FontAwesome name="star" size={16} color="#FFC727" />
                        <FontAwesome name="star" size={16} color="#FFC727" />
                        <FontAwesome name="star" size={16} color="#FFC727" />
                        <Text style={{ color: '#BDBDBD', marginLeft: 4 }}>4</Text>
                    </View>
                    <View style={styles.pricingContainer}>
                        <Text style={{ marginRight: 16 }}>Kr63<Text style={{ color: '#BDBDBD' }}>/h</Text></Text>
                        <Text>Kr480<Text style={{ color: '#BDBDBD' }}>/day</Text></Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default Card1;
const styles = StyleSheet.create({
    cardContainer: {
        // borderWidth: 1,
        // borderColor: '#29292980',
        // borderRadius: 8,
        // overflow: 'hidden'
        marginBottom: 8

    },
    cardImage: {
        width: '100%',
    },
    infoContainer: {
        padding: 8,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#29292980',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pricingContainer: {
        flexDirection: 'row',
    }
})