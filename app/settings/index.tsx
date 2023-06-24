import { View, Text, Pressable } from "react-native";
// import { useNavigation } from "expo-router";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerRootParamList } from "../../layout/Drawer";
import { useNavigation } from "@react-navigation/core";
import styles from "../../styles";
import AppButton from "../../components/AppButton";

type drawerNavigatorType = DrawerNavigationProp<DrawerRootParamList, "index">;

const DrawerHome = () => {
  const navigation = useNavigation<drawerNavigatorType>();

  return (
    <View style={styles.container}>
      <AppButton
        title="About - Open Drawer"
        handlePress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default DrawerHome;
