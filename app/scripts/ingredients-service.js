'use strict';
app.factory('IngredientsService', function() {

    var ingredients = [{
        'name': 'eggs'
    }, {
        'name': 'milk'
    }, {
        'name': 'bread'
    }, {
        'name': 'cheese'
    }, {
        'name': 'peppers'
    }]

    return {
        ingredients: ingredients,
        getIngredients: function(index) {
            return ingredients(index)
        }
    };

});
