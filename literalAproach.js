//Function to create an object in literal approach
function createObj(){
    let cricketer={
        fn:"aaa",
        ln:"bbbb",
        year:1971,
        30:"cricket",
        age:function(){
            return 2022-this.year
        }
    }
    return cricketer
}
var Cricketer=createObj();
console.log(Cricketer)
// Cricketer.fn="cccc"
module.exports=createObj;

