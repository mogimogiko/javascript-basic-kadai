// HTML要素を取得、定数に代入
const clickBtn = document.getElementById('btn');


// クリックしたら文字が変わる
clickBtn.addEventListener('click', () => {
  // テキストを定数に代入
  const text = document.getElementById('text');
  // クリックすると文字が変更される
  text.textContent = 'ボタンをクリックしました'
});