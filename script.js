const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const LANGUAGE_STORAGE_KEY = "echomind-language";

const zh = {
  htmlLang: "zh-Hant",
  title: "EchoMind | 情緒作業系統",
  metaDescription:
    "EchoMind 是專為 Z 世代設計的 AI 驅動預防性情緒智能系統，將情緒穩定能力隱藏於智慧型耳機之中。",
  navLabel: "主要導覽",
  languageLabel: "語言切換",
  menuOpenLabel: "開啟導覽",
  menuCloseLabel: "關閉導覽",
  searchPlaceholder: "搜尋支援、條款、隱私...",
  searchEmpty: "找不到對應內容，請試試 support、privacy 或 legal。",
  searchSections: [
    { title: "系統", meta: "生理訊號、動態聲音與同意後支援", href: "#system" },
    { title: "功能", meta: "探索即時偵測、音訊調節與情緒儀表板", href: "#features" },
    { title: "壓力地圖", meta: "查看每日波動、每週熱點與模式洞察", href: "#dashboard" },
    { title: "產品支援", meta: "啟用協助、校園部署與信任安全", href: "product-support.html" },
    { title: "使用條款", meta: "了解產品使用邊界與責任", href: "terms-of-use.html" },
    { title: "隱私權政策", meta: "查看資料使用、同意機制與刪除權限", href: "privacy-policy.html" },
    { title: "法律聲明", meta: "確認非醫療定位與危機支援界線", href: "legal-disclaimer.html" }
  ],
  nav: ["系統", "功能", "壓力地圖", "支援"],
  headerCta: "預約體驗",
  hero: {
    eyebrow: "AI 驅動預防性情緒智能",
    subtitle: "把情緒穩定，變成每天戴上的能力。",
    body:
      "專為高壓 Z 世代打造的情緒作業系統，隱藏於智慧型耳機之中。它在壓力失控前先察覺、先調節、先把你帶回穩定。",
    actions: ["探索核心功能", "查看適用場景"],
    metricValues: ["15-22", "64%", "4 層"],
    metricLabels: ["主要客群年齡帶", "青少年低潮時以音樂自我應對", "從偵測到升級支援的完整介入梯度"]
  },
  statement: {
    eyebrow: "預防，而非反應",
    title: "不是在崩潰之後安慰你，而是在失控之前先安靜下來。",
    body:
      "EchoMind 不是需要你主動打開的心理健康 App，也不是帶有距離感的治療工具。它無縫存在於你本來就會戴上的耳機中，在情緒混亂累積成風暴前，先做一次心理主動降噪。"
  },
  problem: {
    eyebrow: "為什麼是現在",
    title: "這不是少數人的情緒問題，而是數位世代每天都在累積的系統性壓力。",
    body:
      "真正的問題不只是青少年有壓力，而是壓力通常無形、持續，而且沒被即時管理。當療癒工具仍要求使用者主動求助時，日常生活裡缺少的其實是一套可即時偵測、低污名、自然融入習慣的預防性系統。",
    cards: [
      {
        value: "1 in 7",
        title: "全球青少年正面臨心理健康困擾",
        body: "世界衛生組織指出，約每 7 位青少年就有 1 位經歷心理健康障礙，焦慮與憂鬱最常見。"
      },
      {
        value: "44%",
        title: "高中生曾長期感到悲傷或絕望",
        body: "CDC 資料顯示，近一半美國高中生在 2021 年回報持續性的悲傷或無望感。"
      },
      {
        value: "64%",
        title: "心情低落時會直接戴上耳機聽音樂",
        body: "音樂早已是青少年最自然的情緒應對方式，但目前仍停留在被動、沒有結構的自我安撫。"
      },
      {
        value: "0",
        title: "現有工具能在壓力升高時即時介入",
        body: "多數心理健康解法仍依賴使用者主動打開 App 或尋求協助，無法在失衡前即刻回應。"
      }
    ]
  },
  explode: {
    eyebrow: "拆解視圖",
    layerLabel: "層級",
    title: "把 EchoMind 拆開，看見真正埋在耳機裡的情緒作業系統。",
    body:
      "從外殼、感測層、聲學核心到電源與連線模組，每一層都不是炫技，而是為了更早讀懂壓力、更自然介入情緒變化。",
    labels: ["聲學外殼", "生理感測環", "自適應音訊核心", "電源與連線柄部"],
    steps: [
      {
        title: "聲學外殼",
        body: "以柔和包覆與聲學結構降低外界噪訊，替後續情緒調節保留更乾淨的聲音環境。"
      },
      {
        title: "生理感測環",
        body: "在耳道穩定位置持續讀取 GSR、HRV 與動作訊號，建立使用者專屬的情緒基準線。"
      },
      {
        title: "自適應音訊核心",
        body: "將即時生理變化轉成聲音決策：慢下 BPM、加入接地低頻、提示呼吸節奏。"
      },
      {
        title: "電源與連線柄部",
        body: "負責續航、低延遲同步與安全連接 App，讓支援升級與壓力分析形成閉環。"
      }
    ]
  },
  features: {
    signalLabel: "訊號",
    panelCaptions: ["生理訊號捕捉", "自適應聲音工程", "壓力地圖洞察", "同意後升級支援"],
    sectionEyebrow: "隱藏式情緒作業系統",
    sectionTitle: "讓生理訊號、聲音工程與人性化支援同步工作。",
    sectionBody:
      "從耳道內部的即時生物回饋，到音訊層的細緻動態調節，再到必要時的升級介入，EchoMind 將原本被動的聽音樂紓壓，升級為有結構的情緒穩定系統。",
    cards: [
      {
        title: "即時生物辨識偵測",
        body: "醫療級膚電活動感測器追蹤 GSR、心率變異與動作狀態，建立個人化情緒基準線，於壓力飆升的第一時間辨識異常。"
      },
      {
        title: "動態聲音工程",
        body: "當心率上升、呼吸變淺或動作變得焦躁，系統會即時重塑音場：降低 BPM、加入接地低頻、提示呼吸節奏，並平滑切換到平靜播放清單。"
      },
      {
        title: "情緒視覺化儀表板",
        body: "每日波動圖、每週壓力熱點、觸發模式與恢復時間追蹤，讓壓力不再只是模糊感受，而是可以理解的模式。"
      },
      {
        title: "分級升級支援系統",
        body: "當壓力持續不降，系統會進一步提供引導式呼吸、接地練習，並在同意下連接校園諮商、遠距醫療或信任聯絡人。"
      }
    ]
  },
  sound: {
    eyebrow: "會回應你的聲音系統",
    title: "每一次調整，都不是播放更大聲，而是讓身體重新回到可承受的頻率。",
    playlistPill: "平靜歌單切換",
    cards: [
      {
        title: "心率飆升",
        body: "降低音樂 BPM，加入更深的低頻接地音，讓節奏先放慢，你的內部節拍再跟上。"
      },
      {
        title: "呼吸急促",
        body: "嵌入近乎無感的節奏提示，引導呼吸逐步回穩，而不是用強提醒打斷當下情境。"
      },
      {
        title: "動作焦躁",
        body: "啟動穩定型音效分層，用更平整的聲音邊界降低感官負荷，幫助注意力重新聚焦。"
      },
      {
        title: "平順切換",
        body: "在不打斷使用者沉浸感的前提下，無縫過渡到預設平靜歌單，把介入做得像空氣一樣自然。"
      }
    ]
  },
  dashboard: {
    eyebrow: "壓力地圖儀表板",
    title: "把看不見的壓力，變成能理解、能回顧、能提前準備的模式。",
    body:
      "EchoMind App 讓每日情緒波動、每週壓力熱點與高峰時段一目了然。它不只告訴你今天累，而是告訴你壓力何時開始、被什麼觸發，以及你需要多久才恢復。",
    topbar: ["今天", "壓力地圖", "09:42"],
    dailyWaveLabel: "每日波動",
    dailyWaveStatus: "18 分鐘恢復穩定",
    hotspotLabel: "每週熱點",
    hotspotStatus: "週二 / 週四 · 14:00 - 17:00",
    insightTag: "模式洞察",
    insights: [
      "壓力高峰與學業表現時段重疊，運動後 25 分鐘恢復速度最快。",
      "週二下午是高風險時段，提早切換平靜歌單可縮短恢復時間。",
      "睡眠不足時，心率飆升與呼吸急促更容易同步出現，建議提前介入。"
    ]
  },
  support: {
    eyebrow: "經同意後的升級支援",
    title: "當壓力不是一段聲音就能解決，系統會知道什麼時候該升級支援。",
    cards: [
      {
        title: "輕量重置",
        body: "首先以最輕量的方式介入：調音、呼吸節奏提示、接地練習，不打斷學習或生活節奏。"
      },
      {
        title: "引導恢復",
        body: "若壓力訊號持續不降，系統會啟動更完整的引導式穩定流程，協助使用者重新獲得控制感。"
      },
      {
        title: "信任連結",
        body: "在使用者授權下，銜接校園諮商、遠距醫療或信任聯絡人，把預防性系統延伸到真實支持網絡。"
      }
    ]
  },
  audience: [
    {
      eyebrow: "為學生而設計",
      title: "為每天戴著耳機、卻未必看得見壓力累積的 Z 世代而設計。",
      body: "15 至 22 歲的高中生、大學生與國際學生，早已習慣用耳機和音樂陪自己度過壓力時刻。EchoMind 把這個既有習慣，升級成真正有用的預防性支持。"
    },
    {
      eyebrow: "為機構而設計",
      title: "作為校園的情緒基礎設施，而不是單次事件後的補救方案。",
      body: "私立高中、大學、寄宿學校與諮商中心可透過 B2B2C 模式導入 EchoMind，將情緒支持前移到日常，降低污名感，也提升觸及率與早期介入機會。"
    }
  ],
  supportHub: {
    eyebrow: "產品支援",
    title: "把產品支援做得像產品本身一樣清楚、安靜、可靠。",
    body: "從首次配對、校園導入到使用者隱私與安全設定，EchoMind 提供一套完整支援體驗，讓學生、家長與機構都能放心使用。",
    cards: [
      {
        kicker: "01",
        title: "使用者啟用",
        body: "協助完成配對、情緒基準線建立、Calm Playlist 設定與第一次壓力調節體驗。",
        link: "取得啟用協助"
      },
      {
        kicker: "02",
        title: "校園部署",
        body: "提供校方與諮商中心導入流程、管理儀表板說明、同意機制與支援升級規範。",
        link: "洽詢校園方案"
      },
      {
        kicker: "03",
        title: "信任與安全",
        body: "快速查看資料權限、隱私設定、裝置安全機制與何時會啟用升級支援。",
        link: "查看隱私控制"
      }
    ],
    communityKicker: "社群",
    communityText: "追蹤最新產品更新、教育內容與校園合作動態。"
  },
  policy: {
    eyebrow: "信任中心",
    title: "清楚列出使用條款、隱私權政策與法律聲明，因為情緒資料值得更高標準。",
    body: "EchoMind 的體驗核心是信任。我們把資料使用、產品邊界與支援責任寫清楚，讓個人與機構都能理解這套系統如何被使用、保護與管理。",
    terms: {
      kicker: "使用條款",
      title: "使用條款",
      link: "查看完整條款",
      items: [
        "EchoMind 提供預防性情緒調節，不取代臨床診斷或治療。",
        "未成年使用者應依地區規範完成監護人或校方同意流程。",
        "使用者需對裝置安全、帳號存取與授權連結負責。",
        "違反安全或濫用規範時，部分功能可能被限制或停用。"
      ]
    },
    privacy: {
      kicker: "隱私權政策",
      title: "隱私權政策",
      link: "查看完整隱私權政策",
      items: [
        "僅收集必要的生理訊號、裝置互動與恢復趨勢資料。",
        "資料主要用於即時介入、個人化基準線與產品安全改進。",
        "信任聯絡人、校園支援或遠距醫療連結需在明確同意下啟用。",
        "使用者可檢視、匯出、撤回或刪除可管理的個人資料。"
      ]
    },
    legal: {
      kicker: "法律聲明",
      title: "法律聲明",
      link: "查看完整法律聲明",
      body: "EchoMind 目前定位為預防性情緒智能與支援產品，不宣稱提供醫療診斷、急救服務或危機處理替代方案。",
      items: [
        "若使用者處於立即危險、傷害風險或心理危機，應直接聯絡當地緊急服務或專業支援。",
        "校園、諮商與遠距醫療串接功能可能因地區法規、機構政策或合作狀態而不同。",
        "產品畫面與洞察屬資訊輔助，不應被視為醫療建議、法律意見或保證結果。",
        "實際可用功能、資料保留政策與支援流程，應以正式合約與最新政策版本為準。"
      ]
    }
  },
  closing: {
    eyebrow: "為何是 EchoMind",
    title: "不是另一個要你自己記得打開的心理健康工具。",
    body: "它預防、無縫、貼近日常習慣。當現有解法仍停留在被動回應時，EchoMind 已開始主動守住每一次快要失衡的瞬間。",
    strip: ["預防式設計", "無縫融入日常", "低污名支援", "為 Z 世代節奏而生"]
  },
  cta: {
    eyebrow: "EchoMind",
    title: "把情緒照護，做得像戴上耳機一樣自然。",
    body: "為新一代學生、校園與照護系統打造的預防性情緒智能產品。",
    actions: ["聯絡團隊", "回到頂部"]
  },
  footer: {
    tagline: "為已經活在耳機裡的一代而設計的預防性情緒智能。",
    links: ["產品支援", "使用條款", "隱私權政策", "法律聲明", "社群媒體"],
    fineprint: "© 2026 EchoMind. Mental Active Noise Cancellation 是產品概念描述，不代表醫療結果承諾。"
  }
};

