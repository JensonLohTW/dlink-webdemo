/**
 * 簡報主頁的內容。講解時要改文案，只動這個檔案即可。
 * 標示為「建議」的項目是我們的提案草稿，會前請再確認。
 */

/** Website-Clone 是靜態頁，由 vite/website-clone.ts 掛在 /website-clone/ 之下。 */
export const cloneUrl = (hash = '') => `${import.meta.env.BASE_URL}website-clone/index.html${hash}`
export const cloneAsset = (path: string) => `${import.meta.env.BASE_URL}website-clone/assets/${path}`

export const parts = [
  { id: 'current', label: '現行規劃的呈現效果' },
  { id: 'effects', label: 'UI/UX 效果' },
  { id: 'architecture', label: '建議的網站架構' },
]

export const hero = {
  lead: 'D-Link Robotics',
  title: '官網，先點給你看',
  body: '依 D-Link Robotics 與 MuRu 兩份規劃文件做成可點擊的示意，再加上我們建議的 UI/UX 效果與整體網站架構。',
  photoAlt: '一位女性微笑看著桌上的 MuRu。',
}

export const current = {
  title: '現行規劃文件，做出來是這樣',
  body: '兩份文件各對應一個站點，兩個都是可以完整操作的示意。從任何一頁進去都可以，左下角的按鈕能回到這個主頁。',
  robotics: {
    name: 'D-Link Robotics 企業官網',
    body: '單頁長捲動，從品牌精神捲到支援與聯絡，新聞可進入內頁。',
    cta: '開啟企業官網',
    to: '/robotics',
    pages: [
      { label: '品牌精神', to: '/robotics#philosophy' },
      { label: '核心技術', to: '/robotics#technology' },
      { label: '機器人產品', to: '/robotics#products' },
      { label: '新聞中心', to: '/robotics#news' },
      { label: '新聞內頁', to: '/robotics/news/meet-muru' },
      { label: '支援與聯絡', to: '/robotics#support' },
    ],
  },
  muru: {
    name: 'MuRu 產品官網',
    body: '多頁式產品網站，繁中、English、日本語三語切換。',
    cta: '開啟 MuRu 官網',
    to: '/muru',
    pages: [
      { label: '首頁', to: '/muru' },
      { label: '成長軌跡', to: '/muru/growing-together' },
      { label: '陪伴特色', to: '/muru/life-with-muru' },
      { label: '智慧設計', to: '/muru/technology' },
      { label: '方案生態', to: '/muru/the-app' },
    ],
  },
}

export const effects = {
  title: '我們建議的 UI/UX 效果',
  body: '參考站是 Unitree Go2 產品頁的復刻原型。每一列都會直接跳到那段效果，右邊是我們建議套用的位置。',
  tileCaption: '參考站：Unitree Go2 產品頁（購物車、搜尋等為示意，不會真的運作）',
  cta: '開啟完整示範頁',
  items: [
    {
      name: '首屏影片與進場動畫',
      how: '標題逐項浮現，往下捲時整個首屏淡出。',
      useFor: 'MuRu 首頁：讓 OLED 表情成為首屏主角',
      hash: '#hero-section',
    },
    {
      name: '捲動驅動的影格序列',
      how: '往下捲，產品在畫面裡「動」起來，規格說明依序浮現。',
      useFor: 'MuRu 智慧設計頁：一邊捲、一邊看牠轉頭與眨眼',
      hash: '#new-section',
    },
    {
      name: '規格表逐列浮現',
      how: '技術規格一列一列進場，版型固定、容易套用。',
      useFor: '每個產品頁共用同一種規格表',
      hash: '#tech-title',
    },
    {
      name: '擴充配件卡片',
      how: '配件與選購項目依序展開。',
      useFor: 'MuRu 方案生態：方案與擴充服務',
      hash: '#cards-title',
    },
    {
      name: '3D 翻頁式收尾',
      how: '頁尾用一個有動態的行動呼籲收束。',
      useFor: '支援與聯絡：保固登錄、商務合作',
      hash: '#book-title',
    },
    {
      name: '依產品類別展開的導覽',
      how: '頁首點一個類別，展開該類別下的產品。',
      useFor: '產品變多之後的企業官網選單',
      hash: '',
      hint: '到頁首點「quadruped」或「humanoid」',
    },
  ] as { name: string; how: string; useFor: string; hash: string; hint?: string }[],
}

