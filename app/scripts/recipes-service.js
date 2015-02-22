'use strict';
app.factory('RecipesService', function($resource) {

    var resource = $resource('/recipes/recipes.json');

    return resource;

});
