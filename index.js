/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import Starting from './app/screens/navigators/Starting';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Orapp = ()=>{
    return(
        <GestureHandlerRootView>
            <Starting/>
        </GestureHandlerRootView>

    );
};

AppRegistry.registerComponent(appName, () => Orapp);
