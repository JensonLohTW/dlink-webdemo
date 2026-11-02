export const nav = [
  { id: 'philosophy', en: 'Our Philosophy', zh: '品牌精神' },
  { id: 'technology', en: 'Technology', zh: '核心技術' },
  { id: 'products', en: 'Products', zh: '機器人產品' },
  { id: 'news', en: 'News', zh: '新聞中心' },
  { id: 'support', en: 'Support', zh: '支援與聯絡' },
]

export const hero = {
  en: 'Technology that cares.',
  zh: ['科技的使命，', '是為了更溫暖的陪伴。'],
  body: '在 AI 技術飛速迭代的時代，我們致力於將冷硬的晶片與運算，轉化為人與人之間最柔軟的連結。D-Link Robotics 相信，真正頂尖的科技不該喧賓奪主，而是如同呼吸般自然，安靜地守護著每一個有愛的家庭。',
}

export const dna = {
  en: 'Engineering Trust.',
  zh: '構築信任的科技底蘊',
  cards: [
    {
      en: 'Secure Connectivity',
      zh: '無縫連網',
      body: '作為友訊科技 (D-Link) 的創新延伸，我們將世界級的網路通訊與軍規級資安防護技術注入每一台陪伴設備中，確保最穩定、無縫的遠端連線體驗。',
    },
    {
      en: 'Edge AI Privacy',
      zh: '邊緣運算',
      body: '隱私，是陪伴的最高原則。我們採用領先的 Edge AI 邊緣運算架構，確保所有的環境感知與語音情緒數據皆在設備本地端完成處理，絕不輕易上傳雲端。',
    },
    {
      en: 'Empathic AI',
      zh: '情感 x 科技',
      body: '結合精準的聲紋辨識與非語意情緒分析，我們的演算法不僅能讀懂指令，更能察言觀色。賦予機器人知退進、懂邊界的生命感，提供毫無壓力的溫柔陪伴。',
    },
  ],
}

export const products = {
  eyebrowEn: 'OUR FLAGSHIP COMPANION',
  eyebrowZh: '首發旗艦陪伴機器人 MuRu',
  en: 'Meet MuRu. A little soul for your home.',
  zh: '遇見 MuRu。獻給每個珍貴日常的小靈魂。',
  ctaEn: 'Discover MuRu',
  ctaZh: '探索 MuRu',
  photoAlt: '一位家人趴在沙發旁，微笑看著桌上的 MuRu。',
  upcoming: ['靈犀', '大機器狗', '小機器狗'],
  upcomingLabel: 'Coming soon',
  upcomingBody: '產品資訊即將公布。',
}

export interface NewsItem {
  slug: string
  category: string
  title: string
  paragraphs: string[]
}

export const news: NewsItem[] = [
  {
    slug: 'd-link-robotics-launch',
    category: '最新消息',
    title: 'D-Link Robotics 正式成立！結合 AI 與網通技術，進軍智慧陪伴市場。',
    paragraphs: [hero.body, dna.cards[0].body],
  },
  {
    slug: 'meet-muru',
    category: '產品發布',
    title: '首發旗艦陪伴機器人「MuRu」亮相，重新定義居家療癒科技。',
    paragraphs: [
      'MuRu 是一款與眾不同的智慧陪伴機器人。牠褪去了冰冷的科技感，更像是一個永遠為你留一盞燈、等待你回家的家人。',
      dna.cards[2].body,
    ],
  },
  {
    slug: 'edge-ai-privacy',
    category: '產業動態',
    title: '隱私至上！我們的 Edge AI 邊緣運算架構如何保護百萬家庭的數據安全。',
    paragraphs: [dna.cards[1].body],
  },
]

export const support = {
  en: 'Here for you.',
  zh: '我們隨時為您服務',
  help: {
    en: 'Help Center',
    zh: '客戶支援',
    body: '為消費者提供完整的產品支援。點擊前往下載數位照護指南、查看常見問題或進行產品保固登錄。',
    links: [
      { to: '/care-guide', en: 'Care guide', zh: '數位照護指南' },
      { to: '/muru#faq', en: 'FAQ', zh: '常見問題' },
      { to: '/warranty', en: 'Warranty registration', zh: '產品保固登錄' },
    ],
  },
  partner: {
    en: 'Partner with us',
    zh: '商務合作',
    body: '開放 B2B 企業專案合作、全球經銷代理洽詢與媒體公關聯絡。',
  },
}

export const stubs = {
  careGuide: '數位照護指南',
  warranty: '產品保固登錄',
  privacy: '隱私權政策',
  terms: '服務條款',
}
