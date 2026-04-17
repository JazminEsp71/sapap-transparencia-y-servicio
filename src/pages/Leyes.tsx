import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import DocumentIcon from "@/components/DocumentIcon";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Download, ArrowLeft } from "lucide-react";
import { lawDocuments } from "@/data/documents";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Leyes = () => {
  const navigate = useNavigate();

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
              onClick={() => navigate(-1)}
            >
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
              <div className="flex flex-col gap-4 rounded-lg border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-md h-full">
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
                  onClick={() => toast("Este documento aún no está disponible")}
                >
                  <Download className="h-5 w-5" />
                  Descargar archivo
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Leyes;
