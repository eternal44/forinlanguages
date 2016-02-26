describe('PeerController', function() {

  var $controller;
  var $rootScope;
  var $window;
  var $location;
  var $localForage;
  var PeerFactory;
  var $scope;
  var createController;

  // beforeEach(inject($rootScope, $controller){
  //   scope = $rootScope.$new();
  //   ctrl = $controller('PeerController', {
  //     $scope = scope,
  //     PeerController: PeerController
  //   });
  // });

  // beforeEach(angular.mock.inject(function(_$controller_){
  //   $controller = _$controller_;
  // }));

  // describe('$scope.PeerController', function(){
  //   it('just another test', function() {
  //     var controller = $controller('PeerController', { $scope: $scope });
  //   });
  // });

  beforeEach(angular.mock.module('forinlanguages'));

  beforeEach(inject(function($injector){
    $window = $injector.get('$window');
    $location = $injector.get('$location');
    // $localForage = $injector.get('$localForage');
    PeerFactory = $injector.get('PeerFactory');
    $rootScope = $injector.get('$rootScope');

    $controller = $injector.get('$controller');

    $scope = $rootScope.$new();

    createController = function(){
      return $controller('PeerController', {
        $scope: $scope,
        $window: $window,
        $location: $location,
        // $localForage: $localForage,
        PeerFactory: PeerFactory
      });
    }
    createController();
  }));


  describe('make sure test env is working', function() {
    it('smoke test',function() {
      expect(true).toBe(true);
    });
  });
});






// describe('PeerController', function(){
//   var $scope;
//   var $rootScope;
//   var PeerFactory;

//   beforeEach(module('forinlanguage'));
//   beforeEach(inject(function($injector){

//     $rootScope = $injector.get('$rootScope');
//     PeerFactory = $injector.get('PeerFactory');

//     $scope = $rootScope.$new();

//     var $controller = $injector.get('$controller');

//     createController = function(){
//       return $controller('PeerController', {
//         $scope: $scope,
//         $window: $window,
//         // $location: $location,
//         // $localForage: $localForage,
//         PeerFactory: PeerFactory
//         // add more parameters later
//       });
//     };
//   }));


//   describe('make sure test env is working', function() {
//     it('smoke test',function() {
//       expect(true).toBe(true);
//     });
//   });
// });

