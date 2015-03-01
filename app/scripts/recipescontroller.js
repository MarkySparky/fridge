'use strict';
app.controller('RecipesController', function($scope, RecipesService) {

    var vm = $scope;
    window.vm = vm;

    vm.allRecipes = RecipesService.allRecipes;
    vm.availableRecipes = RecipesService.availableRecipes;

    console.log('In recipes controller');

    if (RecipesService.countAllRecipes() === 0) {
        console.log('noi recipes, fetching');
        RecipesService.query(function(recipes) {
            RecipesService.initialiseRecipes(recipes);
        });
    } else {
        console.log('Got something');
    }

    $scope.$on('ingredients-changed', function(event, args) {
        RecipesService.searchRecipes(args.list.join(' '));

        // do what you want to do
    });

    vm.recipesCount = function() {
        return RecipesService.countAvailableRecipes();
    }

});
