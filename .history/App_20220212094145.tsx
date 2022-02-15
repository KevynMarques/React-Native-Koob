import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Routes from './src';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}