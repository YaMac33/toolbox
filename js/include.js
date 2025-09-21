// js/include.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Toolboxへようこそ！");

  // ナビゲーションリンクをクリックしたときの簡易エフェクト
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      alert(`「${link.textContent}」ページへ移動します。`);
    });
  });

  /**
   * 現在の階層に応じて header.html / footer.html のパスを計算
   * - /index.html         → ./header.html
   * - /tools/bmi.html     → ../header.html
   * - /tools/calculator/advanced.html → ../../header.html
   */
  function getBasePath() {
    // 現在のパスを取得（例: /tools/calculator/advanced.html）
    const path = window.location.pathname;
    // HTML ファイルのある階層部分だけを抽出
    const segments = path.split("/").filter(seg => seg.length > 0);
    // ルートからの階層数（ファイル名を除く）
    const depth = segments.length > 1 ? segments.length - 1 : 0;
    // "../" を階層数分連結
    return "../".repeat(depth);
  }

  const basePath = getBasePath();

  // ヘッダー読み込み
  fetch(basePath + "header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(err => console.error("ヘッダー読み込みエラー:", err));

  // フッター読み込み
  fetch(basePath + "footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("フッター読み込みエラー:", err));
});