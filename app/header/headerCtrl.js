(function(){
	function headerCtrlFn(){
		var vm=this;
		vm.brandName="SentSchool";
		vm.navBar=["Student","Faculty","Staff"];
		vm.nawBar2=["AdminLogin","Register"];
		vm.staffTemplate="app/staff/staff.tpl.html";
		vm.facultyTemplate="app/faculty/faculty.tpl.html";
		vm.studentsTemplate="app/students/students.tpl.html";
		vm.loginTemplate="app/login/login.tpl.html";
		vm.registerTemplate="app/register/register.tpl.html";
		vm.staffTemplate="app/staff/staff.tpl.html";
		
		vm.loadView=function(param){
			console.log(param)
			if(param == "Faculty"){
				vm.loadTemplate=vm.facultyTemplate;
			}else if(param == "Student"){
				vm.loadTemplate=vm.studentsTemplate;
			}else if(param == "Staff"){
				vm.loadTemplate=vm.staffTemplate;
			}
		}
		vm.loadView1=function(param1){
			console.log(param1)
			if(param1 == "AdminLogin"){
				vm.loadTemplate=vm.loginTemplate;
			}else if(param1 == "Register"){
				vm.loadTemplate=vm.registerTemplate;
			}
		}
		
		
	
	}
	angular.module("header")
	.controller("headerCtrl",[headerCtrlFn])
})();