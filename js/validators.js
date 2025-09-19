// ================================
// validators.js : 入力バリデーション関数集
// ================================

/**
 * 空文字チェック
 * @param {string} value 入力値
 * @returns {boolean}
 */
export function isNotEmpty(value) {
  return value != null && value.trim().length > 0;
}

/**
 * 数値チェック
 * @param {string|number} value 入力値
 * @returns {boolean}
 */
export function isNumber(value) {
  return !isNaN(value) && value !== "" && value !== null;
}

/**
 * 整数チェック
 * @param {string|number} value
 * @returns {boolean}
 */
export function isInteger(value) {
  return Number.isInteger(Number(value));
}

/**
 * 正の数チェック
 * @param {string|number} value
 * @returns {boolean}
 */
export function isPositive(value) {
  return isNumber(value) && Number(value) > 0;
}

/**
 * メールアドレス形式チェック
 * @param {string} email
 * @returns {boolean}
 */
export function isEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * URL形式チェック
 * @param {string} url
 * @returns {boolean}
 */
export function isUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * JSON文字列チェック
 * @param {string} str
 * @returns {boolean}
 */
export function isJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

/**
 * パスワード強度チェック
 * 8文字以上、大文字・小文字・数字・記号を含むか
 * @param {string} password
 * @returns {boolean}
 */
export function isStrongPassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return re.test(password);
}
