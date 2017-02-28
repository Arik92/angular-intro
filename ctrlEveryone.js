app.controller('ctrlEveryone',function($scope){
  $scope.inputs=[];
  $scope.getInput = function(){
    $scope.inputs[$scope.inputs.length] = $scope.input;
  }
  $scope.remove = function(){
    $scope.inputs.splice($scope.i,1);
  }
})
