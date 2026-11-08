# D-Link Robotics 解決方案與架構說明

版本：v1（2026-11-07）
對應：《數位平台建置計劃書 v6》
用途：提案與啟動會議的講解稿；每一節是一段講解，附「講解重點」與圖
配套文件：《網站功能規格 v1》（做哪些功能）、《工程實施指南 v1》（工程師怎麼做）

---

## 0. 講解順序建議

| 段落 | 主題 | 時間 | 對象 |
| --- | --- | --- | --- |
| 1 | 一張圖看懂方案 | 3 分鐘 | 全體 |
| 2 | 計劃書目標如何落地 | 5 分鐘 | 決策者 |
| 3 | 網站功能地圖與使用者旅程 | 8 分鐘 | 品牌、產品、客服 |
| 4 | 系統架構 | 10 分鐘 | IT、資安 |
| 5 | 關鍵流程 | 12 分鐘 | IT、客服、法務 |
| 6 | 多產品擴充 | 3 分鐘 | 產品 |
| 7 | 分期與時程 | 4 分鐘 | 決策者 |
| 8 | 品質、安全與隱私 | 5 分鐘 | IT、法務 |
| 9 | 常見問題 | 視情況 | 全體 |

---

## 1. 一張圖看懂方案

```mermaid
flowchart LR
  subgraph ATTRACT["吸引"]
    SEO["搜尋與 AI 助理"]
    SOC["社群、廣告、LINE"]
    PR["新聞與媒體"]
  end
  subgraph EXPERIENCE["體驗"]
    CORP["企業官網<br/>信任與產品組合"]
    MURU["MuRu 產品體驗<br/>生活故事與規格"]
    REC["相關內容推薦"]
  end
  subgraph CONVERT["轉換"]
    WAIT["上市通知"]
    B2B["商務與經銷洽詢"]
    SHOP["購買（S3）"]
  end
  subgraph SERVE["服務"]
    SUP["支援中心"]
    AI["AI 客服＋真人客服"]
    MEM["會員、保固、訂閱（S4）"]
  end
  ATTRACT --> EXPERIENCE --> CONVERT --> SERVE
  SERVE -. "滿意的客戶回流、購買新產品" .-> EXPERIENCE
```

**講解重點**

- 網站的工作是四件事：讓人找到、讓人相信、讓人行動、讓人買了之後被照顧好。
- 首發先完成前三段與服務入口；購買、會員、訂閱依商業決策分期接上。
- 所有環節共用同一套內容、同一套追蹤、同一個客服入口，新產品上架時一起受惠。

---

## 2. 計劃書目標如何落地

| 計劃書目標 | 解決方案 | 對應模組 | 階段 |
| --- | --- | --- | --- |
| 傳達品牌精神與 D-Link 背書 | 企業官網外框、技術原則頁、信任中心 | 企業官網 | S2 |
| 用生活情境說明 MuRu | MuRu 專屬外框、四個故事頁、規格與方案說明 | 產品體驗 | S2 |
| 把興趣轉成名單與洽詢 | 免費上市通知（Email 雙重確認）、商務／經銷／媒體表單自動轉交 | 表單與名單 | S2 |
| 售後不必繞路 | 支援中心依產品分流；線上使用手冊、照護指南、FAQ、資源中心（手冊與 App 下載、韌體說明）、客服、保固協助；手冊頁內可問 AI 助理（A1） | 支援中心 | S2（手冊 AI 助理 A1） |
| 新產品 2–3 週上線 | 產品即資料：內容模型＋三種模板＋狀態規則 | CMS、產品模板 | S2 起 |
| 看完一頁總有下一步 | 相關內容推薦（不使用個人資料） | 推薦 R0 | S2 |
| 常見問題 24 小時三語回答 | 只用已核准內容回答的 AI 客服，可轉真人 | 智慧客服 A0–A3 | S2 起 |
| 搜尋引擎與 AI 能正確引用 | 預渲染靜態頁、結構化資料、多語標記、規格單一來源 | SEO／GEO | S2 |
| 隱私與品牌一致 | 同意後才追蹤；營運數字以業務資料為準 | 同意與追蹤 | S2 |
| 開賣 | Saleor 電商（或沿用既有商店）、台灣金流與電子發票 | 電商 | S3 |
| 官網買 Plus、App 立即可用 | 訂閱權益服務統一管理所有購買來源 | 會員與權益 | S4 |

