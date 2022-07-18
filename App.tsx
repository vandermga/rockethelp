import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { StyleSheet} from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME } from './src/styles/theme';

import { Signin } from './src/screens/Signin';
import { Loading } from './src/components/Loading';


export default function App() {
  const [fontsLoagded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      {fontsLoagded ? <Signin/> : <Loading/>}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
