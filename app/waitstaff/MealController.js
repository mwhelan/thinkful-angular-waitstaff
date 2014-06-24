(function() {
    'use strict';

    angular.module('app')
        .controller("MealController", function() {
            var vm = this;
        this.meal = new Meal(0.0, 0.0, 0.0);

        });
})();

function Meal(price, taxRate, tipPercentage) {
    this.price = price;
    this.taxRate = taxRate;
    this.tipPercentage = tipPercentage;
}
