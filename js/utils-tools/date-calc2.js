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
  // IDが baseDate の入力要素を取得（基準日を入力するフィールド）
  const baseInput = document.getElementById("baseDate"); 

  // IDが days の入力要素を取得（日数を入力するフィールド）
  const daysInput = document.getElementById("days");

  // IDが resultDate の入力要素を取得（計算結果を表示するフィールド）
  const resultInput = document.getElementById("resultDate");

  // IDが calcBtn のボタン要素を取得（計算実行ボタン）
  const btn = document.getElementById("calcBtn");

  // デフォルトで今日の日付を入力欄にセットする処理
  const today = new Date();  // 今日の日付を取得
  baseInput.value = today.toISOString().slice(0, 10); // YYYY-MM-DD形式に整形してセット

  // ボタンがクリックされたときの処理を登録
  btn.addEventListener("click", () => {
    const baseDate = baseInput.value;  // 入力された基準日を取得
    const days = parseInt(daysInput.value, 10);  // 入力された日数を整数として取得

    // 日数が数値でなければエラーメッセージを表示して処理終了
    if (isNaN(days)) {
      resultInput.value = "日数を入力してください";
      return;
    }

    // calculateDate関数で日付計算を実行
    const result = calculateDate(baseDate, days);

    // 計算結果が有効なら表示、無効ならエラーメッセージを表示
    resultInput.value = result || "入力が不正です";
  });
});
