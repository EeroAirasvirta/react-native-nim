import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import GameRow from "./GameRow"

export default function GameBoard() {
  const [board, setBoard] = useState([1, 3, 5, 7])

  return (
    <View style={styles.container}>
      {board.map((key, index) => (
        <GameRow key={index} items={key} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})
