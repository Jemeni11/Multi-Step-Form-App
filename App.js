import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import FourthScreen from "./screens/FourthScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            // animationEnabled: true,
            tabBarShowLabel: false,
            tabBarIndicatorStyle: { display: "none" },
          }}
        >
          <Tab.Screen name="First" component={FirstScreen} />
          <Tab.Screen name="Second" component={SecondScreen} />
          <Tab.Screen name="Third" component={ThirdScreen} />
          <Tab.Screen name="Fourth" component={FourthScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
