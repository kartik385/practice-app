import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import { AiringShow } from "./tmdb";

export type RootStackParamList = {
  Home: undefined;
  Info: AiringShow;
};

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;
