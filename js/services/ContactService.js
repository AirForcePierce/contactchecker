let ContactService = function ($http, PARSE) {

  let url = PARSE.URL + 'classes/contact';

  this.getAllContacts = getAllContacts;
  this.addContact = addContact;

  function Contact (personObj) {
    this.fullName = personObj.fullName;
    this.email = personObj.email;
    this.website = personObj.website;
    this.messages = personObj.messages;

  };

  function getAllContacts () {
    return $http.get(url, PARSE.CONFIG);
  };

  function addContact (personObj) {
    let person = new Contact(personObj);
    return $http.post(url, person, PARSE.CONFIG);
  };




  // vm.$watch(this.email, function (newVal, oldVal) {
  //   if (newVal.indexOf('@') !== 1) {
  //     console.log('Use proper email structure')
  //   }
  // });


};

ContactService.$inject = ['$http', 'PARSE'];

export default ContactService;
