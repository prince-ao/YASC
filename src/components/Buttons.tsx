import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native'

type funcParam = {
  changeScreen: (x: string) => void;
  execute: () => void;
  deleteEverything: () => void
}


const Buttons = ({changeScreen, execute, deleteEverything}: funcParam) => {
  const handlePress = (x: string) => {
    changeScreen(x);
  }
  const handleExecute = () => {
    execute();
  }
  const handleDelete = () => {
    deleteEverything();
  }
  return (
    <View style={{backgroundColor: "grey", height: "100%"}}>
      <View style={styles.arithRow}>
        <TouchableOpacity onPress={() => handlePress("+")} style={styles.button}>
          <Text style={{...styles.buttonText }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("-")} style={styles.button}>
          <Text style={{...styles.buttonText }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("*")} style={styles.button}>
          <Text style={{...styles.buttonText }}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("/")} style={styles.button}>
          <Text style={{...styles.buttonText }}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.numExRow}>
        <View>
          <View style={styles.numRow}>
            <TouchableOpacity onPress={() => handlePress("1")} style={styles.button}>
              <Text style={{...styles.buttonText }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("2")} style={styles.button}>
              <Text style={{...styles.buttonText }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("3")} style={styles.button}>
              <Text style={{...styles.buttonText }}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numRow}>
            <TouchableOpacity onPress={() => handlePress("4")} style={styles.button}>
              <Text style={{...styles.buttonText }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("5")} style={styles.button}>
              <Text style={{...styles.buttonText }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("6")} style={styles.button}>
              <Text style={{...styles.buttonText }}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numRow}>
            <TouchableOpacity onPress={() => handlePress("7")} style={styles.button}>
              <Text style={{...styles.buttonText }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("8")} style={styles.button}>
              <Text style={{...styles.buttonText }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("9")} style={styles.button}>
              <Text style={{...styles.buttonText }}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.numRow}>
            <TouchableOpacity onPress={() => handlePress("0")} style={styles.button}>
              <Text style={{...styles.buttonText }}>0</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.exContainer}>
          <TouchableOpacity onPress={() => handleDelete()} style={{...styles.button}}>
            <Text style={{...styles.buttonText }}>D</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleExecute()} style={styles.button}>
            <Text style={{...styles.buttonText }}>EX</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
  arithRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#c8ad7f",
    borderRadius: 40,
    width: 70,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 50,
    color: "white",
  },
  numExRow: {
    display: "flex",
    flexDirection: "row",
  },
  numRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    width: Dimensions.get("window").width * 75 / 100,
  },
  exContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-around"
  }
})
