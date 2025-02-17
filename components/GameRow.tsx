import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
  items: number
  onPress?(): void;
}

export default function GameRow({ items, onPress }: Props) {
  const [matchesLeft, setMatchesLeft] = useState(items);

  const removeItem = () => {
    if (matchesLeft > 0) {
      setMatchesLeft(matchesLeft - 1);
      console.log("Match removed");
    }
  }

  return (
    <Pressable style={styles.rowContainer} onPress={removeItem}>
      <View style={styles.row}>
        {Array.from({ length: matchesLeft }).map((_, index) => (
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
