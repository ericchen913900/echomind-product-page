import { useEffect, useState } from "react";

type Language = "en" | "ja" | "es";

type NavItem = {
  label: string;
  href: string;
};

type InfoCard = {
  title: string;
  description: string;
};

type FeatureCard = {
  title: string;
  description: string;
};

type StepItem = {
  label: string;
  description: string;
};

type PlaceholderCopy = {
  title: string;
  size: string;
  description: string;
};

type Translation = {
  htmlLang: string;
  title: string;
  metaDescription: string;
  skipToContent: string;
  brandBy: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  navAriaLabel: string;
  languageAriaLabel: string;
  primaryCta: string;
  navItems: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    actionPrimary: string;
    actionSecondary: string;
    tags: string[];
    tagsAriaLabel: string;
    imageAlt: string;
    imageCaption: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: InfoCard[];
    gapTitle: string;
    gapBody: string;
  };
  technology: {
    eyebrow: string;
    title: string;
    intro: string;
    workflowTitle: string;
    steps: StepItem[];
    placeholderPrimary: PlaceholderCopy;
    placeholderSecondary: PlaceholderCopy;
    metricLabel: string;
    metrics: InfoCard[];
  };
  features: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: FeatureCard[];
  };
  research: {
    eyebrow: string;
    title: string;
    intro: string;
    highlightTitle: string;
    highlightBody: string;
    referencesTitle: string;
    references: string[];
  };
  footer: {
    mentalTitle: string;
    mentalBody: string;
    investorTitle: string;
    investorBody: string;
    rights: string;
    backToTop: string;
  };
};

const LANGUAGE_STORAGE_KEY = "echomind-language";

const languageOptions: Array<{ value: Language; label: string }> = [
  { value: "en", label: "EN" },
  { value: "ja", label: "JA" },
  { value: "es", label: "ES" },
];

const sharedReferences = [
  "Child Welfare League Foundation. (2023). 2023 Taiwan senior high and junior high student mental health survey results.",
  "Swan, A. J., & Kendall, P. C. (2016). Fear and missing out: Youth anxiety and functional outcomes.",
];

