import { SafeAreaView, Text, View } from "react-native"
import {  PaperProvider } from 'react-native-paper'
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen"
import IonIcon from 'react-native-vector-icons/Ionicons';
import { BoxObjectModelScreen } from "./src/presentation/screens/BoxObjectModelScreen"
import { DimensionScreen } from "./src/presentation/screens/DimensionScreen"
import { PositionScreen } from "./src/presentation/screens/PositionScreen"
import { FlexScreen } from "./src/presentation/screens/FlexScreen"
import { FlexDirectionScreen } from "./src/presentation/screens/FlexDirectionScreen"
import { HomeWorkScreen } from "./src/presentation/screens/HomeWorkScreen"

export const App = () => {
  return (
    <PaperProvider 
    settings={{ 
      icon: (props) => <IonIcon {...props } />
    }}
    >
      <SafeAreaView style={{ flex:1 }}>
        {/* <HelloWorldScreen name={'Sebastian Valenzuela'}/> */}
        {/* <CounterM3Screen/> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen/> */}        
        {/* <FlexScreen/> */}
        {/* <FlexDirectionScreen/> */}
        <HomeWorkScreen/>
      </SafeAreaView>
    </PaperProvider>

  )
}



