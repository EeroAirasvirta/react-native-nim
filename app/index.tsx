import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import GameBoard from "@/components/GameBoard";

export default function Index() {
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const endTurn = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>{`Turn: Player ${currentPlayer}`}</Text>
      <View style={styles.gameAreaContainer}>
        <GameBoard />
      </View>
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
    backgroundColor: "#dddddd",
    fontSize: 30,
    paddingVertical: 10,
  },
  gameAreaContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: "space-between",
    backgroundColor: 'rgba(10,10,10,0.2)'
  }
})
