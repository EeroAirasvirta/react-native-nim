import { Button, StyleSheet, Text, View } from "react-native";
import { act, useState } from "react";

import GameBoard from "@/components/GameBoard";

export default function Index() {
  const defaultBoard = [1,3,5,7];

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState(defaultBoard);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [removedMatches, setRemovedMatches] = useState(0);

  const endTurn = () => {
    if (activeRow === null || removedMatches === 0) {
      console.log(`Tried to end turn before removing any matches. Doing nothing.`)
      return;
    }

    const newBoard = [...board];
    newBoard[activeRow] = board[activeRow] - removedMatches;
    setBoard(newBoard);
    setActiveRow(null);
    setRemovedMatches(0);

    if (newBoard.every(num => num === 0)) {
      console.log(`Player ${currentPlayer} lost the game`);
    }

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  const restartGame = () => {
    console.log(`Restart game`);
    setBoard(defaultBoard);
    setRemovedMatches(0);
    setActiveRow(null);
    setCurrentPlayer(1);
  }

  const onRowPressed = (index: number) => {
    // Case: Empty row. Reset.
    if (board[index] === 0)
    {
      console.log(`Empty row ${index}`);
      setActiveRow(null);
      setRemovedMatches(0);
      return;
    }

    // Case: Pressed a row which was not active.
    if (index !== activeRow) {
      console.log(`New active row ${index}`);
      setActiveRow(index);
      setRemovedMatches(1);
      return;
    }

    if (activeRow === null || board[index] > removedMatches) {
      setActiveRow(index);
      setRemovedMatches(removedMatches + 1);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>{`Turn: Player ${currentPlayer}`}</Text>
      <GameBoard board={board} activeRow={activeRow} removedMatches={removedMatches} onRowPressed={onRowPressed}/>
      <View style={styles.buttonContainer}>
        <Button title="Restart" onPress={restartGame} />
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
