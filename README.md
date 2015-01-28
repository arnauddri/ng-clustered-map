# ng-clustered-map [![Build Status](https://travis-ci.org/arnauddri/ng-clustered-map.svg?branch=master)](https://travis-ci.org/arnauddri/ng-clustered-map)

Add google maps with clustered markers in your Angular apps with a single line of code!

### Demo

See it live here:
[http://arnauddri.github.io/ng-clustered-map/](http://arnauddri.github.io/ng-clustered-map/)

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

**zoom:**
Defines the initial zooming on the map

**center:**
Defines the initial center of the map

```javascript
  $scope.center = { x: 0, y: 0 }
```
