'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('LotsOBricksCtrl', ["brickWarehouse",function (brick) {
    this.name = 'Lots O Bricks';
    this.redBricks =brick.bricks.red;
    this.blueBricks = brick.bricks.Blue;
    this.greenBricks = brick.bricks.Green;
  }]);
