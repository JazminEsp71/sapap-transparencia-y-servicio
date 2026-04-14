import { useEffect, useState } from "react";
import {
  getArchivosTransparencia,
  type Archivo,
} from "@/lib/transparencia.api";

let cache: Archivo[] | null = null;

export function useTransparencia() {
  const [archivos, setArchivos] = useState<Archivo[]>(cache || []);
  const [loading, setLoading] = useState(!cache);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cache) {
      setArchivos(cache);
      setLoading(false);
      return;
    }

    getArchivosTransparencia()
      .then((data) => {
        cache = data;
        setArchivos(data);
      })
      .catch(() => setError("Error al cargar archivos"))
      .finally(() => setLoading(false));
  }, []);

  return { archivos, loading, error };
}