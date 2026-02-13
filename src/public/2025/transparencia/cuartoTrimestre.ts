import { type TransparencyFile, type Trimester } from "@/data/documents";

// export const cuartoTrimestre: TransparencyFile[] = [
//   {
//     title: "Fracción I – Marco normativo aplicable al sujeto obligado",
//     type: "excel",
//     size: "1.2 MB",
//     url: "/transparencia/2025/CuartoTrimestre/TTrimestre/LTAIPG26F1_I_4T2025.xlsx",
//   },
//   {
//     title: "Fracción II A – Estructura orgánica completa (atribuciones)",
//     type: "pdf",
//     size: "980 KB",
//     url: "/transparencia/2025/CuartoTrimestre/TTrimestre/LTAIPG26F2_4T2025.xlsx",
//   },
//   // más archivos aquí
// ];


export const cuartoTrimestre: Trimester = {
  label: "4to Trimestre",
  files: [
    {
      title: "Fracción I – Marco normativo aplicable al sujeto obligado, en el que deberá incluirse leyes, códigos, reglamentos, decretos de creación, manuales administrativos, reglas de operación, criterios, políticas, entre otros.",
      type: "excel",
      size: "1.2 MB",
      url: "https://sapap.gob.mx/transparencia/2025/CuartoTrimestre/TTrimestre/LTAIPG26F1_I%204T2025.xlsx"
    },
    {
      title: "Fracción II A – Su estructura orgánica completa, en un formato que permita vincular cada parte de la estructura, las atribuciones y responsabilidades que le corresponden a cada servidor público, prestador de servicios profesionales o miembro de los sujetos obligados, de conformidad con las disposiciones aplicables.",
      type: "excel",
      size: "980 KB",
      url: "https://sapap.gob.mx//transparencia/2025/CuartoTrimestre/TTrimestre/LTAIPG26F1_IIA.xlsx"
    },
    // ...y así con todos los archivos
  ]
};
