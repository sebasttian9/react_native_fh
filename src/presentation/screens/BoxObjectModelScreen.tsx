import { View, Text, StyleSheet } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style={style.container}>
        {/* <Text style={style.title}>BoxObjectScreen</Text> */}
        <View style={style.purpleBox}>
            <Text style={{color : 'white'}}>Hola Mundo</Text>
        </View>
        {/* <View style={style.purpleBox}></View> */}
    </View>
  )
}


const style = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: 'blue',
  
    },
    title:{
      fontSize: 30,
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderWidth: 10

    },
    purpleBox: {
        height:30,
        backgroundColor: 'purple',
        marginHorizontal: 20,
        marginVertical: 50,
        padding: 5
    }
  })