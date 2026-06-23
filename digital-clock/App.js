import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ClockScreen from './src/screens/ClockScreen';
import TimezonesScreen from './src/screens/TimezonesScreen';
import AlarmScreen from './src/screens/AlarmScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#00d4ff',
    secondary: '#b537f2',
    tertiary: '#ff006e',
    background: '#0f172a',
    surface: '#1e293b',
  },
};

const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0066cc',
    secondary: '#6200ee',
    background: '#ffffff',
    surface: '#f5f5f5',
  },
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Clock') {
                iconName = focused ? 'clock-digital' : 'clock-outline';
              } else if (route.name === 'Timezones') {
                iconName = focused ? 'globe' : 'globe-model';
              } else if (route.name === 'Alarm') {
                iconName = focused ? 'alarm' : 'alarm-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'cog' : 'cog-outline';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
              backgroundColor: theme.colors.surface,
            },
            headerTintColor: theme.colors.primary,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        >
          <Tab.Screen 
            name="Clock" 
            children={() => <ClockScreen isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
            options={{ title: 'Digital Clock' }}
          />
          <Tab.Screen 
            name="Timezones" 
            children={() => <TimezonesScreen theme={theme} />}
            options={{ title: 'Timezones' }}
          />
          <Tab.Screen 
            name="Alarm" 
            children={() => <AlarmScreen theme={theme} />}
            options={{ title: 'Alarms' }}
          />
          <Tab.Screen 
            name="Settings" 
            children={() => <SettingsScreen isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
            options={{ title: 'Settings' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
