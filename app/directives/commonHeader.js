(function(){
	function cmHeaderFn(){
		return{
			restrict:"AE",
			templateUrl:"app/header/header.tpl.html"
		}
	}
	angular.module("directive")
	.directive("cmHeader",[cmHeaderFn])
})();