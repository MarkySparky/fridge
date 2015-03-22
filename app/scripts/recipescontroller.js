'use strict';
app.controller('RecipesController', function(RecipesService, $http, $scope) {

    var vm = $scope;
    window.vm = vm;



    $scope.$on('ingredients-changed', function(event, args) {
        console.log('Ingredients have changed');

        window.args = args;

        var csv = args.list.map(function(itm) {
            return itm.name;
        })

        vm.recipes = RecipesService.query({
            q: csv.join(',')
        }, function(res) {
            vm.recipes = res.body;
        });

        //RecipesService.searchRecipes(args.list);
        // do what you want to do
    });

    vm.recipesCount = function() {
        if (vm.recipes && vm.recipes.hits) {
            return vm.recipes.hits.length;
        } else {
            return 0;
        }
        //return vm.recipes.hits.length;
    }

});
