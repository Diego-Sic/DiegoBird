import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    // Removed height to make it dynamic in the component
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
