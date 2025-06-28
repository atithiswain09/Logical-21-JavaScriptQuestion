// ask: Write a program to check if you and a friend can have an equal number of cookies from a given total number of cookies.

// Input: cookies (an integer representing the total number of cookies)

// Output: "Yes" or "No"

// Example:

// Input: cookies = 10

// Output: "Yes"

// Input: cookies = 7

// Output: "No"

// Check Multiple Numbers:






let arr=[12,22,39,4];
let Result=[];


for(let i=0;i<arr.length;i++){
   if([i]%2===0){
    Result.push("Even"+" "+arr[i]+"  at index"+i);
   }else{
    Result.push("ODD"+" "+arr[i]+" at index"+i);
   }

}
console.log(Result);