**講解重點**：每個目標都有明確的模組與階段；沒有一項是「之後再說」。

---

## 3. 網站功能地圖與使用者旅程

### 3.1 功能地圖

```mermaid
mindmap
  root((D-Link Robotics<br/>數位平台))
    企業官網
      首頁
      品牌精神
      技術原則
      產品總覽
      新聞
      商務合作
      信任中心
      法務頁
    產品體驗
      MuRu 首頁
      陪伴特色
      成長軌跡
      智慧設計與規格
      App 與方案
      常見問題
      上市通知或購買
      其他產品模板
    支援中心
      快速上手
      線上使用手冊
      照護指南
      售後 FAQ
      資源中心（下載、韌體說明）
      保固與維修
      聯絡客服
    智慧服務
      相關內容推薦
      AI 客服
      LINE 渠道
    共用能力
      三語
      Cookie 同意
      數據追蹤
      SEO 與 AI 搜尋
      圖片與影片
    後續階段
      商店與結帳
      會員中心
      保固登錄
      Plus 訂閱
```

### 3.2 消費者旅程

```mermaid
journey
  title 消費者從認識到使用 MuRu
  section 認識
    搜尋或看到社群貼文: 3: 消費者
    進入企業官網或 MuRu 頁: 4: 消費者
  section 了解
    看陪伴特色與成長故事: 5: 消費者
    查規格、隱私與方案: 4: 消費者
    問 AI 客服疑問: 4: 消費者, AI 客服
  section 行動
    登記上市通知並確認 Email: 4: 消費者
    開賣後購買: 5: 消費者
  section 使用
    看照護指南與快速上手: 4: 消費者
    遇到問題找客服: 3: 消費者, AI 客服, 真人客服
    保固登錄與升級 Plus: 4: 消費者
```

### 3.3 各受眾的主要路徑

```mermaid
flowchart LR
  C["家庭、獨居者、寵物飼主"] --> MU["MuRu 故事頁"] --> W["上市通知"]
  F["為長輩選購的家人"] --> TR["信任中心、App 說明"] --> W
  O["既有用戶"] --> SC["支援中心"] --> AI["AI 客服"] --> H["真人客服"]
  B["教育、長照、企業"] --> PO["產品摘要與情境"] --> BF["商務表單"]
  D["經銷商"] --> BF
  M["媒體"] --> NEWS["新聞"] --> MF["媒體聯絡"]
```

**講解重點**

- 每一種受眾都有一條三步以內的主要路徑。
- 為長輩選購的家人最在意隱私與操作，因此信任中心與 App 說明是首發必備。
- AI 客服在每條路徑都可以接手，但只回答已核准內容，需要承諾的事交給真人。

---

## 4. 系統架構

### 4.1 系統全景

```mermaid
flowchart TB
  V["訪客"] --> PLAT
  STAFF["D-Link 員工"] --> PLAT
  PLAT["D-Link Robotics 數位平台"]
  PLAT --> AIM["Claude 模型<br/>AI 客服生成"]
  PLAT --> CRM["D-Link 既有 CRM、寄信"]
  PLAT --> GA["GA4、廣告平台<br/>同意後"]
  PLAT --> PAY["金流、電子發票、物流（S3）"]
  PLAT <--> APP["MuRu App 後端（S4）"]
  STORE["App Store、Google Play"] --> PLAT
  LINE["LINE 官方帳號"] <--> PLAT
  SSO["D-Link 企業單一登入"] --> STAFF
```

