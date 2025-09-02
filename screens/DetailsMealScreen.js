import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubtitleMealDetails from "../components/SubtitleMealDetails";
import ListMealDetails from "../components/ListMealDetails";
import { useContext, useLayoutEffect } from "react";
import ButtonIcon from "../components/ButtonIcon";
import { FavouritesContext } from "../store/contex/favourites-context";

function DetailsMealScreen({ route, navigation }) {
  const favouriteMealContext = useContext(FavouritesContext);
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id === mealID);
  const isMealFavourite = favouriteMealContext.ids.includes(mealID);

  function changeFavouriteHandler() {
    if (isMealFavourite) {
      favouriteMealContext.removeFavourite(mealID);
    } else {
      favouriteMealContext.addFavourite(mealID);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <ButtonIcon
            onPress={changeFavouriteHandler}
            name={isMealFavourite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavouriteHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <SubtitleMealDetails>Ingredints</SubtitleMealDetails>
          <ListMealDetails data={selectedMeal.ingredients} />
          <SubtitleMealDetails>Steps</SubtitleMealDetails>
          <ListMealDetails data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailsMealScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 40,
  },
});
