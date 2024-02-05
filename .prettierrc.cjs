module.exports = {
  $schema: 'https://json.schemastore.org/prettierrc', // 設定檔使用的規則
  // "semi": false,  // 末尾不加分號, 預設值 true
  tabWidth: 4, // tab縮排大小, 預設值 2
  // "useTabs": true,  // 縮排不使用tab, 預設值 false
  singleQuote: true, // 使用單引號, 預設值 false(在jsx中組態無效, 預設都是雙引號)
  jsxSingleQuote: true, // 在jsx中使用單引號, 預設值 false
  bracketSameLine: true, // HTML 多行元素與結尾括號在同一行, 預設值 false
  printWidth: 100, // 超過最大值換行, 預設值 80
  "trailingComma": "es5",  // 最後一個對象元素加逗號, 預設值 none, 可選值 <none|es5|all>
  // "endOfLine": "auto",  // 行尾換行格式, 預設值 auto, 可選值 <auto|lf|crlf|cr>
  plugins: ['prettier-plugin-tailwindcss'],
};
