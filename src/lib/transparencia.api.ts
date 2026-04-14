//ajustar consumo a back desplegado en vm
// const API_URL = http://192.168.10.145:3000/transparencia
const API_URL = "http://localhost:3000/transparencia";

export interface Archivo {
  nombre: string;
  ruta: string;
  año: string;
  trimestre: string;
}

export async function getArchivosTransparencia(): Promise<Archivo[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Error al obtener archivos");
  }

  return res.json();
}

export function getFileUrl(path: string) {
  return `${API_URL}/file?path=${encodeURIComponent(path)}`;
}