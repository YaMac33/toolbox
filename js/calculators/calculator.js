// calculator.js

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
      const result = eval(currentInput); // evalは簡易的
      display.value = result;
      currentInput = result.toString();
    } catch (error) {
      display.value = "Error";
      currentInput = "";
    }
  });
});

// キーボード入力処理
document.addEventListener("keydown", (event) => {
  const key = event.key; // 押されたキー（例: "1", "+", "Enter" など）

  // 数字または小数点
  if (!isNaN(key) || key === ".") {
    pressButton(key);
  }

  // 四則演算子
  if (["+", "-", "*", "/"].includes(key)) {
    pressButton(key);
  }

  // Enter または = で計算実行
  if (key === "Enter" || key === "=") {
    document.getElementById("equals").click();
  }

  // Backspace で 1文字削除
  if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    document.getElementById("display").value = currentInput;
  }

  // Cキーでクリア
  if (key.toLowerCase() === "c") {
    document.getElementById("clear").click();
  }
});

// ボタン処理をまとめた関数
function pressButton(value) {
  const button = document.querySelector(`.btn[data-value="${value}"]`);
  if (button) button.click(); // クリックイベントを発火させる
}
