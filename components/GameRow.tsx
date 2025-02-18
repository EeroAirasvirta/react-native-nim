import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
  matches: number;
  removedMatches: number;
  onPress(): void;
}

export default function GameRow({ matches, removedMatches, onPress }: Props) {
  return (
    <Pressable style={styles.rowContainer} onPress={onPress}>
      <View style={styles.row}>
        {Array.from({ length: matches - removedMatches }).map((_, index) => (
          <View key={index} style={styles.match} />
        ))}
        {Array.from({ length: removedMatches }).map((_, index) => (
          <View key={index} style={[styles.match, { backgroundColor: 'rgba(255, 0, 0, 0.15)', borderStyle: 'dashed' }]} />
        ))}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  match: {
    width: 10,
    height: '70%',
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 0,0,1)',
    borderWidth: 1,
  },
})
