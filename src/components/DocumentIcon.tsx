import { FileText, FileSpreadsheet } from "lucide-react";

const DocumentIcon = ({ type, className = "h-5 w-5" }: { type: "pdf" | "excel"; className?: string }) => {
  if (type === "pdf") {
    return <FileText className={`${className} text-red-600`} />;
  }
  return <FileSpreadsheet className={`${className} text-green-600`} />;
};

export default DocumentIcon;
