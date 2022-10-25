const array =  [2, 4, 6, 8, 10];
var left = 0;
var right = array.length-1;
while(left <= right){

    if(left < right){
        console.log(str(array[right])+ " " +str(array[left]),end=" ");
    }
    else{
        console.log(array[left])
    }
    
    left+=1;
    right-=1;
}
