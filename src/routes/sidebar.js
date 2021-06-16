/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
 const routes = [
    {
      path: '/dashboard/dashdefault', // the url
      icon: 'HomeIcon', // the component being exported from icons/index.js
      name: 'Home', // name that appear in Sidebar
    },
    {
      path: '/dashboard/sending',
      icon: 'FormsIcon',
      name: 'Classes',
    },
    {
      path: '/dashboard/receiving',
      icon: 'CardsIcon',
      name: 'Take a Quiz',
    },
    {
      path: '/dashboard/tracking',
      icon: 'ChartsIcon',
      name: 'Create a Quiz',
    },
    {
      path: '/dashboard/settings',
      icon: 'ButtonsIcon',
      name: 'Settings',
    },
    // {
    //   path: '/dashboard/billing',
    //   icon: 'ModalsIcon',
    //   name: 'Billing',
    // },
    {
      path: '/dashboard/help',
      icon: 'TablesIcon',
      name: 'Help',
    },
   
  ]
  
  export default routes