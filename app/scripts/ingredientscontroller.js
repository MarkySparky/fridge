'use strict';
app.controller('IngredientsController', function($scope, IngredientsService) {
    var vm = $scope;
    window.vm = vm;

    vm.ingredients = IngredientsService.ingredients;

    vm.addIngredient = function(ingredient) {
        if (!ingredient) return false;
        vm.ingredients.unshift({
            'name': event.srcElement.value
        });
        vm.ingredients.search = '';
    }

    vm.ingredientCount = function() {
        return vm.ingredients.length;
    }

});
