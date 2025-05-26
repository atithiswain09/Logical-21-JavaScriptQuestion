// Task: Write a program to check if you and a friend can have an equal number of cookies from a given total number of cookies.

// Input: cookies (an integer representing the total number of cookies)

// Output: "Yes" or "No"

// Example:

// Input: cookies = 10

// Output: "Yes"

// Input: cookies = 7

// Output: "No"

let Friend=prompt("Enter Your Number:");
let Me=prompt("Enter Your Number:");
if(Friend<Me){
    alert("Not");
}else if(Friend>Me){
    alert("Yes");

}
else{
    alert("Equal");
}
