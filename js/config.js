let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.contacts', {
      url: '/contacts',
      controller: 'ContactsController as vm',
      templateUrl: 'templates/contacts.tpl.html'
    })
    .state('root.addcontact', {
      url: '/contacts/add',
      controller: 'ContactAddController as vm',
      templateUrl: 'templates/contactsadd.tpl.html'
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;
