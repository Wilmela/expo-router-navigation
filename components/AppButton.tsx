import { Pressable, Text } from "react-native";
import styles from "../styles";

type AppButtonProps = {
  title: string;
  handlePress: () => void;
};
const AppButton = ({ title, handlePress }: AppButtonProps) => {
  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.headingText}>{title}</Text>
    </Pressable>
  );
};

export default AppButton;
