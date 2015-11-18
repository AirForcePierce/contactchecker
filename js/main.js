import angular from 'angular';
import 'angular-ui-router';

//  Config file
import config from './config';

//  Controller files
import HomeController from './controllers/homecontroller';
import ContactsController from './controllers/contactscontroller';
import ContactAddController from './controllers/addcontactcontroller';

//  Service files
import ContactService from './services/ContactService';

//  Constant file with PARSE data
import PARSE from './constants/parseurl';







angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('HomeController', HomeController)
  .controller('ContactsController', ContactsController)
  .controller('ContactAddController', ContactAddController)
  .service('ContactService', ContactService)
  .constant('PARSE', PARSE)
  ;
