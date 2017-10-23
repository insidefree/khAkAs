require('babel-polyfill')
describe("Circle", function () {
    var Circle = require('../lib/figure/Circle').Circle
    console.log(Circle)
    beforeEach(function () {
        circle = new Circle(10, 10, 10)
    });

    it("should be return boolean", function () {
        circle.isOverLapping(new Circle(10, 10, 10))
        expect(circle.isOverLapping(new Circle(10, 10, 10))).toEqual(true);
    });
});
