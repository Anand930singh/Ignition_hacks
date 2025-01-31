export const ReportData = [
  {
    id: 1,
    reagent: "Leukocytes",
    stages: [
      { color: "rgb(224,231,180)", label: "Neg" },
      { color: "rgb(218,213,184)", label: "Trace" },
      { color: "rgb(191,184,165)", label: "Small" },
      { color: "rgb(152,118,145)", label: "Mod" },
      { color: "rgb(137,100,144)", label: "Large" },
    ],
    normalRange: "10 - 25 Leu/μL",
    url: "https://en.wikipedia.org/wiki/White_blood_cell",
  },
  {
    id: 2,
    reagent: "Nitrite",
    stages: [
      { color: "rgb(250,249,219)", label: "Negative" },
      { color: "rgb(254,238,205)", label: "Positive any pink1" },
      { color: "rgb(252,205,199)", label: "Positive any pink2" },
    ],
    normalRange: "0.05 mg/dL (11 μmol/L)",
    url: "https://en.wikipedia.org/wiki/Nitrite",
  },
  {
    id: 3,
    reagent: "Urobilinogen",
    stages: [
      { color: "rgb(252,199,157)", label: "Norm 0.2" },
      { color: "rgb(248,167,150)", label: "Norm 1" },
      { color: "rgb(245,147,144)", label: "2" },
      { color: "rgb(245,140,137)", label: "4" },
      { color: "rgb(241,111,139)", label: "8" },
    ],
    normalRange: "0.4 mg/dL (7 μmol/L)",
    url: "https://en.wikipedia.org/wiki/Urobilinogen",
  },
  {
    id: 4,
    reagent: "Protein",
    stages: [
      { color: "rgb(211,226,121)", label: "Negative" },
      { color: "rgb(172,207,107)", label: "Trace" },
      { color: "rgb(151,189,114)", label: "30+" },
      { color: "rgb(124,182,142)", label: "100++" },
      { color: "rgb(68,171,152)", label: "300+++" },
      { color: "rgb(20,153,136)", label: "2000+++++" },
    ],
    normalRange: "6 mg/dL",
    url: "https://en.wikipedia.org/wiki/Protein",
  },
  {
    id: 5,
    reagent: "pH",
    stages: [
      { color: "rgb(245,133,85)", label: "5" },
      { color: "rgb(250,165,85)", label: "6" },
      { color: "rgb(224,191,78)", label: "6.5" },
      { color: "rgb(175,190,87)", label: "7" },
      { color: "rgb(110,165,84)", label: "7.5" },
      { color: "rgb(4,152,104)", label: "8" },
      { color: "rgb(19,124,120)", label: "8.5" },
    ],
    normalRange: "5 - 9",
    url: "https://en.wikipedia.org/wiki/PH",
  },
  {
    id: 6,
    reagent: "Haemoglobin",
    stages: [
      { color: "rgb(236,188,60)", label: "Negative" },
      { color: "rgb(237,191,56)", label: "Few dark flecks" },
      { color: "rgb(210,191,88)", label: "Many dark flecks" },
      { color: "rgb(190,188,67)", label: "Trace" },
      { color: "rgb(133,167,80)", label: "Small+" },
      { color: "rgb(58,135,83)", label: "Moderate++" },
      { color: "rgb(42,82,58)", label: "Large+++" },
    ],
    normalRange: "0.03 mg/dL Hb",
    url: "https://en.wikipedia.org/wiki/Haemoglobin",
  },
  {
    id: 7,
    reagent: "Specific gravity",
    stages: [
      { color: "rgb(2,72,72)", label: "1.000" },
      { color: "rgb(17,111,84)", label: "1.005" },
      { color: "rgb(76,122,73)", label: "1.010" },
      { color: "rgb(114,135,76)", label: "1.015" },
      { color: "rgb(138,148,77)", label: "1.020" },
      { color: "rgb(136,142,72)", label: "1.025" },
      { color: "rgb(188,158,68)", label: "1.030" },
    ],
    normalRange: "1.000 - 1.030",
    url: "https://en.wikipedia.org/wiki/Urine_specific_gravity",
  },
  {
    id: 8,
    reagent: "Ketone",
    stages: [
      { color: "rgb(223,182,152)", label: "Neg" },
      { color: "rgb(247,176,158)", label: "Trace5" },
      { color: "rgb(232,130,128)", label: "Small 15" },
      { color: "rgb(194,97,104)", label: "Mod 40" },
      { color: "rgb(150,70,83)", label: "Large 80" },
      { color: "rgb(107,49,61)", label: "Large 160" },
    ],
    normalRange: "40 mg/dL (7 mmol/L)",
    url: "https://en.wikipedia.org/wiki/Ketone",
  },
  {
    id: 9,
    reagent: "Bilirubin",
    stages: [
      { color: "rgb(245,230,163)", label: "Neg" },
      { color: "rgb(242,215,162)", label: "Small +" },
      { color: "rgb(201,193,154)", label: "Mod ++" },
      { color: "rgb(198,174,150)", label: "Large +++" },
    ],
    normalRange: "0.5 mg/dL (9 μmol/L)",
    url: "https://en.wikipedia.org/wiki/Bilirubin",
  },
  {
    id: 10,
    reagent: "Glucose",
    stages: [
      { color: "rgb(111,199,175)", label: "Neg" },
      { color: "rgb(110,191,133)", label: "1/10 (ir) 100" },
      { color: "rgb(94,174,89)", label: "1/4 250" },
      { color: "rgb(139,145,75)", label: "1/2 500" },
      { color: "rgb(131,118,66)", label: "1 1 1000" },
      { color: "rgb(129,84,53)", label: "2+ 2,000+" },
    ],
    normalRange: "40 mg/dL (2.2 mmol/L)",
    url: "https://en.wikipedia.org/wiki/Glucose",
  },
];
