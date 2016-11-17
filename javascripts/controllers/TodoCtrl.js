"use strict";

app.controller("TodoCtrl", ($scope, ItemFactory) => {
    $scope.welcome = "hello";
    $scope.showListView = true;
    $scope.newTask = {};
    $scope.items = [];

    let getItems = function() {
        ItemFactory.getItemList().then(function(fbItems) {
            console.log("items from controller", fbItems);
            $scope.items = fbItems;
        });
    };

    getItems();


    $scope.allItems = () => {
        $scope.showListView = true;
    };

    $scope.newItem = () => {
        console.log("You clicked new item");
        $scope.showListView = false;
    };

    $scope.addNewItem = () => {
        $scope.newTask.isCompleted = false;
        console.log("newTask in function", $scope.newTask);
        ItemFactory.postNewItem($scope.newTask).then((itemId) => {
            getItems();
            $scope.newTask = {};
            $scope.showListView = true;
        });
    };

});