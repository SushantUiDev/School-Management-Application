(function(){
	angular.module("faculty",[])
	
	angular.module("faculty")
	.config(function(){
		console.log("i am faculty module config method...");
	})
	.run(function(){
		console.log("i am faculty module run method ...")
	})
})();