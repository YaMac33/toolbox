// ================================
// clipboard.js : クリップボード操作
// ================================

/**
 * 任意のテキストをクリップボードにコピー
 * @param {string} text コピーするテキスト
 * @returns {Promise<void>}
 */
export async function copyText(text) {
  if (!text) {
    alert("コピーする内容がありません");
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    alert("コピーしました！");
  } catch (err) {
    console.error("コピー失敗:", err);
    alert("コピーに失敗しました");
  }
}

/**
 * 指定要素の内容をコピー
 * @param {string|HTMLElement} targetIdOrEl 対象ID または HTMLElement
 */
export async function copyElementContent(targetIdOrEl) {
  let el;
  if (typeof targetIdOrEl === "string") {
    el = document.getElementById(targetIdOrEl);
  } else {
    el = targetIdOrEl;
  }
  if (!el) {
    console.warn("対象要素が見つかりません");
    return;
  }
  const text = el.value || el.innerText || "";
  return copyText(text);
}

/**
 * クリップボードからテキストを貼り付け
 * @returns {Promise<string>} 取得したテキスト
 */
export async function pasteText() {
  try {
    const text = await navigator.clipboard.readText();
    return text;
  } catch (err) {
    console.error("貼り付け失敗:", err);
    alert("貼り付けに失敗しました");
    return "";
  }
}
