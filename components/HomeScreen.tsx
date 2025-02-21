import React from "react";
import { View, Text, Image, Switch, Linking, TouchableOpacity } from "react-native";
import styles from "../styles/style";

interface HomeScreenProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ darkMode, setDarkMode }) => {
  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      
      
      <View style={styles.switchContainer}>
        <Text style={[styles.darkModeLabel, darkMode ? styles.darkText : styles.lightText]}>
          {darkMode ? "🌙" : "☀️"}
        </Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      
      <Image source={require("../assets/prof1.jpg")} style={styles.profilePic} />

      
      <Text style={[styles.name, darkMode ? styles.darkText : styles.lightText]}>Mark Regie V. Aquino</Text>
      <Text style={[styles.bio, darkMode ? styles.darkText : styles.lightText]}>Aspiring billionaire with a passion for coding and innovation. On a mission to master programming and build something extraordinary, aiming to reach the billion-dollar mark by 26. Hard work, patience, and continuous learning fuel my journey.</Text>

      
      <View style={[styles.skills, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>SKILLS</Text>
        <Text style={[styles.skills, darkMode ? styles.darkText : styles.lightText]}>
          React Native, React, Node.js
        </Text>
      </View>

      
      <View style={styles.contactContainer}>
        <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Contact Me</Text>

        
        <TouchableOpacity onPress={() => Linking.openURL("mailto:mark_regie_aquino@dlsl.edu.ph")}>
          <Text style={[styles.contactText, darkMode ? styles.darkText : styles.lightText]}>
            📧 mark_regie_aquino@dlsl.edu.ph
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/MRVAquino")}>
          <Text style={[styles.contactText, darkMode ? styles.darkText : styles.lightText]}>
            🐱 GitHub
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default HomeScreen;
