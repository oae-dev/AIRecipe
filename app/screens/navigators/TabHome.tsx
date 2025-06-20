
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screens } from '../screenNames/screenNames';
import Explore from '../TabScreens/Explore';
import CookBook from '../TabScreens/CookBook';
import Profile from '../TabScreens/Profile';
import Home from '../TabScreens/Home';
import { TabIcon } from './tabIcon';


export type TabRootTypes = {
    Home: undefined,
    Explore: undefined,
    CookBook: undefined,
    Profile: undefined
}

const Tab = createBottomTabNavigator<TabRootTypes>();

const TabHome = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={screens.Home} component={Home}
                options={{
                    tabBarIcon: renderHomeIcon,
                }}
            />

            <Tab.Screen name={screens.Explore} component={Explore}
                options={{
                    tabBarIcon: renderExploreIcon,
                }} />
            <Tab.Screen name={screens.CookBook} component={CookBook}
                options={{
                    tabBarIcon: renderCookbookIcon,
                }} />
            <Tab.Screen name={screens.Profile} component={Profile}
                options={{
                    tabBarIcon: renderProfileIcon,
                }} />

        </Tab.Navigator>
    );
};

const renderHomeIcon = ({ focused, size }: any) => (
    <TabIcon source={require('../../../assets/icons/i1.png')} focused={focused} size={size} />
);
const renderExploreIcon = ({ focused, size }: any) => (
    <TabIcon source={require('../../../assets/icons/i2.png')} focused={focused} size={size} />
);
const renderCookbookIcon = ({ focused, size }: any) => (
    <TabIcon source={require('../../../assets/icons/i3.png')} focused={focused} size={size} />
);
const renderProfileIcon = ({ focused, size }: any) => (
    <TabIcon source={require('../../../assets/icons/i4.png')} focused={focused} size={size} />
);




export default TabHome;
