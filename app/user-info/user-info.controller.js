angular
        .module('userApp')
		.controller('userInfoController', [
            '$scope',
            'userInfoService',
            userInfoController
        ]);
		
		function userInfoController($scope,userInfoService) {
			$scope.orderByField = 'id';
			$scope.reverseSort = false;
			$scope.dispTable = false;
			$scope.loading = false;
			$scope.sortData = function(column){
				$scope.reverseSort = ($scope.orderByField==column) ? !$scope.reverseSort:false;
				$scope.orderByField = column
			}
			
			$scope.addClass = function(column){
				if($scope.orderByField==column){
					return $scope.reverseSort ? 'arrow-down':'arrow-up';
				}
				return '';
			}
			
			$scope.getData = function (){
				$scope.loading = true;
				$scope.dispTable = true;
				userInfoService.getUserInfo().then(function(d) {
					$scope.loading = false;
					$scope.data = d.data;	
				})
			}
		}	