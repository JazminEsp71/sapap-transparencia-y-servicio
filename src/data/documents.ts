export interface Document {
  id: string;
  title: string;
  category: string;
  type: "pdf" | "excel";
  date: string;
  size: string;
}

/* ------------------------------------------------------------------ */
/*  Transparency – organised by year > section > trimester             */
/* ------------------------------------------------------------------ */

export interface TransparencyFile {
  title: string;
  type: "pdf" | "excel";
  size: string;
}

export interface Trimester {
  label: string;
  files: TransparencyFile[];
}

export interface TransparencySection {
  section: string;
  trimesters: Trimester[];
}

export interface TransparencyYear {
  year: string;
  sections: TransparencySection[];
}

const buildTrimesters = (year: string, section: string): Trimester[] => [
  {
    label: "1er Trimestre",
    files: [
      { title: `${section} – Enero-Marzo ${year}`, type: "pdf", size: "2.4 MB" },
      { title: `Anexos ${section} Q1 ${year}`, type: "excel", size: "1.1 MB" },
    ],
  },
  {
    label: "2do Trimestre",
    files: [
      { title: `${section} – Abril-Junio ${year}`, type: "pdf", size: "2.6 MB" },
      { title: `Anexos ${section} Q2 ${year}`, type: "excel", size: "1.3 MB" },
    ],
  },
  {
    label: "3er Trimestre",
    files: [
      { title: `${section} – Julio-Septiembre ${year}`, type: "pdf", size: "2.5 MB" },
    ],
  },
  {
    label: "4to Trimestre",
    files: [
      { title: `${section} – Octubre-Diciembre ${year}`, type: "pdf", size: "2.8 MB" },
      { title: `Anexos ${section} Q4 ${year}`, type: "excel", size: "1.5 MB" },
    ],
  },
];

export const transparencyYears: TransparencyYear[] = [
  "2025", "2024", "2023", "2022", "2021", "2020", "2019",
].map((year) => ({
  year,
  sections: [
    { section: "Transparencia", trimesters: buildTrimesters(year, "Transparencia") },
    { section: "CONAC", trimesters: buildTrimesters(year, "CONAC") },
    ...(parseInt(year) >= 2021
      ? [{ section: "Cuenta Pública", trimesters: [{ label: "Anual", files: [{ title: `Cuenta Pública ${year}`, type: "pdf" as const, size: "4.2 MB" }] }] }]
      : []),
  ],
}));

/* legacy flat list kept for backwards-compat */
export const transparencyDocuments: Document[] = [
  { id: "1", title: "Informe Financiero Trimestral - Q4 2025", category: "Informes Financieros", type: "pdf", date: "2026-01-15", size: "2.4 MB" },
  { id: "2", title: "Presupuesto de Egresos 2026", category: "Informes Financieros", type: "excel", date: "2025-12-20", size: "1.8 MB" },
  { id: "3", title: "Acta de Sesión Ordinaria - Diciembre 2025", category: "Actas", type: "pdf", date: "2025-12-18", size: "890 KB" },
  { id: "4", title: "Auditoría Externa 2025", category: "Auditorías", type: "pdf", date: "2025-11-30", size: "5.2 MB" },
  { id: "5", title: "Padrón de Proveedores 2026", category: "Padrones", type: "excel", date: "2026-01-10", size: "3.1 MB" },
  { id: "6", title: "Informe de Gestión Anual 2025", category: "Informes Financieros", type: "pdf", date: "2026-01-20", size: "4.7 MB" },
  { id: "7", title: "Acta de Sesión Extraordinaria - Noviembre 2025", category: "Actas", type: "pdf", date: "2025-11-15", size: "650 KB" },
  { id: "8", title: "Reporte de Ingresos Mensuales", category: "Informes Financieros", type: "excel", date: "2026-01-05", size: "1.2 MB" },
  { id: "9", title: "Dictamen de Auditoría Interna Q3 2025", category: "Auditorías", type: "pdf", date: "2025-10-28", size: "3.8 MB" },
  { id: "10", title: "Inventario de Bienes Muebles e Inmuebles", category: "Padrones", type: "excel", date: "2025-12-01", size: "2.5 MB" },
];

/* ------------------------------------------------------------------ */
/*  Laws                                                               */
/* ------------------------------------------------------------------ */

export const lawDocuments: Document[] = [
  { id: "l1", title: "Ley de Ingresos", category: "Leyes", type: "pdf", date: "2024-03-15", size: "1.9 MB" },
  { id: "l2", title: "Reglamento SAPAP", category: "Reglamentos", type: "pdf", date: "2023-06-20", size: "2.1 MB" },
  { id: "l3", title: "Código Territorial del Estado de Guanajuato", category: "Códigos", type: "pdf", date: "2024-01-10", size: "1.5 MB" },
  { id: "l4", title: "Ley de Aguas Nacionales", category: "Leyes", type: "pdf", date: "2023-09-01", size: "980 KB" },
  { id: "l5", title: "Código de Ética y Conducta", category: "Códigos", type: "pdf", date: "2024-05-12", size: "1.3 MB" },
  { id: "l6", title: "Manual de Contabilidad Gubernamental", category: "Manuales", type: "pdf", date: "2024-02-28", size: "2.8 MB" },
];

export const categories = ["Todos", "Informes Financieros", "Auditorías", "Actas", "Padrones"];
export const lawCategories = ["Todos", "Leyes", "Reglamentos", "Códigos", "Manuales"];
export const years = ["Todos", "2026", "2025", "2024", "2023"];
export const fileTypes = ["Todos", "PDF", "Excel"];
