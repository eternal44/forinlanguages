describe('PeerController', function() {

  beforeEach(angular.mock.module('forinlanguages'));
  var $controller;

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

  // beforeEach(inject(function($injector){
  //   $rootScope = $injector.get('$rootScope');
  //   $controller = $injector.get('PeerController');
  //   $scope = $rootScope.$new();
  // }));

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

