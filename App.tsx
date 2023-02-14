import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/homescreen";
import InfoScreen from "./screens/otherScreen";
import { RootStackParamList } from "./types/type";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Homescreen} />
        <RootStack.Screen name="Info" component={InfoScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
