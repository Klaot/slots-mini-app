import type { ComponentType, JSX } from 'react';

import { IndexPage } from '~/pages/IndexPage/IndexPage';
import { Profile } from '~/pages/profile/Profile';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/u/:userId', Component: IndexPage },
  { path: '/profile', Component: Profile, title: 'Init Data' },
];
