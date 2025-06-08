//Foreach
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
  return undefined;
}
//map
function myMap(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
        
    }
    return newArr;
}
//filter
function myFilter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//some
function mySome(arr,callback){
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) return true;        
    }
    return false;
}
//every
function myEvery(arr,callback) {
    for (let i = 0; i < arr.length; i++) {
        if(!callback(arr[i])) return false;
    }
    return true
}
//indexOf
function myIndexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
