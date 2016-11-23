"use strict";

app.controller("ItemNewCtrl", function($scope, $routeParams, $rootScope, $location, ItemFactory) {
	$scope.newTask = {};
	let itemId = $routeParams.id;

	ItemFactory.getSingleItem(itemId).then(function(oneItem){
		$scope.selectedItem = oneItem;
	})


     $scope.addNewItem = function() {
        $scope.newTask.isCompleted = false;
        console.log("$rootScope.user", $rootScope.user);
        $scope.newTask.uid = $rootScope.user.uid;
        ItemFactory.postNewItem($scope.newTask).then(function(itemId) {
		 $location.url("/items/list");           
             $scope.newTask = {};
      
         });
    };

 });