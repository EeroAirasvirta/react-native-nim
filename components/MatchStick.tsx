import { selectionAsync } from "expo-haptics";
import { StyleSheet, View } from "react-native";

type Props = {
  selected: boolean,
}

export default function MatchStick({ selected }: Props) {
  return (
    <View style={[styles.container, { opacity: selected ? 0.2 : 1 }]}>
      <View style={[styles.matchHead, { borderWidth: selected ? 1 : 0 }]} />
      <View style={[styles.matchBody, { borderWidth: selected ? 1 : 0 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  selected: {},
  matchHead: {
    width: 12,
    height: 16,
    backgroundColor: "#b22222",
    borderRadius: 5,
    marginBottom: -5,
    zIndex: 1,
    borderStyle: 'dashed',
  },
  matchBody: {
    width: 10,
    height: 110,
    borderRadius: 3,
    backgroundColor: "#d2a679",
    borderStyle: 'dashed',
  },
})
