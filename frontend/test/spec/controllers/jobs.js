'use strict';

describe('Controller: JobsCtrl', function () {

  // load the controller's module
  beforeEach(module('jwtApp'));

  var JobsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    JobsCtrl = $controller('JobsCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(JobsCtrl.awesomeThings.length).toBe(3);
  });
});
