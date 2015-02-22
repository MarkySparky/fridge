'use strict';
app.controller('RecipesController', function($scope, RecipesService) {
    var vm = $scope;
    window.vm = vm;

    vm.recipes = [];

    console.log('In recipes controller');

    var recipes = RecipesService.query(function() {
        vm.recipes = recipes;
    });

    vm.recipesCount = function() {
        return vm.recipes.length;
    }


});
