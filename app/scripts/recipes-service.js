'use strict';
app.factory('RecipesService', function($rootScope, $resource) {

    var allRecipes = [];
    var availableRecipes = [];
    var foodtofork_api_key = 'd8bcfe3ea0d4c883d0b1cb1bfb9e3047';
    var edamam_app_id = 'bb11dadc';
    var edamam_app_key = 'c178df9de649d0ca31919cd6c6ee6814';

    var edamam_url = "/rest/search?app_id=bb11dadc&app_key=c178df9de649d0ca31919cd6c6ee6814";

    var sortOrder = 'r';
    window.rootScope = $rootScope;


    var resource = $resource(edamam_url + '&q=:q', {}, {
        'query': {
            'method': 'get',
            'isArray': false
        }
    });

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
