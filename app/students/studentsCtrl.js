(function(){
	function studentsCtrlFn(){
		var vm=this;
		vm.message="";
		vm.newStudent={
			
		}
		vm.register = function () {
			console.log(vm.newUser);
			vm.students.push(vm.newUser);
			vm.newUser={};
			vm.message="you register new user..";
		}
		vm.clickedStudent={
			
		}
		vm.clearMessage=function(){
			vm.message="";
		}
		vm.selectStudent=function(student){
			console.log(student);
			vm.clickedStudent=student;
		}
		vm.updateUser = function() {
            vm.message = "you update user successifully ..";
        }
		vm.totValue=["1","2","3","4","5","6","7","8","9","10"];
		vm.minimumProducts=5;
		vm.showMore=function(){
			vm.minimumProducts+=5;
			
		}
		
		 /*vm.deletUser = function(student) {
            console.log(student);
            //vm.index=-1;
           vm.index = -1;
            var comArr = eval(vm.students);
            for (var i = 0; i < comArr.length; i++) {
                if (comArr[i].firstName === student.firstName) {
                    vm.index = i;
                    console.log(vm.index);
                    break;
                }
            }
            if (vm.index === -1) {
                console.log(vm.index);
                alert("Something gone wrong");
            }
            vm.students.splice(vm.index, 1);

            
        }*/
		vm.deletStudent=function(){
			vm.students.splice(vm.students.indexOf(vm.clickedStudent),1);
			vm.message="You deleted student successifully..";
		}
		vm.students = [
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"department":"MH",
				"picture":"1.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "vicky",
				"lastName": "paikrao",
				"userName": "sushantpaikrao1990@gmail.com",
				"department":"PH",
				"picture":"2.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "nikhil",
				"lastName": "rathod",
				"userName": "nikhilrathod@gmail.com",
				"department":"EC",
				"picture":"3.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"userName": "sushantpaikrao1990@gmail.com",
				"department":"ECE",
				"picture":"1.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "vicky",
				"lastName": "singham",
				"userName": "vickysingham@gmail.com",
				"picture":"2.jpg",
				"department":"EE",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "Akash",
				"lastName": "patil",
				"userName": "Akashpatil@gmail.com",
				"picture":"3.jpg",
				"department":"TCE",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "rohini",
				"lastName": "paikrao",
				"userName": "mayurigajbhiye@gmail.com",
				"picture":"3.jpg",
				"department":"DIP",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "manisha",
				"lastName": "paikrao",
				"userName": "ravipaikrao@gmail.com",
				"picture":"1.jpg",
				"department":"ENG",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "tuppa",
				"lastName": "paikrao",
				"userName": "emmawarghtgmail.com",
				"picture":"2.jpg",
				"department":"DR",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "karisham",
				"lastName": "paikrao",
				"userName": "reemapaikrao1@gmail.com",
				"picture":"3.jpg",
				"department":"EC",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			}
		 ]
		
		
		
	}
	angular.module("students")
	.controller("studentsCtrl",[studentsCtrlFn]);
})();


/*

(function () {
	function usersCtrlCtrlFn($rootScope) {
		var vm = this;
		vm.newUser = {

		}
		vm.clickedUser={
			
		}
		vm.message="";
		vm.users = [
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"userName": "sushantpaikrao1990@gmail.com",
				"picture":"1.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "vicky",
				"lastName": "paikrao",
				"userName": "sushantpaikrao1990@gmail.com",
				"picture":"2.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "nikhil",
				"lastName": "rathod",
				"userName": "nikhilrathod@gmail.com",
				"picture":"3.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "sushant",
				"lastName": "paikrao",
				"userName": "sushantpaikrao1990@gmail.com",
				"picture":"1.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "vicky",
				"lastName": "singham",
				"userName": "vickysingham@gmail.com",
				"picture":"2.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "Akash",
				"lastName": "patil",
				"userName": "Akashpatil@gmail.com",
				"picture":"3.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "rohini",
				"lastName": "paikrao",
				"userName": "mayurigajbhiye@gmail.com",
				"picture":"3.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "manisha",
				"lastName": "paikrao",
				"userName": "ravipaikrao@gmail.com",
				"picture":"1.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "tuppa",
				"lastName": "paikrao",
				"userName": "emmawarghtgmail.com",
				"picture":"2.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			},
			{
				"firstName": "karisham",
				"lastName": "paikrao",
				"userName": "reemapaikrao1@gmail.com",
				"picture":"3.jpg",
				"description":"Sr.Web Developer having a excellent command on web technologies like html5,css3,jquery,angularjs"
			}
		 ]
		
		vm.register = function () {
			console.log(vm.newUser);
			vm.users.push(vm.newUser);
			vm.newUser={};
			vm.message="you register new user..";
		}
		vm.clearMessage=function(){
			vm.message="";
		}
		
		
		vm.selectUser=function(user){
			console.log(user);
			vm.clickedUser=user;
		}
		
		
		vm.updateUser=function(){
			vm.message="you update user successifully ..";
		}
		
		/*vm.deletUser=function(user){
		    vm.users.splice( $index, 1 );
			vm.users.splice(vm.users.indexOf(vm.clickedUser,1));
			vm.message="you deleted user successifully ..";
			
		}
		*/
/*		vm.deletUser=function(user){
			console.log(user);
			//vm.index=-1;
			 vm.index = -1;
					var comArr = eval(vm.users);
					for (var i = 0; i < comArr.length; i++) {
						if (comArr[i].firstName === user.firstName) {
							vm.index = i;
							console.log(vm.index);
							break;
						}
					}
					if (vm.index === -1) {
						console.log(vm.index);
						alert("Something gone wrong");
					}
					vm.users.splice(vm.index, 1);
			
			vm.message="you delet user successigully..";
		}
		
		vm.addToCart=function(args){
			console.log(args);
			// $rootScope.$broadcast("ITEM-ADDED", item);
            //send notification 
			$rootScope.$broadcast("ITEM-ADDED",args);
			
		}
		
		
		
	}
	angular.module("users")
		.controller("usersCtrl", ["$rootScope",usersCtrlCtrlFn]);
})();
  */