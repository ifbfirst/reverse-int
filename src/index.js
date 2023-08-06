module.exports = function reverse (n) {
  let i = 0;
  let nAbs = Math.abs(n);
   let nStr = String(nAbs);
  let result = '';
while (i < nStr.length){
 result = `${nStr[i]}${result}`;
 i = i+1;
}
return Number(result);
}
