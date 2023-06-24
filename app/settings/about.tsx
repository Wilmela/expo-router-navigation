import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerRootParamList } from "../../layout/Drawer";

import styles from "../../styles";
import AppButton from "../../components/AppButton";

type drawerNavigatorType = DrawerNavigationProp<DrawerRootParamList, "about">;
const About = () => {
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

export default About;
