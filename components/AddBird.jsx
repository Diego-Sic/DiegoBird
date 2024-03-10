import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "../styles/AddBirdStyles";

const AddBird = ({ onAddBird }) => {
  const [birdName, setBirdName] = useState("");
  const [timesSeen, setTimesSeen] = useState("");

  const handleAddBird = () => {
    const timesSeenNumber = parseInt(timesSeen, 10) || 0;
    if (birdName && timesSeenNumber > 0) {
      onAddBird(birdName, timesSeenNumber);
      setBirdName("");
      setTimesSeen("");
    } else {
      console.log("Invalid input");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Bird Name"
        value={birdName}
        onChangeText={setBirdName}
      />
      <TextInput
        style={styles.input}
        placeholder="Times Seen"
        value={timesSeen}
        onChangeText={setTimesSeen}
        keyboardType="number-pad"
      />
      <Button title="Add Bird" onPress={handleAddBird} />
    </View>
  );
};

export default AddBird;
