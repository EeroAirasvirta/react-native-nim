import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
  rowNumber: number
  onPress?(): void;
}

export default function GameRow({ rowNumber, onPress }: Props) {
  const numberOfViews = rowNumber * 2 + 1;
  const [matchesLeft, setMatchesLeft] = useState(numberOfViews);

  const removeItem = () => {
    if (matchesLeft > 0 )
    {
      setMatchesLeft(matchesLeft - 1);
    }
  }

  return (
    <Pressable onPress={removeItem}>
      <View style={styles.container}>
        {Array.from({ length: matchesLeft }).map((_, index) => (
          <View key={index} style={styles.item} />
        ))}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    //height: 150,
    minHeight: 100,
    borderBlockColor: "black",
    // borderWidth: 3,
    // backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  item: {
    width: 10,
    // minHeight: 30,
    margin: 20,
    borderRadius: 5,
    backgroundColor: 'red',
    borderWidth: 1,
  },
})
