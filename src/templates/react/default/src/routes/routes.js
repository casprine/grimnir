import { lazy } from 'react';
import Pages from '../pages';

export const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: Pages.Home,
  },
];

export const protectedRoutes = [
  {
    path: '/about',
    component: lazy(() => import('../pages/About/index.js')),
  },
];
