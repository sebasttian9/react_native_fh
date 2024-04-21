import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Pressable } from 'react-native'

export const CounterScreen = () => {

    const [count, setCount] = useState(0);


    const sumar = () => {
        let suma = count + 1;
        setCount(suma);
    }

  return (
    <View style={style.container}>
        <Text style={style.title}>{count} </Text>


        <Pressable
            style={({ pressed })=>[
                style.button,
                pressed && style.buttonPressed
            ]}
            onPress={()=>sumar()}
            onLongPress={()=>setCount(0)}
            >
            <Text style={{color:'white'}}>Sumar 2</Text>
        </Pressable>


        <Text>Luciana Lava los dientes</Text>
        <Text>Antonia tu tambien</Text>
    </View>
  )
}


const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300'
    },
    button:{
        backgroundColor: 'pink',
        paddingHorizontal: 20,
        paddingVertical: 10,
         borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor:'red'
    }
})
