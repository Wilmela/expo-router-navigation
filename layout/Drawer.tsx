import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { withLayoutContext } from "expo-router";

export type DrawerRootParamList = {
  index: undefined;
  about: undefined;
};

const { Navigator } = createDrawerNavigator<DrawerRootParamList>();

export const Drawer = withLayoutContext<
  DrawerNavigationOptions,
  typeof Navigator
>(Navigator);
