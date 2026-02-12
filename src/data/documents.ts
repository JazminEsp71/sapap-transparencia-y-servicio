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

/* Artículo 26 – ALL fractions for Transparencia */
export const articulo26Fractions: TransparencyFile[] = [
  { title: "Fracción I – Marco normativo aplicable al sujeto obligado", type: "pdf", size: "1.2 MB" },
  { title: "Fracción II A – Estructura orgánica completa (atribuciones)", type: "pdf", size: "980 KB" },
  { title: "Fracción II B – Estructura orgánica completa (responsabilidades)", type: "pdf", size: "1.0 MB" },
  { title: "Fracción III – Las facultades de cada área", type: "pdf", size: "850 KB" },
  { title: "Fracción IV – Metas y objetivos de las áreas", type: "pdf", size: "900 KB" },
  { title: "Fracción V – Indicadores de interés público o trascendencia social", type: "pdf", size: "850 KB" },
  { title: "Fracción VI – Indicadores de objetivos y resultados", type: "pdf", size: "920 KB" },
  { title: "Fracción VII – Directorio de Servidores Públicos", type: "pdf", size: "1.4 MB" },
  { title: "Fracción VIII – Remuneración bruta y neta de Servidores Públicos", type: "excel", size: "1.6 MB" },
  { title: "Fracción IX – Gastos de representación y viáticos", type: "excel", size: "1.2 MB" },
  { title: "Fracción X A – Plazas y personal de base y confianza", type: "excel", size: "1.1 MB" },
  { title: "Fracción X B – Plazas y personal: vacantes por unidad administrativa", type: "excel", size: "1.0 MB" },
  { title: "Fracción XI – Contrataciones de servicios profesionales por honorarios", type: "excel", size: "980 KB" },
  { title: "Fracción XII – Declaraciones patrimoniales (Versión Pública)", type: "pdf", size: "1.5 MB" },
  { title: "Fracción XIV – Convocatorias a concursos para cargos públicos", type: "pdf", size: "780 KB" },
  { title: "Fracción XVI A – Condiciones generales de trabajo y contratos laborales", type: "pdf", size: "1.1 MB" },
  { title: "Fracción XVI B – Recursos entregados a sindicatos", type: "pdf", size: "950 KB" },
  { title: "Fracción XVII – Información curricular de servidores públicos", type: "pdf", size: "1.3 MB" },
  { title: "Fracción XVIII – Servidores Públicos con sanciones administrativas", type: "pdf", size: "780 KB" },
  { title: "Fracción XIX – Servicios ofrecidos y requisitos de acceso", type: "pdf", size: "1.1 MB" },
  { title: "Fracción XX – Trámites, requisitos y formatos", type: "pdf", size: "1.3 MB" },
  { title: "Fracción XXI A – Presupuesto asignado", type: "excel", size: "2.1 MB" },
  { title: "Fracción XXI B – Informes del ejercicio trimestral del gasto", type: "excel", size: "1.8 MB" },
  { title: "Fracción XXII – Deuda pública", type: "pdf", size: "950 KB" },
  { title: "Fracción XXIII B – Gastos de comunicación social y publicidad oficial", type: "excel", size: "1.4 MB" },
  { title: "Fracción XXIV – Informes de auditorías al ejercicio presupuestal", type: "pdf", size: "1.7 MB" },
  { title: "Fracción XXV – Dictaminación de estados financieros", type: "pdf", size: "1.3 MB" },
  { title: "Fracción XXVII – Concesiones, contratos, convenios y permisos", type: "pdf", size: "2.3 MB" },
  { title: "Fracción XXVIII A – Procedimientos de adjudicación directa y licitación", type: "pdf", size: "1.8 MB" },
  { title: "Fracción XXVIII B – Expedientes y contratos celebrados", type: "pdf", size: "1.9 MB" },
  { title: "Fracción XXIX – Informes por disposición legal", type: "pdf", size: "1.6 MB" },
  { title: "Fracción XXXI A – Avances programáticos o presupuestales", type: "excel", size: "1.5 MB" },
  { title: "Fracción XXXI B – Balances generales y estado financiero", type: "excel", size: "1.4 MB" },
  { title: "Fracción XXXII – Padrón de proveedores y contratistas", type: "excel", size: "1.7 MB" },
  { title: "Fracción XXXIV A – Inventario de bienes muebles e inmuebles", type: "excel", size: "1.3 MB" },
  { title: "Fracción XXXIV B – Inventario de bienes: posesión y propiedad", type: "excel", size: "1.2 MB" },
  { title: "Fracción XXXIV D – Bienes dados de baja y destino final", type: "excel", size: "980 KB" },
  { title: "Fracción XXXIV E – Bienes dados de baja: ingresos generados", type: "excel", size: "950 KB" },
  { title: "Fracción XXXIV F – Inventario general consolidado", type: "excel", size: "1.1 MB" },
  { title: "Fracción XLII A – Listado de jubilados y pensionados (montos)", type: "excel", size: "1.3 MB" },
  { title: "Fracción XLII B – Listado de jubilados y pensionados (detalle)", type: "excel", size: "1.4 MB" },
  { title: "Fracción XLVI A – Actas de sesiones ordinarias y extraordinarias", type: "pdf", size: "1.6 MB" },
  { title: "Fracción XLVI B – Opiniones y recomendaciones de consejos consultivos", type: "pdf", size: "1.2 MB" },
];

