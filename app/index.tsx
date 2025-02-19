import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import GameBoard from "@/components/GameBoard";
import RestartModal from "@/components/RestartModal";
import GameOverModal from "@/components/GameOverModal";

export default function Index() {
  const defaultBoard = [1, 3, 5, 7];

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [board, setBoard] = useState(defaultBoard);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [removedMatches, setRemovedMatches] = useState(0);
  const [winner, setWinner] = useState<number | null>(null);
  const [restartModalVisible, setRestartModalVisible] = useState(false);
  const [gameOverModalVisible, setGameOverModalVisible] = useState(false);

  const onEndTurnPressed = () => {
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
      setWinner(currentPlayer === 1 ? 2 : 1);
      setGameOverModalVisible(true);
    }

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  const onRestartPressed = () => {
    setRestartModalVisible(true);
  }

  const restartGame = () => {
    setBoard(defaultBoard);
    setRemovedMatches(0);
    setActiveRow(null);
    setCurrentPlayer(1);
    setRestartModalVisible(false);
    setGameOverModalVisible(false);
  }

  const onRowPressed = (index: number) => {
    // Case: Empty row. Reset.
    if (board[index] === 0) {
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
      <GameBoard board={board} activeRow={activeRow} removedMatches={removedMatches} onRowPressed={onRowPressed} />
      <View style={styles.buttonContainer}>
        <Button title="Restart" onPress={onRestartPressed} />
        <Button title="End turn" onPress={onEndTurnPressed} disabled={removedMatches === 0} />
      </View>
      <RestartModal isVisible={restartModalVisible} onRestartPressed={restartGame} onCancelPressed={() => setRestartModalVisible(false)} />
      <GameOverModal isVisible={gameOverModalVisible} winner={winner} onNewGamePressed={restartGame} />
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
    backgroundColor: '#dddddd'
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    justifyContent: "space-around",
    backgroundColor: '#dddddd'
  }
})