const en = {
  htmlLang: "en",
  title: "EchoMind | Emotional Operating System",
  metaDescription:
    "EchoMind is an AI-driven preventive emotional intelligence system for Gen Z, hidden inside smart earbuds to detect stress early and respond in real time.",
  navLabel: "Primary navigation",
  languageLabel: "Language switcher",
  menuOpenLabel: "Open navigation",
  menuCloseLabel: "Close navigation",
  searchPlaceholder: "Search support, terms, privacy...",
  searchEmpty: "No matching section found. Try support, privacy, or legal.",
  searchSections: [
    { title: "System", meta: "Biometrics, adaptive sound, and escalation logic", href: "#system" },
    { title: "Features", meta: "Real-time detection, sound response, and emotional dashboard", href: "#features" },
    { title: "Stress Map", meta: "Daily waves, weekly hotspots, and pattern insight", href: "#dashboard" },
    { title: "Product Support", meta: "Onboarding, campus rollout, and trust controls", href: "product-support.html" },
    { title: "Terms of Use", meta: "Product boundaries, access, and user responsibility", href: "terms-of-use.html" },
    { title: "Privacy Policy", meta: "Data use, consent, export, and deletion controls", href: "privacy-policy.html" },
    { title: "Legal Disclaimer", meta: "Non-medical positioning and crisis boundaries", href: "legal-disclaimer.html" }
  ],
  nav: ["System", "Features", "Stress Map", "Support"],
  headerCta: "Book a Demo",
  hero: {
    eyebrow: "AI-Driven Preventive Emotional Intelligence",
    subtitle: "The emotional stability system you wear every day.",
    body:
      "Built for high-pressure Gen Z lives and hidden inside smart earbuds, EchoMind senses pressure early, regulates in real time, and guides you back to steady before overwhelm takes over.",
    actions: ["Explore Core Features", "See Use Cases"],
    metricValues: ["15-22", "64%", "4 layers"],
    metricLabels: ["Core age range", "of teens turn to music when overwhelmed", "layers from detection to support"]
  },
  statement: {
    eyebrow: "Prevention, not reaction",
    title: "Not comfort after the breakdown. Calm before the spiral.",
    body:
      "EchoMind is not another wellness app that asks users to open it first. It lives inside the headphones they already wear and performs mental active noise cancellation before stress becomes collapse."
  },
  problem: {
    eyebrow: "Why now",
    title: "This is not a niche emotional issue. It is a systemic pressure pattern built into modern digital teenage life.",
    body:
      "The deeper problem is not only that teens are stressed. It is that stress is invisible, constant, and unmanaged. While most solutions still require users to ask for help first, what is missing is a real-time, stigma-light, preventive system that fits naturally into behavior they already trust.",
    cards: [
      {
        value: "1 in 7",
        title: "adolescents globally experience mental health disorders",
        body: "The World Health Organization estimates that around one in seven adolescents live with mental health conditions, with anxiety and depression among the most common."
      },
      {
        value: "44%",
        title: "of US high school students reported persistent sadness",
        body: "CDC data shows that nearly half of US high school students reported sustained feelings of sadness or hopelessness in 2021."
      },
      {
        value: "64%",
        title: "of teens use music as their go-to coping tool",
        body: "Music is already a trusted emotional regulation habit, but it remains passive and unstructured without real-time stress detection."
      },
      {
        value: "0",
        title: "seamless tools intervene the moment stress begins rising",
        body: "Most mental health products still depend on manual app use or explicit help-seeking, which often fails in the exact moment support is needed."
      }
    ]
  },
  explode: {
    eyebrow: "Exploded view",
    layerLabel: "Layer",
    title: "Pull EchoMind apart and reveal the emotional operating system inside the earbud.",
    body:
      "From the acoustic shell to the sensor ring, adaptive audio core, and connection stem, each layer exists to detect stress earlier and intervene more naturally.",
    labels: ["Acoustic Shell", "Biometric Sensor Ring", "Adaptive Audio Core", "Power + Connection Stem"],
    steps: [
      {
        title: "Acoustic Shell",
        body: "A protective outer structure that softens environmental noise and creates a cleaner foundation for precise emotional audio modulation."
      },
      {
        title: "Biometric Sensor Ring",
        body: "Continuously reads GSR, HRV, and movement signals from a stable in-ear position to maintain a personal emotional baseline."
      },
      {
        title: "Adaptive Audio Core",
        body: "Translates live physiological change into sound decisions: slower BPM, grounding low-end, and subtle breathing cues."
      },
      {
        title: "Power + Connection Stem",
        body: "Handles battery life, low-latency syncing, and secure app connectivity so escalation support and insights stay in one closed loop."
      }
    ]
  },
  features: {
    signalLabel: "Signal",
    panelCaptions: ["Biometric Signal Capture", "Adaptive Sound Engineering", "Stress Map Intelligence", "Escalation With Consent"],
    sectionEyebrow: "A hidden emotional OS",
    sectionTitle: "Biometrics, sound engineering, and human support working in sync.",
    sectionBody:
      "From in-ear biofeedback to adaptive audio shaping and escalation when needed, EchoMind transforms passive music coping into a structured emotional stability system.",
    cards: [
      {
        title: "Real-time Biometric Detection",
        body: "Medical-grade electrodermal sensing tracks GSR, heart-rate variability, and movement to build a personal emotional baseline and catch stress the moment it spikes."
      },
      {
        title: "Dynamic Sound Engineering",
        body: "When heart rate rises, breathing shortens, or movement becomes restless, EchoMind reshapes the soundscape in real time with slower BPM, grounding low-end, breathing cues, and a smooth route into a calm playlist."
      },
      {
        title: "Stress Map Dashboard",
        body: "Daily waves, weekly hotspots, trigger patterns, and recovery time make stress visible instead of vague."
      },
      {
        title: "Tiered Support Escalation",
        body: "If stress stays elevated, the system escalates to guided breathing, grounding exercises, and consent-based connection to counselors, telehealth, or trusted contacts."
      }
    ]
  },
  sound: {
    eyebrow: "Sound that responds to you",
    title: "Every adjustment is designed to lower internal noise, not just play louder audio.",
    playlistPill: "Calm Playlist Routing",
    cards: [
      {
        title: "Heart Rate Spike",
        body: "Slow the BPM and introduce deeper grounding tones so your body can settle back into a manageable rhythm."
      },
      {
        title: "Rapid Breathing",
        body: "Add subtle pulse cues that guide breathing back to steadier pacing without jolting the user out of the moment."
      },
      {
        title: "Restless Motion",
        body: "Deploy stabilizing audio layers that reduce sensory overload and help focus re-center."
      },
      {
        title: "Smooth Transition",
        body: "Shift seamlessly into the user's calm playlist so intervention feels invisible and continuous."
      }
    ]
  },
  dashboard: {
    eyebrow: "Stress map dashboard",
    title: "Turn invisible pressure into patterns you can see, understand, and prepare for.",
    body:
      "The EchoMind app surfaces daily emotional variation, weekly hotspots, trigger patterns, peak hours, and recovery timelines. It doesn't just say you're stressed; it shows when it starts, what triggers it, and how long it takes to recover.",
    topbar: ["Today", "Stress Map", "09:42"],
    dailyWaveLabel: "Daily Wave",
    dailyWaveStatus: "Calm restored in 18 min",
    hotspotLabel: "Weekly Hotspots",
    hotspotStatus: "Tue / Thu · 2:00 - 5:00 PM",
    insightTag: "Pattern Insight",
    insights: [
      "Stress peaks overlap with performance-heavy study windows, while exercise shortens recovery time the most.",
      "Tuesday afternoons are the highest-risk period, and an earlier calm-playlist switch reduces recovery time.",
      "When sleep debt increases, heart-rate spikes and shallow breathing appear together more often, suggesting earlier intervention."
    ]
  },
  support: {
    eyebrow: "Escalation with consent",
    title: "When sound alone is not enough, the system knows when to step support up.",
    cards: [
      {
        title: "Gentle Reset",
        body: "Start with the lightest intervention: audio tuning, breathing cues, grounding, and no disruption to study or daily flow."
      },
      {
        title: "Guided Recovery",
        body: "If pressure remains high, EchoMind unlocks a fuller guided stabilization sequence to restore a sense of control."
      },
      {
        title: "Trusted Connection",
        body: "With consent, EchoMind can connect the user to campus counseling, telehealth, or a trusted person."
      }
    ]
  },
  audience: [
    {
      eyebrow: "For students",
      title: "Designed for the Gen Z users who already live in headphones but rarely see stress building in real time.",
      body: "Students aged 15 to 22 already rely on music to get through pressure. EchoMind turns that familiar habit into preventive emotional support."
    },
    {
      eyebrow: "For institutions",
      title: "Built as emotional infrastructure for campuses, not as a reactive fix after the crisis.",
      body: "Private schools, universities, boarding schools, and counseling centers can adopt EchoMind in a B2B2C model to move support earlier, reduce stigma, and expand early intervention."
    }
  ],
  supportHub: {
    eyebrow: "Product support",
    title: "Make support as clear, quiet, and reliable as the product itself.",
    body: "From first pairing to campus rollout and privacy controls, EchoMind includes a full support layer so students, parents, and institutions can adopt it with confidence.",
    cards: [
      {
        kicker: "01",
        title: "User onboarding",
        body: "Get help with pairing, emotional baseline setup, calm playlist routing, and the first guided regulation session.",
        link: "Get onboarding help"
      },
      {
        kicker: "02",
        title: "Campus deployment",
        body: "Review rollout guides, admin dashboard setup, consent models, and escalation protocols for schools and counseling teams.",
        link: "Talk to campus team"
      },
      {
        kicker: "03",
        title: "Trust and safety",
        body: "Quickly review data permissions, privacy controls, device safeguards, and the moments when escalation support can activate.",
        link: "View privacy controls"
      }
    ],
    communityKicker: "Community",
    communityText: "Follow product updates, educational content, and campus partnership news."
  },
  policy: {
    eyebrow: "Trust center",
    title: "Clear terms, privacy, and legal boundaries, because emotional data deserves a higher bar.",
    body: "Trust is core to the EchoMind experience. We make data use, product boundaries, and support responsibilities explicit so individuals and institutions can understand how the system is used, protected, and governed.",
    terms: {
      kicker: "Terms of Use",
      title: "Terms of Use",
      link: "Read full terms",
      items: [
        "EchoMind provides preventive emotional regulation and does not replace clinical diagnosis or treatment.",
        "Minor users may require guardian or institutional consent based on local policy.",
        "Users are responsible for device security, account access, and authorized connections.",
        "Safety violations or misuse may result in restricted or disabled features."
      ]
    },
    privacy: {
      kicker: "Privacy Policy",
      title: "Privacy Policy",
      link: "Read full privacy policy",
      items: [
        "Only necessary biometric signals, device interactions, and recovery-trend data are collected.",
        "Data is used primarily for real-time intervention, personal baselines, and product safety improvement.",
        "Trusted contacts, campus support, or telehealth links activate only with explicit consent.",
        "Users can review, export, withdraw, or delete manageable personal data."
      ]
    },
    legal: {
      kicker: "Legal Disclaimer",
      title: "Legal Disclaimer",
      link: "Read full legal disclaimer",
      body: "EchoMind is positioned as a preventive emotional intelligence and support product. It does not claim to provide medical diagnosis, emergency response, or crisis intervention replacement.",
      items: [
        "If a user is in immediate danger or crisis, contact local emergency or professional support directly.",
        "Campus, counseling, and telehealth integrations may vary by jurisdiction, institutional policy, or partnership status.",
        "Product visuals and insights are informational aids and should not be treated as medical advice, legal advice, or guaranteed outcomes.",
        "Actual feature availability, retention policies, and support flows are governed by formal agreements and the latest published policy versions."
      ]
    }
  },
  closing: {
    eyebrow: "Why EchoMind",
    title: "Not another mental health tool users have to remember to open.",
    body: "It is preventive, seamless, and woven into a daily habit. While most solutions wait to respond after the fact, EchoMind protects the moments just before balance slips.",
    strip: ["Preventive by design", "Seamless in daily life", "Stigma-light support", "Built for Gen Z routines"]
  },
  cta: {
    eyebrow: "EchoMind",
    title: "Make emotional care feel as natural as putting on your earbuds.",
    body: "Preventive emotional intelligence built for the next generation of students, campuses, and care systems.",
    actions: ["Contact Team", "Back to Top"]
  },
  footer: {
    tagline: "Preventive emotional intelligence for the generation that already lives in headphones.",
    links: ["Product Support", "Terms of Use", "Privacy Policy", "Legal Disclaimer", "Social Media"],
    fineprint: "© 2026 EchoMind. Mental Active Noise Cancellation is a product concept description, not a promise of medical outcome."
  }
};

