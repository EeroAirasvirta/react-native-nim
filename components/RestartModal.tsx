import { Button, Modal, SafeAreaView, StyleSheet, Text, View } from "react-native";

type Props = {
  isVisible: boolean;
  onCancelPressed: () => void;
  onRestartPressed: () => void;
}

export default function RestartModal({ isVisible, onCancelPressed, onRestartPressed }: Props) {
  return (
    <Modal animationType="fade" transparent visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Restart game?</Text>
          <View style={styles.buttonContainer} >
            <Button title="Cancel" onPress={onCancelPressed} />
            <Button title="Restart" onPress={onRestartPressed} />
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
