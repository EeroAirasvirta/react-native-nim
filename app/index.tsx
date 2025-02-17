import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import GameBoard from "@/components/GameBoard";

export default function Index() {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState([1, 3, 5, 7]);
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const endTurn = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  const onRowPressed = (index: number) => {
    if (board[index] > 0) {
      const newBoard = [...board];
      newBoard[index]--;
      setBoard(newBoard);
    }
    console.log("Match removed. Current board:", board);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>{`Turn: Player ${currentPlayer}`}</Text>
      <GameBoard board={board} onRowPressed={onRowPressed}/>
      <View style={styles.buttonContainer}>
        <Button title="Reset" />
        <Button title="End turn" onPress={endTurn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  statusText: {
    fontSize: 30,
    paddingVertical: 10,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(10, 10, 10, 0.1)'
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    justifyContent: "space-around",
    backgroundColor: 'rgba(10, 10, 10, 0.1)'
  }
})
