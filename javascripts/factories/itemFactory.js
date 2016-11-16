"use strict"

app.factory("itemFactory", function($q, $http, FIREBASE_CONFIG) {
	var getItemList = function(){
		return $q((resolve, reject)=>{
			$http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
			.sucess(function(response){
				let items = [];
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					items.push(response[key]);
				});
				resolve(items);
			}

		})
			.error(function(errorResponse){
				reject(errorResponse)
			})
	})
var postNewItem = function(){
	return $q((resolve, reject)=>{
		$http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify({
			assignedTo: newItem.assignedTo,
			isCompleted: newItem.isCompleted,
			task: newItem.task
		})
		)
		.sucess(function(postResponse){
			resolve(postResponse);
		})
		.error(function(postError)
			reject(postError);
	})
})
}

	return {getItemList:getItemList, postNewItem:postNewItem}
});