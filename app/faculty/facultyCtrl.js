(function () {
	function facultyCtrlFn() {
		var vm = this;
		vm.faculties = [
			{
				"name": "Harish Mehata",
				"deptarmant": "CS",
				"Phone": "956265456",
				"designation": "Professor",
				"email": "Harish@gmail.com",
				"picture": "http://photos.iitm.ac.in/byid.php?id=002679",
				"officeLocation": "B2B 35",
				"alternateEmail": "jcksnc@gmail.com"
			},
			{
				"name": "Raman Dev p",
				"deptarmant": "EC",
				"Phone": "35646656",
				"email": "ramandev@gmail.com",
				"designation": "Professor",
				"picture": "http://photos.iitm.ac.in/byid.php?id=008465",
				"officeLocation": "B2B 36",
				"alternateEmail": "jcksnc@gmail.com"
			},
			{
				"name": "rakesh Jadhav",
				"deptarmant": "Mathemaitcs",
				"Phone": "546879755",
				"email": "rjadhav@gmail.com",
				"designation": "Professor",
				"picture": "http://photos.iitm.ac.in/byid.php?id=003116",
				"officeLocation": "B2B 37",
				"alternateEmail": "jadhav45@gmail.com"
			},
			{
				"name": "Harish Mehata",
				"deptarmant": "CS",
				"Phone": "956265456",
				"designation": "Professor",
				"email": "Mehata@gmail.com",
				"picture": "http://photos.iitm.ac.in/byid.php?id=002691",
				"officeLocation": "B2B 38",
				"alternateEmail": "jcksnc@gmail.com"
			},
			{
				"name": "Raman Dev p",
				"deptarmant": "EC",
				"Phone": "35646656",
				"email": "ramandev@gmail.com",
				"designation": "Professor",
				"picture": "http://photos.iitm.ac.in/byid.php?id=008311",
				"officeLocation": "B2B 39",
				"alternateEmail": "jcksnc@gmail.com"
			},
			{
				"name": "Harish Mehata",
				"deptarmant": "CS",
				"Phone": "956265456",
				"designation": "Professor",
				"email": "Mehata@gmail.com",
				"picture": "http://photos.iitm.ac.in/byid.php?id=008681",
				"officeLocation": "B2B 40",
				"alternateEmail": "jcksnc@gmail.com"
			},
			{
				"name": "Raman Dev p",
				"deptarmant": "EC",
				"Phone": "35646656",
				"email": "ramandev@gmail.com",
				"designation": "Associate Professor",
				"picture": "http://photos.iitm.ac.in/byid.php?id=003110",
				"officeLocation": "B2B 40",
				"alternateEmail": "jcksnc@gmail.com"
			},
			{
				"name": "rakesh Jadhav",
				"deptarmant": "Mathemaitcs",
				"Phone": "546879755",
				"email": "rjadhav@gmail.com",
				"designation": "Associate Professor",
				"picture": "http://photos.iitm.ac.in/byid.php?id=003111",
				"officeLocation": "B2B 42",
				"alternateEmail": "jadhav45@gmail.com"
			},
			{
				"name": "Harish Mehata",
				"deptarmant": "English",
				"Phone": "956265456",
				"designation": "Professor",
				"email": "Harish@gmail.com",
				"picture": "http://photos.iitm.ac.in/byid.php?id=008646",
				"officeLocation": "B2B 41",
				"alternateEmail": "jcksnc@gmail.com"
			},
			
			{
				"name": "rakesh Jadhav",
				"deptarmant": "Mathemaitcs",
				"Phone": "546879755",
				"email": "rjadhav@gmail.com",
				"designation": "Associate Professor",
				"picture": "http://photos.iitm.ac.in/byid.php?id=008034",
				"officeLocation": "B2B 37",
				"alternateEmail": "jadhav45@gmail.com"
			},
			
			{
				"name": "Raman Dev p",
				"deptarmant": "Physics",
				"Phone": "35646656",
				"email": "ramandev@gmail.com",
				"designation": "Associate Professor",
				"picture": "http://photos.iitm.ac.in/byid.php?id=008465",
				"officeLocation": "B2B 36",
				"alternateEmail": "jcksnc@gmail.com"
			},
			{
				"name": "Harish Mehata",
				"deptarmant":"Chemistry",
				"Phone": "956265456",
				"designation": "Associate Professor",
				"email": "harishm@gmail.com",
				"picture": "http://photos.iitm.ac.in/byid.php?id=002679",
				"officeLocation": "B2B 35",
				"alternateEmail": "mehata@gmail.com"
			},
		]

	}
	angular.module("faculty")
		.controller("facultyCtrl", [facultyCtrlFn]);
})();