export type Status = 'demo' | 'stub' | 'proposed'

export const statusLabel: Record<Status, string> = {
  demo: '已有示意',
  stub: '佔位頁',
  proposed: '建議新增',
}

export interface SitePage {
  name: string
  status: Status
  to?: string
  note?: string
}

export interface SiteGroup {
  id: string
  name: string
  role: string
  pages: SitePage[]
}

export const architecture = {
  title: '建議的網站架構與分類',
  body: '點左邊的分類，看每一類底下放哪些頁面。標示「已有示意」的頁面可以直接點進去。這一份是我們的草案，歡迎在會上調整。',
  groups: [
    {
      id: 'corporate',
      name: '企業官網',
      role: '品牌、技術與新聞的入口，也是各產品線的總門面。',
      pages: [
        { name: '品牌精神', status: 'demo', to: '/robotics#philosophy' },
        { name: '核心技術', status: 'demo', to: '/robotics#technology' },
        { name: '機器人產品', status: 'demo', to: '/robotics#products', note: '目前只有 MuRu，其餘三款標示 Coming soon' },
        { name: '新聞中心', status: 'demo', to: '/robotics#news' },
        { name: '新聞內頁', status: 'demo', to: '/robotics/news/d-link-robotics-launch' },
        { name: '支援與聯絡', status: 'demo', to: '/robotics#support' },
        { name: '隱私權政策', status: 'stub', to: '/robotics/privacy' },
        { name: '服務條款', status: 'stub', to: '/robotics/terms' },
      ],
    },
    {
      id: 'muru',
      name: 'MuRu 產品官網',
      role: '每條產品線一個獨立站，以故事與情感為主，支援三語。',
      pages: [
        { name: '首頁', status: 'demo', to: '/muru' },
        { name: '成長軌跡', status: 'demo', to: '/muru/growing-together' },
        { name: '陪伴特色', status: 'demo', to: '/muru/life-with-muru' },
        { name: '智慧設計', status: 'demo', to: '/muru/technology' },
        { name: '方案生態', status: 'demo', to: '/muru/the-app' },
        { name: '照護指南', status: 'stub', to: '/muru/care-guide' },
        { name: '無障礙聲明', status: 'stub', to: '/muru/accessibility' },
      ],
    },
    {
      id: 'products',
      name: '產品總覽與新產品',
      role: '產品變多之後，需要一個依類別分的入口，新產品也各有自己的頁面。',
      pages: [
        { name: '產品總覽', status: 'proposed', note: '依類別分：陪伴機器人、機器狗' },
        { name: '靈犀', status: 'proposed', note: '套用 Go2 式產品頁：影格捲動、規格表、配件' },
        { name: '大機器狗', status: 'proposed', note: '同上' },
        { name: '小機器狗', status: 'proposed', note: '同上' },
      ],
    },
    {
      id: 'support',
      name: '支援與服務',
      role: '買了之後的所有事，讓使用者不用繞去找。',
      pages: [
        { name: '常見問題', status: 'demo', to: '/muru#faq' },
        { name: '數位照護指南', status: 'stub', to: '/robotics/care-guide' },
        { name: '產品保固登錄', status: 'stub', to: '/robotics/warranty' },
        { name: '商務合作', status: 'demo', to: '/robotics#support', note: 'B2B 專案、經銷代理、媒體聯絡' },
      ],
    },
    {
      id: 'shared',
      name: '共用基礎',
      role: '不是頁面，但決定整個網站看起來是不是同一家公司。',
      pages: [
        { name: '多語系', status: 'proposed', note: 'MuRu 已有三語，企業站建議同步' },
        { name: '全站導覽', status: 'proposed', note: '依產品類別展開的選單' },
        { name: '共用品牌元件', status: 'proposed', note: '頁首頁尾、行動呼籲、社群連結' },
        { name: '法務頁', status: 'proposed', note: '隱私權政策與服務條款只維護一份' },
      ],
    },
  ] as SiteGroup[],
}
