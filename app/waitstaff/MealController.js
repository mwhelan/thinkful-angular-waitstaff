(function() {
    'use strict';

    angular.module('app')
        .controller("MealController", function($scope) {
        initializeForm();
        
        $scope.addMeal = function() {
            if (!$scope.mealForm.$valid) {
                return;
            }
            var meal = $scope.data;
            meal.tax = meal.taxRate * meal.price / 100;
            meal.subtotal = meal.price + meal.tax;
            meal.tip = meal.subtotal * meal.tipPercentage / 100;
            meal.totalPrice = meal.subtotal + meal.tip;
            meal.tipTotal = meal.tipTotal += meal.tip;
            meal.mealCount++;
            meal.averageTip = meal.tipTotal / meal.mealCount;
        }

            $scope.reset = function() {
                initializeForm();
                $scope.mealForm.$setPristine();
            }

            $scope.cancel = function() {
                var meal = $scope.data;
                meal.price = 0;
                meal.taxRate = 0;
                meal.tipPercentage = 0;
                $scope.mealForm.taxRate = 0;
                $scope.mealForm.$setPristine();
            }

            function initializeForm() {
                $scope.data = {
                    price: 0,
                    taxRate: 0,
                    tipPercentage: 0,
                    tax: 0,
                    subtotal: 0,
                    tip: 0,
                    totalPrice: 0,
                    tipTotal: 0,
                    mealCount: 0,
                    averageTip: 0
                }
            }
    });
})();


