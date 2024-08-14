const add = (str:String):Number => {
  // Empty string  case 
  if (str === "") {
    return 0;
  }
  
  // Conver string into array by commas,new line,semicolon,double line separator
  const strArr = str.split(/[\n,;//]/);
  
  let sumStr = 0;
  let negativeArr = [];
        
  // Iterate for loop to calculate sum
  for (const value of strArr) {
      if (value.trim() !== '') {
        const num = parseInt(value.trim(), 10);
        if (num < 0) {
          negativeArr.push(num);
        }
        sumStr += num;
      }
  }
  
  // Check negative number is present or not.
  if (negativeArr.length > 0) {
    let negativeList = negativeArr.join(",");
    throw new Error(`Negative numbers not allowed: ${negativeList}`);
  }
  return sumStr;
}

console.log(add("")); //0
console.log(add("1")); //1
console.log(add("1,5"));//6
console.log(add("1\n2,3")); //6
console.log(add("//;\n1;2"));//3
console.log(add("-1,-3,5")); // Negative numbers not allowed: -1,-3