import { StyleSheet, Text, View, useWindowDimensions } from "react-native"
import {Dimensions} from 'react-native';

// const {width,height} = Dimensions.get('window');

export const DimensionScreen = () => {
    const {width, height} = useWindowDimensions();
  return (
    <View>
        <View style={style.container}>
            <View style={{
                ...style.purpleBox,
                width: width * 0.6 // ocupam,os el 60% de la pantalla
            }}>
                
            </View>
        </View>

        <Text>w: {width},  h: {height}</Text>
    </View>
  )
}



const style = StyleSheet.create({

    container: {
        width: 300,
        height:200,
        backgroundColor: 'red'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height:'50%',
        width: '50%'
    }
})