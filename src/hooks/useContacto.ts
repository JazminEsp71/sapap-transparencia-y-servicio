import { useMutation } from "@tanstack/react-query";
import { enviarContacto } from "@/lib/contacto.api";

export const useContacto = () => {
  return useMutation({
    mutationFn: enviarContacto,
  });
};