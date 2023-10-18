import React from "react";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ChatDetailsScreen from "../screens/ChatDetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  const { colorScheme } = useColorScheme();
  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Chat") {
              iconName = "chatbubbles-outline";
            } else if (route.name === "Matches") {
              iconName = "heart-outline";
            } else if (route.name === "Profile") {
              iconName = "person-outline";
            }

            const customizeSize = 25;

            return (
              <Ionicons
                name={iconName}
                size={customizeSize}
                color={focused ? "#3B82F6" : "gray"}
              />
            );
          },

          tabBarActiveTintColor: "#3B82F6",
          tabBarLabelStyle: {
            fontWeight: "bold",
          },
          tabBarInactiveTintColor: "gray",
          // tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: colorScheme == "dark" ? "black" : "white",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeTabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatDetails"
          component={ChatDetailsScreen}
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
