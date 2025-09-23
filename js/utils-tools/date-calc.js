// ================================
// date-calc.js : 日付計算ツール
// ================================

// validators.js から isNotEmpty 関数をインポート
import { isNotEmpty } from "../validators.js";

/**
 * 指定日付から日数を加算・減算した日付を返す
 * @param {string} baseDate - YYYY-MM-DD形式の基準日
 * @param {number} days - 加算または減算する日数
 * @returns {string} 計算結果の日付 (YYYY-MM-DD)
 */
export function calculateDate(baseDate, days) {
  // baseDate が空の場合は空文字を返して処理終了
  if (!isNotEmpty(baseDate)) return "";

  // baseDate を Date オブジェクトに変換
  const base = new Date(baseDate);

  // 無効な日付の場合は空文字を返して処理終了
  if (isNaN(base.getTime())) return "";

  // 指定された日数を加算/減算
  base.setDate(base.getDate() + days);

  // 年を取得
  const yyyy = base.getFullYear();

  // 月を取得（0〜11なので +1）、2桁にゼロ埋め
  const mm = String(base.getMonth() + 1).padStart(2, "0");

  // 日を取得、2桁にゼロ埋め
  const dd = String(base.getDate()).padStart(2, "0");

  // YYYY-MM-DD 形式で返す
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
