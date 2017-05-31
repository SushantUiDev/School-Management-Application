(function () {
	function staffCtrlFn() {
		var vm = this;
		vm.staffs = [
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"department": "TC",
				"designation": "jnr.Cleark",
				"phone":"48448",
				"mail":"slad@gmail.com"
			},
			{
				"firstName": "Akash",
				"lastName": "Rathod",
				"department": "DD",
				"designation": "jnr.Engg",
				"phone":"254646",
				"mail":"akash@gmail.com"
			},
			{
				"firstName": "nikhil",
				"lastName": "reddy",
				"department": "EE",
				"designation": "teacher",
				"phone":"487115",
				"mail":"shskdj@gmail.com"
			},
			{
				"firstName": "Sumedh",
				"lastName": "jeny",
				"department": "ECE",
				"designation": "jnr.Cleark",
				"phone":"487117",
				"mail":"sumedh@gmail.com"
			},
			{
				"firstName": "Nitin",
				"lastName": "sdsdv",
				"department": "CH",
				"designation": "teacher",
				"phone":"455551",
				"mail":"nitin@gmail.com"
				
			},
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"department": "PH",
				"designation": "ass.professor",
				"phone":"487445",
				"mail":"sushant@gmail.com"
			},
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"department": "TC",
				"designation": "jnr.Cleark",
				"phone":"48448",
				"mail":"slad@gmail.com"
			},
			{
				"firstName": "Akash",
				"lastName": "Rathod",
				"department": "DD",
				"designation": "jnr.Engg",
				"phone":"254646",
				"mail":"akash@gmail.com"
			},
			{
				"firstName": "nikhil",
				"lastName": "reddy",
				"department": "EE",
				"designation": "teacher",
				"phone":"487115",
				"mail":"shskdj@gmail.com"
			},
			{
				"firstName": "Sumedh",
				"lastName": "jeny",
				"department": "ECE",
				"designation": "jnr.Cleark",
				"phone":"487117",
				"mail":"sumedh@gmail.com"
			},
			{
				"firstName": "Nitin",
				"lastName": "sdsdv",
				"department": "CH",
				"designation": "teacher",
				"phone":"455551",
				"mail":"nitin@gmail.com"
				
			},
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"department": "PH",
				"designation": "ass.professor",
				"phone":"487445",
				"mail":"sushant@gmail.com"
			},
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"department": "TC",
				"designation": "jnr.Cleark",
				"phone":"48448",
				"mail":"slad@gmail.com"
			},
			{
				"firstName": "Akash",
				"lastName": "Rathod",
				"department": "DD",
				"designation": "jnr.Engg",
				"phone":"254646",
				"mail":"akash@gmail.com"
			},
			{
				"firstName": "nikhil",
				"lastName": "reddy",
				"department": "EE",
				"designation": "teacher",
				"phone":"487115",
				"mail":"shskdj@gmail.com"
			},
			{
				"firstName": "Sumedh",
				"lastName": "jeny",
				"department": "ECE",
				"designation": "jnr.Cleark",
				"phone":"487117",
				"mail":"sumedh@gmail.com"
			},
			{
				"firstName": "Nitin",
				"lastName": "sdsdv",
				"department": "CH",
				"designation": "teacher",
				"phone":"455551",
				"mail":"nitin@gmail.com"
				
			},
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"department": "PH",
				"designation": "ass.professor",
				"phone":"487445",
				"mail":"sushant@gmail.com"
			},
		 
		 
		 ]


	}
	angular.module("staff")
		.controller("staffCtrl", [staffCtrlFn]);
})();