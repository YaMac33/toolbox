// calculator.js - 電卓スクリプト

document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");
  const clearBtn = document.getElementById("clear");
  const equalsBtn = document.getElementById("equals");

  // ボタン入力処理
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
      if (value) {
        display.value += value;
      }
    });
  });

  // クリア処理
  clearBtn.addEventListener("click", () => {
    display.value = "";
  });

  // 計算処理
  equalsBtn.addEventListener("click", () => {
    calculate();
  });

  // キーボード入力処理
  display.addEventListener("keydown", (event) => {
    const key = event.key;

    // Enter または = で計算実行
    if (key === "Enter" || key === "=") {
      event.preventDefault(); // 改行や=の文字入力を防ぐ
      calculate();
    }

    // Cキーでクリア
    if (key.toLowerCase() === "c") {
      event.preventDefault();
      display.value = "";
    }

    // それ以外の数字・演算子・Backspace などは input に任せる
  });

  // 計算処理関数
  function calculate() {
    try {
      const result = eval(display.value); // evalは簡易用
      display.value = result;
    } catch (error) {
      display.value = "Error";
    }
  }
});
