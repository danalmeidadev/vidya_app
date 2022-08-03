import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { Routes } from '~/routes';
import { Login } from '~/screens/Login';
import { CreateAccount } from '~/screens/CreateAccount';
import { HeaderIconBack } from '~/components/HeaderIconBack';
import { GetStart } from '~/screens/GetStart';
import { Images } from '~/assets/images';
import { HeaderIcon } from '~/components/HeaderIcon';
import { CreateClients } from '~/screens/CreateClients';
import { Home } from '~/screens/Home';
import { ProductDetails } from '~/screens/ProductDetails';
import { UsersClients } from '~/screens/UsersClients';

const { Navigator, Screen } = createStackNavigator();

export function StackClientsWithProducts() {
  const { colors, fonts } = useTheme();
  return (
    <Navigator
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
          height: 110,
        },
      }}
    >
      <Screen
        name={Routes.LOGGED.HOME}
        component={Home}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Screen
        name={Routes.LOGGED.PRODUCTDETAILS}
        component={ProductDetails}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Screen
        name={Routes.LOGGED.USERSCLIENTS}
        component={UsersClients}
        options={{
          headerShown: false,
          headerTransparent: true,
        }}
      />
    </Navigator>
  );
}
