import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const BirdCards = ({ birdsList }) => {
  return (
    <ScrollView style={styles.container}>
      {Object.entries(birdsList).map(([birdName, timesSeen]) => (
        <View key={birdName} style={styles.card}>
          <Text style={styles.text}>{`${birdName} : ${timesSeen}`}</Text>
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
  text: {
    fontSize: 16,
  },
});

export default BirdCards;
