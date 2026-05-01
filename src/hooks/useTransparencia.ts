import { useQuery } from "@tanstack/react-query";
import { getArchivos } from "@/lib/transparencia.api";

export function useTransparencia() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["transparencia"],
    queryFn: getArchivos,
  });

  return {
    archivos: data ?? [],
    loading: isLoading,
    error: error ? "Error al cargar archivos" : null,
  };
}