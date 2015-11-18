let ContactAddController = function ($scope, ContactService) {

  let vm = this;



  vm.addContact = addContact;

  //  Check to see if Email has @
  let checkEmail = (email) => {
    if (email.indexOf('@') === -1) {
      $scope.emailError = 'Email must contain an @!';
    } else {
      $scope.emailError = '';
    }
  };

  $scope.$watch('person.email', function (newVal, oldVal) {
      if(!newVal) return;
      checkEmail(newVal);
    }
  );

//  Check to see if name input field is filled
  let checkName = (fullname) => {
    if (fullname.length <= 3) {
      $scope.nameError = 'Please enter your full name!';
    }
    else {
      $scope.nameError = '';
    }
  };

  $scope.$watch('person.fullName', function (newVal, oldVal) {
      if(!newVal) return;
      checkName(newVal);
    }
  );

  //Check and see if comments are empty
  let checkComments = (comment) => {
    if (comment.length <= 5) {
      $scope.commentError = 'Please leave a full comment!';
    }
    else {
      $scope.commentError = '';
    }
  };

  $scope.$watch('person.messages', function (newVal, oldVal) {
      if(!newVal) return;
      checkComments(newVal);
    }
  );

  //Checking for http in URL

  let whatIwant = /^https?:\/\//i;

  let checkUrl = (userurl) => {
    if (!whatIwant.test(userurl)) {
      $scope.errorUrl = 'Website must start with http:// or https://';
    } else {
      $scope.errorUrl = '';
    }
  };

  $scope.$watch('person.website', function (newVal, oldVal) {
    if(!newVal) return;
    checkUrl(newVal);
  });

  function addContact (personObj) {
    ContactService.addContact(personObj).then( (res) => {
      console.log(res);
    });
  }


};

ContactAddController.$inject = ['$scope', 'ContactService'];

export default ContactAddController;
