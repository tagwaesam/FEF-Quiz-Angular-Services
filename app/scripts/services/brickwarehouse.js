'use strict';

/**
 * @ngdoc service
 * @name serviceQuizApp.brickWarehouse
 * @description
 * # brickWarehouse
 * Service in the serviceQuizApp.
 */
angular.module('serviceQuizApp')
  .service('brickWarehouse', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.bricks={
      red:{
        '1x1': {
          quantity: 13,
          price: 0.01
        },
        '2x2': {
          quantity: 48,
          price: 0.03
        },
        '2x6': {
          quantity: 9,
          price: 0.05
        }
      },
      Blue:{
        '2x2': {
          quantity: 7,
          price: 0.02
        },
        '2x4': {
          quantity: 2,
          price: 0.04
        }
      },
      Green:{
        '2x4': {
          quantity: 13,
          price: 0.04
        },
        '2x8': {
          quantity: 41,
          price: 0.08
        }

      }

    };
    var vm=this;
    this.buy=function(size){
      console.log("size=  "+size);
      vm.bricks['red'][size].quantity--;

    };



  });
