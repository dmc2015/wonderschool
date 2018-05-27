export default function structureObjs(arr) {
  //modify the data structure to json
  var rv = {};
  var array = []
  for (var i = 0; i < arr.length; ++i){
    rv[arr[i][0]] = arr[i][1];
    array.push(rv);
  }
  return array;
}
