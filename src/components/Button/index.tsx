import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { ActivityIndicatorLoading } from '../Loading';
import { Container, ImagemContainer, Text } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  icone?: React.FC<SvgProps>;
  loading?: boolean;
  borderRadios?: boolean;
  colorTitle?: string;
  backgroundColor?: string;
  borderColor?: boolean;
  onPress: () => void;
}

export function Button({
  title,
  icone: Icone,
  borderRadios,
  loading,
  colorTitle,
  backgroundColor,
  onPress,
  ...rest
}: Props) {
  const theme = useTheme();
  return (
    <Container
      borderRadios={borderRadios}
      backgroundColor={backgroundColor}
      onPress={onPress}
      {...rest}
    >
      <ImagemContainer>{Icone && <Icone />}</ImagemContainer>
      {loading ? (
        <ActivityIndicatorLoading color={theme.colors.white} size="small" />
      ) : (
        <Text colorTitle={colorTitle}>{title}</Text>
      )}
    </Container>
  );
}
