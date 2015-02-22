'use strict';
app.factory('IngredientsService', function() {

    var list = [{
        'name': 'milk'
    }, {
        'name': 'bread'
    }, {
        'name': 'cheese'
    }, {
        'name': 'peppers'
    }]

    return {
        ingredients: list,
        getIngredient: function(index) {
            return ingredients(index)
        }
    };

});
