import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { withLayoutContext } from "expo-router";

const { Navigator } = createBottomTabNavigator();

export const BTabs = withLayoutContext<
  BottomTabNavigationOptions,
  typeof Navigator
>(Navigator);
