import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
  matches: number
  onPress(): void;
}

export default function GameRow({ matches, onPress }: Props) {
  return (
    <Pressable style={styles.rowContainer} onPress={onPress}>
      <View style={styles.row}>
        {Array.from({ length: matches }).map((_, index) => (
          <View key={index} style={styles.item} />
        ))}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  item: {
    width: 10,
    height: '70%',
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'red',
    borderWidth: 1,
  },
})
