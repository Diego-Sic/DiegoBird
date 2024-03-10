import React from "react";
import { View } from "react-native";
import MostSeen from "../components/MostSeen";
import BirdCards from "../components/BirdCards";
import ShootPicture from "../components/ShootPicture";
import AddBird from "../components/AddBird"; // Import AddBird component
import useBirdsList from "../hooks/useBirdsList";
import { styles } from "../styles/HomePageStyles";

const HomePage = () => {
  const { birdsList, incrementBirdSeen, addBird, deleteBird } = useBirdsList(); // Ensure addBird is included here

  return (
    <View style={styles.container}>
      <MostSeen initialBirdsList={birdsList} />
      <BirdCards
        initialBirdsList={birdsList}
        onIncrementBirdSeen={incrementBirdSeen}
        onDeleteBird={deleteBird}
      />
      <AddBird onAddBird={addBird} />
      <ShootPicture />
    </View>
  );
};

export default HomePage;
