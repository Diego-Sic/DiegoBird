import { Text, View } from "react-native";
import favicon from "../assets/favicon.png";
import MostSeen from "../components/MostSeen";
import BirdCards from "../components/BirdCards";
import ShootPicture from "../components/ShootPicture";
const birdsArray = {
  Eagle: 3,
  Sparrow: 5,
  Robin: 2,
};

const HomePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <MostSeen imageUrl={favicon} name="Blue Jay" timesSeen={5} />
      <BirdCards birdsList={birdsArray} />
      <ShootPicture />
    </View>
  );
};

export default HomePage;
