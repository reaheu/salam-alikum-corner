
export interface CognitiveFunction {
  name: string;
  weight: number;
}

export interface QuestionOption {
  id: string;
  text: string;
  functions: CognitiveFunction[];
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "كيف تتعامل مع التغييرات في البيئة المحيطة؟",
    options: [
      {
        id: "1a",
        text: "أتكيف بسرعة وأستمتع بالتجارب الجديدة",
        functions: [{ name: "Se", weight: 3 }, { name: "Ne", weight: 2 }]
      },
      {
        id: "1b",
        text: "أشعر بعدم الارتياح وأفضل الاستقرار",
        functions: [{ name: "Si", weight: 3 }, { name: "Ni", weight: 1 }]
      },
      {
        id: "1c",
        text: "أحلل التغيير وأخطط للتعامل معه منطقياً",
        functions: [{ name: "Te", weight: 2 }, { name: "Ti", weight: 2 }]
      },
      {
        id: "1d",
        text: "أقلق بشأن تأثير التغيير على الآخرين",
        functions: [{ name: "Fe", weight: 3 }, { name: "Fi", weight: 1 }]
      }
    ]
  },
  {
    id: 2,
    question: "عند اتخاذ قرار مهم، ما الذي تعتمد عليه أكثر؟",
    options: [
      {
        id: "2a",
        text: "البيانات والحقائق الموضوعية",
        functions: [{ name: "Te", weight: 3 }, { name: "Ti", weight: 2 }]
      },
      {
        id: "2b",
        text: "مشاعري الداخلية وقيمي الشخصية",
        functions: [{ name: "Fi", weight: 3 }, { name: "Fe", weight: 1 }]
      },
      {
        id: "2c",
        text: "تأثير القرار على العلاقات والآخرين",
        functions: [{ name: "Fe", weight: 3 }, { name: "Si", weight: 1 }]
      },
      {
        id: "2d",
        text: "حدسي وإحساسي بالوضع",
        functions: [{ name: "Ni", weight: 3 }, { name: "Ne", weight: 2 }]
      }
    ]
  },
  {
    id: 3,
    question: "كيف تفضل قضاء وقت فراغك؟",
    options: [
      {
        id: "3a",
        text: "في أنشطة اجتماعية مع الأصدقاء",
        functions: [{ name: "Fe", weight: 2 }, { name: "Se", weight: 2 }]
      },
      {
        id: "3b",
        text: "في التفكير والتأمل بمفردي",
        functions: [{ name: "Ni", weight: 3 }, { name: "Ti", weight: 2 }]
      },
      {
        id: "3c",
        text: "في ممارسة هوايات عملية",
        functions: [{ name: "Si", weight: 2 }, { name: "Te", weight: 1 }]
      },
      {
        id: "3d",
        text: "في استكشاف أفكار وإمكانيات جديدة",
        functions: [{ name: "Ne", weight: 3 }, { name: "Ni", weight: 1 }]
      }
    ]
  },
  {
    id: 4,
    question: "عندما تواجه مشكلة معقدة، كيف تتعامل معها؟",
    options: [
      {
        id: "4a",
        text: "أحللها خطوة بخطوة منطقياً",
        functions: [{ name: "Ti", weight: 3 }, { name: "Te", weight: 1 }]
      },
      {
        id: "4b",
        text: "أبحث عن حلول عملية مجربة",
        functions: [{ name: "Si", weight: 2 }, { name: "Te", weight: 2 }]
      },
      {
        id: "4c",
        text: "أعصف ذهنياً لإيجاد حلول إبداعية",
        functions: [{ name: "Ne", weight: 3 }, { name: "Ni", weight: 1 }]
      },
      {
        id: "4d",
        text: "أسأل الآخرين عن آرائهم",
        functions: [{ name: "Fe", weight: 2 }, { name: "Se", weight: 1 }]
      }
    ]
  },
  {
    id: 5,
    question: "ما الذي يحفزك أكثر في العمل؟",
    options: [
      {
        id: "5a",
        text: "تحقيق الأهداف والنتائج بكفاءة",
        functions: [{ name: "Te", weight: 3 }, { name: "Se", weight: 1 }]
      },
      {
        id: "5b",
        text: "فهم الأنظمة والمفاهيم بعمق",
        functions: [{ name: "Ti", weight: 3 }, { name: "Ni", weight: 2 }]
      },
      {
        id: "5c",
        text: "مساعدة الآخرين والعمل الجماعي",
        functions: [{ name: "Fe", weight: 3 }, { name: "Si", weight: 1 }]
      },
      {
        id: "5d",
        text: "التعبير عن قيمي وإحداث تغيير إيجابي",
        functions: [{ name: "Fi", weight: 3 }, { name: "Ne", weight: 1 }]
      }
    ]
  },
  {
    id: 6,
    question: "كيف تتعامل مع المعلومات الجديدة؟",
    options: [
      {
        id: "6a",
        text: "أربطها بتجاربي السابقة",
        functions: [{ name: "Si", weight: 3 }, { name: "Ti", weight: 1 }]
      },
      {
        id: "6b",
        text: "أرى الأنماط والاتصالات الخفية",
        functions: [{ name: "Ni", weight: 3 }, { name: "Ti", weight: 1 }]
      },
      {
        id: "6c",
        text: "أستكشف الإمكانيات والبدائل",
        functions: [{ name: "Ne", weight: 3 }, { name: "Te", weight: 1 }]
      },
      {
        id: "6d",
        text: "أركز على التفاصيل الملموسة",
        functions: [{ name: "Se", weight: 3 }, { name: "Te", weight: 1 }]
      }
    ]
  },
  {
    id: 7,
    question: "في المواقف الاجتماعية، أنت غالباً:",
    options: [
      {
        id: "7a",
        text: "أتفاعل بحيوية وأستمتع بالأجواء",
        functions: [{ name: "Se", weight: 2 }, { name: "Fe", weight: 2 }]
      },
      {
        id: "7b",
        text: "أراقب وأستمع أكثر مما أتكلم",
        functions: [{ name: "Si", weight: 2 }, { name: "Ti", weight: 2 }]
      },
      {
        id: "7c",
        text: "أركز على مشاعر واحتياجات الآخرين",
        functions: [{ name: "Fe", weight: 3 }, { name: "Si", weight: 1 }]
      },
      {
        id: "7d",
        text: "أبقى وفياً لشخصيتي الحقيقية",
        functions: [{ name: "Fi", weight: 3 }, { name: "Ni", weight: 1 }]
      }
    ]
  },
  {
    id: 8,
    question: "عند التخطيط للمستقبل، تميل إلى:",
    options: [
      {
        id: "8a",
        text: "وضع خطط واضحة ومفصلة",
        functions: [{ name: "Te", weight: 3 }, { name: "Si", weight: 1 }]
      },
      {
        id: "8b",
        text: "تخيل رؤية شاملة للمستقبل",
        functions: [{ name: "Ni", weight: 3 }, { name: "Fi", weight: 1 }]
      },
      {
        id: "8c",
        text: "الإبقاء على خيارات متعددة مفتوحة",
        functions: [{ name: "Ne", weight: 3 }, { name: "Se", weight: 1 }]
      },
      {
        id: "8d",
        text: "الاعتماد على ما نجح في الماضي",
        functions: [{ name: "Si", weight: 3 }, { name: "Te", weight: 1 }]
      }
    ]
  },
  {
    id: 9,
    question: "ما الذي يضايقك أكثر؟",
    options: [
      {
        id: "9a",
        text: "عدم الكفاءة والتأخير",
        functions: [{ name: "Te", weight: 3 }, { name: "Se", weight: 1 }]
      },
      {
        id: "9b",
        text: "المنطق المتناقض والأخطاء الفكرية",
        functions: [{ name: "Ti", weight: 3 }, { name: "Ni", weight: 1 }]
      },
      {
        id: "9c",
        text: "الصراعات والتوتر بين الناس",
        functions: [{ name: "Fe", weight: 3 }, { name: "Si", weight: 1 }]
      },
      {
        id: "9d",
        text: "انتهاك القيم والمبادئ المهمة",
        functions: [{ name: "Fi", weight: 3 }, { name: "Ni", weight: 1 }]
      }
    ]
  },
  {
    id: 10,
    question: "كيف تفضل التعلم؟",
    options: [
      {
        id: "10a",
        text: "من خلال التجربة والممارسة العملية",
        functions: [{ name: "Se", weight: 3 }, { name: "Te", weight: 1 }]
      },
      {
        id: "10b",
        text: "من خلال القراءة والتأمل العميق",
        functions: [{ name: "Ni", weight: 2 }, { name: "Ti", weight: 2 }]
      },
      {
        id: "10c",
        text: "من خلال المناقشة والتفاعل",
        functions: [{ name: "Ne", weight: 2 }, { name: "Fe", weight: 2 }]
      },
      {
        id: "10d",
        text: "من خلال الطرق التقليدية المنظمة",
        functions: [{ name: "Si", weight: 3 }, { name: "Te", weight: 1 }]
      }
    ]
  },
  {
    id: 11,
    question: "في بيئة العمل، تفضل:",
    options: [
      {
        id: "11a",
        text: "الهيكل الواضح والمواعيد المحددة",
        functions: [{ name: "Te", weight: 2 }, { name: "Si", weight: 2 }]
      },
      {
        id: "11b",
        text: "المرونة والحرية في الإبداع",
        functions: [{ name: "Ne", weight: 3 }, { name: "Fi", weight: 1 }]
      },
      {
        id: "11c",
        text: "الاستقلالية والتركيز العميق",
        functions: [{ name: "Ti", weight: 3 }, { name: "Ni", weight: 1 }]
      },
      {
        id: "11d",
        text: "التعاون والبيئة الودية",
        functions: [{ name: "Fe", weight: 3 }, { name: "Se", weight: 1 }]
      }
    ]
  },
  {
    id: 12,
    question: "عندما تشعر بالتوتر، تميل إلى:",
    options: [
      {
        id: "12a",
        text: "العمل بجدية أكبر لحل المشكلة",
        functions: [{ name: "Te", weight: 2 }, { name: "Se", weight: 1 }]
      },
      {
        id: "12b",
        text: "الانسحاب والتفكير بمفردي",
        functions: [{ name: "Ti", weight: 2 }, { name: "Ni", weight: 2 }]
      },
      {
        id: "12c",
        text: "طلب الدعم من الأصدقاء",
        functions: [{ name: "Fe", weight: 3 }, { name: "Se", weight: 1 }]
      },
      {
        id: "12d",
        text: "ممارسة أنشطة مألوفة ومريحة",
        functions: [{ name: "Si", weight: 3 }, { name: "Fi", weight: 1 }]
      }
    ]
  },
  {
    id: 13,
    question: "عندما تكون في مجموعة، تميل إلى:",
    options: [
      {
        id: "13a",
        text: "أخذ زمام المبادرة وتوجيه المحادثة",
        functions: [{ name: "Te", weight: 3 }, { name: "Fe", weight: 2 }]
      },
      {
        id: "13b",
        text: "الاستماع والمساهمة عند الحاجة",
        functions: [{ name: "Si", weight: 2 }, { name: "Ti", weight: 2 }]
      },
      {
        id: "13c",
        text: "إثارة أفكار جديدة ومثيرة",
        functions: [{ name: "Ne", weight: 3 }, { name: "Se", weight: 1 }]
      },
      {
        id: "13d",
        text: "التأكد من راحة الجميع",
        functions: [{ name: "Fe", weight: 3 }, { name: "Fi", weight: 1 }]
      }
    ]
  },
  {
    id: 14,
    question: "كيف تتعامل مع الانتقادات؟",
    options: [
      {
        id: "14a",
        text: "أحللها بموضوعية وأستفيد منها",
        functions: [{ name: "Ti", weight: 3 }, { name: "Te", weight: 2 }]
      },
      {
        id: "14b",
        text: "آخذها بشكل شخصي وأتأثر عاطفياً",
        functions: [{ name: "Fi", weight: 3 }, { name: "Fe", weight: 1 }]
      },
      {
        id: "14c",
        text: "أركز على كيفية تأثيرها على علاقاتي",
        functions: [{ name: "Fe", weight: 3 }, { name: "Si", weight: 1 }]
      },
      {
        id: "14d",
        text: "أقارنها بتجاربي السابقة",
        functions: [{ name: "Si", weight: 3 }, { name: "Ni", weight: 1 }]
      }
    ]
  },
  {
    id: 15,
    question: "ما نوع الأنشطة التي تستنزف طاقتك؟",
    options: [
      {
        id: "15a",
        text: "المهام الروتينية والمتكررة",
        functions: [{ name: "Ne", weight: 3 }, { name: "Ni", weight: 2 }]
      },
      {
        id: "15b",
        text: "التفاعل الاجتماعي المكثف",
        functions: [{ name: "Ti", weight: 2 }, { name: "Fi", weight: 2 }]
      },
      {
        id: "15c",
        text: "المواقف غير المنظمة والفوضوية",
        functions: [{ name: "Si", weight: 3 }, { name: "Te", weight: 2 }]
      },
      {
        id: "15d",
        text: "التعامل مع الصراعات العاطفية",
        functions: [{ name: "Ti", weight: 3 }, { name: "Te", weight: 1 }]
      }
    ]
  },
  {
    id: 16,
    question: "كيف تتخذ قرارات سريعة؟",
    options: [
      {
        id: "16a",
        text: "أثق في غريزتي الأولى",
        functions: [{ name: "Ni", weight: 3 }, { name: "Se", weight: 2 }]
      },
      {
        id: "16b",
        text: "أعتمد على ما جرب ونجح من قبل",
        functions: [{ name: "Si", weight: 3 }, { name: "Te", weight: 1 }]
      },
      {
        id: "16c",
        text: "أفكر في أكبر عدد من البدائل",
        functions: [{ name: "Ne", weight: 3 }, { name: "Ti", weight: 1 }]
      },
      {
        id: "16d",
        text: "أختار ما يخدم المجموعة أفضل",
        functions: [{ name: "Fe", weight: 3 }, { name: "Te", weight: 1 }]
      }
    ]
  },
  {
    id: 17,
    question: "ما الذي يجذبك أكثر في الأشخاص؟",
    options: [
      {
        id: "17a",
        text: "ذكاؤهم وقدرتهم على التحليل",
        functions: [{ name: "Ti", weight: 3 }, { name: "Te", weight: 1 }]
      },
      {
        id: "17b",
        text: "إبداعهم وأفكارهم المبتكرة",
        functions: [{ name: "Ne", weight: 3 }, { name: "Ni", weight: 2 }]
      },
      {
        id: "17c",
        text: "دفئهم وتعاطفهم",
        functions: [{ name: "Fe", weight: 3 }, { name: "Fi", weight: 1 }]
      },
      {
        id: "17d",
        text: "موثوقيتهم واستقرارهم",
        functions: [{ name: "Si", weight: 3 }, { name: "Te", weight: 1 }]
      }
    ]
  },
  {
    id: 18,
    question: "كيف تتعامل مع المواعيد النهائية؟",
    options: [
      {
        id: "18a",
        text: "أخطط مسبقاً وأنجز قبل الموعد",
        functions: [{ name: "Te", weight: 3 }, { name: "Si", weight: 2 }]
      },
      {
        id: "18b",
        text: "أعمل بشكل مكثف في اللحظة الأخيرة",
        functions: [{ name: "Se", weight: 3 }, { name: "Ne", weight: 2 }]
      },
      {
        id: "18c",
        text: "أشعر بالضغط وأحتاج للدعم",
        functions: [{ name: "Fe", weight: 2 }, { name: "Fi", weight: 2 }]
      },
      {
        id: "18d",
        text: "أركز على الجودة أكثر من السرعة",
        functions: [{ name: "Ti", weight: 3 }, { name: "Ni", weight: 1 }]
      }
    ]
  },
  {
    id: 19,
    question: "ما الذي يميز طريقة تفكيرك؟",
    options: [
      {
        id: "19a",
        text: "أفكر في الصورة الكبيرة والمعاني العميقة",
        functions: [{ name: "Ni", weight: 3 }, { name: "Ne", weight: 1 }]
      },
      {
        id: "19b",
        text: "أركز على التفاصيل والحقائق الدقيقة",
        functions: [{ name: "Si", weight: 3 }, { name: "Se", weight: 1 }]
      },
      {
        id: "19c",
        text: "أبحث عن الروابط والإمكانيات",
        functions: [{ name: "Ne", weight: 3 }, { name: "Ni", weight: 1 }]
      },
      {
        id: "19d",
        text: "أحلل المنطق والتناسق",
        functions: [{ name: "Ti", weight: 3 }, { name: "Te", weight: 1 }]
      }
    ]
  },
  {
    id: 20,
    question: "في البيئات الجديدة، أنت عادة:",
    options: [
      {
        id: "20a",
        text: "متحمس ومستعد للاستكشاف",
        functions: [{ name: "Se", weight: 3 }, { name: "Ne", weight: 2 }]
      },
      {
        id: "20b",
        text: "حذر وأحتاج وقتاً للتأقلم",
        functions: [{ name: "Si", weight: 3 }, { name: "Fi", weight: 1 }]
      },
      {
        id: "20c",
        text: "أراقب وأحلل قبل المشاركة",
        functions: [{ name: "Ti", weight: 2 }, { name: "Ni", weight: 2 }]
      },
      {
        id: "20d",
        text: "أبحث عن طرق للتواصل مع الآخرين",
        functions: [{ name: "Fe", weight: 3 }, { name: "Se", weight: 1 }]
      }
    ]
  }
];
