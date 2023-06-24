import { Drawer } from "../../layout/Drawer";
// export const unstable_settings = {
//   initialRouteName: "index",
// };

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="about" options={{ title: "About" }} />
    </Drawer>
  );
}