**講解重點**：平台以外的系統只有七類，每一類都透過固定介面連接，任何一個暫時故障都不影響網站瀏覽。

### 4.2 邏輯分層

```mermaid
flowchart TB
  L1["體驗層<br/>前端：Vite＋React Router（公開頁預渲染、會員與購物車前端應用）<br/>對話視窗（Chatwoot）"]
  L2["應用層（Django）<br/>API：表單、推薦、會員、權益｜Wagtail：內容、多語、審核<br/>AI 客服服務｜Celery：轉交、寄信、同步、對帳"]
  L3["平台服務層（自架開源）<br/>Chatwoot 客服平台｜Infinity 向量模型<br/>Langfuse 追蹤評測｜Saleor 電商（S3）"]
  L4[("資料層（台灣區域）<br/>PostgreSQL＋pgvector、pg_bigm｜Valkey｜物件儲存")]
  L1 --> L2
  L2 --> L3
  L2 --> L4
  L3 --> L4
```

| 層 | 為什麼這樣分 |
| --- | --- |
| 體驗層 | 公開頁是靜態檔案，後端故障時網站照常瀏覽；搜尋引擎直接讀到完整內容 |
| 應用層 | 所有業務邏輯集中在一個 Django 專案，一種語言、一套部署、一套權限 |
| 平台服務層 | 成熟的開源產品直接採用，不重複造輪子 |
| 資料層 | 個資與業務資料只在台灣區域；公開內容才經全球 CDN |

### 4.3 部署架構

```mermaid
flowchart TB
  U["使用者（全球）"] --> CDN["CDN、WAF、機器人防護"]
  CDN --> OBJS["靜態網頁與圖片<br/>物件儲存"]
  CDN --> LB["負載平衡（台灣區域）"]
  subgraph REGION["雲端台灣區域"]
    LB --> DJ["Django 容器<br/>API、Wagtail、AI 客服"]
    LB --> CWS["Chatwoot 容器"]
    WK["Celery 工作者容器"]
    INFS["Infinity 容器"]
    LFS["Langfuse 容器"]
    DB[("託管 PostgreSQL<br/>平台、Chatwoot 分開")]
    CACHE[("託管 Valkey")]
    DJ --> DB
    DJ --> CACHE
    WK --> DB
    WK --> CACHE
    WK --> INFS
    CWS --> DB
    LFS --> CH[("ClickHouse")]
  end
  CI["CI／CD"] -- "建置與部署" --> OBJS
  CI -- "部署容器" --> REGION
  WK -- "出口白名單" --> EXT["Claude API、CRM、寄信"]
```

**講解重點**

- 三套環境：預覽、staging、正式；正式資料不複製到其他環境。
- 資料庫、快取使用雲端託管服務，減少維運；應用以容器部署，可水平擴充。
- 只有背景工作可以對外連線，而且限定白名單。

### 4.4 資料放在哪裡

```mermaid
flowchart LR
  subgraph PUBLIC["公開資料：可經全球 CDN"]
    P1["頁面內容、圖片、影片"]
    P2["規格、FAQ、新聞"]
  end
  subgraph PERSONAL["個人資料：只在台灣區域"]
    D1["上市通知名單"]
    D2["洽詢與客服案件"]
    D3["AI 對話紀錄（遮蔽後）"]
    D4["訂單、帳號、權益（S3、S4）"]
  end
  subgraph OUTSIDE["送出平台的資料"]
    O1["GA4：只有事件與分類，無個資"]
    O2["Claude：遮蔽後的問題與檢索段落"]
    O3["CRM、寄信：必要聯絡資料"]
  end
  PERSONAL -- "最小化、遮蔽" --> OUTSIDE
```

**講解重點**：裝置的影像、聲音、居家活動資料完全不進入網站平台；送出平台的資料都經過遮蔽或最小化。

