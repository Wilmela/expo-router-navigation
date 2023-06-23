import { View, Text, Pressable, StyleSheet } from "react-native";
import { useSearchParams, useNavigation } from "expo-router";
import styles from "../../styles";
import AppButton from "../../components/AppButton";

type PersonProps = {
  name: string;
  age: string;
  sex: string;
};
const Next = () => {
  const { name, age, sex } = useSearchParams<PersonProps>();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>
          A {age} year old {sex}.
        </Text>
      </View>

      <AppButton title="Go back" handlePress={() => navigation.goBack()} />
    </View>
  );
};

export default Next;
