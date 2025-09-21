// js/text/random-text.js

const textLengthInput = document.getElementById("textLength");
const includeLetters = document.getElementById("includeLetters");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const includeKana = document.getElementById("includeKana");
const randomTextOutput = document.getElementById("randomTextOutput");
const generateTextBtn = document.getElementById("generateTextBtn");
const copyTextBtn = document.getElementById("copyTextBtn");

// 文字セット
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>?";
const KANA = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

function generateRandomText() {
  let chars = "";
  if (includeLetters.checked) chars += LETTERS;
  if (includeNumbers.checked) chars += NUMBERS;
  if (includeSymbols.checked) chars += SYMBOLS;
  if (includeKana.checked) chars += KANA;

  const length = parseInt(textLengthInput.value, 10);

  if (chars.length === 0) {
    alert("少なくとも1つの文字種を選択してください。");
    return "";
  }

  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}

// 生成ボタン
generateTextBtn.addEventListener("click", () => {
  const text = generateRandomText();
  randomTextOutput.value = text;
});

// コピー機能
copyTextBtn.addEventListener("click", () => {
  if (randomTextOutput.value) {
    navigator.clipboard.writeText(randomTextOutput.value)
      .then(() => alert("コピーしました！"))
      .catch(() => alert("コピーに失敗しました"));
  } else {
    alert("まずテキストを生成してください。");
  }
});