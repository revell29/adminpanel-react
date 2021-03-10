import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const adminRoute = [
  {
    path: '/web-app',
    exact: true,
    name: 'Default',
    component: React.lazy(() => import('../modules/dashboard')),
  },
  {
    path: '/siswa',
    exact: true,
    name: 'Siswa',
    component: React.lazy(() => import('../modules/siswa')),
  },
  {
    path: '/siswa/create',
    exact: true,
    name: 'Siswa Create',
    component: React.lazy(() => import('../modules/siswa/create')),
  },
];

export default adminRoute;
