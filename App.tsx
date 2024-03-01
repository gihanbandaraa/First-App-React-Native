import React from "react"
import {
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  StyleSheet
} from 'react-native'

function App() {
  const isDark = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>

  )
}
export default App;