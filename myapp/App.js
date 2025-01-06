import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './page/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Course from './page/Course';
import Subject from './page/Subject';
import Profile from './page/Profile';
export default function App() {

  const Stack = createNativeStackNavigator()
  //Add safe area view to invididual screen
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='home' screenOptions={{ headerTitleAlign: 'center'}}>
            <Stack.Screen name='home' component={Home} options={{ title: 'Home Screen'}} />
            <Stack.Screen name='course' component={Course} options={{ title: 'Course Screen' }} />
            <Stack.Screen name='subject' component={Subject} options={{ title: 'Subject Screen' }} />
            <Stack.Screen name='profile' component={Profile} options={{ title: 'Profile Screen' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
