import React, { useState } from "react";
import { Button, View, StyleSheet, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ShootPicture = () => {
  const [imageUri, setImageUri] = useState(null);

  const openCamera = async () => {
    // Requesting camera permissions
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // If a picture is taken, update the imageUri state
    if (!result.cancelled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri; // Correctly access the URI
      console.log("Image URI:", uri); // Debugging line to check the URI
      setImageUri(uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="C" onPress={openCamera} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.preview} />}
      {!imageUri && <Text>No image captured</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  preview: {
    marginTop: 20,
    width: 300, // Adjust width as needed
    height: 300, // Adjust height as needed, or use aspect ratio
    resizeMode: "contain", // This ensures the image fits within the dimensions without stretching
  },
});

export default ShootPicture;
