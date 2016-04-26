function MainController ($scope) {
  $scope.contact = {
    name: "Matt",
    email: "pickledyamsman@gmail.com",
    phone: "01234567890"
  };
}

angular
  .module('app')
  .controller('MainController', MainController)