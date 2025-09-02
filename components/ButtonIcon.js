import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ButtonIcon({ onPress, name, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={name} size={24} color={color} />
    </Pressable>
  );
}

export default ButtonIcon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
