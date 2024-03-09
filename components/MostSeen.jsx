import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const MostSeen = ({ imageUrl, name, timesSeen }) => {
  const imageSource =
    typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl;

  // Correctly calculate the card height here
  const screenHeight = Dimensions.get("window").height;
  const cardHeight = screenHeight * 0.5;

  // You can dynamically adjust styles here
  const dynamicStyles = StyleSheet.create({
    card: {
      backgroundColor: "#f9f9f9",
      borderRadius: 12,
      elevation: 5,
      flexDirection: "row",
      marginHorizontal: 20,
      marginVertical: 12,
      padding: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      height: cardHeight,
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 60,
    },
    infoContainer: {
      flex: 1,
      paddingLeft: 20,
      justifyContent: "center",
    },
    name: {
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 4,
    },
    timesSeen: {
      fontSize: 16,
      color: "#777",
    },
  });

  return (
    <View style={dynamicStyles.card}>
      <Image source={imageSource} style={dynamicStyles.image} />
      <View style={dynamicStyles.infoContainer}>
        <Text style={dynamicStyles.name}>{name}</Text>
        <Text style={dynamicStyles.timesSeen}>Seen {timesSeen} times</Text>
      </View>
    </View>
  );
};

export default MostSeen;
