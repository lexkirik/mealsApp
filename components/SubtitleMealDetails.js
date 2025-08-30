import { Text, StyleSheet } from "react-native";

function SubtitleMealDetails({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

export default SubtitleMealDetails;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontWeight: "bold",
    fontSize: 18,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    textAlign: "center",
  },
});
