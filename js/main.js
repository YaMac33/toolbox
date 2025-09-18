// main.js - 共通スクリプト

document.addEventListener("DOMContentLoaded", () => {
  console.log("Toolboxへようこそ！");

  // ナビゲーションリンクをクリックしたときの簡易エフェクト
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      alert(`「${link.textContent}」ページへ移動します。`);
    });
  });
});
