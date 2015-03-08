'use strict';
app.controller('RecipesController', function(RecipesService, $http, $scope) {

    var vm = $scope;
    window.vm = vm;

    var edamam_app_id = 'bb11dadc';
    var edamam_app_key = 'c178df9de649d0ca31919cd6c6ee6814';
    var InstagramApiUrl = '';

    // $http.get('/rest/search?q=noodles&app_id=bb11dadc&app_key=c178df9de649d0ca31919cd6c6ee6814').success(function(forecast) {
    //     $scope.recipes = forecast.hits;
    // });
    //vm.recipes = RecipesService.query({
    //    'q': 'chicken'
    //});

    // $http.get('/rest/search?q=noodles&app_id=bb11dadc&app_key=c178df9de649d0ca31919cd6c6ee6814').success(function(forecast) {
    //     $scope.recipes = forecast.hits;
    // });


    //vm.allRecipes = RecipesService.allRecipes;
    //vm.availableRecipes = RecipesService.availableRecipes;

    // if (RecipesService.countAllRecipes() === 0) {
    //     RecipesService.query(function(recipes) {
    //         RecipesService.initialiseRecipes(recipes);
    //     });
    // }

    $scope.$on('ingredients-changed', function(event, args) {
        console.log(args);

        window.args = args;

        var csv = args.list.map(function(itm) {
            return itm.name;
        })

        vm.recipes = RecipesService.query({
            q: csv.join(',')
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
