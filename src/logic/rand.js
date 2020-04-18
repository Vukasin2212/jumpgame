const arr=["crveno","zuto","zeleno","plavo"];
get_random = function (list) {
  const arrayComb=[]
  for(var i=0;i<4;i++){
  const combination= list[Math.floor((Math.random()*list.length))];

  	arrayComb.push(combination)
  }
  return arrayComb
} 

console.log(get_random(arr))