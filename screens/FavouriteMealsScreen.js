//import { useContext } from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";
//import { FavouritesContext } from "../store/contex/favourites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function FavouriteMealsScreen() {
  //const favouriteMealContext = useContext(FavouritesContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

export default FavouriteMealsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
