/**
 * Author Avraam Mavridis (avr.mav@gmail.com)
 * https://github.com/AvraamMavridis
 */
angular.module('ngUiComponents', [])
  .directive('uiComponentsKnob',[function(){
    return {
      restrict: 'EA',
      replace: true,
      template: '<canvas id="ui-knob"></canvas>'
      scope:{
        knobvalue: '@'
      },
      link: function($scope, element, attrs){
        var ctx = element.getContext("2d");
        var x = element.width / 2;
        var y = element.height / 2;
        var radius = y - 20;
        var startAngle = 1 * Math.PI;
        var endAngle = 2 * Math.PI;


        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.arc(x, y, radius, 0, endAngle, false);
        ctx.strokeStyle="#FFEC01";
        ctx.stroke();


        element.mousemove(function(event) {

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.strokeStyle="#FFEC01";
          ctx.lineWidth = 3;
          ctx.arc(x, y, radius, 0, endAngle, false);
          ctx.stroke();

          mousex = (event.offsetX == null ? event.layerX : event.offsetX);
          mousey = (event.offsetY == null ? event.layerY : event.offsetY);

          var rad = Math.atan2(y - mousey, mousex - x);
          var deg = rad * (180 / Math.PI);

          ctx.beginPath();
          ctx.lineWidth = radius / 4;
          ctx.strokeStyle= "#FFEC01";
          ctx.arc(x, y, radius - (radius/5), startAngle ,  - endAngle * (deg/360), false);
          ctx.stroke();

        });

      }
    }
  }]);
