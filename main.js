//declaring and initializing a variable with var
//var x=8,y=9,z=10
// var x=8;
// var y=x;
// var  x;
// console.log(x)//8 re-declare can be done
//---------------------------

//declaring and initializing a variable with let
    //let x=8,y=9,z=10
// let x=8;
// let y=x;
// let x
// console.log(x)//erreor bcoz no re declaration

// {
//     let x=3
// }
// console.log(x)//8 bcoz of scope as the x=3 has a block scope
//{
    // let carName = "Volvo";
    // carName = "Saab"; noerror
//}
//----------------------------------------------------

//declaring and initializing a variable with const
    //const x=8,y=9,z=10
// const x=8;
//const y=x;
//const x
// console.log(x)//erreor bcoz no re declaration
//in objects no redclaration only the elements can be changed example
// const ar=[1,2,3,4]
// ar[0]=0// no error
// ar.push(5)//
// console.log(ar)//noerreor

// ar=[1,3,5,7]//error Assignment to constant variable.
// console.log(ar)
//---------------------------------------------------
// var ar=['a','b','c','d']
// ar.push('e')//pushes the data at rare end
// // ar.pop();//removes the data at rare end
// ar.shift();//removes the data at front end
// ar.unshift("h")//inserts the data at front end
// console.log(`array operation ${ar}`)
//Function declaration/satement
// function add(op1,op2){
//     let a=Number(op1)
//     let b=Number(op2)
//     let result=a+b
//     alert(`the addition of ${a} ,${b} is ${result}`)
//     console.log(a+b);
// }

// function arrFunc(ar){
//    console.log(ar)
//    var sum=0;
//     for (let i = 0; i < ar.length; i++) {
//          sum=sum+ Number(ar[i]);
//         }
//         console.log(sum)

// }

// var size=Number(prompt("enter the size of an array"))
// var ar=new Array(size)
// var userAr=prompt("enter the array elements seperated by comma")
// userAr=userAr.replace(" ","");
// var ar=userAr.split(',')
// arrFunc(ar.splice(0,size))
/*
//Function Expression
var whatDoYouDo=function(job,name){
    switch(job){
        case 'designer':
            return job+" "+name;
        case 'developer':
            return job+" "+name;
        case 'photographer':
            return job+" "+name;
    }
}
console.log(whatDoYouDo("DESIGNER".toLowerCase(),"Alice"))
 */

//literal approach of creating an object

/* var cricketer={
    fn:"aaa",
    ln:"bbbb",
    year:1971,
    30:"cricket",
    age:function(){
        return 2022-this.year
    }
}
//updating the value
cricketer.fn="ccc"
console.log(cricketer)
//deleting a property
delete cricketer[30]
console.log(cricketer.age()) */

//creating exp using Functional constructor
/* var cricketer=function(name,year,country){
    this.name=name
    this.year=year
    this.country=country
    this.age=function(){
        return new Date().getFullYear-this.year
    }

}

var sachin=new  cricketer("sachin",1970,"IND")
var virat=new  cricketer("virat",1988,"IND")
console.log(typeof(sachin.age))
//fetching key and value  from an object
for(let key in sachin){
    if(typeof(sachin[key])!=='function')
    console.log(`${key} : ${sachin[key]}`)
}
 */

//ARROW FUNCTION and forEach
/* var result=0;
var ar=[1,2,1,1,5]
var add=(ar)=>{
   ar.forEach(element => {
         result=result+element
   });
   return result
}
console.log(add(ar))*/

/* var ar=[10,20,35,40]
//filter()
var newAr=[];
newAr=ar.filter(ele=>ele%2==0)
console.log(newAr)
//map()
var newAr2=ar.map(ele=>ele*2)
console.log(newAr2)
//reduce()
var newAr3=ar.reduce((op1,op2)=>op1*op2)
console.log(newAr3) */

// console.log(Math.ceil(4.8))
// console.log(Math.floor(4.8))
/* function median(ar,size){
    if(size%2!=0){
        let a=Math.floor((ar.length)/2)
        console.log(`index is: ${a} value is: ${ar[a]}`)
    }else{
        let res=(ar[size/2]+ar[(size/2)-1])/2
        console.log(res)
    }
}

// var ar=[1,3,5,8,9,11,12]
var ar=[1,3,9,11,15,19]
median(ar,ar.length) */
/*
//callBack Function
function main(st,callback){
    console.log(st);
    callback()
}
function calling(){
    console.log("calling is called 1")

}
function calling(sh){
    console.log("calling is called 2")
}
function calling(sh,sh){
    console.log("calling is called 3")
}
 main("shyam",calling)// calls main and last calling fun
*/
/* function main(st, callback1,callback2){
    console.log("main");
    callback1(ar);
    callback2(ar);
}
function c1(ar){
    console.log("c1")
} function c2(ar){
    console.log("c2")
}
var ar=[1,2]
main("shyam",c2,c1) */
/* 
function main(function1,function2,function3){
    console.log("main fun")
    var a=function1(num)
    var b=function2(num)
    var c=function3(num)
    console.log(`the pos fun ${a}`)
    console.log(`the neg fun ${b}`)
    console.log(`the zer fun ${c}`)

}
function positiveNum(num){
    pos=num.filter(element => element>0)
    return pos

}
function NegativeNum(num){
    neg=num.filter(element => element<0)
    return neg

}
function Zeros(num){
    zer=num.filter(element => element===0)
    return zer

}
var size=Number(prompt("enter the size of an array"))
var num=new Array(size)
for(let i=0;i<size;i++){
    num[i]=Number(prompt("enter the Elements"))
}
var pos
var neg
var zer
console.log(num) */

