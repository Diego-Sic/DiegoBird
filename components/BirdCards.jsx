import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const BirdCards = ({ initialBirdsList, onIncrementBirdSeen }) => {
  return (
    <ScrollView style={styles.container}>
      {Object.entries(initialBirdsList).map(([birdName, timesSeen]) => (
        <View key={birdName} style={styles.card}>
          <View style={styles.cardContent}>
            <Text
              style={styles.text}
            >{` You have seen ${birdName} ${timesSeen} Times !`}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onIncrementBirdSeen(birdName)}
            >
              <Text style={styles.plusSign}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
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
    fontSize: 16,
  },
  button: {
    // Style your button or plus sign here
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
});

export default BirdCards;
