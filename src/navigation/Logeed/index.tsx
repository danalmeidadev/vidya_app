import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { Routes } from '~/routes';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Home } from '~/screens/Home';
import { CreateClients } from '~/screens/CreateClients';
import { Products } from '~/screens/Products';
import { HeaderIconBack } from '~/components/HeaderIconBack';
import { StackClients } from './StackClients';
import { StackClientsWithProducts } from './StackClientsWithProducts';

const { Navigator, Screen } = createBottomTabNavigator();

export function LoggedBottonBar() {
  const { colors, fonts } = useTheme();
  const screenOptions = {
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
  };
  return (
    <Navigator
      initialRouteName={Routes.LOGGED.HOME}
      screenOptions={{
        unmountOnBlur: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.disable,
        tabBarLabelPosition: 'below-icon',
        headerShown: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88,
        },
      }}
    >
      <Screen
        name={Routes.LOGGED.INITIAL}
        component={StackClientsWithProducts}
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name={Routes.LOGGED.CLIENTS}
        component={StackClients}
        options={{
          title: '',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="group-add" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name={Routes.LOGGED.PRODUCTS}
        component={Products}
        options={{
          ...screenOptions,

          title: '',
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="add-business" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
