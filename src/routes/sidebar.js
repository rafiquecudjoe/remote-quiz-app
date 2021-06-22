/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
 const routes = [
    {
      path: '/dashboard', // the url
      icon: 'HomeIcon', // the component being exported from icons/index.js
      name: 'Home', // name that appear in Sidebar
    },
    {
      path: '/dashboard/classes',
      icon: 'FormsIcon',
      name: 'Classes',
    },
    {
      path: '/dashboard/takeaquiz',
      icon: 'CardsIcon',
      name: 'Take a Quiz',
    },
    {
      path: '/dashboard/createaquiz',
      icon: 'ChartsIcon',
      name: 'Create a Quiz',
    },
    {
      path: '/dashboard/settings',
      icon: 'ButtonsIcon',
      name: 'Settings',
    },
    {
      path: '/dashboard/help',
      icon: 'TablesIcon',
      name: 'Help',
    },
   
  ]
  
  export default routes