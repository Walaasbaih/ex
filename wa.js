// Ex 1  By Walaa Sbaih 
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}
//2
function values(obj) {
    var arr =[];
    each(obj,function(item,key){
           arr.push(item)
     })
    return arr;
 }