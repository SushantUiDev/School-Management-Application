(function(){
    angular.module("schoolApp",["header","faculty","students","staff","login","register","directive"]);
	
	angular.module("schoolApp")
	.config(function(){
		console.log("i am schoolApp module config() method..");
	})
	.run(function(){
		console.log("i am schoolApp module run() method..");
	})
})();