import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { HomeScreen } from '@dream-app/app/src/screens/home'
import { AboutScreen } from '@dream-app/app/src/screens/about'

const Stack = createNativeStackNavigator()

export function App() {
  return (
    <NavigationProvider>
      <Stack.Navigator>
        <Stack.Screen 
          name="home" 
          component={HomeScreen}
          options={{ title: 'Dream App' }}
        />
        <Stack.Screen 
          name="about" 
          component={AboutScreen}
          options={{ title: 'About' }}
        />
      </Stack.Navigator>
    </NavigationProvider>
  )
}

function NavigationProvider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              about: 'about',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}