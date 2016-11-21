"use strict";

app.controller("ItemNewCtrl", function($scope, $location, ItemFactory) {
	$scope.newTask = {};
	let itemId = $routeParams.id;

	ItemFactory.getSingleItem(itemId).then(function(oneItem){
		$scope.selectedItem = oneItem;
	})


     $scope.addNewItem = function() {
        $scope.newTask.isCompleted = false;
        ItemFactory.postNewItem($scope.newTask).then(function(itemId) {
		 $location.url("/items/list");           
             $scope.newTask = {};
      
         });
    };

 });