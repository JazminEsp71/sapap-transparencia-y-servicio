import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DocumentIcon from "@/components/DocumentIcon";
import { Download, ArrowLeft, Search, ChevronDown } from "lucide-react";
import type { Trimester } from "@/data/documents";

interface TrimesterDocumentViewProps {
  trimester: Trimester;
  sectionName: string;
  year: string;
  onBack: () => void;
}

/** Split "Fracción XXI A – Long description..." into { label, description } */
const parseFractionTitle = (title: string) => {
  const match = title.match(/^(Fracción\s+[XLVIC\d]+(?:\s+[A-F])?)\s*[-–—]\s*(.+)$/i);
  if (match) return { label: match[1], description: match[2] };
  // Fallback: if title is short enough, no split needed
  if (title.length <= 80) return { label: title, description: "" };
  return { label: title.slice(0, 60) + "…", description: title };
};

const DocumentRow = ({ file, idx }: { file: { title: string; type: "pdf" | "excel"; size: string; url?: string }; idx: number }) => {
  const [expanded, setExpanded] = useState(false);
  const { label, description } = parseFractionTitle(file.title);
  const hasDescription = description.length > 0;

  return (
    <div
      className="group flex items-start gap-3 rounded-lg border bg-card p-4 transition-shadow duration-200 hover:shadow-md sm:gap-4"
    >
      <DocumentIcon type={file.type} className="mt-0.5 h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold leading-snug text-foreground sm:text-base">
          {label}
        </p>
        {hasDescription && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-1 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
            <span>{expanded ? "Ocultar detalle" : "Ver detalle"}</span>
          </button>
        )}
        {expanded && hasDescription && (
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {description}
          </p>
        )}
        <div className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
          <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-bold uppercase sm:text-xs">
            {file.type}
          </span>
          <span>{file.size}</span>
        </div>
      </div>
      {file.url ? (
        <Button
          asChild
          size="lg"
          className="hidden min-h-[48px] shrink-0 gap-2 text-base sm:inline-flex"
        >
          <a href={file.url} target="_blank" rel="noopener noreferrer">
            <Download className="h-5 w-5" />
            Descargar
          </a>
        </Button>
      ) : (
        <Button size="lg" className="hidden min-h-[48px] shrink-0 gap-2 text-base sm:inline-flex">
          <Download className="h-5 w-5" />
          Descargar
        </Button>
      )}
      {/* Mobile download */}
      {file.url ? (
        <a href={file.url} target="_blank" rel="noopener noreferrer" className="sm:hidden">
          <Button size="icon" className="min-h-[44px] min-w-[44px]">
            <Download className="h-5 w-5" />
          </Button>
        </a>
      ) : (
        <Button size="icon" className="min-h-[44px] min-w-[44px] sm:hidden">
          <Download className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

const TrimesterDocumentView = ({
  trimester,
  sectionName,
  year,
  onBack,
}: TrimesterDocumentViewProps) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let results = trimester.files;
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter((f) => f.title.toLowerCase().includes(q));
    }
    return results;
  }, [trimester.files, search]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 min-h-[52px] text-base font-semibold"
            onClick={onBack}
          >
            <ArrowLeft className="h-5 w-5" />
            Atrás
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {trimester.label} – {year}
            </h2>
            <p className="text-lg text-muted-foreground">
              {sectionName} · {trimester.files.length} documentos
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar documento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-h-[48px] pl-10 text-base"
          />
        </div>
      </div>

      {search.trim() && (
        <p className="mb-4 text-sm text-muted-foreground">
          {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} encontrado
          {filtered.length !== 1 ? "s" : ""}
        </p>
      )}

      {filtered.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-2 py-12 text-center">
            <Search className="h-10 w-10 text-muted-foreground/50" />
            <p className="text-lg font-medium text-muted-foreground">
              No se encontraron documentos
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {filtered.map((file, idx) => (
            <DocumentRow key={idx} file={file} idx={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrimesterDocumentView;
