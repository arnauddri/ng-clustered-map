# ng-clustered-map [![Build Status](https://travis-ci.org/arnauddri/ng-clustered-map.svg?branch=master)](https://travis-ci.org/arnauddri/ng-clustered-map)

Add google maps with clustered markers in your Angular apps with a single line of code!

### Demo

See it live here:
[http://arnauddri.github.io/ng-clustered-map/](http://arnauddri.github.io/ng-clustered-map/)

![alt text](http://www.go-on.co/wp-content/uploads/2014/05/MarkersWithCluster.png "Cluster example")

### Install

Via npm
```
npm install --save ng-clustered-map
```

Via bower
```
bower install --save ng-clustered-map
```

### Usage

Include Google maps dependencies:

```html
  <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
  <script src="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/markerclusterer.js"></script>
```

Inject ```clustered.map``` in your module:
```javascript
  angular.module('myModule', ['clustered.map'])
```

Declare the directive as an element an pass it your arguments:

```html
  <clustered-map markers="markers" zoom="1" center="center"></clustered-map>
```

### Attributes

**markers:**
Pass the an array of markers to add on the map:

```javascript
  $scope.markers= [[latitude, longitude, weight], ...]
```

To add custom pop-ups to a pin, just add a 4th element to the pin's array with its inner HTML
```javascript
  $scope.markers= [[1.0, 1.0, 3, '<h1>foobar</h1>'], ...]
```

To use custom markers, just add a 5th element to the pin's array with the path to your icon. Note that if you use a custom marker but no pop-up the 4th element needs to be null:
```javascript
  $scope.markers= [[1.0, 1.0, 3, '<h1>foobar</h1>', 'http://path/to/my/first/icon'], [1.0, 1.0, 3, null, 'http://path/to/my/second/icon']...]
```

**zoom:**
Defines the initial zooming on the map (default: 2)

**center:**
Defines the initial center of the map (default: barycenter of the passed coordinates)

```javascript
  $scope.center = { x: 0, y: 0 }
```
