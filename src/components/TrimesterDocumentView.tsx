import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import DocumentIcon from "@/components/DocumentIcon";
import { Download, ArrowLeft, Search, Filter } from "lucide-react";
import type { Trimester } from "@/data/documents";

interface TrimesterDocumentViewProps {
  trimester: Trimester;
  sectionName: string;
  year: string;
  onBack: () => void;
}

type FileFilter = "all" | "pdf" | "excel";

const TrimesterDocumentView = ({
  trimester,
  sectionName,
  year,
  onBack,
}: TrimesterDocumentViewProps) => {
  const [search, setSearch] = useState("");
  const [fileFilter, setFileFilter] = useState<FileFilter>("all");

  const filtered = useMemo(() => {
    let results = trimester.files;
    if (fileFilter !== "all") {
      results = results.filter((f) => f.type === fileFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter((f) => f.title.toLowerCase().includes(q));
    }
    return results;
  }, [trimester.files, search, fileFilter]);

  const pdfCount = trimester.files.filter((f) => f.type === "pdf").length;
  const excelCount = trimester.files.filter((f) => f.type === "excel").length;

  return (
    <div>
      {/* Back button */}
      <Button
        variant="outline"
        size="lg"
        className="mb-6 gap-2 min-h-[52px] text-base font-semibold"
        onClick={onBack}
      >
        <ArrowLeft className="h-5 w-5" />
        Atrás
      </Button>

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {trimester.label} – {year}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          {sectionName} · {trimester.files.length} documentos
        </p>
      </div>

      {/* Toolbar: search + filter */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar documento..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="min-h-[48px] pl-10 text-base"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          {(
            [
              { key: "all", label: "Todos", count: trimester.files.length },
              { key: "pdf", label: "PDF", count: pdfCount },
              { key: "excel", label: "Excel", count: excelCount },
            ] as const
          ).map(({ key, label, count }) => (
            <Button
              key={key}
              size="sm"
              variant={fileFilter === key ? "default" : "outline"}
              className="min-h-[40px] gap-1.5 text-sm font-semibold"
              onClick={() => setFileFilter(key)}
            >
              {label}
              <Badge
                variant={fileFilter === key ? "secondary" : "outline"}
                className="ml-1 text-xs"
              >
                {count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Results count */}
      {search.trim() && (
        <p className="mb-4 text-sm text-muted-foreground">
          {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} encontrado
          {filtered.length !== 1 ? "s" : ""}
        </p>
      )}

      {/* Document list – compact rows for scalability */}
      {filtered.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center gap-2 py-12 text-center">
            <Search className="h-10 w-10 text-muted-foreground/50" />
            <p className="text-lg font-medium text-muted-foreground">
              No se encontraron documentos
            </p>
            <p className="text-sm text-muted-foreground">
              Intenta con otro término de búsqueda o filtro.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {filtered.map((file, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3 rounded-lg border bg-card p-4 transition-shadow duration-200 hover:shadow-md sm:gap-4"
            >
              <DocumentIcon type={file.type} className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-snug text-foreground sm:text-base">
                  {file.title}
                </p>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                  <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-bold uppercase sm:text-xs">
                    {file.type}
                  </span>
                  <span>{file.size}</span>
                </div>
              </div>
              <Button
                size="lg"
                className="hidden min-h-[48px] gap-2 text-base sm:inline-flex"
              >
                <Download className="h-5 w-5" />
                Descargar
              </Button>
              {/* Mobile: icon-only download */}
              <Button size="icon" className="min-h-[44px] min-w-[44px] sm:hidden">
                <Download className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrimesterDocumentView;
