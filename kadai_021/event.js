// idを定数に代入
const clickBtn = document.getElementById('btn');
const text = document.getElementById('text');

// クリックして2秒後に文字変更
clickBtn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました'
  }, 2000);
})