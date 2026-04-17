//ajustar consumo a back desplegado en vm
// const API_URL = http://192.168.10.145:3000/transparencia
const API_URL = "http://localhost:3000/transparencia";

export interface Archivo {
  nombre: string;
  ruta: string;
  año: string;
  tipo: string;
  trimestre: string;
}

export async function getArchivosTransparencia(): Promise<Archivo[]> {
  console.log("Fetching archivos...");

  const res = await fetch(API_URL);

  console.log("Response status:", res.status);

  const data = await res.json();

  console.log("Data recibida:", data.length);

  return data;
}

export async function getArchivosPorFiltro(anio: string, tipo: string, trimestre: string) {
  const res = await fetch(
    `${API_URL}?anio=${anio}&tipo=${tipo}&trimestre=${trimestre}`
  );

  return res.json();
}

export function getFileUrl(path: string) {
  return `${API_URL}/file?path=${encodeURIComponent(path)}`;
}