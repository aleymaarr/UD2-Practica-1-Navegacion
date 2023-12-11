import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import appColors from "../assets/styles/appColors";

const HobbiesList = () => {
  const hobbies = [
    "Montar en bici 🚵‍♀️",
    "Nadar en el mar 🏊 y piscina 🌊",
    "Ir a comer con la familia 👨‍👩‍👧‍👦",
    "Visitar sitios 🇪🇸",
    "Descansar durante las vacaciones 🛌",
    "Ir al cine con los amigos 🍿",
    "Escuchar música de todo tipo 🎶",
    "Oler bien 👃",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Things that I like a lot:</Text>
      <ScrollView style={styles.scrollView}>
        {hobbies.map((hobby, index) => (
          <Text key={index} style={styles.hobbiesStyle}>
            {hobby}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default HobbiesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  hobbiesStyle: {
    borderColor: appColors.accentColor,
    borderWidth: 1,
    borderStyle: "dashed",
    color: appColors.textColor,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: appColors.secondary,
    padding: 18,
    marginVertical: 5,
    width: "80%",
  },
  titleStyle: {
    color: appColors.titleColor,
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  scrollView: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
});
