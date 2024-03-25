// ランダムに数字を入れる
var num = 15;

// numを出力
console.log(num)
// 3の倍数の場合
if ((num % 3) === 0){
  console.log('3の倍数です');
} else if ((num % 5) === 0){// 5の倍数の場合
  console.log('5の倍数です');
} else if ((num % 3 === 0) && (num % 5 === 0)){// 3と5の倍数の場合
  console.log('3と5の倍数です');
} else {// それ以外の場合
  console.log(num);
}
