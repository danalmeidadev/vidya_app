import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Routes } from '~/routes';
import { Login } from '~/screens/Login';
import { HeaderIconBack } from '~/components/HeaderIconBack';
import { GetStart } from '~/screens/GetStart';
import { Images } from '~/assets/images';
import { HeaderIcon } from '~/components/HeaderIcon';

const { Navigator, Screen } = createStackNavigator();

export function UnlogedStackNavigation() {
  const { colors, fonts } = useTheme();
  return (
    <Navigator
      initialRouteName={Routes.UNLOGGED.GETSTARTED}
      screenOptions={{
        headerShown: false,
        headerLeft: () => <HeaderIconBack />,
        headerTitle: '',
        headerTitleStyle: {
          color: colors.white,
          fontSize: RFValue(20),
          fontFamily: fonts.Poppins700Bold,
        },
        headerStyle: {
          backgroundColor: colors.primary,
          borderBottomColor: colors.background,
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 150,
        },
      }}
    >
      <Screen
        name={Routes.UNLOGGED.GETSTARTED}
        component={GetStart}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Screen
        name={Routes.UNLOGGED.LOGIN}
        component={Login}
        options={{
          headerShown: true,
          headerTransparent: false,
        }}
      />
    </Navigator>
  );
}
