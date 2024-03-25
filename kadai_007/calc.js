// ランダムに数字を入れる
var num = 2;

// numを出力
console.log(num)
// 3の倍数の場合
if ((num % 3) === 0){
  console.log('3の倍数です');
}
// 5の倍数の場合
if ((num % 5) === 0){
  console.log('5の倍数です');
}
// 3と5の倍数の場合
if ((num % 3 === 0) && (num % 5 === 0)){
  console.log('3と5の倍数です');
}
// それ以外の場合
else {
  console.log(num);
}
