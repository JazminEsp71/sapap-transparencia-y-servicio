import { useState, useEffect, useMemo } from "react";
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
import type { Trimester } from "@/data/documents";
import TrimesterDocumentView from "@/components/TrimesterDocumentView";
import { useTransparencia } from "@/hooks/useTransparencia";
import { getFileUrl, getArchivosPorFiltro } from "@/lib/transparencia.api";
import { useQuery } from "@tanstack/react-query";

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
  "Primer Trimestre": "primertrimestre",
  "Segundo Trimestre": "segundotrimestre",
  "Tercer Trimestre": "tercertrimestre",
  "Cuarto Trimestre": "cuartotrimestre",
};

const Transparencia = () => {
  const { archivos = [], loading } = useTransparencia();

  const [selectedYear, setSelectedYear] = useState("");
  const [activeTrimester, setActiveTrimester] = useState<{
    section: string;
    trimester: Trimester;
  } | null>(null);

  const availableYears = useMemo(() => {
    const currentYear = new Date().getFullYear();

    const apiYears = archivos
      .map((a) => a.año || a.anio || a.year)
      .filter(Boolean)
      .map(Number);

    const last6Years = Array.from({ length: 6 }, (_, i) => currentYear - i);

    // Mezcla años del API + últimos 6 años
    const combined = [...new Set([...apiYears, ...last6Years])];

    return combined.sort((a, b) => b - a);
  }, [archivos]);

  const tipo = activeTrimester
    ? activeTrimester.section === "Transparencia"
      ? "art26"
      : "conac"
    : null;

  const {
    data: archivosTrim = [],
    isLoading: loadingTrim,
    isError: isErrorTrim,
  } = useQuery({
    queryKey: [
      "archivos",
      selectedYear,
      tipo,
      activeTrimester?.trimester.label,
    ],
    queryFn: () =>
      getArchivosPorFiltro(
        selectedYear,
        tipo!,
        activeTrimester!.trimester.label
      ),
    enabled: !!selectedYear && !!activeTrimester && !!tipo,
    retry: 1,
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });

  // 📌 Selección automática de año
  useEffect(() => {
    if (availableYears.length && !selectedYear) {
      setSelectedYear(availableYears[0]);
    }
  }, [availableYears, selectedYear]);

  return (
    <Layout>
      <div className="container py-10">
        <Breadcrumb items={[{ label: "Transparencia" }]} />

        {/* Header */}
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
                      setSelectedYear(yr);
                      setActiveTrimester(null);
                    }}
                  >
                    {yr}
                  </Button>
                ))}
          </div>
        </ScrollReveal>

        {/* TRIMESTRE VIEW */}
        {activeTrimester ? (
          <ScrollReveal>
            {isErrorTrim && (
              <div className="mb-4 text-sm text-red-500">
                No se pudieron cargar los documentos del trimestre.
              </div>
            )}

            <TrimesterDocumentView
              trimester={activeTrimester.trimester}
              sectionName={activeTrimester.section}
              year={selectedYear}
              archivos={archivosTrim}
              loading={loadingTrim}
              error={isErrorTrim}
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
                        {loading
                          ? Array.from({ length: 4 }).map((_, i) => (
                              <div
                                key={i}
                                className="h-[140px] rounded-lg bg-muted animate-pulse"
                              />
                            ))
                          : section.trimesters.map((tri) => {
                              return (
                                <button
                                  key={tri.label}
                                  disabled={
                                    loadingTrim &&
                                    activeTrimester?.trimester.label === tri.label
                                  }
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

                                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                                    {loadingTrim &&
                                    activeTrimester?.trimester.label === tri.label ? (
                                      <>
                                        <span className="h-4 w-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></span>
                                        Cargando...
                                      </>
                                    ) : (
                                      "Ver documentos"
                                    )}
                                  </span>

                                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition" />
                                </button>
                              );
                            })}
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