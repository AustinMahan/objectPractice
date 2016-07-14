console.log("hello")

function isRamp(x){
  x = x.toString()
  for(i=1;i<x.length;i++){
    if(x.charAt(i) < x.charAt(i-1) ){
      return false
    }
  }
  return true
}



function d2Array(input){
  var output =[]
  for(i=0;i<input.length;i++){
    for(j=0;j<input[i].length;j++){
      output.unshift(input[i][j])
    }
  }
  return output
}

function secD2Array(input){
  var output = []
  for(var i =input.length-1; i>=0; i--){
    output = output.concat(input[i].reverse().splice(0))
  }
  return output
}

var d2=[[2,1], [5,6]]
console.log(d2[0]);
console.log(d2Array(d2));
console.log(secD2Array(d2));






///////////Homework

/////1
console.log('Question 1');
var people = {'Chuck': 22, 'Brian': 46, 'Isaac': 28, "Adam": 57}

function findOld(obj){
  var oldPerson =''
  var output = 0
  var array = Object.keys(obj)
  for(j=0;j<array.length;j++){
    if(people[array[j]] > output){
      output = people[array[j]]
      oldPerson = array[j]
    }
  }
return oldPerson
}

console.log(findOld(people));


//////2 and 3
console.log('Question 2');
function longestWord(string) {
  var array = string.replace(/\./gi , '').replace(/\,/gi, '').split(' ')
  var output2 = 0
  var bigString =''
  for(var i = 0; i<array.length; i++){
    if(array[i].length > output2){
      output2 = array[i].length
      bigString = array[i]
    }
  }
  return bigString
}

var thisIsString = "hello this is about to be thelongestworddd.................... here and if it isn't that's crazy"

console.log(longestWord(thisIsString));


///////4
console.log('Question 4');
function factorial(num){
  if(num > 1){
    return num * factorial(num-1)
  }else{
    return 1

  }
}
console.log(factorial(5));

function whileFactorial(num) {
  output = 1
  while(num>1){
    output = output * num
    num--
  }
  return output
}

console.log(whileFactorial(6));


function forFunction(num){
  var output = 1
  for(var i = 1;i<=num;i++){
    output = output * i
  }
  return output;
}

console.log(forFunction(5));

///////5
console.log('Question 5');

function palindrome(word){
  word = word.toLowerCase().replace(' ','')
  return word.split('').reverse().join('') === word
  // if(word.split('').reverse().join('') === word){
  //   return true;
  // }else{
  //   return false;
  // }
}






function duplication(str){
  str = str.split(' ')
  var string = str.join(' ')
  for(var i = 0;i<str.length; i++){
    if(string.indexOf(str[i])!= string.lastIndexOf(str[i])){
      var string = string.replace(str[i],'')
    }
  }
  return string
}

function stringPalindrome(str,duplitcate){
  palinfromWords =''
  var strArray = str.split(' ')
  for(var i = 0; i<strArray.length; i++){
    if(strArray[i].split('').reverse().join('') === strArray[i]){
      palinfromWords += strArray[i]+ ' '
    }
  }

  return duplitcate(palinfromWords)
}
console.log(palindrome('Noon'));
console.log(palindrome('hover'));
console.log(palindrome('stack cats'));
//
console.log('These are the palidrome words: ' + stringPalindrome('hello noon is noon palidrome and so is racecar',duplication));
