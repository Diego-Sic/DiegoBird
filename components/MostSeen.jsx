import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { styles } from "../styles/MostSeenStyles";

const MostSeen = ({ initialBirdsList }) => {
  const findBirdWithMostInstances = (birdsList) => {
    let maxSeen = 0;
    let birdWithMaxSeen = "";
    let birdImageUrl = "";
    Object.entries(birdsList).forEach(([bird, { timesSeen, imageUrl }]) => {
      if (timesSeen > maxSeen) {
        maxSeen = timesSeen;
        birdWithMaxSeen = bird;
        birdImageUrl = imageUrl;
      }
    });
    return { birdWithMaxSeen, maxSeen, birdImageUrl };
  };

  const { birdWithMaxSeen, maxSeen, birdImageUrl } =
    findBirdWithMostInstances(initialBirdsList);
  const screenHeight = Dimensions.get("window").height;
  const cardHeight = screenHeight * 0.2;

  return (
    <View style={[styles.card, { height: cardHeight }]}>
      <Image source={birdImageUrl} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{birdWithMaxSeen}</Text>
        <Text style={styles.timesSeen}>Seen {maxSeen} times</Text>
      </View>
    </View>
  );
};

export default MostSeen;
