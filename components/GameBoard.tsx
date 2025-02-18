import { StyleSheet, View } from 'react-native';
import GameRow from "./GameRow"

type Props = {
  board: number[];
  activeRow: number | null;
  removedMatches: number;
  onRowPressed: (index: number) => void;
}

export default function GameBoard({ board, activeRow, removedMatches, onRowPressed }: Props) {
  return (
    <View style={styles.container}>
      {board.map((key, index) => (
        <GameRow key={index} matches={key} removedMatches={index === activeRow ? removedMatches : 0} onPress={() => onRowPressed(index)} />
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