const es = {
  htmlLang: "es",
  title: "EchoMind | Sistema Operativo Emocional",
  metaDescription:
    "EchoMind es un sistema de inteligencia emocional preventiva impulsado por IA para la Generación Z, integrado en audifonos inteligentes para detectar el estres temprano y responder en tiempo real.",
  navLabel: "Navegacion principal",
  languageLabel: "Selector de idioma",
  menuOpenLabel: "Abrir navegacion",
  menuCloseLabel: "Cerrar navegacion",
  searchPlaceholder: "Buscar soporte, terminos, privacidad...",
  searchEmpty: "No se encontro contenido relacionado. Prueba soporte, privacidad o legal.",
  searchSections: [
    { title: "Sistema", meta: "Biometria, audio adaptativo y apoyo con consentimiento", href: "#system" },
    { title: "Funciones", meta: "Deteccion en tiempo real, respuesta sonora y panel emocional", href: "#features" },
    { title: "Mapa de Estres", meta: "Ondas diarias, puntos criticos semanales y patrones", href: "#dashboard" },
    { title: "Soporte del Producto", meta: "Activacion, despliegue en campus y controles de confianza", href: "product-support.html" },
    { title: "Terminos de Uso", meta: "Limites del producto y responsabilidad del usuario", href: "terms-of-use.html" },
    { title: "Politica de Privacidad", meta: "Uso de datos, consentimiento, exportacion y borrado", href: "privacy-policy.html" },
    { title: "Aviso Legal", meta: "Posicionamiento no medico y limites ante crisis", href: "legal-disclaimer.html" }
  ],
  nav: ["Sistema", "Funciones", "Mapa de Estres", "Soporte"],
  headerCta: "Reservar demo",
  hero: {
    eyebrow: "Inteligencia emocional preventiva impulsada por IA",
    subtitle: "La estabilidad emocional que llevas puesta cada dia.",
    body:
      "Disenado para la vida de alta presion de la Generacion Z e integrado en audifonos inteligentes, EchoMind detecta la presion temprano, regula en tiempo real y te ayuda a volver al equilibrio antes de que el agobio tome el control.",
    actions: ["Explorar funciones clave", "Ver casos de uso"],
    metricValues: ["15-22", "64%", "4 capas"],
    metricLabels: ["Rango de edad principal", "de jovenes recurren a la musica cuando se sienten sobrepasados", "capas desde la deteccion hasta el apoyo"]
  },
  statement: {
    eyebrow: "Prevencion, no reaccion",
    title: "No consuelo despues del colapso. Calma antes de la espiral.",
    body:
      "EchoMind no es otra app de bienestar que exige abrirla primero. Vive dentro de los audifonos que los usuarios ya llevan puestos y realiza una cancelacion activa del ruido mental antes de que el estres se convierta en colapso."
  },
  problem: {
    eyebrow: "Por que ahora",
    title: "No es un problema emocional de unos pocos. Es un patron sistemico de presion en la vida digital de hoy.",
    body:
      "El problema de fondo no es solo que los jovenes tengan estres. Es que el estres es invisible, constante y no se gestiona a tiempo. Mientras la mayoria de soluciones siguen exigiendo pedir ayuda primero, lo que falta es un sistema preventivo, discreto y en tiempo real que encaje de forma natural en un habito que ya existe.",
    cards: [
      {
        value: "1 in 7",
        title: "adolescentes en el mundo viven con trastornos de salud mental",
        body: "La OMS estima que aproximadamente uno de cada siete adolescentes vive con condiciones de salud mental, siendo la ansiedad y la depresion algunas de las mas comunes."
      },
      {
        value: "44%",
        title: "de estudiantes de secundaria en EE. UU. reportaron tristeza persistente",
        body: "Datos de los CDC muestran que casi la mitad de los estudiantes de secundaria en Estados Unidos reportaron sentimientos sostenidos de tristeza o desesperanza en 2021."
      },
      {
        value: "64%",
        title: "de los jovenes usan la musica como mecanismo principal de afrontamiento",
        body: "La musica ya es un habito confiable de regulacion emocional, pero sigue siendo pasivo y desestructurado sin deteccion de estres en tiempo real."
      },
      {
        value: "0",
        title: "herramientas fluidas intervienen justo cuando el estres empieza a subir",
        body: "La mayoria de productos de salud mental todavia dependen del uso manual de una app o de pedir ayuda de forma explicita, justo cuando ese apoyo es mas dificil de activar."
      }
    ]
  },
  explode: {
    eyebrow: "Vista explotada",
    layerLabel: "Capa",
    title: "Abre EchoMind y revela el sistema operativo emocional dentro del audifono.",
    body:
      "Desde la carcasa acustica hasta el anillo sensorial, el nucleo de audio adaptativo y el tallo de conexion, cada capa existe para detectar el estres antes e intervenir de forma mas natural.",
    labels: ["Carcasa Acustica", "Anillo Sensor Biometrico", "Nucleo de Audio Adaptativo", "Tallo de Energia y Conexion"],
    steps: [
      {
        title: "Carcasa Acustica",
        body: "Una estructura exterior protectora que suaviza el ruido del entorno y crea una base mas limpia para una modulacion emocional precisa."
      },
      {
        title: "Anillo Sensor Biometrico",
        body: "Lee continuamente GSR, HRV y movimiento desde una posicion estable dentro del oido para mantener una linea base emocional personal."
      },
      {
        title: "Nucleo de Audio Adaptativo",
        body: "Convierte los cambios fisiologicos en decisiones sonoras: BPM mas lento, graves de anclaje y sutiles guias de respiracion."
      },
      {
        title: "Tallo de Energia y Conexion",
        body: "Gestiona bateria, sincronizacion de baja latencia y conexion segura con la app para que el apoyo escalado y los insights funcionen en un mismo circuito."
      }
    ]
  },
  features: {
    signalLabel: "Senal",
    panelCaptions: ["Captura de Senales Biometricas", "Ingenieria de Sonido Adaptativa", "Inteligencia del Mapa de Estres", "Escalamiento con Consentimiento"],
    sectionEyebrow: "Un sistema emocional oculto",
    sectionTitle: "Biometria, ingenieria sonora y apoyo humano funcionando al mismo tiempo.",
    sectionBody:
      "Desde la biorespuesta dentro del oido hasta el modelado adaptativo del audio y el escalamiento cuando hace falta, EchoMind transforma la musica pasiva en un sistema estructurado de estabilidad emocional.",
    cards: [
      {
        title: "Deteccion Biometrica en Tiempo Real",
        body: "La sensorizacion electrodermal de grado clinico sigue GSR, variabilidad cardiaca y movimiento para construir una linea base emocional personal y detectar el estres justo cuando se dispara."
      },
      {
        title: "Ingenieria Sonora Dinamica",
        body: "Cuando sube la frecuencia cardiaca, la respiracion se acorta o el movimiento se vuelve inquieto, EchoMind remodela el paisaje sonoro en tiempo real con BPM mas lento, graves de anclaje, pistas respiratorias y un cambio fluido hacia una playlist calmante."
      },
      {
        title: "Panel del Mapa de Estres",
        body: "Ondas diarias, puntos criticos semanales, patrones de disparo y tiempo de recuperacion convierten el estres en algo visible y comprensible."
      },
      {
        title: "Escalamiento de Apoyo por Niveles",
        body: "Si el estres sigue alto, el sistema escala hacia respiracion guiada, ejercicios de anclaje y, con consentimiento, conexion con consejeros, telemedicina o personas de confianza."
      }
    ]
  },
  sound: {
    eyebrow: "Sonido que responde a ti",
    title: "Cada ajuste esta pensado para bajar el ruido interno, no solo para sonar mas fuerte.",
    playlistPill: "Cambio a Playlist Calmante",
    cards: [
      {
        title: "Pico de Frecuencia Cardiaca",
        body: "Reduce el BPM e introduce tonos graves de anclaje para que el cuerpo vuelva a un ritmo manejable."
      },
      {
        title: "Respiracion Acelerada",
        body: "Agrega pulsos sutiles que guian la respiracion hacia un ritmo mas estable sin sacar al usuario del momento."
      },
      {
        title: "Movimiento Inquieto",
        body: "Activa capas de audio estabilizadoras para reducir la sobrecarga sensorial y ayudar a recuperar el foco."
      },
      {
        title: "Transicion Fluida",
        body: "Pasa de forma imperceptible a la playlist calmante del usuario para que la intervencion se sienta continua e invisible."
      }
    ]
  },
  dashboard: {
    eyebrow: "Panel del mapa de estres",
    title: "Convierte la presion invisible en patrones que puedes ver, entender y anticipar.",
    body:
      "La app de EchoMind muestra variacion emocional diaria, puntos criticos semanales, patrones de disparo, horas pico y tiempos de recuperacion. No solo dice que estas estresado: muestra cuando empieza, que lo dispara y cuanto tardas en recuperarte.",
    topbar: ["Hoy", "Mapa de Estres", "09:42"],
    dailyWaveLabel: "Onda Diaria",
    dailyWaveStatus: "Calma recuperada en 18 min",
    hotspotLabel: "Puntos Criticos Semanales",
    hotspotStatus: "Mar / Jue · 14:00 - 17:00",
    insightTag: "Insight de Patron",
    insights: [
      "Los picos de estres coinciden con ventanas de estudio de alto rendimiento, y el ejercicio es lo que mas acorta la recuperacion.",
      "Las tardes del martes son el periodo de mayor riesgo, y cambiar antes a la playlist calmante reduce el tiempo de recuperacion.",
      "Cuando aumenta la deuda de sueno, los picos cardiacos y la respiracion superficial aparecen juntos con mayor frecuencia, lo que sugiere intervenir antes."
    ]
  },
  support: {
    eyebrow: "Escalamiento con consentimiento",
    title: "Cuando el sonido por si solo no basta, el sistema sabe cuando aumentar el apoyo.",
    cards: [
      {
        title: "Reinicio Suave",
        body: "Empieza con la intervencion mas ligera: ajuste de audio, respiracion guiada, anclaje y sin interrumpir el estudio ni el flujo diario."
      },
      {
        title: "Recuperacion Guiada",
        body: "Si la presion sigue alta, EchoMind activa una secuencia mas completa de estabilizacion guiada para recuperar la sensacion de control."
      },
      {
        title: "Conexion de Confianza",
        body: "Con consentimiento, EchoMind puede conectar al usuario con consejeria en campus, telemedicina o una persona de confianza."
      }
    ]
  },
  audience: [
    {
      eyebrow: "Para estudiantes",
      title: "Disenado para usuarios Gen Z que ya viven con audifonos, pero rara vez ven el estres formarse en tiempo real.",
      body: "Los estudiantes de 15 a 22 anos ya usan la musica para atravesar la presion. EchoMind convierte ese habito familiar en apoyo emocional preventivo."
    },
    {
      eyebrow: "Para instituciones",
      title: "Pensado como infraestructura emocional para campus, no como un arreglo reactivo despues de la crisis.",
      body: "Escuelas privadas, universidades, internados y centros de consejeria pueden adoptar EchoMind en un modelo B2B2C para mover el apoyo hacia antes, reducir el estigma y ampliar la intervencion temprana."
    }
  ],
  supportHub: {
    eyebrow: "Soporte del producto",
    title: "Haz que el soporte sea tan claro, silencioso y confiable como el producto mismo.",
    body: "Desde el primer emparejamiento hasta el despliegue en campus y los controles de privacidad, EchoMind incluye una capa de soporte completa para que estudiantes, familias e instituciones lo adopten con confianza.",
    cards: [
      {
        kicker: "01",
        title: "Activacion del usuario",
        body: "Recibe ayuda con el emparejamiento, la configuracion de la linea base emocional, la playlist calmante y la primera sesion guiada de regulacion.",
        link: "Obtener ayuda de activacion"
      },
      {
        kicker: "02",
        title: "Despliegue en campus",
        body: "Revisa guias de implementacion, configuracion del panel administrativo, modelos de consentimiento y protocolos de escalamiento para escuelas y equipos de consejeria.",
        link: "Hablar con el equipo de campus"
      },
      {
        kicker: "03",
        title: "Confianza y seguridad",
        body: "Consulta rapidamente permisos de datos, controles de privacidad, protecciones del dispositivo y los momentos en que el apoyo escalado puede activarse.",
        link: "Ver controles de privacidad"
      }
    ],
    communityKicker: "Comunidad",
    communityText: "Sigue novedades del producto, contenido educativo y noticias de colaboraciones con campus."
  },
  policy: {
    eyebrow: "Centro de confianza",
    title: "Terminos, privacidad y limites legales claros, porque los datos emocionales exigen un estandar mas alto.",
    body: "La confianza es central en la experiencia EchoMind. Hacemos explicitos el uso de datos, los limites del producto y las responsabilidades de apoyo para que personas e instituciones entiendan como se usa, protege y gobierna el sistema.",
    terms: {
      kicker: "Terminos de Uso",
      title: "Terminos de Uso",
      link: "Leer terminos completos",
      items: [
        "EchoMind ofrece regulacion emocional preventiva y no reemplaza el diagnostico ni el tratamiento clinico.",
        "Los usuarios menores pueden requerir consentimiento de tutores o de la institucion segun la normativa local.",
        "Los usuarios son responsables de la seguridad del dispositivo, el acceso a la cuenta y las conexiones autorizadas.",
        "El mal uso o las infracciones de seguridad pueden provocar funciones restringidas o desactivadas."
      ]
    },
    privacy: {
      kicker: "Politica de Privacidad",
      title: "Politica de Privacidad",
      link: "Leer politica de privacidad completa",
      items: [
        "Solo se recopilan senales biometricas necesarias, interacciones del dispositivo y datos de tendencias de recuperacion.",
        "Los datos se usan principalmente para intervencion en tiempo real, lineas base personales y mejora de seguridad del producto.",
        "Los contactos de confianza, apoyo en campus o enlaces de telemedicina se activan solo con consentimiento explicito.",
        "Los usuarios pueden revisar, exportar, retirar o eliminar los datos personales que se puedan gestionar."
      ]
    },
    legal: {
      kicker: "Aviso Legal",
      title: "Aviso Legal",
      link: "Leer aviso legal completo",
      body: "EchoMind esta posicionado como un producto de inteligencia emocional preventiva y apoyo. No afirma ofrecer diagnostico medico, respuesta de emergencia ni sustitucion de intervencion en crisis.",
      items: [
        "Si un usuario esta en peligro inmediato o en crisis, debe contactar directamente a servicios de emergencia o apoyo profesional local.",
        "Las integraciones con campus, consejeria y telemedicina pueden variar segun jurisdiccion, politica institucional o estado de la alianza.",
        "Las visualizaciones e insights del producto son ayudas informativas y no deben considerarse consejo medico, consejo legal ni resultados garantizados.",
        "La disponibilidad real de funciones, politicas de retencion y flujos de soporte se rige por acuerdos formales y por la version mas reciente de las politicas publicadas."
      ]
    }
  },
  closing: {
    eyebrow: "Por que EchoMind",
    title: "No es otra herramienta de salud mental que el usuario tenga que recordar abrir.",
    body: "Es preventiva, fluida y esta integrada en un habito diario. Mientras la mayoria de soluciones esperan para reaccionar, EchoMind protege los momentos justo antes de perder el equilibrio.",
    strip: ["Prevencion por diseno", "Fluidez en la vida diaria", "Apoyo con menos estigma", "Pensado para las rutinas Gen Z"]
  },
  cta: {
    eyebrow: "EchoMind",
    title: "Haz que el cuidado emocional se sienta tan natural como ponerse los audifonos.",
    body: "Inteligencia emocional preventiva creada para la nueva generacion de estudiantes, campus y sistemas de cuidado.",
    actions: ["Contactar al equipo", "Volver arriba"]
  },
  footer: {
    tagline: "Inteligencia emocional preventiva para la generacion que ya vive dentro de sus audifonos.",
    links: ["Soporte del Producto", "Terminos de Uso", "Politica de Privacidad", "Aviso Legal", "Redes Sociales"],
    fineprint: "© 2026 EchoMind. Mental Active Noise Cancellation es una descripcion conceptual del producto, no una promesa de resultado medico."
  }
};

