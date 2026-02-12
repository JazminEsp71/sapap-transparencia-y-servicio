import { useState } from "react";
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
import { transparencyYears, type Trimester } from "@/data/documents";
import TrimesterDocumentView from "@/components/TrimesterDocumentView";

const yearButtons = ["2025", "2024", "2023", "2022", "2021", "2020", "2019"];

const Transparencia = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [activeTrimester, setActiveTrimester] = useState<{
    section: string;
    trimester: Trimester;
  } | null>(null);

  const yearData = transparencyYears.find((y) => y.year === selectedYear);

  return (
    <Layout>
      <div className="container py-10">
        <Breadcrumb items={[{ label: "Transparencia" }]} />

        <ScrollReveal>
          <h1 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Información de Transparencia SAPAP
          </h1>
          <p className="mb-10 text-lg text-muted-foreground">
            Selecciona el año correspondiente para consultar los documentos públicos disponibles.
          </p>
        </ScrollReveal>

        {/* Navegación por año */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-3">
            {yearButtons.map((yr) => (
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

        {/* Vista de un trimestre */}
        {activeTrimester ? (
          <ScrollReveal>
            <TrimesterDocumentView
              trimester={activeTrimester.trimester}
              sectionName={activeTrimester.section}
              year={selectedYear}
              onBack={() => setActiveTrimester(null)}
            />
          </ScrollReveal>
        ) : (
          /* Acordeón de secciones */
          yearData && (
            <ScrollReveal delay={0.15}>
              <Accordion
                type="multiple"
                defaultValue={yearData.sections
                  .filter((section) => section.section !== "Cuenta Pública")
                  .map((section) => section.section)}
                className="space-y-4"
              >
                {yearData.sections
                  .filter((section) => section.section !== "Cuenta Pública")
                  .map((section) => (
                    <AccordionItem
                      key={section.section}
                      value={section.section}
                      className="rounded-lg border bg-card px-6"
                    >
                      <AccordionTrigger className="py-5 text-xl font-bold text-foreground hover:no-underline">
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
                              className="group flex flex-col items-center gap-3 rounded-lg border bg-muted/30 p-6 text-center transition-all duration-200 hover:bg-accent/10 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              <FileText className="h-10 w-10 text-accent transition-transform duration-200 group-hover:scale-110" />
                              <span className="text-lg font-semibold text-foreground">
                                {tri.label}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {tri.files.length} documentos
                              </span>
                              <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1" />
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
