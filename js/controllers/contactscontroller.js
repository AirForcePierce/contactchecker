let ContactsController = function ($scope, ContactService) {

  ContactService.getAllContacts().then ( (res) => {
     $scope.people = res.data.results;
   });

};

ContactsController.$inject = ['$scope', 'ContactService'];

export default ContactsController;