const ja = {
  ...en,
  htmlLang: "ja",
  title: "EchoMind | Emotional Operating System",
  navLabel: "メインナビゲーション",
  languageLabel: "言語切替",
  menuOpenLabel: "ナビゲーションを開く",
  menuCloseLabel: "ナビゲーションを閉じる",
  searchPlaceholder: "サポート、利用規約、プライバシーを検索...",
  searchEmpty: "一致する項目が見つかりません。support、privacy、legal を試してください。",
  searchSections: [
    { title: "System", meta: "生体信号、適応オーディオ、支援エスカレーション", href: "#system" },
    { title: "Features", meta: "リアルタイム検知、音響調整、感情ダッシュボード", href: "#features" },
    { title: "Stress Map", meta: "日次変動、週間ホットスポット、洞察", href: "#dashboard" },
    { title: "Product Support", meta: "導入支援、学校展開、信頼管理", href: "product-support.html" },
    { title: "Terms of Use", meta: "利用範囲とユーザー責任", href: "terms-of-use.html" },
    { title: "Privacy Policy", meta: "データ利用、同意、削除管理", href: "privacy-policy.html" },
    { title: "Legal Disclaimer", meta: "医療代替ではないことの明確化", href: "legal-disclaimer.html" }
  ],
  nav: ["System", "Features", "Stress Map", "Support"],
  headerCta: "デモ予約",
  hero: {
    ...en.hero,
    subtitle: "毎日身につける、感情安定のためのシステム。",
    actions: ["主要機能を見る", "利用シーンを見る"],
    metricLabels: ["中心年齢層", "つらい時に音楽へ向かう若者", "検知から支援までのレイヤー"]
  },
  statement: {
    eyebrow: "反応ではなく予防",
    title: "崩れた後の慰めではなく、その前に落ち着きを取り戻す。",
    body: "EchoMind は、先に開かなければならないウェルネスアプリではありません。すでに使っているイヤホンの中で静かに働き、ストレスが崩壊へ向かう前に介入します。"
  },
  problem: {
    ...en.problem,
    eyebrow: "なぜ今なのか",
    title: "これは一部の問題ではなく、デジタル世代の日常に組み込まれた構造的ストレスです。"
  },
  explode: {
    ...en.explode,
    eyebrow: "分解ビュー",
    layerLabel: "Layer"
  },
  features: {
    ...en.features,
    sectionEyebrow: "隠れた emotional OS",
    sectionTitle: "生体情報、サウンド設計、人の支援が同時に機能する。"
  },
  sound: {
    ...en.sound,
    title: "音を大きくするのではなく、内側のノイズを下げるための調整。"
  },
  dashboard: {
    ...en.dashboard,
    eyebrow: "Stress Map ダッシュボード",
    insightTag: "Pattern Insight"
  },
  support: {
    ...en.support,
    eyebrow: "同意にもとづく支援エスカレーション"
  },
  audience: [
    {
      eyebrow: "学生向け",
      title: "すでにイヤホンの中で生活している Z 世代のために設計。",
      body: "15 歳から 22 歳の学生は、すでに音楽をストレス対処に使っています。EchoMind はその習慣を予防的な感情サポートへ変えます。"
    },
    {
      eyebrow: "教育機関向け",
      title: "危機後の対処ではなく、キャンパスの感情インフラとして設計。",
      body: "学校、大学、寄宿学校、カウンセリング部門は B2B2C で EchoMind を導入し、支援を前倒ししながらスティグマを下げ、早期介入を広げられます。"
    }
  ],
  supportHub: {
    ...en.supportHub,
    eyebrow: "製品サポート",
    title: "製品と同じくらい明確で静かで信頼できるサポート。",
    communityKicker: "Community"
  },
  policy: {
    ...en.policy,
    eyebrow: "Trust Center",
    title: "感情データにふさわしい高い基準のための明確な規約と境界。",
    terms: {
      ...en.policy.terms,
      link: "利用規約全文"
    },
    privacy: {
      ...en.policy.privacy,
      link: "プライバシーポリシー全文"
    },
    legal: {
      ...en.policy.legal,
      link: "法的免責事項全文"
    }
  },
  closing: {
    ...en.closing,
    eyebrow: "Why EchoMind"
  },
  cta: {
    ...en.cta,
    actions: ["Contact Team", "Back to Top"]
  },
  footer: {
    tagline: "ヘッドホンの中で生きる世代のための予防的感情インテリジェンス。",
    links: ["Product Support", "Terms of Use", "Privacy Policy", "Legal Disclaimer", "Social Media"],
    fineprint: "© 2026 EchoMind. Mental Active Noise Cancellation は医療結果を保証する表現ではありません。"
  }
};

