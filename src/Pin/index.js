import React from 'react';
import { View, StyleSheet, Text } from 'react-native';



export default function Pin({ color, aviso }) {
  //se começar a dar erro melhor pratica é dar um console.log ou alert para 
  //verificar se sua props esta chegando
  return (
    <View style={[styles.container, { backgroundColor: color }]} >

      <Text style={styles.textMarker}>{aviso}</Text>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    borderRadius: 20,
  },
  textMarker: {
    fontSize: 16,
    color: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
  }




})