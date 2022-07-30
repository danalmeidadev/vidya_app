import React from 'react';
import { useSelector } from 'react-redux';
import { IAplicationState } from '~/store';
import { UnlogedStackNavigation } from './UnLogged';

export function RoutesNavigation() {
  const logged = useSelector((state: IAplicationState) => state.auth.isLogged);
  return <UnlogedStackNavigation />;
}
