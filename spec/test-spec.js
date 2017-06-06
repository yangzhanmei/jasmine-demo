const addTwoNumber = require("../test");

describe("test addTwoNumber", function () {
    it("is right", function () {
        const a = 1;
        const b = 2;
        expect(addTwoNumber(1,2)).toEqual(3);
    });
});