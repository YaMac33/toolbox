// counter.js - 文字数カウントスクリプト

document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const charCount = document.getElementById("charCount");
  const wordCount = document.getElementById("wordCount");

  const updateCounts = () => {
    const text = inputText.value;

    // 文字数カウント（改行含む）
    charCount.textContent = text.length;

    // 単語数カウント（スペース区切り）
    const words = text.trim().split(/\s+/).filter(Boolean);
    wordCount.textContent = text.trim() ? words.length : 0;
  };

  // 入力ごとに更新
  inputText.addEventListener("input", updateCounts);
});
