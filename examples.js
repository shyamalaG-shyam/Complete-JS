//Function to use ternary operator to check whether u can donate u blood or not
function check(age,weight){
    return (age>18 && weight>51)?"you can donate blood": "you cannot donate your blood";
}
console.log(check(18,50))

//Function to find sum of odd numbers
var array=[1,2,3,4]
function sumOfOdd(ar){
    let sum=0;
    for(let i=0;i<ar.length;i++){
        if(ar[i]%2==0){
            sum=sum+ar[i]
        }
    }
    return sum;
}
console.log(sumOfOdd(array))
module.exports=sumOfOdd

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
Cricketer.fn="cccc"
console.log(Cricketer.age())


//Function to create an Object using Functional Expression
var cricketers=function(name,year,country){
    this.name=name
    this.year=year
    this.country=country
    this.age=function(){
        return new Date().getFullYear-this.year
    }
    this.from=function(country){
        console.log(`${this.name} is from ${country}`)
    } 
}
//Function will create a object using new keyword
function cr(a,b,c){
    return new cricketers(a,b,c)
}
var sachin=cr("sachin",1970,"IND")

//fetching key and value  from an object
for(let key in sachin){
    if(typeof(sachin[key])!=='function')
    console.log(`${key} : ${sachin[key]}`)
}
//Arrow Function and ForEachar result=0;
var add=(ar)=>{
    let result=0;
    ar.forEach(element => {
        result=result+element
    });
    return result
}
var ar=[1,2,1,1,5]
console.log(`sum of an array: ${add(ar)}`)

//Function to Filter,map,reduce methods
var arMeth=[10,20,35,40]
var arrayMagic=(ar)=>{
    let newAr=[];
    newAr=ar.filter(ele=>ele%2==0)
    console.log(`filter: ${newAr}`)
    let newAr2=ar.map(ele=>ele*2)
    console.log(`map: ${newAr2}`)
    let newAr3=ar.reduce((op1,op2)=>op1*op2)
    console.log(`reduce: ${newAr3}`)

}
arrayMagic(arMeth)
//Function to find the median
function median(ar,size){
    if(size%2!=0){
        let a=Math.floor((ar.length)/2)
        console.log(`index is: ${a} value is: ${ar[a]}`)
    }else{
        let res=(ar[size/2]+ar[(size/2)-1])/2
        console.log("median is"+res)
    }
}
var ar=[1,3,9,11,15,19]
median(ar,ar.length) 

//callBack Function this function accepts a callback function 
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
var num=[0,-1,2,5,0,-1,-2,5]
main(positiveNum,NegativeNum,Zeros)

//prototype(Inheritance) creates a Person prototype which is inherited by shyam object
var Person=function(name,dob,job,city){
    this.name=name
    this.dob=dob
    this.job=job
    this.city=city
}
var shyam=new Person("shyam",1998,"SD","bang")
shyam.country="IND"  
console.log(shyam)
console.log(Person.hasOwnProperty("name"))
console.log(Person.hasOwnProperty("country"))


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
CharlieInfo();

//Function for call by value
var a=9;
function callByValue(a){
    a=a+1
}
console.log(a)
callByValue(a)
console.log(a)

//Function for call by reference
var data={
    value:100
}
function callByReference(data){
    data.value=data.value+1
}
console.log(data)
callByReference(data)
console.log(data)


//MAP
var map=new Map()
map.set("name","Alice")
map.set("married",true)
map.set("age",28)
iterateMap(map)
//function to iterate over a map
function iterateMap(map){
    let keys=map.keys()
    let valus=map.values()
    let entriess=map.entries()
    for(let key of keys){
        console.log(key)
    }
    for(let entry of entriess){
        console.log(entry)
    }
}


//SET(function to create a set)
function createSet(){
    var set= new Set()
    set.add("dolu")
    set.add("bolu")
    set.add("raju")
    return set;
}
console.log(createSet())

//DOM
document.getElementById("op1").addEventListener("focus",focusEvent)
document.getElementById("op1").addEventListener("blur",blurEvent)
function focusEvent(){
    document.getElementById("op1").style.backgroundColor="blue"
    document.getElementById("op2").style.display="none"
}
function blurEvent(){
    document.getElementById("op2").style.display="block"
    document.getElementById("op1").style.backgroundColor="rgba(255, 255, 255, 0.5)"
}

//Ajax Calls
var res;
//makes get request
async function getBooks(){
    // ----------get-------------
    var books=await fetch("http://localhost:3000/books")
    res= await books.json()
    console.log(res[0])
    for(let i=0;i<res.length;i++){
        var data = document.getElementsByTagName("table")[0] 
        var newRow = data.insertRow() 
        var cel1 = newRow.insertCell(0) 
        var cel2 = newRow.insertCell(1)
        var cel3 = newRow.insertCell(2)  
        var cel4 = newRow.insertCell(3)  
        cel1.innerHTML=res[i].id
        cel2.innerHTML=res[i].name
        cel3.innerHTML=res[i].publisher
        cel4.innerHTML=`<a id="edit" href="#" onclick="edit(${res[i].id})">Edit</a> &nbsp <a id="delete" href="#" onclick="deleteId(${res[i].id})">Delete</a>`
    }
    console.log(res[0].id)
    // get by id
    var book=await fetch(`http://localhost:3000/books/${res[0].id}`)
    console.log(await book.json()) 
}
getBooks();

//makes put request
async function edit(res){
    //put
    var ans=prompt("Enter the values for name, publisher in comma seperated ")
    ans=ans.split(",")

 var upDate=fetch(`http://localhost:3000/books/${res}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: res,
      name: ans[0],
      publisher: ans[1],
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }) 
}
//makes delete request
async function deleteId(res){
    // delete
    var deleteById=await fetch(`http://localhost:3000/books/${res}`, {
        method: 'DELETE',
      });   
        
}
document.getElementById("add").addEventListener('click',function(){
    document.getElementById("forms").style.visibility="visible"
})

//Makes post request
async function addBook(n,pub){
    //post
    var putBook=await fetch("http://localhost:3000/books",{
        method: 'POST',
        body: JSON.stringify({
          id: res.length+1,
          name:n,
          publisher: pub,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
}

