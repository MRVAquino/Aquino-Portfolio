import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/style";

interface ProjectProps {
  project: { id: string; name: string; description: string };
  darkMode: boolean;
}

const Project: React.FC<ProjectProps> = ({ project, darkMode }) => {
  return (
    <View style={[styles.projectItem, darkMode ? styles.darkProjectItem : styles.lightProjectItem]}>
      <Text style={[styles.projectTitle, darkMode ? styles.darkText : styles.lightText]}>{project.name}</Text>
      <Text style={[styles.projectDesc, darkMode ? styles.darkText : styles.lightText]}>{project.description}</Text>
    </View>
  );
};

export default Project;
