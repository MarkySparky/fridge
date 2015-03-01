'use strict';
app.factory('IngredientsService', function($rootScope) {

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
        },
        deleteIngredient: function(ingredient) {
            var idx = list.indexOf(ingredient);
            list.splice(idx, 1);
            $rootScope.$broadcast('ingredients-changed', {
                'list': this.ingredients
            });
        },
        addIngredient: function(ingredient) {
            this.ingredients.unshift({
                'name': ingredient
            });
            $rootScope.$broadcast('ingredients-changed', {
                'list': this.ingredients
            });

        }
    };

});
