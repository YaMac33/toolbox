// calculator.js - 電卓スクリプト

document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  const clearBtn = document.getElementById("clear");
  const equalsBtn = document.getElementById("equals");

  let currentInput = "";

  // ボタン入力処理
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
      if (value) {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });

  // クリア処理
  clearBtn.addEventListener("click", () => {
    currentInput = "";
    display.value = "";
  });

  // 計算処理
  equalsBtn.addEventListener("click", () => {
    try {
      const result = eval(currentInput); // evalは簡易実装用
      display.value = result;
      currentInput = result.toString();
    } catch (error) {
      display.value = "Error";
      currentInput = "";
    }
  });
});