---

## 5. 關鍵流程

### 5.1 內容從編輯到上線

```mermaid
sequenceDiagram
  actor ED as 編輯
  participant WG as Wagtail
  participant JOB as 背景工作
  participant CI as 建置流程
  participant CDN as CDN
  participant KB as 知識庫與推薦
  ED->>WG: 編輯草稿，送審
  WG->>WG: 審核流程（產品、法務、母語）
  WG->>WG: 核准並發布
  WG->>JOB: 發布事件
  par 網站更新
    JOB->>CI: 觸發建置（合併 1 分鐘內的多次發布）
    CI->>WG: 讀取已發布內容
    CI->>CI: 預渲染三語頁面、sitemap、推薦區塊
    CI->>CDN: 上傳並清除快取
    CI->>CI: 冒煙測試
  and 智慧服務更新
    JOB->>KB: 更新 AI 客服知識庫與推薦索引
  end
  JOB-->>ED: 通知發布完成或失敗
```

**講解重點**：編輯按下發布後約 10 分鐘內全站更新；失敗時保留上一版並通知編輯，網站不會壞掉。

### 5.2 上市通知登記

```mermaid
sequenceDiagram
  actor U as 訪客
  participant FE as 網站
  participant API as Django API
  participant DB as 資料庫
  participant JOB as 背景工作
  participant ESP as 寄信服務
  U->>FE: 填寫 Email、語言、關注地區
  FE->>API: 送出（含提交編號）
  API->>API: 驗證欄位、防機器人、速率限制
  API->>DB: 儲存登記（待確認）與待辦工作
  API-->>FE: 已受理
  FE-->>U: 「請到信箱確認，這不是訂單」
  JOB->>ESP: 寄送確認信（登記語言）
  U->>FE: 點擊確認信，按下「確認」
  FE->>API: 確認
  API->>DB: 名單改為有效
  JOB->>JOB: 同步名單服務、記錄轉換
```

**講解重點**：重複送出不會重複建檔；只有點過確認信的才算有效名單；退訂隨時有效。

### 5.3 多語系網址

```mermaid
flowchart TB
  REQ["使用者開啟網址"] --> HAS{"網址有語言？"}
  HAS -- "根目錄 /" --> SEL["語言選擇頁<br/>依瀏覽器建議，不自動跳轉"]
  HAS -- "有" --> PUB{"這頁有該語言版本？"}
  PUB -- "有" --> SHOW["顯示該語言頁面"]
  PUB -- "沒有" --> NF["顯示「此頁提供以下語言」"]
  SHOW --> SW["切換語言"]
  SW --> SAME["跳到同一內容的另一語言版本"]
```

### 5.4 Cookie 同意與追蹤

```mermaid
sequenceDiagram
  actor U as 訪客
  participant P as 網頁
  participant CMP as 同意管理
  participant GA as GA4
  U->>P: 首次造訪
  P->>CMP: 讀取地區政策
  CMP-->>P: 預設不追蹤
  CMP-->>U: 顯示同意選項
  alt 同意分析
    U->>CMP: 接受分析
    CMP->>P: 允許分析
    P->>GA: 載入並送出頁面事件
  else 拒絕
    U->>CMP: 拒絕
    P->>P: 不載入任何追蹤
  end
  Note over P,GA: 營運數字（名單、案件、訂單）以業務資料庫為準，不受同意率影響
```

### 5.5 AI 客服與轉真人

```mermaid
sequenceDiagram
  actor U as 使用者
  participant CW as Chatwoot
  participant AI as AI 客服服務
  participant KB as 知識庫
  participant M as Claude
  actor CS as 真人客服
  U->>CW: 提問（網站或 LINE）
  CW->>AI: 交給 AI 先處理
  AI->>AI: 遮蔽個資，判斷是否緊急或要求真人
  alt 一般問題
    AI->>KB: 檢索已發布、同語言、同產品內容
    KB-->>AI: 相關段落與來源
    AI->>M: 依段落回答並引用
    M-->>AI: 回答
    AI->>AI: 檢查：事實皆有來源、無承諾、無未核准數字
    AI->>CW: 回答＋來源連結
  else 需要真人
    AI->>CW: 轉真人並附摘要
    CW->>CS: 指派案件
    CS->>U: 接手回覆
  end
```

