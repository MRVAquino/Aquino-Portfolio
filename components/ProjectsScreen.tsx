import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../styles/style";
import Project from "./Project";

interface ProjectsScreenProps {
  darkMode: boolean;
}

const projects = [
  { id: "1", name: "Portfolio App", description: "A React Native portfolio app with dark mode." },
  { id: "2", name: "Web App", description: "An online Inventory Web App built with React App." },
  { id: "3", name: "Facebook", description: "A simple messaging app for communication." }
];

const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ darkMode }) => {
  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Project project={item} darkMode={darkMode} />}
      />
    </View>
  );
};

export default ProjectsScreen;
