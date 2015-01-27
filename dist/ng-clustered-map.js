if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'clustered.map';
}

(function (window, angular, undefined) {
/* global angular, _ */
'use strict';

angular.module('clustered.map', [])
  .factory('google', ['$window', function($window) {
    if ($window.google === undefined || $window.MarkerClusterer === undefined) {
      throw new Error('google is not bound to window');
    }
    return {
      maps: $window.google.maps,
      MarkerClusterer: $window.MarkerClusterer
    };
  }])
  .directive('clusteredMap', ['google',
    function(google) {
      return {
        restrict: 'EA',
        replace: true,
        template: '<div id="map_canvas"></div>',
        scope: {
          markers: '=',
          zoom: '=',
          center: '='
        },
        link: function(scope, element) {
          function initialize(markers) {
            var barycenter = scope.center || { x: 0, y:0 }

            for (var i = 0;  i < markers.length; i ++) {
              barycenter.x += markers[i][0] * markers[i][2]
              barycenter.y += markers[i][1] * markers[i][2]
            }

            barycenter.x /= markers.length
            barycenter.y /= markers.length

            var center = new google.maps.LatLng(2,2);
            var el = angular.element(element[0])[0]
            var map = new google.maps.Map(el, {
              zoom: scope.zoom || 2,
              center: center,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            for (var i = 0; i < markers.length;++i) {
              markers[i] = new google.maps.Marker({
                position: new google.maps.LatLng(markers[i][0],markers[i][1]),
                weight:   markers[i][2],
                title:    'weight:' + markers[i][2]
              });
            }

            var calc = function(markers, numStyles) {
              var weight = 0;

              for(var i = 0; i < markers.length; i++){
                weight += markers[i].weight;
              }

              return {
                text: weight,
                index: Math.min(String(weight).length, numStyles)
              };
            }

            var markerCluster = new google.MarkerClusterer(map);
            markerCluster.setCalculator(calc);
            markerCluster.addMarkers(markers)
          }

          scope.$watch(
            function() { return scope.markers },
            function() {
              if (scope.markers)
                initialize(scope.markers)
            }
          )
        }
      }
    }])
})(window, window.angular);
