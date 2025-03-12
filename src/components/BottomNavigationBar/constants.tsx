import React from 'react';
import {
    IconHome,
    IconShape,
    IconHomeSelected,
    IconShapeSelected,
} from '@components/ComponentsImages';
import { ScreenNames } from '@navigation/navigationConfig';


export interface INavItems {
  id: number;
  icon: React.ReactNode;
  selectedIcon?: React.ReactNode;
  title: string;
  path: ScreenNames.Home | ScreenNames.Notifications;
}

export const navItems: INavItems[] = [
  {
    id: 1,
    icon: <IconHome/>,
    selectedIcon: (
      <IconHomeSelected/>
    ),
    title: 'Home',
    path: ScreenNames.Home,
  },
  {
    id: 2,
    icon: <IconShape/>,
    selectedIcon: (
      <IconShapeSelected/>
    ),
    title: 'Notifications',
    path: ScreenNames.Notifications,
  },
];

export const hideBottomBarScreens: Array<string> = [ 'Profile', 'PersonalInformationChanged', 'Filter', 'AccountCreated'];

