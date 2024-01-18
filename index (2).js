     //TASK 1

function swap(obj){
  let newObj = {}
  for(let key in obj){
    newObj[obj[key]] = key   
  }
  return newObj
}
const obj = { a: '1', b: '2', c: '2' }
console.log(swap(obj))


    //TASK 2

function shallowCompare(obj1,obj2){
  for(let key in obj1){
    if(obj1[key]!==obj2[key]){
      return false
    }
  }
  return true
}
const obj1 = {a:1,b:3}
const obj2 = {a:1,b:2}
console.log(shallowCompare(obj1,obj2))

    //TASK 3

function isPalindrome(str){
  const lgth = str.length
  for(let i = 0; i < lgth/2; i++){
    if(str[i] !== str[lgth-1-i]){
      return false
    }
  }
  return true
}
console.log(isPalindrome('12321'))

      //TASK 5
function exsistsInArr(arr,element){
  for(let i = 0; i<arr.length;i++){
    if(arr[i]===element){
      return true
    }
  }
  return false
}
console.log(exsistsInArr([1,2,3,5,8,9,11],7))



      //TASK 4


const arr = [2,5,4,1,7]
let max = 0
let min = Infinity
for(let i = 0; i < arr.length; i++){
  if(arr[i]>max){
   max = arr[i]
  }
  if(arr[i]<min){
    min = arr[i]
  }
}
const missingNumbersCount = ((max - min)+1)-arr.length
console.log(missingNumbersCount)