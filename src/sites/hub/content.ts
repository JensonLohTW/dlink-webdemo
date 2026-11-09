/**
 * 簡報主頁的內容。講解時要改文案，只動這個檔案即可。
 * 標示為「建議」的項目是我們的提案草稿，會前請再確認。
 */

/**
 * 三個風格示範頁都是靜態頁，由 vite/website-clone.ts 掛載：
 * Website-Clone（Unitree 風格）在 /website-clone/，Website-Clone2（Figure 風格）在 /website-clone2/，
 * Website-Clone3（1X 風格）在 /website-clone3/。
 */
export type CloneMount = 'website-clone' | 'website-clone2' | 'website-clone3'
export const cloneUrl = (mount: CloneMount, hash = '') => `${import.meta.env.BASE_URL}${mount}/index.html${hash}`
export const cloneAsset = (mount: CloneMount, path: string) => `${import.meta.env.BASE_URL}${mount}/assets/${path}`

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

export interface EffectItem {
  name: string
  how: string
  useFor: string
  hash: string
  hint?: string
}

export interface EffectStyle {
  id: 'unitree' | 'figure' | 'onex'
  label: string
  mount: CloneMount
  /** 左側圖塊：Unitree 用產品圖，Figure 用影片首格，1X 用首屏大圖。 */
  tile: { kind: 'image'; src: string; alt: string; cover?: boolean } | { kind: 'video'; src: string }
  tileCaption: string
  cta: string
  items: EffectItem[]
}

export const effects = {
  title: '我們建議的 UI/UX 效果',
  body: '我們做了三種風格的示範頁，品牌都已換成 D-Link Robotics。先選一種風格，再點下面任何一列，會直接跳到那段效果，右邊是我們建議套用的位置。',
  styles: [
    {
      id: 'unitree',
      label: 'Unitree 風格',
      mount: 'website-clone',
      tile: { kind: 'image', src: 'img/new_go2.webp', alt: '參考站上的四足機器人 Unitree Go2。' },
      tileCaption: '參考站：Unitree Go2 產品頁（購物車、搜尋等為示意，不會真的運作）',
      cta: '開啟 Unitree 風格示範頁',
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
      ],
    },
    {
      id: 'figure',
      label: 'Figure 風格',
      mount: 'website-clone2',
      tile: { kind: 'video', src: 'video/homepage-02.mp4' },
      tileCaption: '參考站：Figure 官網首頁（影片為參考站素材，僅作示意；表單不會真的送出）',
      cta: '開啟 Figure 風格示範頁',
      items: [
        {
          name: '全幅影片首屏',
          how: '整個畫面就是一段影片，標題與行動呼籲直接疊在上面。',
          useFor: '企業官網首屏：用一段品牌影片取代靜態橫幅',
          hash: '#top',
        },
        {
          name: '逐段換片的主張',
          how: '往下捲，每一屏換一支影片與一句主張，進入畫面才播放。',
          useFor: '企業官網：品牌精神、核心技術各佔一屏',
          hash: '#intelligence',
        },
        {
          name: '隨捲動收放的導覽列',
          how: '往下捲時導覽列退場，一往上捲就回來；手機改為滿版選單。',
          useFor: '全站導覽：內容優先，需要時才出現',
          hash: '',
          hint: '在示範頁往下捲一段，再往回捲',
        },
        {
          name: '延伸式頁尾',
          how: '頁尾前先接一段大背景的行動呼籲，再接聯絡資訊與連結。',
          useFor: '支援與聯絡：商務合作、徵才入口',
          hash: '#footerextension',
        },
        {
          name: '訂閱與聯絡視窗',
          how: '標籤會上浮的輸入框，以及滿版的聯絡表單視窗。',
          useFor: '商務合作與新聞訂閱',
          hash: '#footer',
          hint: '到頁尾點「Contact Us」',
        },
      ],
    },
    {
      id: 'onex',
      label: '1X 風格',
      mount: 'website-clone3',
      tile: { kind: 'image', src: 'img/hero.webp', alt: '1X 風格示範頁的首屏：機器人與長者在家中。', cover: true },
      tileCaption: '參考站：1X NEO 產品頁（影片與圖片為參考站素材，僅作示意；訂購不會真的運作）',
      cta: '開啟 1X 風格示範頁',
      items: [
        {
          name: '滿版首屏與收合頁首',
          how: '首屏是一張滿版大圖，往下捲後頁首收起，換成產品列滑入。',
          useFor: 'MuRu 首頁與各產品頁的首屏',
          hash: '#top',
        },
        {
          name: '跟著捲動的產品列',
          how: '產品列標示目前讀到哪一段，點一下就跳到該段。',
          useFor: '產品頁：一頁看完外型、陪伴、智慧各面向',
          hash: '#utility',
        },
        {
          name: '情境切換的影片',
          how: '左右切換不同生活情境，影片與標題跟著交叉淡入。',
          useFor: 'MuRu 陪伴特色：早晨、居家、睡前等場景',
          hash: '#expert-title',
        },
        {
          name: '環形輪播',
          how: '設計細節卡片循環輪播，中間那張放大，可拖曳。',
          useFor: 'MuRu 智慧設計頁：外型、材質、表情細節',
          hash: '#design-title',
        },
        {
          name: '對話泡泡',
          how: '陪伴段落裡的對話泡泡依序浮現。',
          useFor: 'MuRu 陪伴特色：互動對話的示意',
          hash: '#companion',
        },
        {
          name: '常見問題與規格視窗',
          how: '點「FAQ」或「Product」開啟滿版視窗，問答可展開，規格分類整理。',
          useFor: '支援與服務：常見問題、產品規格',
          hash: '',
          hint: '往下捲過首屏後，點頁首的「FAQ」或「Product」',
        },
      ],
    },
  ] as EffectStyle[],
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