const ko = {
  ...en,
  htmlLang: "ko",
  title: "EchoMind | Emotional Operating System",
  navLabel: "주요 내비게이션",
  languageLabel: "언어 전환",
  menuOpenLabel: "내비게이션 열기",
  menuCloseLabel: "내비게이션 닫기",
  searchPlaceholder: "지원, 약관, 개인정보를 검색하세요...",
  searchEmpty: "일치하는 항목이 없습니다. support, privacy, legal 을 시도해 보세요.",
  searchSections: [
    { title: "System", meta: "생체 신호, 적응형 사운드, 지원 에스컬레이션", href: "#system" },
    { title: "Features", meta: "실시간 감지, 사운드 반응, 감정 대시보드", href: "#features" },
    { title: "Stress Map", meta: "일일 파형, 주간 핫스팟, 패턴 인사이트", href: "#dashboard" },
    { title: "Product Support", meta: "온보딩, 캠퍼스 배포, 신뢰 제어", href: "product-support.html" },
    { title: "Terms of Use", meta: "제품 경계와 사용자 책임", href: "terms-of-use.html" },
    { title: "Privacy Policy", meta: "데이터 사용, 동의, 삭제 관리", href: "privacy-policy.html" },
    { title: "Legal Disclaimer", meta: "비의료 포지셔닝과 위기 경계", href: "legal-disclaimer.html" }
  ],
  nav: ["System", "Features", "Stress Map", "Support"],
  headerCta: "데모 예약",
  hero: {
    ...en.hero,
    subtitle: "매일 착용하는 감정 안정 시스템.",
    actions: ["핵심 기능 보기", "사용 사례 보기"],
    metricLabels: ["핵심 연령대", "힘들 때 음악에 의지하는 청소년", "감지부터 지원까지의 레이어"]
  },
  statement: {
    eyebrow: "반응보다 예방",
    title: "무너진 뒤의 위로가 아니라, 무너지기 전의 안정.",
    body: "EchoMind 는 먼저 열어야 하는 웰니스 앱이 아닙니다. 이미 쓰고 있는 이어버드 안에서 조용히 작동하며, 스트레스가 붕괴로 번지기 전에 개입합니다."
  },
  problem: {
    ...en.problem,
    eyebrow: "왜 지금인가",
    title: "이것은 일부의 문제가 아니라 디지털 세대의 일상에 내장된 구조적 압력입니다."
  },
  explode: {
    ...en.explode,
    eyebrow: "분해 뷰",
    layerLabel: "Layer"
  },
  features: {
    ...en.features,
    sectionEyebrow: "숨겨진 emotional OS",
    sectionTitle: "생체 정보, 사운드 엔지니어링, 인간 지원이 함께 작동합니다."
  },
  sound: {
    ...en.sound,
    title: "볼륨을 키우는 것이 아니라, 내부 소음을 낮추기 위한 조정입니다."
  },
  dashboard: {
    ...en.dashboard,
    eyebrow: "Stress Map 대시보드"
  },
  support: {
    ...en.support,
    eyebrow: "동의 기반 지원 에스컬레이션"
  },
  audience: [
    {
      eyebrow: "학생용",
      title: "이미 이어폰 속에서 생활하는 Z세대를 위해 설계되었습니다.",
      body: "15세에서 22세 학생들은 이미 음악을 스트레스 대응 습관으로 사용합니다. EchoMind 는 그 익숙한 습관을 예방적 감정 지원으로 바꿉니다."
    },
    {
      eyebrow: "기관용",
      title: "위기 이후의 대응이 아니라 캠퍼스 감정 인프라로 설계되었습니다.",
      body: "학교, 대학, 기숙학교, 상담 센터는 B2B2C 방식으로 EchoMind 를 도입해 지원을 더 이르게 제공하고 낙인을 낮추며 조기 개입을 넓힐 수 있습니다."
    }
  ],
  supportHub: {
    ...en.supportHub,
    eyebrow: "제품 지원",
    title: "제품만큼 명확하고 조용하며 신뢰할 수 있는 지원."
  },
  policy: {
    ...en.policy,
    eyebrow: "Trust Center",
    title: "감정 데이터에 더 높은 기준이 필요하기 때문에, 약관과 개인정보, 법적 경계를 분명히 합니다.",
    terms: {
      ...en.policy.terms,
      link: "전체 이용약관 보기"
    },
    privacy: {
      ...en.policy.privacy,
      link: "전체 개인정보처리방침 보기"
    },
    legal: {
      ...en.policy.legal,
      link: "전체 법률 고지 보기"
    }
  },
  closing: {
    ...en.closing,
    eyebrow: "Why EchoMind"
  },
  cta: {
    ...en.cta,
    actions: ["Contact Team", "Back to Top"]
  },
  footer: {
    tagline: "이미 헤드폰 속에서 살아가는 세대를 위한 예방형 감정 인텔리전스.",
    links: ["Product Support", "Terms of Use", "Privacy Policy", "Legal Disclaimer", "Social Media"],
    fineprint: "© 2026 EchoMind. Mental Active Noise Cancellation 은 의료 결과를 보장하는 표현이 아닙니다."
  }
};

const translations = { zh, en, ja, ko, es };

const header = document.querySelector(".site-header");
const nav = document.querySelector(".site-nav");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const navCta = document.querySelector(".nav-cta");
const menuToggle = document.querySelector(".menu-toggle");
const langSwitch = document.querySelector(".lang-switch");
const langButtons = Array.from(document.querySelectorAll("[data-lang-trigger]"));
const searchShell = document.querySelector(".search-shell");
const searchInput = document.querySelector(".search-input");
const searchResults = document.querySelector(".search-results");
const metaDescription = document.querySelector('meta[name="description"]');

