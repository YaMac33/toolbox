// js/utils-tools/markdown-preview.js

const markdownInput = document.getElementById("markdownInput");
const preview = document.getElementById("preview");

// 初期サンプルテキスト
const sampleText = `# Markdown プレビュー

これは **リアルタイム変換** のサンプルです。

- 箇条書き
- *イタリック*
- [リンク](https://example.com)

> 引用ブロック

\`\`\`js
console.log("コードブロックもOK！");
\`\`\`
`;

markdownInput.value = sampleText;
preview.innerHTML = marked.parse(sampleText);

// 入力が変わるたびに変換
markdownInput.addEventListener("input", () => {
  const text = markdownInput.value;
  preview.innerHTML = marked.parse(text);
});