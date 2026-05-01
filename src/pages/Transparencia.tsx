import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, ChevronRight, FileText } from "lucide-react";
import TrimesterDocumentView from "@/components/TrimesterDocumentView";
import { useTransparencia } from "@/hooks/useTransparencia";

const sections = [
  {
    section: "Transparencia",
    trimesters: [
      { label: "Primer Trimestre" },
      { label: "Segundo Trimestre" },
      { label: "Tercer Trimestre" },
      { label: "Cuarto Trimestre" },
    ],
  },
  {
    section: "CONAC",
    trimesters: [
      { label: "Primer Trimestre" },
      { label: "Segundo Trimestre" },
      { label: "Tercer Trimestre" },
      { label: "Cuarto Trimestre" },
    ],
  },
];

const TRIMESTRE_KEY: Record<string, string> = {
  "Primer Trimestre": "PrimerTrimestre",
  "Segundo Trimestre": "SegundoTrimestre",
  "Tercer Trimestre": "TercerTrimestre",
  "Cuarto Trimestre": "CuartoTrimestre",
};

const normalizeTrimester = (label: string) =>
  label.replace(/\s/g, "");

type TrimesterSimple = {
  label: string;
};

const Transparencia = () => {
  const { archivos = [], loading, error } = useTransparencia();

  const [selectedYear, setSelectedYear] = useState("");
  const [activeTrimester, setActiveTrimester] = useState<{
    section: string;
    trimester: TrimesterSimple;
  } | null>(null);

  const availableYears = useMemo(() => {
    const years = archivos.map(a => a.año);
    return [...new Set(years)].sort((a, b) => Number(b) - Number(a));
  }, [archivos]);

  const archivosFiltrados = useMemo(() => {
    if (!selectedYear || !activeTrimester) return [];

    return archivos.filter((a) => {
      return (
        a.año === selectedYear &&
        a.trimestre === TRIMESTRE_KEY[activeTrimester.trimester.label]
      );
    });
  }, [archivos, selectedYear, activeTrimester]);

  // ✅ URL archivos (ajusta IP si usas VM)
  const getFileUrl = (path: string) => {
    return `http://localhost:3000${path}`;
  };

  return (
    <Layout>
      <div className="container py-10">
        <Breadcrumb items={[{ label: "Transparencia" }]} />

        <ScrollReveal>
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">
            Información de Transparencia SAPAP
          </h1>
          <p className="mb-10 text-lg text-muted-foreground">
            Selecciona el año correspondiente para consultar los documentos públicos disponibles.
          </p>
        </ScrollReveal>

        {/* AÑOS */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-3">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[52px] w-[100px] animate-pulse rounded-md bg-muted"
                  />
                ))
              : availableYears.map((yr) => (
                  <Button
                    key={yr}
                    size="lg"
                    variant={selectedYear === yr ? "default" : "outline"}
                    className="min-h-[52px] min-w-[100px] text-lg font-semibold"
                    onClick={() => {
                      setSelectedYear(String(yr));
                      setActiveTrimester(null);
                    }}
                  >
                    {yr}
                  </Button>
                ))}
          </div>
        </ScrollReveal>

        {/* TRIMESTRES */}
        {activeTrimester ? (
          <ScrollReveal>
            {error && (
              <div className="mb-4 text-sm text-red-500">
                No se pudieron cargar los documentos.
              </div>
            )}

            <TrimesterDocumentView
              trimester={activeTrimester.trimester}
              sectionName={activeTrimester.section}
              year={selectedYear}
              files={archivosFiltrados}
              getFileUrl={getFileUrl}
              onBack={() => setActiveTrimester(null)}
            />
          </ScrollReveal>
        ) : (
          (selectedYear || loading) && (
            <ScrollReveal delay={0.15}>
              <Accordion
                type="multiple"
                defaultValue={sections.map((s) => s.section)}
                className="space-y-4"
              >
                {sections.map((section) => (
                  <AccordionItem
                    key={section.section}
                    value={section.section}
                    className="rounded-lg border bg-card px-6"
                  >
                    <AccordionTrigger className="py-5 text-xl font-bold hover:no-underline">
                      <span className="flex items-center gap-3">
                        <Calendar className="h-6 w-6 text-accent" />
                        {section.section}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="pb-6">
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {section.trimesters.map((tri) => (
                          <button
                            key={tri.label}
                            onClick={() =>
                              setActiveTrimester({
                                section: section.section,
                                trimester: tri,
                              })
                            }
                            className="group flex flex-col items-center gap-3 rounded-lg border bg-muted/30 p-6 text-center transition-all hover:bg-accent/10 hover:shadow-md"
                          >
                            <FileText className="h-10 w-10 text-accent group-hover:scale-110 transition" />

                            <span className="text-lg font-semibold">
                              {tri.label}
                            </span>

                            <span className="text-sm text-muted-foreground">
                              Ver documentos
                            </span>

                            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition" />
                          </button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          )
        )}
      </div>
    </Layout>
  );
};

export default Transparencia;