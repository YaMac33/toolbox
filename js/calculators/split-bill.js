// ================================
// split-bill.js : 割り勘計算スクリプト
// ================================

import { isPositive, isInteger } from "../validators.js";

/**
 * 割り勘金額を計算する
 * @param {number} totalAmount 合計金額
 * @param {number} people 人数
 * @returns {object|null} { perPerson, remainder } or null
 */
export function calculateSplit(totalAmount, people) {
  if (!isPositive(totalAmount) || !isInteger(people) || people <= 0) {
    return null;
  }
  const perPerson = Math.floor(totalAmount / people);
  const remainder = totalAmount % people;
  return { perPerson, remainder };
}

// DOM操作部分（ツールページに埋め込む想定）
document.addEventListener("DOMContentLoaded", () => {
  const totalInput = document.getElementById("totalAmount");
  const peopleInput = document.getElementById("people");
  const resultBox = document.getElementById("splitResult");

  document.getElementById("splitCalcBtn").addEventListener("click", () => {
    const total = parseInt(totalInput.value, 10);
    const people = parseInt(peopleInput.value, 10);
    const result = calculateSplit(total, people);

    if (!result) {
      resultBox.textContent = "入力値が正しくありません";
      return;
    }

    let msg = `1人あたり: ${result.perPerson}円`;
    if (result.remainder > 0) {
      msg += `（余り: ${result.remainder}円）`;
    }
    resultBox.textContent = msg;
  });
});
