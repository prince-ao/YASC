import React from 'react'
import { StyleSheet, Text, View, Dimensions} from 'react-native'

type ScreenVal = {
  numbers: string
}

const Screen = ({numbers}: ScreenVal) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{numbers}</Text>
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: Dimensions.get('window').height*20 / 100,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    marginRight: -30,
  },
  text: {
    fontSize: 40
  }
})
