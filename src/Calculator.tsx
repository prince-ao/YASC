import React, { useState } from 'react'
import {Buttons, Screen } from "./components"
import { StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native'
import { calculate } from './interpreter/main';
import { setIndex } from './interpreter/expression';

const Calculator = () => {
  const [screen, setScreen] = useState<string>("");

  const changeScreen = (x: string) => {
    setScreen(x === "+" || x === "-" || x === "*" || x == "/" ? screen + " " + x + " " : screen + x);
  }

  const execute = () => {
    let x: number = calculate(screen + ".");
    setScreen(`${x}`);
    setIndex(0);
  }

  const deleteEverything = () => {
    setScreen("")
    setIndex(0);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Screen numbers={screen}/>
      <Buttons changeScreen={changeScreen} execute={execute} deleteEverything={deleteEverything}/>
    </SafeAreaView>
  )
}

export default Calculator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
})
