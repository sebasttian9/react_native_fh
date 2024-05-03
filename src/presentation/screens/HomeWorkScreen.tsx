import { StyleSheet, Text, View } from "react-native"

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.purpleBox]}></View>
        <View style={[styles.box, styles.orangeBox]}></View>
        <View style={[styles.box, styles.blueBox]}></View>
    </View>
  )
}




const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#28425B',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'column',
        


    },
    box:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox:{
        backgroundColor: 'purple',
        alignSelf: 'flex-end'
        // top:-100
    },
    orangeBox:{
        backgroundColor: 'orange',
        alignSelf: 'center'
    },
    blueBox:{
        backgroundColor: 'blue',
        // top:-200
    }
})