**講解重點**

- AI 只能查資料與建立工單，不能退款、補償或改訂單。
- 沒把握就轉真人，客服接手時已看到摘要與 AI 查到的資料。
- 上線前每種語言約 200 題評測，正確率、轉接率、攻擊攔截都要達標。

### 5.6 結帳（S3）

```mermaid
sequenceDiagram
  actor U as 消費者
  participant FE as 網站
  participant SAL as Saleor
  participant PAYAPP as 綠界付款服務
  participant ECPAY as 綠界
  participant INV as 電子發票服務
  U->>FE: 加入購物車、結帳
  FE->>SAL: 建立結帳（市場、幣別、地址）
  SAL->>PAYAPP: 建立付款
  PAYAPP->>ECPAY: 建立交易
  ECPAY-->>U: 託管付款頁
  U->>ECPAY: 完成付款
  ECPAY->>PAYAPP: 付款通知（簽章）
  PAYAPP->>SAL: 更新交易狀態
  SAL->>SAL: 訂單成立
  SAL->>INV: 開立電子發票
  SAL-->>FE: 訂單完成
```

### 5.7 Plus 訂閱開通（S4）

```mermaid
sequenceDiagram
  actor U as 使用者
  participant W as 官網或 App
  participant SRC as 付款來源<br/>官網、App Store、Google Play
  participant ENT as 訂閱權益服務
  participant APP as MuRu App
  U->>W: 購買 Plus
  W->>SRC: 付款
  SRC->>ENT: 付款或訂閱通知
  ENT->>SRC: 查詢最新狀態（防重送、防亂序）
  ENT->>ENT: 更新訂閱與權益
  APP->>ENT: 查詢權益
  ENT-->>APP: Plus 已啟用
```

---

## 6. 多產品擴充

### 6.1 產品狀態

```mermaid
stateDiagram-v2
  state "概念（不公開）" as concept
  state "預告（上市通知）" as teaser
  state "現行（預購或販售）" as current
  state "停產（保留支援）" as eol
  [*] --> concept
  concept --> teaser: 發表
  teaser --> current: 開賣
  current --> eol: 停止販售
  eol --> [*]
```

各市場另有可售狀態（未開放、上市通知、預購、販售、缺貨、暫停、停售），頁面按鈕依產品狀態＋市場狀態＋功能開關自動決定。

### 6.2 新產品上架

```mermaid
flowchart LR
  A["建立產品"] --> B["核准規格與素材"]
  B --> C["選模板<br/>完整故事、單頁、機構方案"]
  C --> D["三語內容"]
  D --> E["設定市場狀態"]
  E --> F["預覽審核"]
  F --> G["發布"]
  G --> H["自動更新：選單、sitemap、<br/>推薦、AI 客服知識庫"]
```

**講解重點**：使用既有模板時不需要工程師；需要新互動時才排工程時程。

---

## 7. 分期與時程

```mermaid
timeline
  title 分期路線
  S0 範圍確認（2 週） : 決策清單 : 宣稱與素材清單
  S1 技術驗證（3 週） : CMS 兩案比較 : 預渲染與建置時間 : 真實表單 : AI 模型比較
  S2 首發（10＋1 週） : 企業官網與 MuRu : 上市通知與表單 : 支援中心 : 推薦 R0 : 客服平台與 A0
  首發後 4–6 週 : A1 網站 AI 客服（繁中先行）
  S3 交易 : 商店與結帳 : 金流與電子發票 : A2 訂單查詢與 LINE
  S4 會員與訂閱 : 會員中心 : 保固登錄 : Plus 訂閱 : A3
  S5 擴充 : 新產品 : 個人化推薦 : 站內搜尋
```