/* CONAC – financial/accounting documents per trimester */
export const conacFiles: TransparencyFile[] = [
  { title: "Conciliación entre egresos presupuestarios y gastos contables", type: "excel", size: "980 KB" },
  { title: "Conciliación entre ingresos presupuestarios y contables", type: "excel", size: "920 KB" },
  { title: "Endeudamiento neto", type: "excel", size: "750 KB" },
  { title: "Estado de variación en la hacienda pública", type: "excel", size: "880 KB" },
  { title: "Estado de actividades", type: "excel", size: "1.1 MB" },
  { title: "Estado analítico de ingresos", type: "excel", size: "1.0 MB" },
  { title: "Estado analítico del activo", type: "excel", size: "950 KB" },
  { title: "Estado analítico del ejercicio del presupuesto de egresos (A)", type: "excel", size: "1.2 MB" },
  { title: "Estado analítico del ejercicio del presupuesto de egresos (B)", type: "excel", size: "1.1 MB" },
  { title: "Estado analítico del presupuesto de egresos funcional", type: "excel", size: "1.0 MB" },
  { title: "Estado analítico del presupuesto de egresos objeto del gasto", type: "excel", size: "1.1 MB" },
  { title: "Estado analítico de la deuda y otros pasivos", type: "excel", size: "850 KB" },
  { title: "Estado de cambios en la situación financiera", type: "excel", size: "920 KB" },
  { title: "Estado de flujos de efectivo", type: "excel", size: "880 KB" },
  { title: "Flujo de fondos", type: "excel", size: "780 KB" },
  { title: "Gastos por categoría programática", type: "excel", size: "950 KB" },
  { title: "Informes sobre pasivos contingentes", type: "pdf", size: "720 KB" },
  { title: "Intereses de la deuda", type: "excel", size: "680 KB" },
  { title: "Notas de desglose – Estado de actividades", type: "pdf", size: "1.3 MB" },
  { title: "Notas de desglose – Estado de flujos de efectivo", type: "pdf", size: "1.1 MB" },
  { title: "Notas de desglose – Estado de situación financiera", type: "pdf", size: "1.4 MB" },
  { title: "Notas de desglose – Estado de variación en la hacienda pública", type: "pdf", size: "1.2 MB" },
  { title: "Notas de memoria", type: "pdf", size: "980 KB" },
  { title: "Programas y proyectos de inversión", type: "excel", size: "1.0 MB" },
];

const TRIMESTER_LABELS = [
  { label: "1er Trimestre", suffix: "Ene-Mar" },
  { label: "2do Trimestre", suffix: "Abr-Jun" },
  { label: "3er Trimestre", suffix: "Jul-Sep" },
  { label: "4to Trimestre", suffix: "Oct-Dic" },
];

const buildTrimesters = (year: string, section: string): Trimester[] => {
  const baseFiles = section === "CONAC" ? conacFiles : articulo26Fractions;
  return TRIMESTER_LABELS.map(({ label, suffix }) => ({
    label,
    files: baseFiles.map((f) => ({ ...f, title: `${f.title} – ${suffix} ${year}` })),
  }));
};

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
