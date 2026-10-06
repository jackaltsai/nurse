// 網站所有文案與設定集中於此，修改內容只需編輯本檔案。

// ───────── 選配開關 ─────────
export const settings = {
  /** 'split'：左文字右拼貼（預設）；'centered'：文字置中＋下方橫幅照片 */
  heroLayout: 'split' as 'split' | 'centered',
  /** 是否顯示「特護與一般看護的差異」比較表 */
  showComparison: true,
  /** 是否顯示「特殊收費」 */
  showSpecialFees: true,
}

// ───────── 聯絡資訊（待業主提供） ─────────
export const contact = {
  /** 電話號碼，例如 '0912-345-678'；空字串時按鈕連到 #contact */
  phone: '',
  /** LINE 加好友連結，例如 'https://line.me/R/ti/p/@xxxx'；空字串時按鈕連到 #contact */
  lineUrl: '',
}

// ───────── 照片（待業主提供，放在 public/images/ 後填入路徑，例如 '/images/hero-elder.jpg'） ─────────
// 留空時會顯示同尺寸的佔位區塊。
export const images = {
  heroElder: { src: '', alt: '護理師與長輩' },
  heroWalk: { src: '', alt: '陪同行走' },
  heroBanner: { src: '', alt: '專業護理師照護' },
}

// ───────── 頁首 ─────────
export const brand = {
  name: '特別護士',
  en: 'ELITE CARE',
}

export const nav = [
  { label: '關於我們', href: '#about' },
  { label: '服務項目', href: '#services' },
  { label: '收費標準', href: '#pricing' },
  { label: '特護差異', href: '#compare' },
  { label: '為什麼選擇我們', href: '#why' },
]

// ───────── Hero ─────────
export const hero = {
  eyebrow: '三位資深臨床護理師創立的團隊',
  /** 分欄版會在兩段之間換行 */
  titleLines: ['把醫院等級的照護，', '帶到家人身邊'],
  subtitle: '想讓您與家人在醫院外也能享有卓越且充滿關懷的專業照護。',
  primaryCta: { label: '預約諮詢', href: '#contact' },
  secondaryCta: { label: '查看收費', href: '#pricing' },
  highlight: { big: '24小時', small: '全天候服務' },
}

// ───────── 關於我們 ─────────
export const about = {
  eyebrow: 'ABOUT',
  title: '關於我們',
  paragraphs: [
    {
      title: '由臨床護理師組成的照護團隊',
      body: '特別護士由三位資深臨床護理師創立。我們熟悉病房裡的每一個細節，也明白家屬在照護路上的疲憊與不安，因此把專業護理帶出醫院，讓您的家人在熟悉的環境中，持續獲得安心、穩定的照顧。',
    },
    {
      title: '不只是陪伴，更是專業',
      body: '我們的護理師皆具備國家考試核可的護理師證書，擁有多個科別的臨床經驗。從術後傷口護理、管路照護到日常健康監測，每一項服務都依照病人的狀況量身規劃。',
    },
    {
      title: '讓家人放心，也讓您喘口氣',
      body: '照顧一個人需要體力，也需要知識。把專業的部分交給我們，您可以把時間留給陪伴與相處。有任何照護需求，歡迎與我們聯絡。',
    },
  ],
}

// ───────── 服務項目 ─────────
export const services = {
  eyebrow: 'SERVICES',
  title: '服務項目內容',
  items: [
    { title: '特別護理師/特別護士/私人護理師' },
    { title: '住院陪病/術前術後照護' },
    { title: '就醫陪同/洗腎陪同' },
    { title: '出國/國內陪伴' },
    // TODO 待業主確認：原文為「特別理師」，疑為「特別護理師」
    { title: '嬰幼兒/病童 特別護理師' },
    { title: '外傭請假/回國空窗填補' },
    { title: '衛教指導/健康促進' },
    { title: '提供代購醫療器材及輔具優惠', note: '(電動床、製氧機、抽痰機)' },
    { title: '無障礙環境空間設計改造' },
  ] as { title: string; note?: string }[],
  extra: {
    tag: '另外',
    text: '另外本公司提供救護站設置(活動醫療站護理師)服務',
  },
}

