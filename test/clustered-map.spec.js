describe('ngPrettyJson', function() {
  'use strict';

  var $scope,
    $compile,
    doc,
    element,
    markers = [[1,1,1],[2,2,1],[3,3,1]],
    utils,
    html = '<clustered-map markers="markers"></clustered-map>';

  beforeEach(module('clustered.map'));

  beforeEach(inject(function (_utils_) {
    utils = _utils_;
  }));

  beforeEach(function() {
    inject(function($document, $rootScope, _$compile_){
      $scope   = $rootScope.$new();
      $compile = _$compile_;
      angular.element($document[0].querySelectorAll('body')).append(html);
      doc      = $document[0];
    });
  });

  function compile() {
    element = angular.element(doc);
    $compile(element)($scope);
    $scope.$digest();
  }

  describe('Model binding', function() {

    beforeEach(function() {
      $scope.markers = angular.copy(markers)
    });

    it('should compute the barycenter position', function() {
      compile()
      var center = utils.getCenter(markers);
      expect(center.x).toEqual(2)
      expect(center.y).toEqual(2)
    });
  });
});
