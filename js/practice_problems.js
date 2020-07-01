// coding_interview_practice/js/practice_problems.js
// @chrisgerbino
// Jun 29, 2020

//---------------------------------------------------------------------------
//                                  Problem 1
//---------------------------------------------------------------------------
//Given a postitive integer n written as abcd.. (a,b,c,d... being digits) and 
//a positive integer p,
//We want to find a positive integer k, if it exists, such as the sum of the 
//digits of  n taken to the successive powers of p is equal to k * n
//(eg. "695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2")

// Original solution
function digPow(n, p){
  numArr = (""+n).split("");
  let temp = 0;
  numArr.forEach(function(x){temp += Math.pow(x, p); p++;});
  
  if(temp % n == 0){
    return temp / n;
  }else{
    return -1;
  }
}

digPow(89, 1); // should return 1
digPow(92, 1); // should return -1
digPow(46288, 3); // should return 51


// Better solution
function digPow2(n, p){
    //either of the assignment statements below will work
    //let x = String(n).split("").reduce((s,d,i) => s + Math.pow(d, p + i), 0);
    let x = Array.prototype.reduce.call(String(n), (s, d, i) => s + Math.pow(d, p + i), 0);
    return x % n ? -1 : x / n;
}
//Why is this better?
