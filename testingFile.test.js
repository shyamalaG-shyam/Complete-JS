const { test, expect } = require("@jest/globals");
const sumOfOdd=require("./examples")
const whatDoYouDo=require('./functionExpression')

test("should return sum of odd numbers (8)",()=>{
    var ar=[1,2,2,4]
      expect(sumOfOdd(ar)).toBe(8)
});

test("should return designer alice",()=>{
    expect(whatDoYouDo("designer","alice")).toBe("designer alice")
})