const heroCopy = document.querySelector(".hero-copy");
const heroVisual = document.querySelector(".hero-visual");
const deviceStage = document.querySelector(".device-stage");
const auroras = Array.from(document.querySelectorAll(".aurora"));
const heroEyebrow = document.querySelector(".hero .eyebrow");
const heroSubtitle = document.querySelector(".hero h1 span");
const heroText = document.querySelector(".hero-text");
const heroButtons = Array.from(document.querySelectorAll(".hero-copy .hero-actions a"));
const metricBlocks = Array.from(document.querySelectorAll(".hero-metrics div"));
const metricValues = metricBlocks.map((block) => block.querySelector("dt"));
const metricLabels = metricBlocks.map((block) => block.querySelector("dd"));

const statementCard = document.querySelector(".statement-card");
const statementEyebrow = statementCard.querySelector(".eyebrow");
const statementTitle = statementCard.querySelector("h2");
const statementBody = statementCard.querySelectorAll("p")[1];

const problemSection = document.querySelector(".problem-section");
const problemEyebrow = problemSection.querySelector(".problem-copy .eyebrow");
const problemTitle = problemSection.querySelector(".problem-copy h2");
const problemBody = problemSection.querySelectorAll(".problem-copy p")[1];
const problemCards = Array.from(document.querySelectorAll(".problem-card"));

const explodeSection = document.querySelector(".explode-section");
const explodeEyebrow = explodeSection.querySelector(".explode-copy-intro .eyebrow");
const explodeTitle = explodeSection.querySelector(".explode-copy-intro h2");
const explodeBody = explodeSection.querySelectorAll(".explode-copy-intro p")[1];
const explodeProgressNodes = Array.from(document.querySelectorAll(".explode-progress-node"));
const explodeStageChip = document.querySelector(".explode-stage-chip");
const explodeStageTitle = document.querySelector(".explode-stage-title");
const explodeStageBody = document.querySelector(".explode-stage-body");
const explodeSteps = Array.from(document.querySelectorAll(".explode-step"));
const explodeParts = Array.from(document.querySelectorAll(".explode-part"));
const explodeLabels = Array.from(document.querySelectorAll(".explode-label"));

const stickyCopy = document.querySelector(".sticky-copy");
const systemEyebrow = stickyCopy.querySelector(".eyebrow");
const systemTitle = stickyCopy.querySelector("h2");
const systemBody = stickyCopy.querySelectorAll("p")[1];

const featureCards = Array.from(document.querySelectorAll(".feature-card"));
const coreLabel = document.querySelector(".core-label");
const coreTitle = document.querySelector(".core-panel strong");
const coreBody = document.querySelector(".core-panel p");
const deviceCaption = document.querySelector(".device-caption");

const spotlightCopy = document.querySelector(".spotlight-copy");
const soundEyebrow = spotlightCopy.querySelector(".eyebrow");
const soundTitle = spotlightCopy.querySelector("h2");
const soundCards = Array.from(document.querySelectorAll(".sound-card"));
const playlistPill = document.querySelector(".playlist-pill");

const dashboardCopy = document.querySelector(".dashboard-copy");
const dashboardEyebrow = dashboardCopy.querySelector(".eyebrow");
const dashboardTitle = dashboardCopy.querySelector("h2");
const dashboardBody = dashboardCopy.querySelectorAll("p")[1];
const phoneTopbarItems = Array.from(document.querySelectorAll(".phone-topbar > *"));
const dailyWaveItems = Array.from(document.querySelectorAll(".chart-card .chart-header > *"));
const hotspotItems = Array.from(document.querySelectorAll(".heat-card .chart-header > *"));
const waveBars = Array.from(document.querySelectorAll(".wave-chart span"));
const heatCells = Array.from(document.querySelectorAll(".heat-grid span"));
const insightTag = document.querySelector(".insight-tag");
const insightText = document.querySelector(".insight-card p");

const supportCopy = document.querySelector(".support-copy");
const supportEyebrow = supportCopy.querySelector(".eyebrow");
const supportTitle = supportCopy.querySelector("h2");
const supportSteps = Array.from(document.querySelectorAll(".support-step"));

const audienceCards = Array.from(document.querySelectorAll(".audience-card"));
const supportHub = document.querySelector(".support-hub");
const supportHubEyebrow = supportHub.querySelector(".support-hub-copy .eyebrow");
const supportHubTitle = supportHub.querySelector(".support-hub-copy h2");
const supportHubBody = supportHub.querySelectorAll(".support-hub-copy p")[1];
const supportHubCards = Array.from(document.querySelectorAll(".support-hub-card"));
const supportHubLinks = Array.from(document.querySelectorAll(".support-link"));
const communityKicker = document.querySelector(".community-kicker");
const communityText = document.querySelector(".community-text");

const policySection = document.querySelector(".policy-section");
const policyEyebrow = policySection.querySelector(".policy-copy .eyebrow");
const policyTitle = policySection.querySelector(".policy-copy h2");
const policyBody = policySection.querySelectorAll(".policy-copy p")[1];
const termsCard = document.querySelector("#terms-of-use");
const privacyCard = document.querySelector("#privacy-policy");
const legalNote = document.querySelector("#legal-disclaimer");
const termsKicker = termsCard.querySelector(".policy-kicker");
const termsTitle = termsCard.querySelector("h3");
const termsItems = Array.from(termsCard.querySelectorAll("li"));
const termsLink = termsCard.querySelector(".policy-page-link");
const privacyKicker = privacyCard.querySelector(".policy-kicker");
const privacyTitle = privacyCard.querySelector("h3");
const privacyItems = Array.from(privacyCard.querySelectorAll("li"));
const privacyLink = privacyCard.querySelector(".policy-page-link");
const legalKicker = legalNote.querySelector(".policy-kicker");
const legalTitle = legalNote.querySelector("h3");
const legalBody = legalNote.querySelector("p");
const legalItems = Array.from(legalNote.querySelectorAll("li"));
const legalLink = legalNote.querySelector(".policy-page-link");

const closingSection = document.querySelector(".closing-section");
const closingEyebrow = closingSection.querySelector(".closing-copy .eyebrow");
const closingTitle = closingSection.querySelector(".closing-copy h2");
const closingBody = closingSection.querySelectorAll(".closing-copy p")[1];
const closingStripItems = Array.from(document.querySelectorAll(".closing-strip span"));
const splitRevealNodes = Array.from(document.querySelectorAll(".split-reveal"));
const marqueePrimaryRow = document.querySelector('[data-marquee="primary"]');
const marqueeSecondaryRow = document.querySelector('[data-marquee="secondary"]');

const ctaCard = document.querySelector(".cta-card");
const ctaEyebrow = ctaCard.querySelector(".eyebrow");
const ctaTitle = ctaCard.querySelector("h2");
const ctaBody = ctaCard.querySelectorAll("p")[1];
const ctaButtons = Array.from(document.querySelectorAll(".cta-card .hero-actions a"));

const footerLogo = document.querySelector(".footer-logo");
const footerTagline = document.querySelector(".footer-tagline");
const footerLinkItems = Array.from(document.querySelectorAll(".footer-links a"));
const footerFineprint = document.querySelector(".footer-fineprint");
const magneticTargets = Array.from(document.querySelectorAll(".button, .nav-cta, .social-link, .social-icon-link, .footer-links a, .support-link"));

const revealElements = Array.from(document.querySelectorAll(".reveal"));

let currentLanguage = getInitialLanguage();
let insightIndex = 0;
let activeFeatureIndex = 0;
let activeExplodeIndex = 0;
let metricAnimated = false;
let targetExplodeProgress = 0;
let renderedExplodeProgress = 0;
let explodeRafId = 0;
let isMenuOpen = false;
let searchHideTimer = 0;

[...explodeSteps, ...featureCards, ...soundCards, ...supportSteps, ...audienceCards].forEach((card) => {
  card.tabIndex = 0;
});

function getInitialLanguage() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && translations[stored]) return stored;
  } catch {
    return "zh";
  }
  return "zh";
}

function persistLanguage(lang) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    return;
  }
}

function setText(node, value) {
  if (node && value !== undefined) node.textContent = value;
}

function segmentText(text) {
  const trimmed = text.trim();
  if (!trimmed) return [];

  if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
    const segmenter = new Intl.Segmenter(document.documentElement.lang || "en", { granularity: "word" });
    const segments = Array.from(segmenter.segment(trimmed))
      .filter((segment) => segment.isWordLike)
      .map((segment) => segment.segment.trim())
      .filter(Boolean);

    if (segments.length) return segments;
  }

  return trimmed.split(/\s+/).filter(Boolean);
}

function decorateSplitReveals() {
  splitRevealNodes.forEach((node) => {
    const label = node.textContent.trim();
    const tokens = segmentText(label);
    const shouldUseSpaces = /\s/.test(label);

    if (!tokens.length) return;

    node.textContent = "";
    const line = document.createElement("span");
    line.className = "split-line";

    tokens.forEach((token, index) => {
      const word = document.createElement("span");
      word.className = "split-word";
      word.style.setProperty("--split-index", String(index));
      word.textContent = token;
      line.appendChild(word);

      if (shouldUseSpaces && index < tokens.length - 1) {
        line.appendChild(document.createTextNode(" "));
      }
    });

    node.appendChild(line);
  });
}

function createMarqueeTrack(items) {
  const track = document.createElement("div");
  track.className = "motion-band-track";

  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "motion-chip";
    chip.textContent = item;
    track.appendChild(chip);
  });

  return track;
}

function renderMotionBands() {
  const copy = translations[currentLanguage];
  const primaryItems = [...copy.closing.strip, ...copy.closing.strip];
  const secondaryItems = [...copy.features.cards.map((card) => card.title), ...copy.features.cards.map((card) => card.title)];

  [
    [marqueePrimaryRow, primaryItems],
    [marqueeSecondaryRow, secondaryItems]
  ].forEach(([row, items]) => {
    if (!row) return;
    row.innerHTML = "";

    const firstTrack = createMarqueeTrack(items);
    const secondTrack = createMarqueeTrack(items);
    secondTrack.setAttribute("aria-hidden", "true");

    row.appendChild(firstTrack);
    row.appendChild(secondTrack);
  });
}

function isMobileLayout() {
  return window.innerWidth <= 760;
}

function setMenuState(nextState) {
  if (!header || !menuToggle) return;
  isMenuOpen = Boolean(nextState) && isMobileLayout();
  header.classList.toggle("is-menu-open", isMenuOpen);
  menuToggle.setAttribute("aria-expanded", String(isMenuOpen));

  const copy = translations[currentLanguage];
  menuToggle.setAttribute("aria-label", isMenuOpen ? copy.menuCloseLabel : copy.menuOpenLabel);
}

function setScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  document.documentElement.style.setProperty("--scroll-progress", String(progress));
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
  updateExplodedView();
}

function setMetricTargets() {
  const copy = translations[currentLanguage].hero;

  metricValues.forEach((metric, index) => {
    const target = copy.metricValues[index];
    metric.dataset.target = target;

    if (metricAnimated) {
      metric.textContent = target;
      return;
    }

    metric.textContent = target.includes("-") ? target : `0${target.replace(/^\d+/, "")}`;
  });

  metricLabels.forEach((label, index) => setText(label, copy.metricLabels[index]));
}

function animateMetrics() {
  if (metricAnimated) return;
  metricAnimated = true;

  metricValues.forEach((metric) => {
    const target = metric.dataset.target || metric.textContent.trim();
    if (!/^\d+/.test(target) || target.includes("-")) {
      metric.textContent = target;
      return;
    }

    const number = Number.parseInt(target, 10);
    const suffix = target.replace(/^\d+/, "");
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      metric.textContent = `${Math.round(number * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  });
}

function renderFeaturePanel(index = activeFeatureIndex) {
  const copy = translations[currentLanguage].features;
  const feature = copy.cards[index];
  if (!feature) return;

  activeFeatureIndex = index;
  featureCards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === index);
  });

  setText(coreLabel, `${copy.signalLabel} ${String(index + 1).padStart(2, "0")}`);
  setText(coreTitle, feature.title);
  setText(coreBody, feature.body);
  setText(deviceCaption, copy.panelCaptions[index]);
}

function renderExplodeStep(index = activeExplodeIndex) {
  const copy = translations[currentLanguage].explode;
  const step = copy.steps[index];
  if (!step) return;

  activeExplodeIndex = index;

  explodeSteps.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === index);
  });

  explodeParts.forEach((part, partIndex) => {
    part.classList.toggle("is-active", partIndex === index);
  });

  explodeLabels.forEach((label, labelIndex) => {
    label.classList.toggle("is-active", labelIndex === index);
  });

  explodeProgressNodes.forEach((node, nodeIndex) => {
    node.classList.toggle("is-active", nodeIndex <= index);
  });

  setText(explodeStageChip, `${copy.layerLabel} ${String(index + 1).padStart(2, "0")}`);
  setText(explodeStageTitle, step.title);
  setText(explodeStageBody, step.body);
}

function applyLanguage(lang) {
  currentLanguage = lang;
  persistLanguage(lang);

  const copy = translations[lang];

  document.documentElement.lang = copy.htmlLang;
  document.title = copy.title;
  if (metaDescription) metaDescription.setAttribute("content", copy.metaDescription);
  if (nav) nav.setAttribute("aria-label", copy.navLabel);
  if (langSwitch) langSwitch.setAttribute("aria-label", copy.languageLabel);
  if (searchInput) searchInput.placeholder = copy.searchPlaceholder;
  if (menuToggle) menuToggle.setAttribute("aria-label", isMenuOpen ? copy.menuCloseLabel : copy.menuOpenLabel);

  langButtons.forEach((button) => {
    const isActive = button.dataset.langTrigger === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  navLinks.forEach((link, index) => setText(link, copy.nav[index]));
  setText(navCta, copy.headerCta);

  setText(heroEyebrow, copy.hero.eyebrow);
  setText(heroSubtitle, copy.hero.subtitle);
  setText(heroText, copy.hero.body);
  heroButtons.forEach((button, index) => setText(button, copy.hero.actions[index]));
  setMetricTargets();

  setText(statementEyebrow, copy.statement.eyebrow);
  setText(statementTitle, copy.statement.title);
  setText(statementBody, copy.statement.body);

  setText(problemEyebrow, copy.problem.eyebrow);
  setText(problemTitle, copy.problem.title);
  setText(problemBody, copy.problem.body);
  problemCards.forEach((card, index) => {
    const cardCopy = copy.problem.cards[index];
    setText(card.querySelector("strong"), cardCopy.value);
    setText(card.querySelector("h3"), cardCopy.title);
    setText(card.querySelector("p"), cardCopy.body);
  });

  setText(explodeEyebrow, copy.explode.eyebrow);
  setText(explodeTitle, copy.explode.title);
  setText(explodeBody, copy.explode.body);
  explodeSteps.forEach((card, index) => {
    const stepCopy = copy.explode.steps[index];
    setText(card.querySelector("h3"), stepCopy.title);
    setText(card.querySelector("p"), stepCopy.body);
  });
  explodeLabels.forEach((label, index) => setText(label.querySelector("span"), copy.explode.labels[index]));

  setText(systemEyebrow, copy.features.sectionEyebrow);
  setText(systemTitle, copy.features.sectionTitle);
  setText(systemBody, copy.features.sectionBody);
  featureCards.forEach((card, index) => {
    setText(card.querySelector("h3"), copy.features.cards[index].title);
    setText(card.querySelector("p"), copy.features.cards[index].body);
  });

  setText(soundEyebrow, copy.sound.eyebrow);
  setText(soundTitle, copy.sound.title);
  setText(playlistPill, copy.sound.playlistPill);
  soundCards.forEach((card, index) => {
    setText(card.querySelector("h3"), copy.sound.cards[index].title);
    setText(card.querySelector("p"), copy.sound.cards[index].body);
  });

  setText(dashboardEyebrow, copy.dashboard.eyebrow);
  setText(dashboardTitle, copy.dashboard.title);
  setText(dashboardBody, copy.dashboard.body);
  phoneTopbarItems.forEach((item, index) => setText(item, copy.dashboard.topbar[index]));
  dailyWaveItems.forEach((item, index) => setText(item, index === 0 ? copy.dashboard.dailyWaveLabel : copy.dashboard.dailyWaveStatus));
  hotspotItems.forEach((item, index) => setText(item, index === 0 ? copy.dashboard.hotspotLabel : copy.dashboard.hotspotStatus));
  setText(insightTag, copy.dashboard.insightTag);

  setText(supportEyebrow, copy.support.eyebrow);
  setText(supportTitle, copy.support.title);
  supportSteps.forEach((card, index) => {
    setText(card.querySelector("h3"), copy.support.cards[index].title);
    setText(card.querySelector("p"), copy.support.cards[index].body);
  });

  audienceCards.forEach((card, index) => {
    setText(card.querySelector(".eyebrow"), copy.audience[index].eyebrow);
    setText(card.querySelector("h2"), copy.audience[index].title);
    setText(card.querySelectorAll("p")[1], copy.audience[index].body);
  });

  setText(supportHubEyebrow, copy.supportHub.eyebrow);
  setText(supportHubTitle, copy.supportHub.title);
  setText(supportHubBody, copy.supportHub.body);
  supportHubCards.forEach((card, index) => {
    const hubCard = copy.supportHub.cards[index];
    setText(card.querySelector(".support-hub-kicker"), hubCard.kicker);
    setText(card.querySelector("h3"), hubCard.title);
    setText(card.querySelector("p"), hubCard.body);
    setText(supportHubLinks[index], hubCard.link);
  });
  setText(communityKicker, copy.supportHub.communityKicker);
  setText(communityText, copy.supportHub.communityText);

  setText(policyEyebrow, copy.policy.eyebrow);
  setText(policyTitle, copy.policy.title);
  setText(policyBody, copy.policy.body);
  setText(termsKicker, copy.policy.terms.kicker);
  setText(termsTitle, copy.policy.terms.title);
  setText(termsLink, copy.policy.terms.link);
  termsItems.forEach((item, index) => setText(item, copy.policy.terms.items[index]));
  setText(privacyKicker, copy.policy.privacy.kicker);
  setText(privacyTitle, copy.policy.privacy.title);
  setText(privacyLink, copy.policy.privacy.link);
  privacyItems.forEach((item, index) => setText(item, copy.policy.privacy.items[index]));
  setText(legalKicker, copy.policy.legal.kicker);
  setText(legalTitle, copy.policy.legal.title);
  setText(legalBody, copy.policy.legal.body);
  setText(legalLink, copy.policy.legal.link);
  legalItems.forEach((item, index) => setText(item, copy.policy.legal.items[index]));

  setText(closingEyebrow, copy.closing.eyebrow);
  setText(closingTitle, copy.closing.title);
  setText(closingBody, copy.closing.body);
  closingStripItems.forEach((item, index) => setText(item, copy.closing.strip[index]));

  setText(ctaEyebrow, copy.cta.eyebrow);
  setText(ctaTitle, copy.cta.title);
  setText(ctaBody, copy.cta.body);
  ctaButtons.forEach((button, index) => setText(button, copy.cta.actions[index]));

  setText(footerLogo, "EchoMind");
  setText(footerTagline, copy.footer.tagline);
  footerLinkItems.forEach((item, index) => setText(item, copy.footer.links[index]));
  setText(footerFineprint, copy.footer.fineprint);

  insightIndex = 0;
  decorateSplitReveals();
  renderMotionBands();
  renderExplodeStep(activeExplodeIndex);
  renderFeaturePanel(activeFeatureIndex);
  updateDashboard();
  renderSearchResults();
}

function revealOnScroll() {
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    animateMetrics();
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (entry.target === heroCopy) animateMetrics();
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

function bindFeatureCards() {
  if (!featureCards.length) return;

  featureCards.forEach((card, index) => {
    const activate = () => renderFeaturePanel(index);
    card.addEventListener("mouseenter", activate);
    card.addEventListener("focus", activate);
  });

  if (!("IntersectionObserver" in window)) {
    renderFeaturePanel(0);
    return;
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visible.length) return;
      const index = featureCards.indexOf(visible[0].target);
      if (index >= 0) renderFeaturePanel(index);
    },
    {
      threshold: [0.35, 0.6, 0.9],
      rootMargin: "-18% 0px -30% 0px"
    }
  );

  featureCards.forEach((card) => sectionObserver.observe(card));
  renderFeaturePanel(0);
}

function getExplodeIndexFromProgress(progress) {
  if (progress < 0.22) return 0;
  if (progress < 0.46) return 1;
  if (progress < 0.72) return 2;
  return 3;
}

function applyExplodeProgress(progress) {
  if (!explodeSection) return;
  explodeSection.style.setProperty("--explode-progress", progress.toFixed(3));
  renderExplodeStep(getExplodeIndexFromProgress(progress));
}

function animateExplodedProgress() {
  renderedExplodeProgress += (targetExplodeProgress - renderedExplodeProgress) * 0.12;

  if (Math.abs(targetExplodeProgress - renderedExplodeProgress) < 0.0015) {
    renderedExplodeProgress = targetExplodeProgress;
    applyExplodeProgress(renderedExplodeProgress);
    explodeRafId = 0;
    return;
  }

  applyExplodeProgress(renderedExplodeProgress);
  explodeRafId = requestAnimationFrame(animateExplodedProgress);
}

function updateExplodedView() {
  if (!explodeSection) return;

  const viewportHeight = window.innerHeight;
  const sectionTop = explodeSection.offsetTop;
  const sectionHeight = explodeSection.offsetHeight;
  const start = sectionTop - viewportHeight * 0.12;
  const end = sectionTop + sectionHeight - viewportHeight * 0.86;
  const distance = Math.max(end - start, 1);
  const rawProgress = (window.scrollY - start) / distance;
  const progress = Math.max(0, Math.min(1, rawProgress));

  targetExplodeProgress = progress;

  if (prefersReducedMotion) {
    renderedExplodeProgress = progress;
    applyExplodeProgress(progress);
    return;
  }

  if (Math.abs(targetExplodeProgress - renderedExplodeProgress) > 0.24) {
    renderedExplodeProgress = targetExplodeProgress;
    applyExplodeProgress(renderedExplodeProgress);
    if (explodeRafId) {
      cancelAnimationFrame(explodeRafId);
      explodeRafId = 0;
    }
    return;
  }

  if (!explodeRafId) explodeRafId = requestAnimationFrame(animateExplodedProgress);
}

function bindExplodedView() {
  if (!explodeSection) return;

  explodeSteps.forEach((step, index) => {
    const snapToStep = () => {
      const progressStops = [0.1, 0.34, 0.58, 0.86];
      targetExplodeProgress = progressStops[index] ?? 0;
      if (prefersReducedMotion) {
        renderedExplodeProgress = targetExplodeProgress;
        applyExplodeProgress(renderedExplodeProgress);
        return;
      }
      if (!explodeRafId) explodeRafId = requestAnimationFrame(animateExplodedProgress);
    };

    step.addEventListener("mouseenter", snapToStep);
    step.addEventListener("focus", snapToStep);
  });

  renderedExplodeProgress = 0;
  updateExplodedView();
}

function bindHeroParallax() {
  if (!heroVisual || !deviceStage || prefersReducedMotion) return;

  const handleMove = (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    deviceStage.style.transform = `rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 14).toFixed(2)}deg) translateY(${(-y * 6).toFixed(2)}px)`;
    auroras.forEach((aurora, index) => {
      const strength = (index + 1) * 10;
      aurora.style.transform = `translate3d(${(x * strength).toFixed(1)}px, ${(y * strength).toFixed(1)}px, 0)`;
    });
  };

  const reset = () => {
    deviceStage.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
    auroras.forEach((aurora) => {
      aurora.style.transform = "translate3d(0, 0, 0)";
    });
  };

  heroVisual.addEventListener("pointermove", handleMove);
  heroVisual.addEventListener("pointerleave", reset);
}

function cycleActiveCards(cards, delay, callback) {
  if (!cards.length) return null;

  let current = 0;
  callback(current);

  if (prefersReducedMotion) return null;

  return window.setInterval(() => {
    current = (current + 1) % cards.length;
    callback(current);
  }, delay);
}

function startSoundCycle() {
  cycleActiveCards(soundCards, 2400, (index) => {
    soundCards.forEach((card, cardIndex) => {
      card.classList.toggle("is-active", cardIndex === index);
    });
  });

  soundCards.forEach((card, index) => {
    const activate = () => {
      soundCards.forEach((item, itemIndex) => {
        item.classList.toggle("is-active", itemIndex === index);
      });
    };

    card.addEventListener("mouseenter", activate);
    card.addEventListener("focus", activate);
  });
}

function startSupportCycle() {
  cycleActiveCards(supportSteps, 3200, (index) => {
    supportSteps.forEach((step, stepIndex) => {
      step.classList.toggle("is-active", stepIndex === index);
    });
  });

  supportSteps.forEach((step, index) => {
    const activate = () => {
      supportSteps.forEach((item, itemIndex) => {
        item.classList.toggle("is-active", itemIndex === index);
      });
    };

    step.addEventListener("mouseenter", activate);
    step.addEventListener("focus", activate);
  });
}

function paintHeatCell(cell, intensity) {
  const alpha = 0.12 + intensity * 0.55;
  const useAccent = intensity > 0.72;
  const color = useAccent
    ? `rgba(184, 255, 215, ${alpha.toFixed(2)})`
    : `rgba(95, 136, 255, ${alpha.toFixed(2)})`;
  cell.style.background = color;
}

function updateDashboard() {
  const copy = translations[currentLanguage].dashboard;
  const now = Date.now();

  waveBars.forEach((bar, index) => {
    const base = 28 + ((now / 240 + index * 17) % 22);
    const pulse = Math.abs(Math.sin(now / 900 + index)) * 54;
    bar.style.height = `${Math.round(base + pulse)}%`;
  });

  heatCells.forEach((cell, index) => {
    const band = Math.abs(Math.sin(now / 1200 + index * 0.8));
    paintHeatCell(cell, band);
  });

  if (insightText) {
    insightText.textContent = copy.insights[insightIndex % copy.insights.length];
    insightIndex += 1;
  }
}

function bindDashboard() {
  updateDashboard();
  if (prefersReducedMotion) return;
  window.setInterval(updateDashboard, 2600);
}

function getSearchMatches(query) {
  const sections = translations[currentLanguage].searchSections;
  const normalized = query.trim().toLowerCase();
  if (!normalized) return sections;
  return sections.filter((item) => {
    const haystack = `${item.title} ${item.meta} ${item.href}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

