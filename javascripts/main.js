$( document ).ready(function() {
// You are going to be creating several JSON files that will be 
// describing all of the explosive products that you sell. 
// You need to use Promises to handle the order of the asynchronous 
// operations needed to load the data.
	var booms = [];

	function writeDom(){
		var domString = "";
		for(var i = 0; i < .length; i++){
			domString += ``;
		}
		$("#stringContainer").append(domString);
	}

});

/////////////////////ZOE'S///////////////////////
////////WILL NEED 3 OF JSON = F()
	var firstDinosaurJSON = function(){
		return new Promise(function(resolve, reject){
			$.ajax("./db/dinosaurs1.json").done(function(data1){
				resolve(data1.dinosaurs1);
			}).fail(function(error1){
				reject(error1);
			})
		})
	};






this is the most ideal method
firstDinosaurJSON().then(function(jsonData1){
	console.log(jsonData1);
	dinosaurs = jsonData1;
	return secondDinosaurJSON();
}).then(function(jsonData2){
	console.log(jsonData2);
	jsonData2.forEach(function(dino){
		dinosaurs.push(dino);
	})
	return thirdDinosaurJSON();
}).then(function(jsonData3){
	console.log("jsonData2", jsonData2);
	console.log(jsonData3);
	jsonData3.forEach(function(dino){
		dinosaurs.push(dino);
	})
	writeDOM();
});
