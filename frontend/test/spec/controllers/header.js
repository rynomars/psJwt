'use strict';

describe('Controller: HeaderctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('jwtApp'));

  var HeaderctrlCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    HeaderctrlCtrl = $controller('HeaderctrlCtrl', {
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HeaderctrlCtrl.awesomeThings.length).toBe(3);
  });
});
