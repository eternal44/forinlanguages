describe('PeerController', function() {

  // beforeEach(angular.mock.module('forinlanguages'));
  beforeEach(module('PeerController'));

  beforeEach(inject(function($injector){
    $rootScope = $injector.get('$rootScope');
    $window = $injector.get('$window');
    $scope = $rootScope.$new();
  }));

  // $controller = $injector.get('PeerController');

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

