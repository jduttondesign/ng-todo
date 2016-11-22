"use strict";

app.controller("ItemListCtrl", function($scope, ItemFactory) {
	$scope.message = [];


    let getItems = function() {
        ItemFactory.getItemList().then(function(fbItems) {
            $scope.items = fbItems;
        });
    };

    getItems();


   $scope.deleteItem = function(itemId){
    console.log("you deleted me");
    ItemFactory.deletedItem(itemId).then(function(reponse){
        getItems();//refresh Dom after click input of itemID
    });
};
$scope.inputChange = function(thingy){
    ItemFactory.editItem(thingy).then(function(response){
        console.log("ctrl inputChange response", response);
    })
}

});







