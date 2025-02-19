import { StyleSheet, View } from "react-native";

type Props = {
  selected: boolean,
}

export default function MatchStick({ selected }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.matchHead, { backgroundColor: selected ? '#e3c8c8' : '#b22222', borderWidth: selected ? 1 : 0, }]} />
      <View style={[styles.matchBody, { backgroundColor: selected ? '#ebe3da' : '#d2a679', borderWidth: selected ? 1 : 0, }]} />
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
    borderRadius: 5,
    marginBottom: -5,
    zIndex: 1,
    borderStyle: 'dashed',
  },
  matchBody: {
    width: 10,
    height: 110,
    borderRadius: 3,
    borderStyle: 'dashed',
  },
})