// ───────── 收費標準 ─────────
export const pricing = {
  eyebrow: 'PRICING',
  title: '收費標準',
  plans: [
    { name: '日間', time: '8:00~20:00', price: '500', unit: '元 / 每小時', note: '日間12小時為6000元', featured: false },
    { name: '夜間', time: '20:00~8:00', price: '550', unit: '元 / 每小時', note: '夜間12小時為6600元', featured: false },
    { name: '24小時制', time: '全日班', price: '12,600', unit: '元', note: '全日班費用爲12,600元。', featured: true },
  ],
  notes: [
    '聘任照護行為最低時數為8小時(不足8小時費用以8小時計算)。',
    '聘任陪同就醫最低時數為6小時(不足6小時費用以6小時計算)。',
    '聘任費用於聘任日起每7日結算一次，聘任低於7日，則結案日结清。',
  ],
  specialTitle: '特殊收費',
  special: [
    { title: '雙倍薪資', items: ['過年期間除夕~初五', '出國就醫陪同／(乙方須負擔機票及住宿伙食費)'] },
    { title: '1.5倍薪資', items: ['負壓/隔離病房', '颱風天上班地區公布停班停課'] },
    { title: '偏遠地區', items: ['視地點評估補貼車馬費'] },
  ],
  addonsTitle: '附加服務',
  addons: ['無障礙環境設計與改造', '特約診所合作', '救護車轉院/緊急配合'],
}

// ───────── 特護與一般看護的差異 ─────────
export const compare = {
  eyebrow: 'COMPARE',
  title: '特護與一般看護的差異',
  headers: ['服務內容', '特聘護理師', '一般看護'] as const,
  rows: [
    ['時薪範圍', '約500~550元', '約300~480元'],
    ['專業證照', '擁有國家考試核可護理師證書', '具備培訓證明或結業證書'],
    ['角色定位', '專業人員 臨床急重症照護經驗豐富', '半專業人員 提供日常生活及身體照顧'],
    ['照護內容', '術前後照護、傷口護理、管路照護、無菌抽痰技術', '一般健康監測'],
    ['緊急處置', '具高級心臟救命術證照，緊急情況下可進行專業醫療處置', '基礎應急反應'],
    ['在職教育', '定期接受專業進修與更新知識', '較少專業進修機會'],
    ['個人化服務', '病人狀況評估與個人化照護計畫', '照護與陪伴'],
  ],
}

// ───────── 為什麼選擇我們 ─────────
export const why = {
  eyebrow: 'WHY US',
  title: '為什麼選擇我們?',
  items: [
    { title: '合法立案', body: '作為一家合法立案的公司，我們以誠信和專業為基石，提供您值得信賴的服務。' },
    { title: '多科別專業團隊，廣泛經驗', body: '我們的照護團隊擁有多科別專業護理師及豐富的臨床經驗，能精確對應您或您家人的健康需求。' },
    { title: '24小時全天候服務', body: '日常與緊急護理：我們提供全天候護理服務，無論是日常照護還是緊急情況，我們隨時準備為您服務，確保無時無刻都有專業人員在您身邊。' },
    { title: '持續在職教育', body: '專業成長與教育：我們重視每位護理師的專業成長和教育，定期進行培訓以保持業界領先的護理技術和知識。' },
    { title: '承諾卓越的客戶服務', body: '個別性的照護計畫：從初次諮詢到持續護理，每一步都提供專人服務，確保您感受到我們的關懷與專業。' },
  ],
}

// ───────── 聯絡我們 ─────────
export const contactSection = {
  title: '如果您也認同照護應該是充滿溫度與愛，請聯絡我們。',
  phoneLabel: '電話諮詢',
  lineLabel: 'LINE 諮詢',
}

// ───────── 頁尾 ─────────
export const footer = {
  left: 'Elite Care 特別護士',
  right: '合法立案 · 24小時全天候服務',
}
