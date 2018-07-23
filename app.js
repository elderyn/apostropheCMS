var path = require('path');

var apos = require('apostrophe')({
  shortName: 'increasing',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  bundles: [ 'apostrophe-blog' ],
  modules: {

    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project

    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },

    'apostrophe-blog': {
      widget: true,
      contextual: true
    },
    'apostrophe-blog-pages': {
      type: [
       {
        name: 'views',
        label: 'Blog page'
       }
      ]
    },
    'apostrophe-blog-widgets': {
      type : [
       {
        name: 'widget'
       }
      ]
    },
     // This configures our default page template
    'apostrophe-pages': {
      types: [
        {
          name: 'apostrophe-blog-page',
          label: 'Blog'
        },
        {
          name: 'default',
          label: 'Default'
        },
        {
          name: 'home',
          label: 'Home'
        },
        {
          name: 'reglement',
          label: 'Reglement'
        }
      ]
    },

    //custom widget
    'two-column-block-widgets': {},
    'two-column-block-70-30-widgets': {},
    'recrutement': {}
  }
});
