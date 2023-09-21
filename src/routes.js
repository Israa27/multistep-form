import {lazy} from 'react';

  const layouts=lazy(() => import('./pages/Layout'))  
  export const routes = [
    {
      exact: true,
      path: '/add-ons',
      element: layouts
    },
    
    {
      exact: true,
      path: '/',
      element: layouts
    },

    {
      exact: true,
      path: '/summary',
      element: layouts
    },
    {
      exact: true,
      path: '/select-plan',
      element: layouts
    },
    {
      exact: true,
      path: '/thank_you',
      element: layouts
    },

    
    
    
  ];
  
  export default routes;