import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  darkContainer: { backgroundColor: "#333" },
  lightContainer: { backgroundColor: "#fff" },
  darkText: { color: "#fff" },
  lightText: { color: "#000" },

  
  switchContainer: {
    position: "absolute",
    top: 50, 
    right: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  tabBarStyle: {
    backgroundColor: "#fff",
    borderTopColor: "#ddd",
  },

  darkTabBarStyle: {
    backgroundColor: "#333",
    borderTopColor: "#666",
  },

  darkModeLabel: { fontSize: 18, marginRight: 8 },

  profilePic: { width: 120, height: 120, borderRadius: 60, marginTop: 80 },
  name: { fontSize: 24, fontWeight: "bold", marginTop: 10 },
  bio: { fontSize: 16, textAlign: "center", marginBottom: 20, padding: 10, borderWidth: 2, borderRadius: 10, width: "90%", alignSelf: "center", alignItems: "center",},
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginTop: 20 },
  skills: { fontSize: 16, textAlign: "center", marginBottom: 10, borderWidth: 2 , borderRadius: 10, padding: 10, marginTop: 10, alignItems: "center", width: "90%", alignSelf: "center",},
  contactContainer: { marginTop: 20, padding: 10, borderWidth: 2, borderRadius: 10, width: "90%", alignSelf: "center", alignItems: "center", },
  contactText: { fontSize: 16, marginVertical: 5,textDecorationLine: "underline", },

  
  projectItem: { width: "90%", alignSelf: "center", alignItems: "center", justifyContent: "center", padding: 15, marginVertical: 10, borderRadius: 10,},
  darkProjectItem: { backgroundColor: "#444", borderColor: "#666", borderWidth: 1 },
  lightProjectItem: { backgroundColor: "#f9f9f9", borderColor: "#ddd", borderWidth: 1 },

  projectTitle: { fontSize: 20, textAlign: "center", fontWeight: "bold" },
  projectDesc: { fontSize: 14, textAlign: "center" },
});

export default styles;
