/* algorithm 
-if the the two input are numbers and max is larger then min then do somethinge

- you will take min and for loop from min to max and then put number in array 

- make a shuffle function that shuffle array then return an element
            -shuflle steps
            put array in for loop i = 0; i <= length;
            temp=arr[i]
            arr[i] = arr[rand];
            arr[rand] = temp 


*/
let input1 = document.querySelector(".d-flex input");
let input2 = document.querySelector(".input2");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result span");
function shuffleing(arr){
    let temp = 0;
    let rand;
    let achieved = 0
    for(let j =0; j < arr.length; j++){
         rand = Math.floor(Math.random() * arr.length);
         if(j == 2){
            achieved = rand;
         }
        temp = arr[j];
          arr[j] = arr[rand];
          arr[rand] = temp;  
    }
    return arr[achieved];
}
generatearandomnum();
function generatearandomnum(){
 
    
btn.onclick = function(){
    let value1 = parseInt(input1.value);
    let value2 = parseInt(input2.value);
    if( !isNaN(value2) && !isNaN(value1) && value2 >= value1){
            /////making array
            let arr = [];
            for(let i = value1; i <= value2; i++){
                arr.push(i);
            }
          let x = shuffleing(arr);
          result.textContent = x;
        
    }else{
      alert("please enter a number and that max is larger then min");
      input1.value = '';
      input2.value = '';
    }
}
}

