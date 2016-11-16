"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope){
    $scope.navItems = [{name:"Logout"}, {name:"All Items"}, {name:"New Item"}];
});

app.controller("TodoCtrl", function($scope){
    $scope.welcome = "hello";

    $scope.showListView = true;
    $scope.newTask = {};
    $scope.items = [
        {
            id: 0,
            task: "mow the lawn",
            isCompleted: true,
            assignedTo: "Zoe"
        },
        {
            id: 1,
            task: "grade quizzes",
            isCompleted: false,
            assignedTo: "William"
        },
        {
            id: 2,
            task: "take nap",
            isCompleted: false,
            assignedTo: "Zoe"
        }
    ];

    $scope.allItems = function(){
        console.log("You clicked 'All Items'");
        $scope.showListView = true;
    }

    $scope.newItem = function(){
        console.log("You clicked 'New Item'");
        $scope.showListView = false;
    }
    $scope.addNewItem = function(){
        $scope.newTask.isCompleted = false;
        $scope.newTask.id = $scope.items.length;
        console.log("newTask in function", newTask);
        $scope.items.push($scope.newTask);
        $scope.newTask = "";
        $scope.showListView = true;
}





});