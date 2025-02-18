import { Button, Modal, StyleSheet, Text, View } from "react-native"

type Props = {
  isVisible: boolean;
  winner: number | null;
  onNewGamePressed: () => void;
}

export default function GameOverModal({ isVisible, winner, onNewGamePressed }: Props) {
  return (
    <Modal animationType="fade" transparent visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Player {winner} wins!</Text>
          <View style={styles.buttonContainer} >
            <Button title="New Game" onPress={onNewGamePressed} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    width: '100%',
  },
})
