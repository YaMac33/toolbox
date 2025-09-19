// ================================
// bmi.js : BMI計算スクリプト
// ================================

import { isPositive, isNumber } from "../validators.js";

/**
 * BMIを計算する
 * @param {number} weight 体重 (kg)
 * @param {number} height 身長 (cm)
 * @returns {number|null} BMI値（小数点1桁） or null
 */
export function calculateBMI(weight, height) {
  if (!isNumber(weight) || !isNumber(height) || !isPositive(weight) || !isPositive(height)) {
    return null;
  }
  const h = height / 100; // cm → m
  const bmi = weight / (h * h);
  return Math.round(bmi * 10) / 10;
}

/**
 * BMIの分類を返す
 * @param {number} bmi BMI値
 * @returns {string}
 */
export function getBMICategory(bmi) {
  if (bmi < 18.5) return "低体重 (痩せ型)";
  if (bmi < 25) return "普通体重";
  if (bmi < 30) return "肥満 (1度)";
  if (bmi < 35) return "肥満 (2度)";
  if (bmi < 40) return "肥満 (3度)";
  return "肥満 (4度)";
}

// DOM操作部分（ツールページに埋め込む想定）
document.addEventListener("DOMContentLoaded", () => {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const resultBox = document.getElementById("bmiResult");

  document.getElementById("bmiCalcBtn").addEventListener("click", () => {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = calculateBMI(weight, height);

    if (bmi === null) {
      resultBox.textContent = "入力値が正しくありません";
      return;
    }
    resultBox.textContent = `あなたのBMI: ${bmi} (${getBMICategory(bmi)})`;
  });
});
