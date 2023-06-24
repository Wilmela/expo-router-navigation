import { Stack } from "expo-router";

// export const unstable_settings = {
//   initialRouteName: "index",
// };

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="next" />
    </Stack>
  );
}
