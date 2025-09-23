// ================================
// date-calc.js : 日付計算ツール
// ================================

// validators.js から isNotEmpty 関数をインポート
import { isNotEmpty } from "../validators.js";

/**
 * 開始日と終了日から期間（日数）を計算して返す
 * @param {string} startDate - YYYY-MM-DD形式の開始日
 * @param {string} finishDate - YYYY-MM-DD形式の終了日
 * @returns {number|string} 期間（日数）または空文字（エラー時）
 */
export function calculatePeriod(startDate, finishDate) {
  // startDate が空の場合は空文字を返して処理終了
  if (!isNotEmpty(startDate)) return "";

  // finishDate が空の場合は空文字を返して処理終了
  if (!isNotEmpty(finishDate)) return "";

  // startDate を Date オブジェクトに変換
  const start = new Date(startDate);

  // 開始日が無効な日付の場合は空文字を返して処理終了
  if (isNaN(start.getTime())) return "";

  // finishDate を Date オブジェクトに変換
  const finish = new Date(finishDate);

  // 終了日が無効な日付の場合は空文字を返して処理終了
  if (isNaN(finish.getTime())) return "";

  // 開始日から終了日までの差をミリ秒単位で計算
  const diffInMilliseconds = finish - start;

  // ミリ秒を日数に変換（1日=1000ms*60s*60m*24h）
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  // 日数を返す（整数値として返す場合は Math.floor などを利用可能）
  return diffInDays;
}

// ================================
// DOM操作: 入力フォームとボタン処理
// ================================
document.addEventListener("DOMContentLoaded", () => {
  // IDが startDate の入力要素を取得（開始日を入力するフィールド）
  const startInput = document.getElementById("startDate");

  // IDが finishDate の入力要素を取得（終了日を入力するフィールド）
  const finishInput = document.getElementById("finishDate");

  // IDが resultDate の入力要素を取得（計算結果を表示するフィールド）
  const resultInput = document.getElementById("resultDate");

  // IDが calcBtn のボタン要素を取得（計算実行ボタン）
  const btn = document.getElementById("calcBtn");

  // デフォルトで今日の日付を開始日・終了日にセットする処理
  const today = new Date(); 
  // 日本のタイムゾーンで日付の各要素（年、月、日）を取得
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 月は0から始まるため+1し、2桁に整形
  const day = today.getDate().toString().padStart(2, '0'); // 日を2桁に整形

  // YYYY-MM-DD形式の文字列を作成
  const todayStr = `${year}-${month}-${day}`;
  startInput.value = todayStr;  // 開始日欄にセット
  finishInput.value = todayStr; // 終了日欄にセット


  // ボタンがクリックされたときの処理を登録
  btn.addEventListener("click", () => {
    const startDate = startInput.value;  // 入力された開始日を取得
    const finishDate = finishInput.value; // 入力された終了日を取得

    // calculatePeriod関数で日付計算を実行
    const result = calculatePeriod(startDate, finishDate);

    // 計算結果が有効なら日数を表示、無効ならエラーメッセージを表示
    resultInput.value = result !== "" ? `${result} 日間` : "入力が不正です";
  });
});
