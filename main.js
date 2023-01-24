function reverseWords(str){
  //create empty array
  let result = [];
  
  //split string into array
  let strArr = str.split(' ');
  
  //iterate backwards through str-array and push values into result array
  for(let i = 0; i < strArr.length ; i++){
    result.unshift(strArr[i])
  }
  
  //return result, after joining
  return result.join(' ')
}


//easier, use the reverse method
/*
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}
*/
