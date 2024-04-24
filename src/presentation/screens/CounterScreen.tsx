import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable, Platform } from 'react-native'
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {

    const [count, setCount] = useState(0);


    const sumar = () => {
        let suma = count + 1;
        setCount(suma);
    }

  return (
    <View style={style.container}>
        <Text style={style.title}>{count} </Text>

    {/* <PrimaryButton 
                    label={'Sumar L'}
                    onPress={()=>sumar()}
                    onLongPress={()=>setCount(0)}
    /> */}

<Button 
                    label={'Sumar L'}
                    onPress={()=>sumar()}
                    onLongPress={()=>setCount(0)}
                    mode='contained'
    >
        Incrementar
        </Button>

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
    }
})
