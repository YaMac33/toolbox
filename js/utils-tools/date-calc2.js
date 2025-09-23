// ================================
// date-calc.js : 日付計算ツール
// ================================

// validators.js から isNotEmpty 関数をインポート
import { isNotEmpty } from "../validators.js";

/**
 * 指定日付から日数を加算・減算した日付を返す
 * @param {string} startDate - YYYY-MM-DD形式の開始日
 * @param {string} finishDate - YYYY-MM-DD形式の終了日
 * @returns {string} 計算結果の日付 (YYYY-MM-DD)
 */
export function calculateDate(period, days) {
  // startDate が空の場合は空文字を返して処理終了
  if (!isNotEmpty(startDate)) return "";

　// finishDate が空の場合は空文字を返して処理終了
  if (!isNotEmpty(finishDate)) return "";

  // startDate を Date オブジェクトに変換
  const start = new Date(startDate);

　// finishDate を Date オブジェクトに変換
  const finish = new Date(finishDate);

  // 開始日が無効な日付の場合は空文字を返して処理終了
  if (isNaN(start.getTime())) return "";

  // 終了日が無効な日付の場合は空文字を返して処理終了
  if (isNaN(finish.getTime())) return "";

  // 開始日から終了日までの期間を計算
  period.setDate(finish.getDate() - start.getDate());

  // 計算結果の日付を取得
  // 年を取得
  const yyyy = period.getFullYear();

  // 月を取得（0〜11なので +1）、2桁にゼロ埋め
  const mm = String(period.getMonth() + 1).padStart(2, "0");

  // 日を取得、2桁にゼロ埋め
  const dd = String(period.getDate()).padStart(2, "0");

  // YYYY-MM-DD 形式で返す
  return `${yyyy}-${mm}-${dd}`;
}

// DOM処理
document.addEventListener("DOMContentLoaded", () => {
  // IDが startDate の入力要素を取得（開始日を入力するフィールド）
  const startInput = document.getElementById("startDate");

  // IDが finishDate の入力要素を取得（終了日を入力するフィールド）
  const finishInput = document.getElementById("finishDate");

  // IDが resultDate の入力要素を取得（計算結果を表示するフィールド）
  const resultInput = document.getElementById("resultDate");

  // IDが calcBtn のボタン要素を取得（計算実行ボタン）
  const btn = document.getElementById("calcBtn");

  // デフォルトで今日の日付を入力欄にセットする処理
  const today = new Date();  // 今日の日付を取得
  startInput.value = today.toISOString().slice(0, 10); // YYYY-MM-DD形式に整形してセット

  // ボタンがクリックされたときの処理を登録
  btn.addEventListener("click", () => {
    const startDate = startInput.value;  // 入力された基準日を取得
    const days = parseInt(daysInput.value, 10);  // 入力された日数を整数として取得

    // 日数が数値でなければエラーメッセージを表示して処理終了
    if (isNaN(days)) {
      resultInput.value = "日数を入力してください";
      return;
    }

    // calculateDate関数で日付計算を実行
    const result = calculateDate(period, days);

    // 計算結果が有効なら表示、無効ならエラーメッセージを表示
    resultInput.value = result || "入力が不正です";
  });
});
