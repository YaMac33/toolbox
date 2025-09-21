// js/utils-tools/password-generator.js

const lengthInput = document.getElementById("length");
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const passwordOutput = document.getElementById("passwordOutput");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

// 文字セット
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() {
  let chars = "";
  if (includeUppercase.checked) chars += UPPERCASE;
  if (includeLowercase.checked) chars += LOWERCASE;
  if (includeNumbers.checked) chars += NUMBERS;
  if (includeSymbols.checked) chars += SYMBOLS;

  const length = parseInt(lengthInput.value, 10);

  if (chars.length === 0) {
    alert("少なくとも1つの文字種を選択してください。");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

// 生成ボタン
generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  passwordOutput.value = password;
});

// コピー機能
copyBtn.addEventListener("click", () => {
  if (passwordOutput.value) {
    navigator.clipboard.writeText(passwordOutput.value)
      .then(() => alert("コピーしました！"))
      .catch(() => alert("コピーに失敗しました"));
  } else {
    alert("まずパスワードを生成してください。");
  }
});