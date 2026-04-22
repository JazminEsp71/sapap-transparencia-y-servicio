import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DocumentIcon from "@/components/DocumentIcon";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const lawDocuments = [
  { id: "l1", title: "Ley de Ingresos", category: "Leyes", type: "pdf", date: "2024-03-15", size: "1.9 MB", pdf: "./src/public/leyes/LIF_2026.pdf" },
  { id: "l2", title: "Reglamento SAPAP", category: "Reglamentos", type: "pdf", date: "2023-06-20", size: "2.1 MB", pdf: "./src/public/leyes/Reglamento_Interior_SAPAP.pdf" },
  { id: "l3", title: "Código Territorial del Estado de Guanajuato", category: "Códigos", type: "pdf", date: "2024-01-10", size: "1.5 MB", pdf: "./src/public/leyes/CT.pdf" },
  { id: "l4", title: "Ley de Aguas Nacionales", category: "Leyes", type: "pdf", date: "2023-09-01", size: "980 KB", pdf: "./src/public/leyes/LAN.pdf" },
  { id: "l5", title: "Código de Ética y Conducta", category: "Códigos", type: "pdf", date: "2024-05-12", size: "1.3 MB", pdf: "./src/public/leyes/CODIGO DE CONDUCTA PUBLICADO.pdf" },
  { id: "l6", title: "Manual de Contabilidad Gubernamental", category: "Manuales", type: "pdf", date: "2024-02-28", size: "2.8 MB", pdf: "./src/public/leyes/NOR_01_10_002.pdf" },
];

const Leyes = () => {
  const navigate = useNavigate();
  const [pdfUrl, setPdfUrl] = useState(null);

  return (
    <Layout>
      <div className="container py-10">
        <Breadcrumb items={[{ label: "Leyes y Reglamentos" }]} />

        <ScrollReveal>
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 min-h-[48px] text-base"
              onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
              Atrás
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                Leyes y Reglamentos
              </h1>
              <p className="mt-1 text-lg text-muted-foreground">
                Marco legal y normativo aplicable al organismo.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lawDocuments.map((doc, i) => (
            <ScrollReveal key={doc.id} delay={i * 0.08}>
              <div className="flex flex-col gap-4 rounded-lg border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-md h-full cursor-pointer" onClick={() => doc.pdf && setPdfUrl(doc.pdf)}>
                <div className="flex items-center gap-4">
                  <DocumentIcon type={doc.type} className="h-10 w-10 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-lg font-semibold text-foreground">{doc.title}</p>
                    <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="rounded bg-secondary px-2 py-0.5 font-semibold text-secondary-foreground uppercase">
                        PDF
                      </span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-full gap-2 min-h-[48px] text-base mt-auto"
                  onClick={() => doc.pdf && setPdfUrl(doc.pdf)}
                >
                  <Download className="h-5 w-5" />
                  Descargar archivo
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      {pdfUrl && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="relative w-[90%] h-[90%] bg-white rounded-lg overflow-hidden">
          
          {/* Botón cerrar */}
          <button
            onClick={() => setPdfUrl(null)}
            className="absolute top-3 right-3 z-10 bg-red-500 text-white px-3 py-1 rounded"
          >
            Cerrar
          </button>

          {/* PDF */}
          <iframe
            src={pdfUrl}
            className="w-full h-full"
          />
        </div>
      </div>
    )}
    </Layout>
  );
};

export default Leyes;
