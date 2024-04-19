import { StyleSheet, Text, View } from "react-native"

export const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
       <Text>HelloWorldScreen</Text> 
    </View>
  )
}



const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'red'
    }
})