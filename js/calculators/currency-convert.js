// ================================
// currency-convert.js : 通貨換算スクリプト
// ================================

import { isPositive } from "../validators.js";

const API_URL = "https://api.exchangerate.host/latest"; // 無料で使える為替API

async function getExchangeRates(base = "JPY") {
  try {
    const response = await fetch(`${API_URL}?base=${base}`);
    if (!response.ok) throw new Error("為替情報の取得に失敗");
    const data = await response.json();
    return data.rates;
  } catch (err) {
    console.error(err);
    alert("為替レートの取得に失敗しました");
    return null;
  }
}

async function convertCurrency(amount, from, to) {
  if (!isPositive(amount)) return null;
  if (from === to) return amount;

  const rates = await getExchangeRates(from);
  if (!rates || !rates[to]) return null;

  return amount * rates[to];
}

// DOM操作
document.addEventListener("DOMContentLoaded", () => {
  const amountInput = document.getElementById("amount");
  const fromSelect = document.getElementById("fromCurrency");
  const toSelect = document.getElementById("toCurrency");
  const resultBox = document.getElementById("result");
  const btn = document.getElementById("convertBtn");

  btn.addEventListener("click", async () => {
    const amount = parseFloat(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    const converted = await convertCurrency(amount, from, to);
    if (converted === null) {
      resultBox.textContent = "入力値または為替情報に問題があります";
      return;
    }

    resultBox.textContent = `${amount} ${from} ≒ ${converted.toFixed(2)} ${to}`;
  });
});
