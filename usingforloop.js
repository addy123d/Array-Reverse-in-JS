var arr = new Array();
arr = [1,2,3,4,5,6,7,8,9,10];
var counter = arr.length-1;
var newArray = [];
for(counter;counter>=0;counter--){
    if(counter>=0)
    newArray[(arr.length-1)-counter] = arr[counter];
    else
    break;
}

console.log(newArray);