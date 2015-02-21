'use strict';
app.factory('RecipeService', function() {

    var recipes = [{
        'name': 'Omlette'
    }, {
        'name': 'Stir fry'
    }];

    return {
        recipes: recipes,
        getRecipe: function(index) {
            return recipes(index)
        }
    };

});
