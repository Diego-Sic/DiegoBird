import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/BirdCardsStyles";

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

export default BirdCards;
