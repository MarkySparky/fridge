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
        window.terms = terms;
        console.log(terms);
        var searchTerms = terms.map(function(term) {
            return term.name;
        }).join(' ');

        console.log('Searching for ' + searchTerms);
        var fuse = new Fuse(allRecipes, {
            includeScore: true,
            maxPatternLength: 100,
            keys: ["method"]
        });
        availableRecipes = fuse.search(searchTerms);
    }

    return resource;

});
