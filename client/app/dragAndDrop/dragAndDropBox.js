console.log('hello world');

var app = angular.module('fileupload', ['ngFileUpload']);


app.controller('DragAndDrop', ['$scope', 'Upload', function ($scope, Upload){
    //$scope.submit = function()

    $scope.upload = function(file){
      Upload.upload({
            url: 'upload/url',
            data: {file: file, 'username': $scope.username}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    }


}]);
