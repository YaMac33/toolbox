// js/include.js
document.addEventListener("DOMContentLoaded", () => {
  const basePath = location.pathname.includes("/tools/") ? "../" : "./";

  // ヘッダー読み込み
  fetch(basePath + "header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });

  // フッター読み込み
  fetch(basePath + "footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});
