// ================================
// storage.js : ローカルストレージ管理
// ================================

const PREFIX = "toolbox_";

/**
 * ローカルストレージに保存
 * @param {string} key キー
 * @param {any} value 保存する値
 */
export function saveData(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (err) {
    console.error("保存エラー:", err);
  }
}

/**
 * ローカルストレージから取得
 * @param {string} key キー
 * @param {any} defaultValue データが無い場合のデフォルト値
 * @returns {any} 取得データ
 */
export function loadData(key, defaultValue = null) {
  try {
    const data = localStorage.getItem(PREFIX + key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (err) {
    console.error("読み込みエラー:", err);
    return defaultValue;
  }
}

/**
 * ローカルストレージからデータ削除
 * @param {string} key キー
 */
export function removeData(key) {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch (err) {
    console.error("削除エラー:", err);
  }
}

/**
 * 全ての保存データをクリア（toolbox関連のみ）
 */
export function clearAll() {
  try {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(PREFIX))
      .forEach((k) => localStorage.removeItem(k));
  } catch (err) {
    console.error("全削除エラー:", err);
  }
}
