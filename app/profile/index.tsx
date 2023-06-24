import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../styles";
import AppButton from "../../components/AppButton";

const Home = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <AppButton
        title="Profile - Go To Next"
        handlePress={() =>
          router.push({
            pathname: "/profile/next",
            params: {
              name: "Mela Wilson",
              age: "90",
              sex: "Male",
            },
          })
        }
      />
    </View>
  );
};

export default Home;
