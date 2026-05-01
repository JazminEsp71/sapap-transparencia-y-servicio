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

export async function getArchivos(): Promise<Archivo[]> {
  const res = await fetch(API_URL);
  const data = await res.json();

  const transparencia = data?.data;

  if (!transparencia) {
    console.warn("Respuesta inesperada API:", data);
    return [];
  }

  // 🔥 convertir estructura anidada a lista plana
  const archivos: Archivo[] = [];

  Object.entries(transparencia).forEach(([anio, trimestres]: any) => {
    Object.entries(trimestres).forEach(([trimestre, lista]: any) => {
      lista.forEach((file: any) => {
        archivos.push({
          nombre: file.nombre,
          ruta: file.ruta,
          año: anio,
          trimestre,
          tipo: "archivo"
        });
      });
    });
  });

  return archivos;
}