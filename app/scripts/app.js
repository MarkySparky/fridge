'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('Fridge', ['ionic', 'config', 'ui.utils']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('app', {
        abstract: true,
        url: '/',
        templateUrl: 'templates/main.html',
    });

    $stateProvider.state('ingredients', {
        url: '/ingredients',
        views: {
            ingredients: {
                templateUrl: 'templates/ingredients.html',
                controller: 'IngredientsController',
                resolve: {
                    ingredients: function(IngredientsService) {
                        return IngredientsService
                    }
                }
            }
        }
    });
    $stateProvider.state('help', {
        url: '/help',
        views: {
            help: {
                templateUrl: 'templates/help.html'
            }
        }
    });
    $stateProvider.state('recipes', {
        url: '/recipes',
        templateUrl: 'templates/recipes.html',
        controller: 'RecipeController',
        resolve: {
            recipes: function($stateParams, RecipesService) {
                return RecipesService.recipes
            }
        }
    });
    $stateProvider.state('recipes.detail', {
        url: '/:recipe',
        templateUrl: 'templates/recipes.html',
        controller: 'RecipeController',
        resolve: {
            recipes: function($stateParams, RecipesService) {
                return RecipesService.getRecipe($stateParams.recipe)
            }
        }
    });
});

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});
