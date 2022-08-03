/* eslint-disable camelcase */
import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { DropdownAlertService } from '@nghinv/react-native-dropdown-alert';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { View } from 'react-native';
import { persistor, store } from '~/store';
import { RoutesNavigation } from '~/navigation';
import { theme } from '~/theme';
import { ActivityIndicatorLoading } from '~/components/Loading';

export function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      setAppIsReady(true);
    }
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!fontsLoaded) return <ActivityIndicatorLoading size="small" />;

  if (!appIsReady) return <ActivityIndicatorLoading size="small" />;
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <View
            onLayout={onLayoutRootView}
            style={{
              flex: 1,
            }}
          >
            <ThemeProvider theme={theme}>
              <SafeAreaProvider>
                <NavigationContainer>
                  <DropdownAlertService>
                    <RoutesNavigation />
                  </DropdownAlertService>
                </NavigationContainer>
              </SafeAreaProvider>
            </ThemeProvider>
          </View>
        </PersistGate>
      </Provider>
    </>
  );
}
