import React, { useState, useEffect, useContext } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { AppTabs } from './tabs/AppTabs';


export const RootNavigation = ({ }) => {
  return (
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
  );
};