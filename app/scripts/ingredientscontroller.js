'use strict';
app.controller('IngredientsController', function($rootScope, $scope, $filter, IngredientsService, $ionicLoading) {
    var vm = $scope;
    window.rootScope = $rootScope;
    window.vm = vm;

    //Get any pre existing ingredients
    vm.ingredients = IngredientsService.ingredients;

    $rootScope.$broadcast('ingredients-changed', {
        'list': vm.ingredients
    });

    vm.delete = function(ingredient) {
        IngredientsService.deleteIngredient(ingredient);
    }

    vm.addIngredient = function(ingredient) {


        //Make sure its not empty
        if (!ingredient.trim()) return false;

        //Do we already have this item?
        var index = vm.ingredients.map(function(e) {
            return e.name.toLowerCase();
        }).indexOf(ingredient.toLowerCase());
        if (index >= 0) return false;

        //Loading...
        $ionicLoading.show({
            template: 'Loading...'
        });

        //Add to start of ingredients array
        IngredientsService.addIngredient(event.srcElement.value);

        // vm.ingredients.unshift({
        //     'name': event.srcElement.value
        // });

        vm.ingredients.search = '';

        $rootScope.ingredients = vm.ingredients.map(function(thing) {
            return thing.name;
        }).join(' ');
        //No longerloading
        $ionicLoading.hide();

    }

    vm.ingredientCount = function() {
        return vm.ingredients.length;
    }

});
