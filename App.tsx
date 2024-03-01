import React from "react"
import {
  Text,
  View,
  useColorScheme,
  StyleSheet
} from 'react-native'

function App() {
  const isDark = useColorScheme() === 'dark';
  return (

    <View style={styles.container} >
      <Text style ={isDark ? styles.whiteText:styles.darkText}>Hello World</Text>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
    fontSize:30,
    fontWeight:'bold'
  },
  darkText: {
    color: '#000000',
    fontSize:30,
    fontWeight:'bold'
  }
})
export default App