function syncSearchState() {
  if (!searchShell || !searchInput) return;
  const isOpen = searchShell.contains(document.activeElement) || Boolean(searchInput.value.trim());
  searchShell.classList.toggle("is-open", isOpen);
  searchShell.classList.toggle("has-value", Boolean(searchInput.value.trim()));
}

function toggleSearchResultsVisibility(nextState) {
  if (!searchResults) return;

  window.clearTimeout(searchHideTimer);

  if (nextState) {
    searchResults.hidden = false;
    window.requestAnimationFrame(() => {
      searchResults.classList.add("is-visible");
    });
    return;
  }

  searchResults.classList.remove("is-visible");
  searchHideTimer = window.setTimeout(() => {
    searchResults.hidden = true;
  }, 260);
}

function renderSearchResults() {
  if (!searchInput || !searchResults) return;
  const copy = translations[currentLanguage];
  const matches = getSearchMatches(searchInput.value);
  const normalized = searchInput.value.trim();
  const shouldShowResults = searchShell?.classList.contains("is-open");

  if (!shouldShowResults) {
    toggleSearchResultsVisibility(false);
    return;
  }

  toggleSearchResultsVisibility(true);

  searchResults.innerHTML = "";

  if (normalized && !matches.length) {
    const empty = document.createElement("div");
    empty.className = "search-empty";
    empty.textContent = copy.searchEmpty;
    searchResults.appendChild(empty);
    return;
  }

  matches.slice(0, normalized ? 6 : 4).forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "search-result";
    button.style.setProperty("--result-index", String(index));
    button.innerHTML = `<span class="search-result-title">${item.title}</span><span class="search-result-meta">${item.meta}</span>`;
    button.addEventListener("click", () => {
      if (item.href.startsWith("#")) {
        const target = document.querySelector(item.href);
        if (target) target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      } else {
        window.location.href = item.href;
      }
      searchInput.value = "";
      toggleSearchResultsVisibility(false);
      syncSearchState();
    });
    searchResults.appendChild(button);
  });
}

function bindSearch() {
  if (!searchInput || !searchResults || !searchShell) return;

  searchInput.addEventListener("input", () => {
    syncSearchState();
    renderSearchResults();
  });

  searchInput.addEventListener("focus", () => {
    syncSearchState();
    renderSearchResults();
  });

  searchInput.addEventListener("blur", () => {
    window.setTimeout(() => {
      syncSearchState();
      renderSearchResults();
    }, 0);
  });

  document.addEventListener("click", (event) => {
    if (!searchShell.contains(event.target)) {
      toggleSearchResultsVisibility(false);
      window.setTimeout(() => {
        syncSearchState();
        renderSearchResults();
      }, 0);
    }
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (searchInput.value.trim()) {
        searchInput.value = "";
        renderSearchResults();
      } else {
        toggleSearchResultsVisibility(false);
        searchInput.blur();
      }
      syncSearchState();
    }
  });

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTypingContext = target instanceof HTMLElement && (
      target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable
    );

    if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey && !isTypingContext) {
      event.preventDefault();
      searchInput.focus();
      searchInput.select();
      syncSearchState();
      renderSearchResults();
    }
  });

  syncSearchState();
}

function bindMobileMenu() {
  if (!menuToggle || !header) return;

  menuToggle.addEventListener("click", () => {
    setMenuState(!isMenuOpen);
  });

  [...navLinks, navCta].filter(Boolean).forEach((element) => {
    element.addEventListener("click", () => {
      if (isMobileLayout()) setMenuState(false);
    });
  });

  document.addEventListener("click", (event) => {
    if (!isMobileLayout() || !isMenuOpen) return;
    if (!header.contains(event.target)) setMenuState(false);
  });

  window.addEventListener("resize", () => {
    if (!isMobileLayout()) setMenuState(false);
  });

  setMenuState(false);
}

function bindMagneticTargets() {
  if (prefersReducedMotion) return;

  magneticTargets.forEach((target) => {
    if (!target || target.dataset.magneticBound === "true") return;

    target.dataset.magneticBound = "true";
    target.classList.add("magnetic-target");

    target.addEventListener("pointermove", (event) => {
      if (window.innerWidth <= 760) return;

      const bounds = target.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
      target.style.translate = `${x.toFixed(2)}px ${y.toFixed(2)}px`;
    });

    const reset = () => {
      target.style.translate = "0 0";
    };

    target.addEventListener("pointerleave", reset);
    target.addEventListener("blur", reset);
  });
}

function bindLanguageSwitch() {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.langTrigger;
      if (!nextLanguage || nextLanguage === currentLanguage || !translations[nextLanguage]) return;
      applyLanguage(nextLanguage);
      if (isMobileLayout()) setMenuState(false);
    });
  });
}

function init() {
  applyLanguage(currentLanguage);
  setScrollProgress();
  revealOnScroll();
  bindExplodedView();
  bindFeatureCards();
  bindHeroParallax();
  startSoundCycle();
  startSupportCycle();
  bindDashboard();
  bindLanguageSwitch();
  bindSearch();
  bindMobileMenu();
  bindMagneticTargets();

  window.addEventListener("scroll", setScrollProgress, { passive: true });
  window.addEventListener("resize", setScrollProgress);
}

init();
