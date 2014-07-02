'use strict';

angular.module("app", ["ngRoute"])
    .value("totalEarnings", {
        tipTotal: 0,
        mealCount: 0,
        averageTip: 0
    })
    .config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/home.html"
        })
        .when("/new-meal", {
            templateUrl: "app/new-meal.html",
            controller: "MealController"
        })
        .when("/my-earnings", {
            templateUrl: "app/my-earnings.html",
            controller: "EarningsController"
        })
        .otherwise({
            redirectTo: "/"
        })
        .when('/error', {
            template: '<p>Error Page Not Found</p>'
        });
});