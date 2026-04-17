import { getArchivosPorFiltro } from "@/lib/transparencia.api";
import { useQuery } from "@tanstack/react-query";

export function useTransparencia(anio?: string, tipo?: string, trimestre?: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["transparencia", anio, tipo, trimestre],
    queryFn: () => getArchivosPorFiltro(anio, tipo, trimestre),
    enabled: !!anio && !!tipo && !!trimestre,
    staleTime: 1000 * 60 * 10,
  });

  return {
    archivos: data || [],
    loading: isLoading,
    error: error ? "Error al cargar archivos" : null,
  };
}