import { useState } from "react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import DocumentIcon from "@/components/DocumentIcon";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, Calendar, ChevronRight } from "lucide-react";
import { transparencyYears } from "@/data/documents";

const yearButtons = ["2025", "2024", "2023", "2022", "2021", "2020", "2019"];

const Transparencia = () => {
  const [selectedYear, setSelectedYear] = useState("2025");

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

        {/* Year navigation */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-3">
            {yearButtons.map((yr) => (
              <Button
                key={yr}
                size="lg"
                variant={selectedYear === yr ? "default" : "outline"}
                className="min-h-[52px] min-w-[100px] text-lg font-semibold"
                onClick={() => setSelectedYear(yr)}
              >
                {yr}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        {/* Sections accordion */}
        {yearData && (
          <ScrollReveal delay={0.15}>
            <Accordion type="multiple" className="space-y-4">
              {yearData.sections.map((section) => (
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
                    <Accordion type="multiple" className="space-y-2">
                      {section.trimesters.map((tri) => (
                        <AccordionItem
                          key={tri.label}
                          value={tri.label}
                          className="rounded-md border bg-muted/30 px-4"
                        >
                          <AccordionTrigger className="py-4 text-lg font-semibold text-foreground hover:no-underline">
                            <span className="flex items-center gap-2">
                              <ChevronRight className="h-5 w-5 text-accent" />
                              {tri.label}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4">
                            <div className="space-y-3">
                              {tri.files.map((file, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-4 rounded-md bg-background p-4 shadow-sm"
                                >
                                  <DocumentIcon type={file.type} className="h-10 w-10" />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-base font-medium text-foreground">
                                      {file.title}
                                    </p>
                                    <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                                      <span className="uppercase font-semibold">
                                        {file.type}
                                      </span>
                                      <span>{file.size}</span>
                                    </div>
                                  </div>
                                  <Button
                                    size="lg"
                                    className="shrink-0 gap-2 min-h-[48px] text-base"
                                  >
                                    <Download className="h-5 w-5" />
                                    Descargar archivo
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        )}
      </div>
    </Layout>
  );
};

export default Transparencia;
