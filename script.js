


//Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?


function findPairsWithSum(arr, targetSum) {
    const result = [];
  
    // Create an empty object to store visited numbers
    const visitedNumbers = {};
  
    for (let i = 0; i < arr.length; i++) {
      const currentNumber = arr[i];
      const complement = targetSum - currentNumber;
  
      // Check if the complement exists in the visited numbers
      if (visitedNumbers[complement]) {
        // If it exists, push the pair to the result array
        result.push([currentNumber, complement]);
      }
  
      // Mark the current number as visited
      visitedNumbers[currentNumber] = true;
    }
  
    return result;
  }
  
  const arr = [3, 4, 5, 6, 7];
  const targetSum = 10;
  const pairs = findPairsWithSum(arr, targetSum);
  
  console.log("Pairs with sum", targetSum, ":", pairs);
  


 //Q2 Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array

 function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Swap elements at the left and right positions
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
  
      // Move the pointers towards the center
      left++;
      right--;
    }
  }
  
  const myArray = [1, 2, 3, 4, 5];
  reverseArrayInPlace(myArray);
  console.log(myArray); // Output: [5, 4, 3

 //Q3 Write a program to check if two strings are a rotation of each other?

 const inp1='hello',inp2='olleh'
if(inp1.length==inp2.length){
    let i
    for(i=0;i<inp1.length;i++){
        if(inp1[i]!=inp2[inp2.length-1-i]){
            console.log('given two strings are a " NOT "  rotation of each other');
            break
        }
    }
    if(i==inp2.length){
        console.log('given two strings are THE rotation of each other');
    }
}
else{
    console.log('given two strings are a " NOT "  rotation of each other');
}






//Q4  Write a program to print the first non-repeated character from a string?

const input='he345la12oa4876flsloffgwmzcam'
for(let i of input){
    if(input.indexOf(i)==input.lastIndexOf(i)){
        console.log('\t"',i,'"is the first non-repeated character in "',input,'" string');
        break
    }
}


//Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
const no=4  // Enter No.of disc's
const Hanoi=(n,S,D,A)=>{        // number of disc's , Sourse Pole , Destination Pole  , Auxilary Pole
    if(n!=0){
        Hanoi(n-1,S,A,D)
        console.log('\t',n+'st disc       ',S,' --> ',D)
        Hanoi(n-1,A,D,S)
    }
}
Hanoi(no,'Sourse Pole','Destination Pole','Auxilary Pole')


  //Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

const isOperator=x=>('+-/*'.includes(x))?true:false;
function postToPre(post_exp){
    let s=[],length=post_exp.length
    for(let i=0;i<length;i++){
        if(isOperator(post_exp[i])){
            let op1=s[s.length-1];
            s.pop();
            let op2=s[s.length-1]
            s.pop()
            let temp=post_exp[i]+op2+op1;
            s.push(temp);
        }
        else{
            s.push(post_exp[i]+'')
        }
    }
    let ans='';
    while(s.length>0){
        ans+=s.pop();
    }
    return ans;
}
let post_exp='234/-26/7-*'

console.log('prefix: '+postToPre(post_exp));



 //Q7. Write a program to convert prefix expression to infix expression.
const isOperator2=x=>('+-/*'.includes(x))?true:false;
const convert=str=>{
    let stack=[],l=str.length
    for(let i=l-1;i>=0;i--){
        let c=str[i];
        if(isOperator2(c)){
            let op1=stack[stack.length-1]
            stack.pop()
            let op2=stack[stack.length-1];
            stack.pop();
            let temp='('+op1+c+op2+')';
            stack.push(temp);
        }
        else{
            stack.push(c+'');
        }
    }
    return stack[stack.length-1];
}
let exp='*-3/45-/345';
console.log('infix : '+convert(exp));




//Q8. Write a program to check if all the brackets are closed in a given code snippet.
const checkPair=(a,b)=>{
  if(b==')'){
      return (a=='(')?true:false
  }
  if(b=='}'){
      return (a=='{')?true:false
  }
  if(b==']'){
      return (a=='[')?true:false
  }
}
const checkBrackets=str=>{
  let store=[];
  for(let i of str.split('')){
      // console.clear()
      console.log(' i ->',i);
      if('({['.includes(i)){
          store.push(i)
      }
      else{
          if(')}]'.includes(i)){
              if(store.length==0){
                  console.log('Not Balanced');return;
              }
              if(checkPair(store[store.length-1],i)){
                  store.pop();
              }
              else{
                  console.log('\nNot Balanced');return;
              }
          }
      }
      console.log(' store -> ',...store);
  }
  if(store.length==0){
      console.log('Balenced');
  }else{
      console.log('NOT Balanced');
  }
}
checkBrackets('{()}[([])]')
//Q9. Write a program to reverse a stack.
class stack{
  constructor(){
      this.store=[]
  }
  push=value=>this.store.unshift(value)
  show=()=>this.store
}
const reverseString=str=>{
  let a=new stack()
  for(let i of str.split('')){
      a.push(i)
  }
  console.log(a.show().join(''));
}
reverseString('12345')


//Q10. Write a program to find the smallest number using a stack.
class stack2{
  constructor(){
      this.store=[]
  }
  push=(value)=>this.store.push(value)
  min=()=>Math.min(...this.store)
}
const minInArray=arr=>{
  let a=new stack2()
  for(let i of arr){
      a.push(i)
  }
  console.log(a.min());
}

minInArray([1,2,3,4,-5,8,-7,5,-4,3,2])