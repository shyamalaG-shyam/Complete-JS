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
 module.exports=whatDoYouDo