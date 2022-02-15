import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Routers from '/routes';

export default function App() {
  return (
      <>
      <StatusBar style="auto" />
      <Routers />
      </>
  );
}
