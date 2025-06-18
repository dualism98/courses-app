import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationKeys } from '~/app/navigation';
import {RootStackParamsList} from './types';
import {CoursesListScreen} from "~/screens/courses";

const Stack = createNativeStackNavigator<RootStackParamsList>()

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{orientation: 'landscape', headerShown: false}}>
            <Stack.Screen name={NavigationKeys.CoursesListScreen} component={CoursesListScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator;
