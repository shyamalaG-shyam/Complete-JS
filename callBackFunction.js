function mains(n,callBack){
    callBack(n)
}
function posNo(x){
    console.log("yes")
    return `yes +${x.filter(element => element>0)}`
     
}
ar=[1,2,-2,3,0,-5,-3]
mains(ar,posNo);
module.exports=mains
