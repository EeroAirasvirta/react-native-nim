import { StyleSheet, View } from 'react-native';
import GameRow from "./GameRow"

export default function GameBoard() {
  return (
    <View style={styles.container}>
      <GameRow rowNumber={0} />
      <GameRow rowNumber={1} />
      <GameRow rowNumber={2} />
      <GameRow rowNumber={3} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow"
  }
})
