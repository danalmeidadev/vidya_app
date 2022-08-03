import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface ClientsProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins400Regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Clients = styled.TouchableOpacity<ClientsProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.gray : theme.colors.background};
`;

export const Icon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Poppins400Regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.border};
  height: 1px;
  width: 100%;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
