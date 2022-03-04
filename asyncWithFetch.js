async function getData(){
    const data=await fetch("http://localhost:3000/books/1")
    var res=await data.json()
    console.log(res.name)
}
getData()
module.exports=getData