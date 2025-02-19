import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import MatchStick from './MatchStick';

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
          <MatchStick key={index} selected={false} />
        ))}
        {Array.from({ length: removedMatches }).map((_, index) => (
          <MatchStick key={index} selected={true} />
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
    height: '100%',
  },
})
