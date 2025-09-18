// translator.js - 簡易翻訳スクリプト

document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const outputText = document.getElementById("outputText");
  const translateBtn = document.getElementById("translateBtn");
  const langFrom = document.getElementById("langFrom");
  const langTo = document.getElementById("langTo");

  // 簡易辞書データ（サンプル用）
  const dictionary = {
    "ja": {
      "こんにちは": "Hello",
      "ありがとう": "Thank you",
      "さようなら": "Goodbye",
      "犬": "Dog",
      "猫": "Cat"
    },
    "en": {
      "hello": "こんにちは",
      "thank you": "ありがとう",
      "goodbye": "さようなら",
      "dog": "犬",
      "cat": "猫"
    }
  };

  // 翻訳ボタン処理
  translateBtn.addEventListener("click", () => {
    const text = inputText.value.trim();
    const from = langFrom.value;
    const to = langTo.value;

    if (!text) {
      outputText.textContent = "テキストを入力してください。";
      return;
    }

    if (from === to) {
      outputText.textContent = text;
      return;
    }

    // サンプル翻訳処理（完全一致のみ）
    const key = text.toLowerCase();
    const result = dictionary[from]?.[key] || "（辞書に見つかりませんでした）";

    outputText.textContent = result;
  });
});
