import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NativeBaseProvider, Box, Center } from "native-base";
import Button from './src/Button';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center>
      <Button />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}
