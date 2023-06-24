import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { withLayoutContext } from "expo-router";

export type BTabRootParamList = {
  index: undefined;
  next: {
    name: string;
    age: string;
    sex: string;
  };
};
const { Navigator } = createBottomTabNavigator<BTabRootParamList>();

export const BTabs = withLayoutContext<
  BottomTabNavigationOptions,
  typeof Navigator
>(Navigator);
