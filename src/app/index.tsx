import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {RootNavigator} from "~/app/navigation";

const App: React.FC = ()=> {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}


export default App;
