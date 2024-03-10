import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardinalImage from "../assets/Cardinal.jpg";
import BlueJayImage from "../assets/BlueJay.jpg";
import RobinImage from "../assets/Robin.jpg";

const useBirdsList = () => {
  const [birdsList, setBirdsList] = useState({
    Cardinal: { timesSeen: 1, imageUrl: CardinalImage },
    "Blue Jay": { timesSeen: 2, imageUrl: BlueJayImage },
    Robin: { timesSeen: 3, imageUrl: RobinImage },
  });

  useEffect(() => {
    // Fetch the birds list from AsyncStorage when the component mounts
    const fetchBirdsList = async () => {
      const storedBirdsList = await AsyncStorage.getItem("birdsList");
      if (storedBirdsList) setBirdsList(JSON.parse(storedBirdsList));
    };

    fetchBirdsList();
  }, []);

  useEffect(() => {
    // Persist the birds list to AsyncStorage whenever it changes
    const persistBirdsList = async () => {
      await AsyncStorage.setItem("birdsList", JSON.stringify(birdsList));
    };

    persistBirdsList();
  }, [birdsList]);

  const incrementBirdSeen = async (birdName) => {
    const newBirdsList = {
      ...birdsList,
      [birdName]: {
        ...birdsList[birdName],
        timesSeen: birdsList[birdName].timesSeen + 1,
      },
    };
    setBirdsList(newBirdsList);
  };
  const addBird = (birdName, timesSeen) => {
    const newEntry = {
      [birdName]: { timesSeen, imageUrl: "/assets/Robing.jpg" },
    };
    setBirdsList((currentList) => ({ ...currentList, ...newEntry }));
  };
  const deleteBird = (birdName) => {
    setBirdsList((currentList) => {
      const newList = { ...currentList };
      delete newList[birdName];
      return newList;
    });
  };

  // Return deleteBird from your hook
  return { birdsList, incrementBirdSeen, addBird, deleteBird };
};

export default useBirdsList;
