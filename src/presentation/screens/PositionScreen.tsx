import { View, Text, StyleSheet } from "react-native"

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.GreenBox}></View>
        <View style={styles.purpleBox}></View>
        <View style={styles.OrangeBox}></View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 500,
        // width: 300,
        backgroundColor: '#28C4D9',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 10, 
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
    },
    OrangeBox: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 10, 
        borderColor: 'white',
        right: 0,
        position: 'absolute'
    },
    GreenBox: {
        // width: 100,
        // height: 100,
        // flex: 1,
        backgroundColor: 'green',
        borderWidth: 10, 
        borderColor: 'white',
        // right: 0,
        // bottom: 0,
        // top:0,
        // left: 0,
        // position: 'absolute'
        ...StyleSheet.absoluteFillObject
    }
})