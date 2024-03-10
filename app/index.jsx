import { View } from "react-native";
import MostSeen from "../components/MostSeen";
import BirdCards from "../components/BirdCards";
import ShootPicture from "../components/ShootPicture";
import useBirdsList from "../hooks/useBirdsList";
import { styles } from "../styles/HomePageStyles";
const HomePage = () => {
  const { birdsList, incrementBirdSeen } = useBirdsList();

  return (
    <View style={styles.container}>
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
