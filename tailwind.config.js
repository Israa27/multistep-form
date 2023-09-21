/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'marine-blue': 'hsl(213, 96%, 18%)',
      'purplish-blue': 'hsl(243, 100%, 62%)',
      'pastel-blue': 'hsl(228, 100%, 84%)',
      'light-blue':'hsl(206, 94%, 87%)',
      'strawberry-red':'hsl(354, 84%, 57%)',
      'cool-gray':'hsl(231, 11%, 63%)',
      'light-gray':'hsl(229, 24%, 87%)',
      'magnolia':'hsl(217, 100%, 97%)',
      'alabaster':'hsl(231, 100%, 99%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    backgroundImage: {
      'background-sidebar': "url('../src/assets/images/bg-sidebar-desktop.svg')",
      'background-sidebar-mobile': "url('../src/assets/images/bg-sidebar-mobile.svg')"
      
    },
    screens: {
      'mobile': '375px', 
      'desktop':'1440px'
    },
    
   
   
  },
};
export const plugins = [];