| 里程碑 | 時間（以啟動為第 1 週） |
| --- | --- |
| 技術組合定案 | 第 5 週 |
| 內容凍結 | 約第 12 週 |
| 首發上線 | 約第 16 週 |
| AI 客服公開（繁中） | 約第 21 週 |

---

## 8. 品質、安全與隱私

### 8.1 安全分層

```mermaid
flowchart TB
  A["邊緣：CDN、WAF、機器人防護、速率限制"] --> B["應用：輸入驗證、CSRF、安全標頭、簽章驗證"]
  B --> C["身分：員工企業單一登入＋多因素；會員 OIDC（S4）"]
  C --> D["資料：個資加密、遮蔽、最小權限、台灣區域"]
  D --> E["營運：稽核紀錄、弱點掃描、滲透測試、備份還原演練"]
```

### 8.2 服務水準（建議值）

| 項目 | 目標 |
| --- | --- |
| 公開頁可用性 | 每月 99.9% |
| 表單受理 | 99.9%；95% 在 1.5 秒內回應 |
| 內容發布生效 | 95% 在 10 分鐘內 |
| AI 客服 | 99.5%；95% 回覆在 8 秒內；故障時全數轉真人 |
| 故障復原 | 公開站 1 小時；資料庫 4 小時、資料損失 ≤ 15 分鐘 |

### 8.3 隱私承諾

- 未同意前不載入任何分析或廣告追蹤。
- 追蹤事件不含 Email、姓名、電話、序號或表單內容。
- AI 客服對話先遮蔽個資，遮蔽後保存 90 天，不用於模型訓練。
- 推薦不使用裝置資料，不推論健康、兒童等敏感特徵；個人化需同意且可關閉。

---

## 9. 常見問題（講解準備）

| 問題 | 回答要點 |
| --- | --- |
| 為什麼不用 Next.js？ | 團隊後端以 Python 為主；Vite＋React Router 可預渲染出完整網頁，滿足 SEO 需求，正式環境只需靜態檔案與 Django，維運更單純 |
| 為什麼後端只用 Django？ | 一種框架、一套權限與部署；內建管理後台與安全防護；AI、推薦也在 Python 生態最成熟 |
| 為什麼選開源？ | 無授權費、可自架於台灣、不被單一供應商綁住；每個元件都有替代方案 |
| 開源會不會不安全？ | 選用的都是長期維護的主流專案；鎖定版本、每季檢視安全公告、上線前滲透測試 |
| 為什麼 AI 模型用 Claude 而不是全部自架？ | 三語品質與引用能力最好，初期對話量下成本較低；架構保留切換為自架模型的能力，S1 以題庫實測比較 |
| 客戶資料會送到國外嗎？ | 個資存放在台灣；AI 生成時只送出遮蔽後的問題與公開知識段落；若要求亞洲處理，可評估雲平台區域或自架模型 |
| AI 講錯怎麼辦？ | 只用已核准內容、必附來源、輸出檢查、沒把握轉真人、可一鍵關閉；每週人工抽審 |
| 新產品要多久上線？ | 使用既有模板、內容已核准時 2–3 週 |
| 為什麼首發不開賣？ | 金流、發票、App 整合需要額外決策與驗收；品牌網站先上線，不被拖延 |
| 為什麼選 Saleor 而不是 Medusa？ | Saleor 是 Python／Django，與本案後端一致；金流與發票可用 Python 服務擴充 |
| 費用主要在哪裡？ | 一次性建置、內容製作、每月主機與維運、AI 用量；開源元件無授權費但需維運人力 |
| 內容更新要找工程師嗎？ | 不用。文字、圖片、FAQ、新聞、產品狀態都由編輯在 Wagtail 完成 |
