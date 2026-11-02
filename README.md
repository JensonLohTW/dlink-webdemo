# D-Link Robotics 官網 Demo

React + TypeScript + Vite 製作的前端展示版本，內容來自 D-Link Robotics 與 MuRu 的網站架構文件（內部文件，未納入版本庫）。

線上展示：<https://jensonlohtw.github.io/dlink-webdemo/>

```bash
pnpm install
pnpm dev       # 開發伺服器
pnpm build     # 型別檢查並輸出到 dist/
pnpm preview   # 預覽正式版本
```

## 頁面

| 路徑 | 內容 |
| --- | --- |
| `/` | D-Link Robotics 企業官網（單頁，含品牌、技術、產品、新聞、支援） |
| `/news/:slug` | 新聞內頁 |
| `/muru` | MuRu 產品官網首頁（繁中 / EN / 日） |
| `/muru/growing-together` | 成長軌跡 |
| `/muru/life-with-muru` | 陪伴特色 |
| `/muru/technology` | 智慧設計 |
| `/muru/the-app` | 方案生態 |

## 修改內容

- MuRu 文案：`src/sites/muru/content/{zh,en,ja}.ts`，結構由 `types.ts` 約束，缺欄位時無法通過編譯。
- Robotics 文案：`src/sites/robotics/content.ts`。
- 品牌色與字體：`src/index.css` 的 `@theme`。
- 照片：`src/assets/photos/`，目前由架構文件內的設計圖裁切而成，正式上線前請換成原始高解析度檔案。

## 部署

推送到 `main` 後，`.github/workflows/deploy.yml` 會自動建置並發布到 GitHub Pages。

## 展示版限制

沒有後端：聯絡表單與方案選擇只改變畫面狀態，不會傳送資料。社群圖示尚未綁定帳號連結。
