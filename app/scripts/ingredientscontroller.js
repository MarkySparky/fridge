'use strict';
app.controller('IngredientsController', function($scope, IngredientsService) {
    var vm = $scope;
    window.vm = vm;
    console.log('In ingredients controller');

    vm.ingredients = IngredientsService.ingredients;


    console.log(vm.ingredients);

    vm.searchForIngredient = function(event) {
        if (event.srcElement.value) {
            vm.ingredients.unshift({
                'name': event.srcElement.value
            });
            vm.ingredients.search = '';
        }

    }


});
