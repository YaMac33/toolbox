// ================================
// romaji.js : 日本語→ローマ字変換
// ================================

import { isNotEmpty } from "../validators.js";

// 簡易ヘボン式変換テーブル（基本のみ）
const kanaMap = {
  'あ':'a','い':'i','う':'u','え':'e','お':'o',
  'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko',
  'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so',
  'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to',
  'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no',
  'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho',
  'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo',
  'や':'ya','ゆ':'yu','よ':'yo',
  'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro',
  'わ':'wa','を':'wo','ん':'n',
  'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go',
  'ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo',
  'だ':'da','ぢ':'ji','づ':'zu','で':'de','ど':'do',
  'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo',
  'ぱ':'pa','ぴ':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po',
  'きゃ':'kya','きゅ':'kyu','きょ':'kyo',
  'しゃ':'sha','しゅ':'shu','しょ':'sho',
  'ちゃ':'cha','ちゅ':'chu','ちょ':'cho',
  'にゃ':'nya','にゅ':'nyu','にょ':'nyo',
  'ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo',
  'みゃ':'mya','みゅ':'myu','みょ':'myo',
  'りゃ':'rya','りゅ':'ryu','りょ':'ryo'
};

/**
 * 日本語テキストをローマ字に変換
 * @param {string} text 日本語
 * @returns {string} ローマ字
 */
export function toRomaji(text) {
  if (!isNotEmpty(text)) return "";
  let result = "";
  let i = 0;

  while (i < text.length) {
    // まず2文字の拗音をチェック
    const two = text.slice(i, i+2);
    if (kanaMap[two]) {
      result += kanaMap[two];
      i += 2;
      continue;
    }
    const one = text[i];
    result += kanaMap[one] || one; // マップにない場合はそのまま
    i += 1;
  }

  return result;
}

// DOM操作
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("japaneseText");
  const output = document.getElementById("romajiText");
  const btn = document.getElementById("convertBtn");

  btn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) {
      output.value = "";
      return;
    }
    output.value = toRomaji(text);
  });
});
