import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../pages/Start";

const Stack = createNativeStackNavigator();

export default function Allpages(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShow:false,
            }}
            >

            <Stack.screen name= "Start" component={Start}/>
            </Stack.Navigator>


</NavigationContainer>
    )
}