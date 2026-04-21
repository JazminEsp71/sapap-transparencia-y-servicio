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

export async function getArchivosPorFiltro(
  anio: string,
  tipo: string,
  trimestre: string
): Promise<Archivo[]> {
  const res = await fetch(
    `${API_URL}?anio=${anio}&tipo=${tipo}&trimestre=${trimestre}`
  );

  const data = await res.json();

  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.archivos)) return data.archivos;

  console.warn("Respuesta inesperada API:", data);
  return [];
}

export function getFileUrl(path: string) {
  return `${API_URL}/file?path=${encodeURIComponent(path)}`;
}