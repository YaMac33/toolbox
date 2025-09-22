// calculator.js - キーボード専用電卓

document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  let justCalculated = false; // 計算直後かどうか

  // キーボード入力処理
  display.addEventListener("keydown", (event) => {
    const key = event.key;

    // Enter または = で計算
    if (key === "Enter" || key === "=") {
      event.preventDefault();
      calculate();
    }

    // Cキーでクリア
    if (key.toLowerCase() === "c") {
      event.preventDefault();
      display.value = "";
      justCalculated = false;
    }

    // 計算直後に数字を押したら新しい式に置き換える
    if (justCalculated) {
      if (!isNaN(key) || key === ".") {
        display.value = key;
        justCalculated = false;
        event.preventDefault();
      } else if (["+", "-", "*", "/"].includes(key)) {
        display.value += key;
        justCalculated = false;
        event.preventDefault();
      }
    }
  });

  // 計算処理関数
  function calculate() {
    try {
      const result = eval(display.value); // evalは簡易実装用
      display.value = result;
      justCalculated = true;
    } catch (error) {
      display.value = "Error";
      justCalculated = false;
    }
  }
});
