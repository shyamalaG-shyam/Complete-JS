
const { test, expect } = require("@jest/globals");
const whatDoYouDo=require('./functionExpression');
const createObj=require('./literalAproach');
const mains=require('./callBackFunction');
const getData=require("./asyncWithFetch.js");


//function with switch case
test("should return designer alice",()=>{
    expect(whatDoYouDo("designer","alice")).toBe("designer alice")
})
//function creates a object using new keyword
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
//testing a callback function by mocking a function
test("should call increment",()=>{
    const mockCallback = jest.fn(x=>x.filter(element => element>0) )
    mains([1,5,0,-1,-5], mockCallback);
    expect(mockCallback.mock.results[0].value).toEqual([1,5]);

})
//fetch api cal with asyn/await
test('the data is JAVA', async () => {
    const data = await getData();
    expect(JSON.stringify(data)).toBe('JAVA');
  });
test('returnde data is JAVA', async () => {
    expect.assertions(0);
    try {
      await getData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
