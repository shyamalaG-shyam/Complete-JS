const { test, expect } = require("@jest/globals");
const whatDoYouDo=require('./functionExpression');
const createObj=require('./literalAproach');




test("should return designer alice",()=>{
    expect(whatDoYouDo("designer","alice")).toBe("designer alice")
})

test("should return an object",()=>{
    var myObj={
        fn:"aaa",
        ln:"bbbb",
        year:1971,
       '30':"cricket",
        age:function(){
            return 2022-this.year
        }
    }
    expect(JSON.stringify(createObj())).toBe(JSON.stringify(myObj))
});


