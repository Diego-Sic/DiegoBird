import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { styles } from "../styles/BirdCardsStyles";

const BirdCards = ({ initialBirdsList, onIncrementBirdSeen, onDeleteBird }) => {
  const handleDeleteBird = (birdName) => {
    // Optional: Show a confirmation dialog before deleting
    Alert.alert("Delete Bird", `Are you sure you want to remove ${birdName}?`, [
      { text: "Cancel" },
      { text: "Delete", onPress: () => onDeleteBird(birdName) },
    ]);
  };

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
              {/* Delete Button */}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteBird(birdName)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      )}
    </ScrollView>
  );
};
export default BirdCards;
