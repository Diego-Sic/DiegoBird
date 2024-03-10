import { Text, View } from "react-native";
import { useState } from "react";
// Import your bird images
import CardinalImage from "../assets/Cardinal.jpg";
import BlueJayImage from "../assets/BlueJay.jpg";
import RobinImage from "../assets/Robin.jpg";

import MostSeen from "../components/MostSeen";
import BirdCards from "../components/BirdCards";
import ShootPicture from "../components/ShootPicture";

const HomePage = () => {
  const [birdsList, setBirdsList] = useState({
    Cardinal: { timesSeen: 1, imageUrl: CardinalImage },
    "Blue Jay": { timesSeen: 2, imageUrl: BlueJayImage },
    Robin: { timesSeen: 3, imageUrl: RobinImage },
  });

  const incrementBirdSeen = (birdName) => {
    // Ensure you're updating the timesSeen while keeping the imageUrl intact
    const newBirdsList = {
      ...birdsList,
      [birdName]: {
        ...birdsList[birdName],
        timesSeen: birdsList[birdName].timesSeen + 1,
      },
    };
    setBirdsList(newBirdsList);
  };

  return (
    <View style={{ flex: 1 }}>
      <MostSeen initialBirdsList={birdsList} />
      <BirdCards
        initialBirdsList={birdsList}
        onIncrementBirdSeen={incrementBirdSeen}
      />
      <ShootPicture />
    </View>
  );
};

export default HomePage;
