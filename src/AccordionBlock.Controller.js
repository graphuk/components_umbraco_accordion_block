angular.module("umbraco").controller("AccordionBlock.Controller", function ($scope) {

	$scope.sortMode = false;

	function Item() {
		this.title = '';
		this.description = '';
	}

	$scope.control.value = $scope.control.value || [new Item()];

	$scope.addItem = function () {
		$scope.control.value.push(new Item());
		_.defer(function () { $scope.$apply(); });
	}

	$scope.removeItem = function (item) {
		$scope.control.value.splice($scope.control.value.indexOf(item), 1);
		_.defer(function () { $scope.$apply(); });
	}

	$scope.toggleAccordionSortMode = function () {
		$scope.sortMode = !$scope.sortMode;
		if ($scope.sortMode) {
			$('#accordion').sortable({
				start: $scope.dragStart,
				update: $scope.dragEnd
			});
			$scope.reorderKey = 'general_reorderDone';
		} else {
			$('#accordion').sortable('disable'); 
			$scope.reorderKey = 'general_reorder';
		}
	}

	$scope.dragStart = function (e, ui) {
		if ($scope.sortMode) {
			ui.item.data('start', ui.item.index());
		}
	}
	$scope.dragEnd = function (e, ui) {
		var start = ui.item.data('start'),
			end = ui.item.index();

		$scope.control.value.splice(end, 0,
			$scope.control.value.splice(start, 1)[0]);

		$scope.$apply();
	}

	
});
