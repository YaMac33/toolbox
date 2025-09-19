// ================================
// utils.js : 共通ユーティリティ関数
// ================================

/**
 * 指定範囲のランダム整数を返す
 * @param {number} min 最小値
 * @param {number} max 最大値
 * @returns {number} min～max のランダム整数
 */
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 指定範囲の数値をクランプ（制限）する
 * @param {number} value 入力値
 * @param {number} min 最小値
 * @param {number} max 最大値
 * @returns {number} 制限後の値
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * 数値を小数点以下指定桁数で丸める
 * @param {number} value 入力値
 * @param {number} digits 小数点以下の桁数
 * @returns {number} 丸められた数値
 */
export function roundTo(value, digits = 2) {
  const factor = Math.pow(10, digits);
  return Math.round(value * factor) / factor;
}

/**
 * HTML要素の内容をクリップボードにコピーする
 * @param {string|HTMLElement} target 対象要素のIDまたは要素本体
 * @returns {Promise<void>}
 */
export async function copyToClipboard(target) {
  let text = "";
  if (typeof target === "string") {
    const el = document.getElementById(target);
    if (!el) throw new Error(`Element with id '${target}' not found`);
    text = el.value || el.innerText || "";
  } else if (target instanceof HTMLElement) {
    text = target.value || target.innerText || "";
  }
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    alert("コピーしました！");
  } catch (err) {
    console.error("コピーに失敗:", err);
    alert("コピーに失敗しました");
  }
}

/**
 * 日付を YYYY-MM-DD 形式にフォーマット
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(date) {
  if (!(date instanceof Date)) date = new Date(date);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/**
 * 簡易デバウンス関数
 * @param {Function} func 実行関数
 * @param {number} delay 遅延(ms)
 * @returns {Function} デバウンスされた関数
 */
export function debounce(func, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * 簡易スロットル関数
 * @param {Function} func 実行関数
 * @param {number} limit インターバル(ms)
 * @returns {Function} スロットルされた関数
 */
export function throttle(func, limit = 300) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
