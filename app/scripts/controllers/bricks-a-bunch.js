'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('BricksABunchCtrl', ["brickWarehouse",function (brick) {
    this.name = 'Bricks A Bunch';

    this.redBricks = brick.bricks.red;
    this.buy=brick.buy;
  }]);
