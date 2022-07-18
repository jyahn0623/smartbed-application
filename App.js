import { BackHandler, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants'
import { useEffect, useRef } from 'react';

export default function App() {
  const WebviewRef = useRef();

  useEffect(() => {
    const backHandler = () => {
      WebviewRef.current.goBack();
      return true;
    }
    BackHandler.addEventListener("hardwareBackPress", backHandler);

    return () => BackHandler.removeEventListener("hardwareBackPress", backHandler);
  });

  return (
    <View style={{flex : 1, paddingTop : Constants.statusBarHeight}}> 
      <StatusBar 
        style="dark" 
        backgroundColor="#fff"
      />
      <WebView 
        ref={WebviewRef}
        style={styles.container}
        source={{ uri: 'http://58.120.166.106:7000/' }}
      />
    </View>
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
