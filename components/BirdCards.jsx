import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

const BirdCards = ({ initialBirdsList, onIncrementBirdSeen }) => {
  return (
    <ScrollView style={styles.container}>
      {Object.entries(initialBirdsList).map(
        ([birdName, { timesSeen, imageUrl }]) => (
          <View key={birdName} style={styles.card}>
            <View style={styles.cardContent}>
              <Image source={imageUrl} style={styles.image} />
              <Text
                style={styles.text}
              >{`You have seen ${birdName} ${timesSeen} times!`}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => onIncrementBirdSeen(birdName)}
              >
                <Text style={styles.plusSign}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    flex: 1, // Make text flex to accommodate image and button
    fontSize: 16,
    marginLeft: 10, // Add some space between image and text
  },
  button: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  plusSign: {
    fontSize: 20,
    color: "#000",
  },
  image: {
    width: 50, // Define width
    height: 50, // Define height
    borderRadius: 25, // Optional: make it round
  },
});

export default BirdCards;
