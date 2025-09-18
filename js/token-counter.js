// token-counter.js - 簡易トークン数カウントスクリプト

document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const tokenCount = document.getElementById("tokenCount");

  const estimateTokens = (text) => {
    // 正規表現で単語や記号を分割
    const tokens = text.trim().split(/[\s、。,.!?；;:"'(){}[\]]+/).filter(Boolean);
    return tokens.length;
  };

  const updateCount = () => {
    const text = inputText.value;
    tokenCount.textContent = estimateTokens(text);
  };

  inputText.addEventListener("input", updateCount);
});
