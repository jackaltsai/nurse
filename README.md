# 特別護士 Elite Care 官網

Nuxt 4 單頁靜態網站（繁體中文、RWD）。

## 修改內容

所有文案、聯絡方式、照片路徑與選配開關都集中在 `app/content.ts`：

- `contact.phone` / `contact.lineUrl`：電話與 LINE 加好友連結（待業主提供）
- `images`：照片放進 `public/images/` 後填入路徑，未填時顯示佔位區塊
- `settings.heroLayout`：`'split'`（預設）或 `'centered'`
- `settings.showComparison` / `settings.showSpecialFees`：顯示或隱藏比較表、特殊收費

## 指令

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # 輸出靜態網站到 .output/public
```