/*
//prototype(Inheritance)
var Person=function(name,dob,job,city){
    this.name=name
    this.dob=dob
    this.job=job
    this.city=city
}
var shyam=new Person("shyam",1998,"SD","bang")
shyam.country="IND"  
console.log(shyam)
   console.log(Person.hasOwnProperty("name"))//true
   console.log(Person.hasOwnProperty("country"))//false
*/
/* 
//CLOSUER
var Employee=function(){
    var name="bob";
    var jobTitle;
    return{
        setName:function(value){
            name=value;
        },
        getName:function(){
            return name;
        }
    }
}();

Employee.setName("bob")
console.log(Employee.getName())//Alice
console.log(Employee)
 */

/* 
//call() bind()
var Alice={
    name:"Alice",
    dob:1998,
    job:"SD",
    from:function(country){
        console.log(`${this.name} is from ${country}`)
    }   
}
Alice.from("IND")
var Charlie={
    name:"Charlie",
    dob:1989,
    job:"FD"
}//call()
Alice.from.call(Charlie,"PAK")//executes a function
//bind()
var CharlieInfo=Alice.from.bind(Charlie,"USA")//bind returns a function 
CharlieInfo() */

//CALL BY VALUE AND CALL BY REFERENCE
// var z=9;
// var y=z;
// z=3
// console.log(y)

// var a={value:100}
// var b=a;
// a.value=1000;
// console.log(b.value)
/* 
//MAP
var map=new Map()
map.set("name","Alice")
map.set("married",true)
map.set("age",28)
console.log(map)
console.log(map.has("name"))//true
map.delete("married")
console.log(map)
// map.set("name","Bob")
// console.log(map)
var key1=map.keys()//for keys
var valuess=map.values()//for values
var entry=map.entries()//for key and value
for(let key of key1){
    console.log(key)
}
var sachin={
    name:"sachin",
    year:1987
}
var map1=new Map(Object.entries(sachin))//to convert object to Map
console.log(map1) */
/* 
//SET
var set= new Set()
set.add("dolu")
set.add("bolu")
set.add("raju")
console.log(set)
console.log(set.has("jhj"))//false
console.log(set.size)//3
set.delete("raju")//true
set.clear() */

//DESCTRUCTURING

// let[a,b,...rest]=[10,20,30,40,50]
// console.log(`a= ${a} b= ${b} restt= ${rest} `)

// let a, b;
// ({a, b} = {a: 1, b: 2});

/* //DOM
document.getElementById("op1").addEventListener("focus",function(){
    document.getElementById("op1").style.backgroundColor="blue"
    document.getElementById("op2").style.display="none"
})
document.getElementById("op1").addEventListener("blur",function(){
    document.getElementById("op2").style.display="block"
    document.getElementById("op1").style.backgroundColor="rgba(255, 255, 255, 0.5)"

})

//AJAX CALLS USING FETCH API
async function getData(){
    //GET
    const rest=await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const actRest= await rest.json()
    console.log(actRest)
    //POST
    const sendData=await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const res=await sendData.json()
    console.log(res)

    //PUT
    var putData=fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    var putRes=await (await putData).json()
    console.log(putRes)
    //DELETE
    const deleteDAta=await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        });
        console.log(deleteDAta.status)
}
getData(); */

async function getBooks(){
    // //get
    // var books=await fetch("http://localhost:3000/books")
    // var res= await books.json()
    // console.log(res)

    // console.log(res[0].id)
    //get by id
    // var book=await fetch(`http://localhost:3000/books/${res[0].id}`)
    // console.log(await book.json())
//post
    // var putBook=await fetch("http://localhost:3000/books",{
    //     method: 'POST',
    //     body: JSON.stringify({
    //       id: 3,
    //       name:"JAVA SCRIPT",
    //       publisher: "TADA",
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   })
    // console.log(putBook.status)

    //put
    //var upDate=fetch('http://localhost:3000/books/2', {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       id: 21,
    //       name: 'C plus plus',
    //       publisher: 'BLP',
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   })

    //delete
    var deleteById=await fetch('http://localhost:3000/books/2', {
        method: 'DELETE',
      });




    
}
getBooks();