const translations: Record<Language, Translation> = {
  en: {
    htmlLang: "en",
    title: "Echomind | Preventive Mental-Wellbeing Platform",
    metaDescription:
      "Echomind is an integrated emotional monitoring and regulation platform that combines wearable biometric sensing and AI for early stress detection and discreet intervention.",
    skipToContent: "Skip to main content",
    brandBy: "by ARC 121 Co., Ltd.",
    menuOpenLabel: "Menu",
    menuCloseLabel: "Close",
    navAriaLabel: "Primary navigation",
    languageAriaLabel: "Select language",
    primaryCta: "See How It Works",
    navItems: [
      { label: "Problem", href: "#problem" },
      { label: "Technology", href: "#technology" },
      { label: "Features", href: "#features" },
      { label: "Research", href: "#research" },
      { label: "Disclaimers", href: "#footer" },
    ],
    hero: {
      eyebrow: "Preventive Emotional Intelligence",
      title: "Stay ahead of stress before it takes over.",
      lead: "Echomind is an integrated emotional monitoring and regulation platform focused on the preventive mental well-being of young people.",
      body: "It combines wearable sensing technology and AI-driven analysis to detect increasing stress levels and provide timely, discreet interventions before silent overload becomes burnout.",
      actionPrimary: "Explore Features",
      actionSecondary: "View Scientific Backing",
      tags: [
        "Breath work prompts",
        "Cognitive reset cues",
        "Micro-break timing",
      ],
      tagsAriaLabel: "Intervention examples",
      imageAlt: "Echomind wearable device and app interface prototype",
      imageCaption:
        "Always-on biometric sensing paired with a calm, unobtrusive app experience.",
    },
    problem: {
      eyebrow: "The Problem",
      title: "Stress builds quietly. Most support arrives after the crash.",
      intro:
        "The global mental health crisis is accelerating, yet many current solutions still depend on users recognizing distress only after it has intensified.",
      cards: [
        {
          title: "1 in 7 adolescents",
          description:
            "WHO reports that one in seven adolescents lives with a mental health disorder.",
        },
        {
          title: "1 billion+ people",
          description:
            "More than one billion people worldwide are affected by conditions such as anxiety and depression.",
        },
        {
          title: "Stress accumulation is subtle",
          description:
            "Exam prep, academic pressure, social media, and future uncertainty create gradual emotional strain and cognitive load that often goes unnoticed.",
        },
      ],
      gapTitle: "The gap in current solutions",
      gapBody:
        "Most therapy apps and counseling pathways are reactive by design. Early stress signals are often subtle and ignored, then eventually culminate in burnout or anxiety disorders. Echomind addresses the missing preventive layer.",
    },
    technology: {
      eyebrow: "Solution & Technology",
      title: "How Echomind works in the background",
      intro:
        "Echomind continuously monitors biometrics in an unobtrusive way, then interprets patterns linked to focus, tiredness, and emotional stress to deliver support at the right moment.",
      workflowTitle: "Signal-to-support pipeline",
      steps: [
        {
          label: "Continuous background monitoring:",
          description:
            "Wearable sensors collect data without disrupting study or work.",
        },
        {
          label: "AI pattern detection:",
          description:
            "Models scan for physiological signatures associated with overload and fatigue.",
        },
        {
          label: "Discreet intervention:",
          description:
            "Context-aware nudges help users self-regulate before stress spirals.",
        },
      ],
      placeholderPrimary: {
        title: "Prototype Walkthrough 01",
        size: "Recommended size: 720 x 460",
        description: "Stress trend and readiness dashboard",
      },
      placeholderSecondary: {
        title: "Prototype Walkthrough 02",
        size: "Recommended size: 720 x 460",
        description: "Context-sensitive intervention prompt",
      },
      metricLabel: "Biometric Metric",
      metrics: [
        {
          title: "GSR",
          description:
            "Galvanic Skin Response tracks changes in emotional arousal by measuring skin conductance.",
        },
        {
          title: "HRV",
          description:
            "Heart Rate Variability reflects autonomic nervous system activity and stress recovery patterns.",
        },
        {
          title: "Skin Temperature",
          description:
            "Temperature shifts provide context about fatigue, stress response, and physiological regulation.",
        },
      ],
    },
    features: {
      eyebrow: "Key Features & Benefits",
      title: "Built for real routines, not clinical interruptions",
      intro:
        "Echomind supports students and remote workers with practical, private, and scientifically informed tools that fit everyday life.",
      cards: [
        {
          title: "Context-Sensitive Nudges",
          description:
            "Echomind prompts short breath work, cognitive resets, and micro-breaks to stabilize users without interrupting learning or work flow.",
        },
        {
          title: "Evidence-Based Design",
          description:
            "Co-developed with clinical psychologists and youth mental health experts for real-world preventive support.",
        },
        {
          title: "Highly Customizable",
          description:
            "Adapts to activity profiles such as exam studying, project deadlines, and remote collaboration blocks.",
        },
        {
          title: "Weekly Insights",
          description:
            "Turns daily biometric trends into understandable weekly patterns that build long-term emotional awareness.",
        },
        {
          title: "Data Privacy by Default",
          description:
            "Industry-leading encryption, secure storage, and full user control over sensitive biometric and behavioral data.",
        },
        {
          title: "Quiet, Preventive Support",
          description:
            "Designed to detect rising stress early and intervene discreetly before burnout or anxiety escalation.",
        },
      ],
    },
    research: {
      eyebrow: "Scientific Backing",
      title: "Grounded in youth mental health research",
      intro:
        "Recent DASS-21 studies indicate moderate to severe stress among Taiwanese youth, driven by academic pressure and concerns about future outcomes. Echomind is designed around these observed risk patterns.",
      highlightTitle: "Why this matters now",
      highlightBody:
        "Adolescents and young adults face prolonged cognitive load, constant social comparison, and uncertainty about careers, finances, and identity formation. Preventive sensing and early-stage intervention can reduce escalation risk before crisis states emerge.",
      referencesTitle: "Referenced studies",
      references: sharedReferences,
    },
    footer: {
      mentalTitle: "Mental Health Disclaimer",
      mentalBody:
        "\"Echomind does not substitute for professional psychological support, but rather acts as preventive and companion technology.\"",
      investorTitle: "Investor Notice",
      investorBody:
        "\"Investor Notice: This business plan represents the best estimate of the future potential of our business venture. It should be recognized that not all major risks can be accurately predicted... investors should be aware that this business has inherent risks.\"",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
  ja: {
    htmlLang: "ja",
    title: "Echomind | 予防型メンタルウェルビーイングプラットフォーム",
    metaDescription:
      "Echomindは、ウェアラブル生体センシングとAI解析を組み合わせ、ストレスの早期検知と静かな介入を行う統合型の感情モニタリング・調整プラットフォームです。",
    skipToContent: "メインコンテンツへスキップ",
    brandBy: "ARC 121 Co., Ltd. による開発",
    menuOpenLabel: "メニュー",
    menuCloseLabel: "閉じる",
    navAriaLabel: "主要ナビゲーション",
    languageAriaLabel: "言語を選択",
    primaryCta: "仕組みを見る",
    navItems: [
      { label: "課題", href: "#problem" },
      { label: "テクノロジー", href: "#technology" },
      { label: "主な機能", href: "#features" },
      { label: "研究根拠", href: "#research" },
      { label: "免責事項", href: "#footer" },
    ],
    hero: {
      eyebrow: "予防型メンタルウェルビーイング",
      title: "ストレスが深刻化する前に、先回りしてケア。",
      lead: "Echomindは、若年層の予防的メンタルウェルビーイングに特化した、感情モニタリングと調整の統合プラットフォームです。",
      body: "ウェアラブルセンシング技術とAI解析により、ストレス上昇の兆候を検知し、静かでタイムリーな介入を実行。見えにくい負荷が燃え尽きへ進む前にサポートします。",
      actionPrimary: "機能を見る",
      actionSecondary: "科学的根拠を見る",
      tags: [
        "呼吸リセットの提案",
        "認知リフレームのヒント",
        "マイクロ休憩の最適タイミング",
      ],
      tagsAriaLabel: "介入の例",
      imageAlt: "EchomindのウェアラブルとアプリUIのプロトタイプ",
      imageCaption:
        "常時の生体センシングと、穏やかで目立たないアプリ体験を統合。",
    },
    problem: {
      eyebrow: "課題",
      title: "ストレスは静かに積み上がり、支援は遅れて届く。",
      intro:
        "世界的なメンタルヘルス危機が進行する一方で、多くの既存ソリューションは、本人が危機後に不調を自覚してからでないと機能しません。",
      cards: [
        {
          title: "思春期の7人に1人",
          description:
            "WHOによると、思春期層の7人に1人がメンタルヘルス障害を抱えています。",
        },
        {
          title: "10億人以上",
          description:
            "世界で10億人以上が不安や抑うつなどの状態に影響を受けています。",
        },
        {
          title: "蓄積は気づきにくい",
          description:
            "受験勉強、学業圧力、SNS、将来不安が、気づきにくい感情負荷と認知負荷を継続的に生みます。",
        },
      ],
      gapTitle: "既存ソリューションのギャップ",
      gapBody:
        "多くのメンタルヘルスアプリやカウンセリング導線はリアクティブです。初期兆候は見逃されやすく、介入が遅れると燃え尽きや不安障害へ進行します。Echomindはこの予防レイヤーを埋めます。",
    },
    technology: {
      eyebrow: "ソリューションと技術",
      title: "Echomindがバックグラウンドで行うこと",
      intro:
        "Echomindは生体信号をさりげなく継続取得し、集中・疲労・情動ストレスのパターンをAIで解析して、最適なタイミングでサポートを提示します。",
      workflowTitle: "シグナルから介入までの流れ",
      steps: [
        {
          label: "継続的なバックグラウンドモニタリング:",
          description:
            "ウェアラブルセンサーが学習や業務を妨げずにデータを収集します。",
        },
        {
          label: "AIパターン検知:",
          description:
            "過負荷や疲労に関連する生理シグネチャをモデルが抽出します。",
        },
        {
          label: "目立たない介入:",
          description:
            "文脈に応じたナッジで、ストレスが増幅する前に自己調整を支援します。",
        },
      ],
      placeholderPrimary: {
        title: "プロトタイプ動画 01",
        size: "推奨サイズ: 720 x 460",
        description: "ストレストレンドとコンディション可視化",
      },
      placeholderSecondary: {
        title: "プロトタイプ動画 02",
        size: "推奨サイズ: 720 x 460",
        description: "文脈連動の介入プロンプト",
      },
      metricLabel: "生体指標",
      metrics: [
        {
          title: "GSR",
          description:
            "皮膚電気反応（GSR）により、情動覚醒レベルの変化を捉えます。",
        },
        {
          title: "HRV",
          description:
            "心拍変動（HRV）で自律神経活動とストレス回復の状態を把握します。",
        },
        {
          title: "皮膚温",
          description:
            "皮膚温の変化を通じて、疲労やストレス反応、調整状態を補足します。",
        },
      ],
    },
    features: {
      eyebrow: "主な機能と価値",
      title: "日常の流れを止めない、実装重視の支援",
      intro:
        "Echomindは、学生やリモートワーカーの生活リズムに合わせて、実用的でプライバシー配慮された支援を提供します。",
      cards: [
        {
          title: "文脈感知ナッジ",
          description:
            "短い呼吸法、認知リセット、マイクロ休憩を適切なタイミングで提示し、学習・業務フローを妨げません。",
        },
        {
          title: "エビデンスベース設計",
          description:
            "臨床心理士と若年層メンタルヘルス専門家との共同開発に基づいています。",
        },
        {
          title: "高度なカスタマイズ",
          description:
            "試験勉強、締切対応、リモート会議など、活動プロファイルに合わせて最適化します。",
        },
        {
          title: "週間インサイト",
          description:
            "日々の生体傾向をわかりやすい週次パターンに変換し、長期的な自己理解を促進します。",
        },
        {
          title: "プライバシーを最優先",
          description:
            "業界水準の暗号化、セキュア保存、機密データに対するユーザー主導の管理を提供します。",
        },
        {
          title: "静かな予防支援",
          description:
            "ストレス上昇を早期に捉え、燃え尽きや不安の悪化前に介入します。",
        },
      ],
    },
    research: {
      eyebrow: "科学的根拠",
      title: "若年層メンタルヘルス研究に基づく設計",
      intro:
        "DASS-21関連の近年研究では、台湾の若年層において、学業圧力や将来不安に起因する中等度〜重度ストレスが確認されています。Echomindはこの実態に基づいて設計されています。",
      highlightTitle: "なぜ今必要か",
      highlightBody:
        "若年層は長時間の認知負荷、社会的比較、進路や経済的不確実性に晒されています。予防的センシングと早期介入は、危機状態への進行リスクを下げる鍵です。",
      referencesTitle: "参考文献",
      references: sharedReferences,
    },
    footer: {
      mentalTitle: "メンタルヘルス免責事項",
      mentalBody:
        "\"Echomind does not substitute for professional psychological support, but rather acts as preventive and companion technology.\"",
      investorTitle: "投資家向け注意事項",
      investorBody:
        "\"Investor Notice: This business plan represents the best estimate of the future potential of our business venture. It should be recognized that not all major risks can be accurately predicted... investors should be aware that this business has inherent risks.\"",
      rights: "All rights reserved.",
      backToTop: "トップへ戻る",
    },
  },
  es: {
    htmlLang: "es",
    title: "Echomind | Plataforma preventiva de bienestar mental",
    metaDescription:
      "Echomind es una plataforma integrada de monitoreo y regulación emocional que combina sensores biométricos wearables e IA para detectar estrés temprano e intervenir de forma discreta.",
    skipToContent: "Saltar al contenido principal",
    brandBy: "desarrollado por ARC 121 Co., Ltd.",
    menuOpenLabel: "Menú",
    menuCloseLabel: "Cerrar",
    navAriaLabel: "Navegación principal",
    languageAriaLabel: "Seleccionar idioma",
    primaryCta: "Ver cómo funciona",
    navItems: [
      { label: "Problema", href: "#problem" },
      { label: "Tecnología", href: "#technology" },
      { label: "Funciones", href: "#features" },
      { label: "Evidencia", href: "#research" },
      { label: "Avisos", href: "#footer" },
    ],
    hero: {
      eyebrow: "Inteligencia emocional preventiva",
      title: "Anticípate al estrés antes de que te sobrepase.",
      lead: "Echomind es una plataforma integrada de monitoreo y regulación emocional enfocada en el bienestar mental preventivo de jóvenes.",
      body: "Combina tecnología wearable de sensado biométrico y análisis impulsado por IA para detectar aumentos de estrés y activar intervenciones oportunas y discretas antes del agotamiento.",
      actionPrimary: "Explorar funciones",
      actionSecondary: "Ver respaldo científico",
      tags: [
        "Recordatorios de respiración",
        "Reinicios cognitivos",
        "Micro-pausas oportunas",
      ],
      tagsAriaLabel: "Ejemplos de intervención",
      imageAlt: "Prototipo del wearable Echomind y su interfaz de aplicación",
      imageCaption:
        "Sensado biométrico continuo combinado con una experiencia de app calmada y no intrusiva.",
    },
    problem: {
      eyebrow: "El problema",
      title: "El estrés se acumula en silencio. La ayuda suele llegar tarde.",
      intro:
        "La crisis global de salud mental se acelera, pero muchas soluciones actuales siguen siendo reactivas y dependen de que la persona identifique el malestar después de una escalada.",
      cards: [
        {
          title: "1 de cada 7 adolescentes",
          description:
            "La OMS reporta que uno de cada siete adolescentes vive con un trastorno de salud mental.",
        },
        {
          title: "Más de 1.000 millones",
          description:
            "Más de mil millones de personas en el mundo se ven afectadas por condiciones como ansiedad y depresión.",
        },
        {
          title: "Acumulación silenciosa",
          description:
            "Exámenes, presión académica, redes sociales e incertidumbre futura generan carga emocional y cognitiva gradual que muchas veces pasa desapercibida.",
        },
      ],
      gapTitle: "Brecha de las soluciones actuales",
      gapBody:
        "Muchas apps terapéuticas y rutas de consejería son reactivas. Las señales tempranas son sutiles y, sin intervención, pueden culminar en burnout o trastornos de ansiedad. Echomind cubre esa capa preventiva faltante.",
    },
    technology: {
      eyebrow: "Solución y tecnología",
      title: "Cómo funciona Echomind en segundo plano",
      intro:
        "Echomind monitorea biometría de forma continua y discreta, e interpreta patrones asociados con foco, cansancio y estrés emocional para intervenir en el momento adecuado.",
      workflowTitle: "Pipeline de señal a intervención",
      steps: [
        {
          label: "Monitoreo continuo en segundo plano:",
          description:
            "Los sensores wearables recolectan datos sin interrumpir estudio o trabajo.",
        },
        {
          label: "Detección de patrones con IA:",
          description:
            "Los modelos identifican firmas fisiológicas vinculadas con sobrecarga y fatiga.",
        },
        {
          label: "Intervención discreta:",
          description:
            "Nudges contextuales ayudan a regularse antes de que el estrés escale.",
        },
      ],
      placeholderPrimary: {
        title: "Video de prototipo 01",
        size: "Tamaño recomendado: 720 x 460",
        description: "Panel de tendencia de estrés y preparación",
      },
      placeholderSecondary: {
        title: "Video de prototipo 02",
        size: "Tamaño recomendado: 720 x 460",
        description: "Prompt de intervención sensible al contexto",
      },
      metricLabel: "Métrica biométrica",
      metrics: [
        {
          title: "GSR",
          description:
            "La respuesta galvánica de la piel (GSR) detecta cambios de activación emocional mediante conductancia cutánea.",
        },
        {
          title: "HRV",
          description:
            "La variabilidad de la frecuencia cardíaca (HRV) refleja actividad del sistema nervioso autónomo y recuperación al estrés.",
        },
        {
          title: "Temperatura de la piel",
          description:
            "Las variaciones térmicas aportan contexto sobre fatiga, respuesta de estrés y regulación fisiológica.",
        },
      ],
    },
    features: {
      eyebrow: "Funciones y beneficios",
      title: "Diseñado para rutinas reales, no para interrupciones clínicas",
      intro:
        "Echomind apoya a estudiantes y trabajadores remotos con herramientas prácticas, personalizadas y con base científica.",
      cards: [
        {
          title: "Nudges contextuales",
          description:
            "Activa respiraciones breves, reinicios cognitivos y micro-pausas para estabilizar sin romper el flujo de estudio o trabajo.",
        },
        {
          title: "Diseño basado en evidencia",
          description:
            "Co-desarrollado con psicólogos clínicos y especialistas en salud mental juvenil.",
        },
        {
          title: "Alta personalización",
          description:
            "Se adapta a perfiles de actividad como preparación de exámenes, trabajo remoto y picos de carga.",
        },
        {
          title: "Insights semanales",
          description:
            "Convierte señales diarias en patrones comprensibles para mejorar la conciencia emocional a largo plazo.",
        },
        {
          title: "Privacidad por defecto",
          description:
            "Cifrado robusto, almacenamiento seguro y control total del usuario sobre su información sensible.",
        },
        {
          title: "Prevención silenciosa",
          description:
            "Detecta aumentos de estrés tempranos e interviene antes de llegar al burnout o la ansiedad intensa.",
        },
      ],
    },
    research: {
      eyebrow: "Respaldo científico",
      title: "Fundamentado en investigación de salud mental juvenil",
      intro:
        "Estudios recientes con DASS-21 muestran niveles de estrés moderado a severo en jóvenes taiwaneses por presión académica e incertidumbre sobre el futuro. Echomind se diseña sobre esos hallazgos.",
      highlightTitle: "Por qué importa ahora",
      highlightBody:
        "Adolescentes y jóvenes afrontan carga cognitiva prolongada, comparación social constante e incertidumbre académica y laboral. La detección temprana y la intervención preventiva reducen el riesgo de escalamiento.",
      referencesTitle: "Referencias",
      references: sharedReferences,
    },
    footer: {
      mentalTitle: "Aviso de salud mental",
      mentalBody:
        "\"Echomind does not substitute for professional psychological support, but rather acts as preventive and companion technology.\"",
      investorTitle: "Aviso para inversionistas",
      investorBody:
        "\"Investor Notice: This business plan represents the best estimate of the future potential of our business venture. It should be recognized that not all major risks can be accurately predicted... investors should be aware that this business has inherent risks.\"",
      rights: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
    },
  },
};

function resolveInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (saved === "en" || saved === "ja" || saved === "es") {
    return saved;
  }

  const browserLang = window.navigator.language.toLowerCase();
  if (browserLang.startsWith("ja")) return "ja";
  if (browserLang.startsWith("es")) return "es";

  return "en";
}

export function App() {
  const [language, setLanguage] = useState<Language>(resolveInitialLanguage);
  const [menuOpen, setMenuOpen] = useState(false);

  const copy = translations[language];
  const assetBase = import.meta.env.BASE_URL;

  useEffect(() => {
    document.title = copy.title;
    document.documentElement.lang = copy.htmlLang;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", copy.metaDescription);
    }

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage failures.
    }
  }, [copy, language]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    if (!revealElements.length) return;

    revealElements.forEach((element, index) => {
      const delay = Math.min((index % 6) * 80, 400);
      element.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const year = new Date().getFullYear();

  return (
    <div className="site" id="top">
      <a className="skip-link" href="#main">
        {copy.skipToContent}
      </a>

      <header className="topbar">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            E
          </span>
          <span className="brand-text">
            Echomind
            <small>{copy.brandBy}</small>
          </span>
        </a>

        <nav
          id="mobile-nav"
          className={`nav ${menuOpen ? "is-open" : ""}`}
          aria-label={copy.navAriaLabel}
        >
          {copy.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <div
            className="language-switch mobile-language"
            role="group"
            aria-label={copy.languageAriaLabel}
          >
            {languageOptions.map((option) => (
              <button
                key={`mobile-${option.value}`}
                type="button"
                className={language === option.value ? "is-active" : undefined}
                onClick={() => setLanguage(option.value)}
                aria-pressed={language === option.value}
              >
                {option.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="topbar-actions">
          <a href="#technology" className="primary-cta">
            {copy.primaryCta}
          </a>

          <div
            className="language-switch desktop-language"
            role="group"
            aria-label={copy.languageAriaLabel}
          >
            {languageOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={language === option.value ? "is-active" : undefined}
                onClick={() => setLanguage(option.value)}
                aria-pressed={language === option.value}
              >
                {option.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? copy.menuCloseLabel : copy.menuOpenLabel}
          </button>
        </div>
      </header>

      <button
        type="button"
        className={`menu-overlay ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-label={copy.menuCloseLabel}
      />

      <main id="main">
        <section className="section hero">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">{copy.hero.eyebrow}</p>
              <h1>{copy.hero.title}</h1>
              <p className="lead">{copy.hero.lead}</p>
              <p className="body-copy">{copy.hero.body}</p>
              <div className="hero-actions">
                <a href="#features" className="button button-primary">
                  {copy.hero.actionPrimary}
                </a>
                <a href="#research" className="button button-secondary">
                  {copy.hero.actionSecondary}
                </a>
              </div>
              <div className="tag-row" aria-label={copy.hero.tagsAriaLabel}>
                {copy.hero.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <figure className="hero-visual reveal" aria-label={copy.hero.imageAlt}>
              <div className="prototype-placeholder main pulse-surface has-image">
                <img
                  src={`${assetBase}S__106610984.jpg`}
                  alt={copy.hero.imageAlt}
                  className="hero-product-image"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <figcaption>{copy.hero.imageCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="section" id="problem">
          <div className="section-head reveal">
            <p className="eyebrow">{copy.problem.eyebrow}</p>
            <h2>{copy.problem.title}</h2>
            <p>{copy.problem.intro}</p>
          </div>

          <div className="problem-grid">
            {copy.problem.cards.map((card) => (
              <article key={card.title} className="card reveal">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>

          <article className="card problem-gap reveal">
            <h3>{copy.problem.gapTitle}</h3>
            <p>{copy.problem.gapBody}</p>
          </article>
        </section>

        <section className="section" id="technology">
          <div className="section-head reveal">
            <p className="eyebrow">{copy.technology.eyebrow}</p>
            <h2>{copy.technology.title}</h2>
            <p>{copy.technology.intro}</p>
          </div>

          <div className="tech-layout">
            <article className="card workflow reveal">
              <h3>{copy.technology.workflowTitle}</h3>
              <ol>
                {copy.technology.steps.map((step) => (
                  <li key={step.label}>
                    <strong>{step.label}</strong> {step.description}
                  </li>
                ))}
              </ol>
            </article>

            <div className="prototype-stack reveal">
              <div className="prototype-placeholder secondary pulse-surface has-video">
                <video
                  className="prototype-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={copy.technology.placeholderPrimary.description}
                >
                  <source
                    src={`${assetBase}echomind-prototype-1.mp4`}
                    type="video/mp4"
                  />
                </video>
                <strong>{copy.technology.placeholderPrimary.title}</strong>
                <span>{copy.technology.placeholderPrimary.size}</span>
                <span>{copy.technology.placeholderPrimary.description}</span>
              </div>
              <div className="prototype-placeholder secondary pulse-surface has-video">
                <video
                  className="prototype-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={copy.technology.placeholderSecondary.description}
                >
                  <source
                    src={`${assetBase}echomind-prototype-2.mp4`}
                    type="video/mp4"
                  />
                </video>
                <strong>{copy.technology.placeholderSecondary.title}</strong>
                <span>{copy.technology.placeholderSecondary.size}</span>
                <span>{copy.technology.placeholderSecondary.description}</span>
              </div>
            </div>
          </div>

          <div className="metrics-grid">
            {copy.technology.metrics.map((metric) => (
              <article key={metric.title} className="card metric-card reveal">
                <p className="metric-label">{copy.technology.metricLabel}</p>
                <h3>{metric.title}</h3>
                <p>{metric.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-head reveal">
            <p className="eyebrow">{copy.features.eyebrow}</p>
            <h2>{copy.features.title}</h2>
            <p>{copy.features.intro}</p>
          </div>

          <div className="feature-grid">
            {copy.features.cards.map((feature) => (
              <article key={feature.title} className="card feature-card reveal">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="research">
          <div className="section-head reveal">
            <p className="eyebrow">{copy.research.eyebrow}</p>
            <h2>{copy.research.title}</h2>
            <p>{copy.research.intro}</p>
          </div>

          <div className="research-grid">
            <article className="card research-highlight reveal">
              <h3>{copy.research.highlightTitle}</h3>
              <p>{copy.research.highlightBody}</p>
            </article>

            <article className="card references reveal">
              <h3>{copy.research.referencesTitle}</h3>
              <ul>
                {copy.research.references.map((reference, index) => (
                  <li key={`${reference}-${index}`}>{reference}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </main>

      <footer className="section footer" id="footer">
        <div className="disclaimer-grid">
          <article className="card disclaimer-card reveal">
            <h3>{copy.footer.mentalTitle}</h3>
            <p>{copy.footer.mentalBody}</p>
          </article>

          <article className="card disclaimer-card reveal">
            <h3>{copy.footer.investorTitle}</h3>
            <p>{copy.footer.investorBody}</p>
          </article>
        </div>

        <div className="footer-bottom reveal">
          <p>
            ARC 121 Co., Ltd. © {year} Echomind. {copy.footer.rights}
          </p>
          <a href="#top">{copy.footer.backToTop}</a>
        </div>
      </footer>
    </div>
  );
}
