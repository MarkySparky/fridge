'use strict';
app.controller('RecipesController', function($scope, RecipesService) {

    var vm = $scope;
    window.vm = vm;

    vm.allRecipes = RecipesService.allRecipes;
    vm.availableRecipes = RecipesService.availableRecipes;

    if (RecipesService.countAllRecipes() === 0) {
        RecipesService.query(function(recipes) {
            RecipesService.initialiseRecipes(recipes);
        });
    }

    $scope.$on('ingredients-changed', function(event, args) {
        console.log(args);
        RecipesService.searchRecipes(args.list);
        // do what you want to do
    });

    vm.recipesCount = function() {
        return RecipesService.countAvailableRecipes();
    }

});
