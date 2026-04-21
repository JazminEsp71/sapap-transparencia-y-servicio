import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DocumentIcon from "@/components/DocumentIcon";
import { Download, ArrowLeft, Search, ChevronDown } from "lucide-react";
import type { Trimester } from "@/data/documents";
import { Archivo } from "@/lib/transparencia.api";

interface TrimesterDocumentViewProps {
  trimester: Trimester;
  sectionName: string;
  year: string;
  archivos: Archivo[];
  getFileUrl: (path: string) => string;
  onBack: () => void;
}

const parseFractionTitle = (title: string) => {
  const match = title.match(/^(Fracción\s+[XLVIC\d]+(?:\s+[A-F])?)\s*[-–—]\s*(.+)$/i);
  if (match) return { label: match[1], description: match[2] };
  if (title.length <= 80) return { label: title, description: "" };
  return { label: title.slice(0, 60) + "…", description: title };
};

const DocumentRow = ({
  file,
  idx,
  enableToggleDescription = true,
}: {
  file: { title: string; type: "pdf" | "excel"; size: string; url?: string };
  idx: number;
  enableToggleDescription?: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  const { label, description } = parseFractionTitle(file.title);
  const isLong = description.length > 100;

  return (
    <div
      className="flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-lg border bg-white p-4 shadow-sm"
      role="region"
      aria-labelledby={`doc-label-${idx}`}
    >
      <DocumentIcon type={file.type} className="h-8 w-8 shrink-0" />
      <div className="flex-1 min-w-0">
        <p id={`doc-label-${idx}`} className="text-lg font-semibold text-black sm:text-xl">
          {label}
        </p>

        {description && (
          <div className="mt-1 text-base text-gray-800">
            {isLong && enableToggleDescription ? (
              <>
                <p
                  id={`doc-desc-${idx}`}
                  className={`${expanded ? "" : "line-clamp-3"} transition-all`}
                >
                  {description}
                </p>
                <button
                  aria-expanded={expanded}
                  aria-controls={`doc-desc-${idx}`}
                  onClick={() => setExpanded(!expanded)}
                  className="mt-1 flex items-center gap-1 text-blue-700 font-medium hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                  />
                  {expanded ? "Ocultar información" : "Mostrar información"}
                </button>
              </>
            ) : (
              <p>{description}</p>
            )}
          </div>
        )}

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
          <span className="rounded bg-gray-200 px-2 py-1 font-bold uppercase text-xs">
            {file.type}
          </span>
          <span>{file.size}</span>
        </div>
      </div>

      <Button
        size="lg"
        className="sm:ml-4 mt-3 sm:mt-0 min-h-[48px] w-full sm:w-auto flex items-center justify-center gap-2 text-base font-medium"
      >
        {file.url ? (
          <a
            href={file.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Descargar documento
          </a>
        ) : (
          <>
            <Download className="h-5 w-5" />
            Documento no disponible
          </>
        )}
      </Button>
    </div>
  );
};

const TrimesterDocumentView = ({
  trimester,
  sectionName,
  year,
  archivos,
  getFileUrl,
  onBack
}: TrimesterDocumentViewProps) => {
  const [search, setSearch] = useState("");

  const mapTrimester = (label: string) => {
    const l = label.toLowerCase();

    if (l.includes("primer")) return "Primer Trimestre";
    if (l.includes("segundo")) return "Segundo Trimestre";
    if (l.includes("tercer")) return "Tercer Trimestre";
    if (l.includes("cuarto")) return "Cuarto Trimestre";

    return label;
  };

  const safeArchivos = Array.isArray(archivos) ? archivos : [];

  const normalize = (t: string) =>
    t?.toLowerCase().replace(/\s+/g, "").trim();

  const trimestreKey = mapTrimester(trimester.label);

  const archivosFiltrados = safeArchivos.filter((a) => {
    const matchYear = String(a.año ?? "") === String(year);

    const matchTrim =
      normalize(a.trimestre) === normalize(trimestreKey);

    return matchYear && matchTrim;
  });

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return q
      ? archivosFiltrados.filter((a) =>
          a.nombre.toLowerCase().includes(q)
        )
      : archivosFiltrados;
  }, [archivosFiltrados, search]);

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 min-h-[52px] font-semibold"
            onClick={onBack}
          >
            <ArrowLeft className="h-5 w-5" />
            Atrás
          </Button>
          <div>
            <h2 className="text-2xl font-bold md:text-3xl text-black">
              {trimester.label} – {year}
            </h2>
            <p className="text-lg text-gray-800">
              {sectionName} · {archivosFiltrados.length} documentos
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Buscar documento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 min-h-[48px] text-base"
          />
        </div>
      </div>

      {/* Search result */}
      {search && (
        <p className="mb-4 text-base text-gray-700">
          {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} encontrado
          {filtered.length !== 1 ? "s" : ""}
        </p>
      )}

      {/* Documents */}
      {filtered.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-2 py-12 text-center">
            <Search className="h-10 w-10 text-gray-300" />
            <p className="text-lg font-medium text-gray-700">
              No se encontraron documentos
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {filtered.map((archivo, idx) => (
            <DocumentRow
              key={idx}
              file={{
                title: archivo.nombre,
                type: "excel",
                size: "",
                url: getFileUrl(archivo.ruta)
              }}
              idx={idx}
              enableToggleDescription={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrimesterDocumentView;
