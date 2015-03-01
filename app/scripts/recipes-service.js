'use strict';
app.factory('RecipesService', function($rootScope, $resource) {

    var allRecipes = [];
    var availableRecipes = [];
    window.rootScope = $rootScope;

    var resource = $resource('/recipes/recipes.json');

    resource.allRecipes = function() {
        return allRecipes;
    }
    resource.availableRecipes = function() {
        return availableRecipes;
    }
    resource.addRecipe = function(recipe) {
        allRecipes.unshift(recipe);
        console.log(allRecipes);
    }
    resource.countAllRecipes = function() {
        return allRecipes.length;
    }
    resource.countAvailableRecipes = function() {
        return availableRecipes.length;
    }
    resource.initialiseRecipes = function($recipes) {
        allRecipes = $recipes;
    }
    resource.searchRecipes = function(terms) {
        console.log($rootScope.ingredients);
        var fuse = new Fuse(allRecipes, {
            includeScore: true,
            maxPatternLength: 100,
            keys: ["method"]
        });
        availableRecipes = fuse.search(terms);
        console.log(availableRecipes);

    }

    return resource;

});
