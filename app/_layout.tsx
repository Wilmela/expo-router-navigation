import { BTabs } from "../layout/bottomTabs";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const unstable_settings = {
  initialRouteName: "home",
};

export default function BottomTabs() {
  return (
    <BTabs>
      <BTabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      
      <BTabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </BTabs>
  );
}
