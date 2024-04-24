import { StyleSheet,Pressable, Text } from "react-native"

interface Props {
    label: string,
    onPress? : () => void,
    onLongPress? : () => void 
} 


export const PrimaryButton = ({label,onPress,onLongPress} :Props) => {
  return (
            <Pressable
                style={({ pressed })=>[
                    style.button,
                    pressed && style.buttonPressed
                ]}
                onPress={ () => onPress && onPress() }
                onLongPress={() => onLongPress && onLongPress() }
                >
                <Text style={{color:'white'}}>{label}</Text>
            </Pressable>
  )
}

const style = StyleSheet.create({
    button:{
        backgroundColor: Platform.OS === 'android' ? 'blue' : 'pink',
        paddingHorizontal: 20,
        paddingVertical: 10,
         borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor:'red'
    }
})
