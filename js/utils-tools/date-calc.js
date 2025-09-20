// ================================
// date-calc.js : 日付計算ツール
// ================================

import { isNotEmpty } from "../validators.js";

/**
 * 指定日付から日数を加算・減算した日付を返す
 * @param {string} baseDate - YYYY-MM-DD形式
 * @param {number} days - 加算/減算する日数
 * @returns {string} 計算結果の日付 (YYYY-MM-DD)
 */
export function calculateDate(baseDate, days) {
  if (!isNotEmpty(baseDate)) return "";

  const base = new Date(baseDate);
  if (isNaN(base.getTime())) return "";

  base.setDate(base.getDate() + days);
  const yyyy = base.getFullYear();
  const mm = String(base.getMonth() + 1).padStart(2, "0");
  const dd = String(base.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}

// DOM処理
document.addEventListener("DOMContentLoaded", () => {
  const baseInput = document.getElementById("baseDate");
  const daysInput = document.getElementById("days");
  const resultInput = document.getElementById("resultDate");
  const btn = document.getElementById("calcBtn");

  // デフォルトで今日の日付を入力欄にセット
  const today = new Date();
  baseInput.value = today.toISOString().slice(0, 10);

  btn.addEventListener("click", () => {
    const baseDate = baseInput.value;
    const days = parseInt(daysInput.value, 10);

    if (isNaN(days)) {
      resultInput.value = "日数を入力してください";
      return;
    }

    const result = calculateDate(baseDate, days);
    resultInput.value = result || "入力が不正です";
  });
});