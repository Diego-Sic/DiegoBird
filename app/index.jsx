import { Text, View } from "react-native";
import favicon from "../assets/favicon.png";
import MostSeen from "../components/MostSeen";
import BirdCards from "../components/BirdCards";
import ShootPicture from "../components/ShootPicture";
import { useState } from "react";

const HomePage = () => {
  const [birdsList, setBirdsList] = useState({
    Cardinal: 1,
    "Blue Jay": 2,
    // other birds...
  });

  const incrementBirdSeen = (birdName) => {
    const newBirdsList = { ...birdsList, [birdName]: birdsList[birdName] + 1 };
    setBirdsList(newBirdsList);
  };
  return (
    <View style={{ flex: 1 }}>
      <MostSeen imageUrl={favicon} name="Blue Jay" timesSeen={5} />
      <BirdCards
        initialBirdsList={birdsList}
        onIncrementBirdSeen={incrementBirdSeen}
      />
      <ShootPicture />
    </View>
  );
};

export default HomePage;
