import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import {
  Clock, MapPin, FileText, MessageCircle, UserCheck, PauseCircle,
  ClipboardList, RefreshCw, CreditCard, Trash2, DollarSign, Download,
} from "lucide-react";
import DocumentIcon from "@/components/DocumentIcon";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tramites = [
  { icon: FileText, title: "Factibilidad de servicios y contratación", description: "Dictamen técnico y conexión nueva al sistema." },
  { icon: MessageCircle, title: "Quejas y aclaraciones", description: "Revisión de cobros y atención a inconformidades." },
  { icon: UserCheck, title: "Cambio de titular", description: "Actualización de nombre del titular del servicio." },
  { icon: PauseCircle, title: "Suspensión voluntaria de la toma", description: "Solicitud para suspender temporalmente el servicio." },
  { icon: ClipboardList, title: "Seguimiento a trámites y ODT", description: "Consulta del estado de tus órdenes de trabajo." },
  { icon: RefreshCw, title: "Reactivación de cuenta", description: "Proceso para reactivar un servicio suspendido." },
];

const servicios = [
  { icon: CreditCard, title: "Pago de servicios", description: "Pago de recibo de agua potable y alcantarillado." },
  { icon: Trash2, title: "Limpieza de fosa séptica / descarga sanitaria", description: "Servicio de limpieza y mantenimiento de fosas." },
  { icon: DollarSign, title: "Costos de servicios", description: "Consulta de tarifas vigentes." },
];

const costosOperativos = [
  { servicio: "Toma nueva de agua potable (½\")", costo: "$4,890.00" },
  { servicio: "Toma nueva de agua potable (¾\")", costo: "$5,420.00" },
  { servicio: "Descarga sanitaria nueva", costo: "$3,750.00" },
  { servicio: "Reconexión de toma", costo: "$1,280.00" },
  { servicio: "Reparación de toma (material usuario)", costo: "$850.00" },
  { servicio: "Cambio de medidor", costo: "$2,100.00" },
  { servicio: "Limpieza de fosa séptica", costo: "$3,200.00" },
  { servicio: "Factibilidad de servicios", costo: "$1,500.00" },
];

const costosAdministrativos = [
  { servicio: "Contrato de servicio nuevo", costo: "$650.00", requisitos: "INE, comprobante de domicilio, escritura o contrato" },
  { servicio: "Cambio de titular", costo: "$350.00", requisitos: "INE del nuevo titular, último recibo pagado" },
  { servicio: "Carta de no adeudo", costo: "$180.00", requisitos: "INE, cuenta al corriente" },
  { servicio: "Reactivación de cuenta", costo: "$450.00", requisitos: "INE, liquidación de adeudos" },
  { servicio: "Suspensión voluntaria", costo: "Sin costo", requisitos: "INE, solicitud por escrito" },
  { servicio: "Constancia de servicio", costo: "$120.00", requisitos: "INE, número de cuenta" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const Tramites = () => (
  <Layout>
    <div className="container py-10">
      <Breadcrumb items={[{ label: "Trámites y Servicios" }]} />

      <ScrollReveal>
        <h1 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
          Trámites y Servicios
        </h1>
        <p className="mb-4 text-lg text-muted-foreground">
          Información sobre trámites disponibles, requisitos, costos y formatos descargables.
        </p>

        {/* Info bar */}
        <div className="mb-10 flex flex-wrap gap-6 rounded-lg bg-secondary p-5">
          <span className="flex items-center gap-3 text-base font-medium text-secondary-foreground">
            <Clock className="h-6 w-6 text-accent" />
            Lunes a viernes, 8:00 a.m. a 4:00 p.m.
          </span>
          <span className="flex items-center gap-3 text-base font-medium text-secondary-foreground">
            <MapPin className="h-6 w-6 text-accent" />
            Blv. Manuel Gómez Morín No. 400, Fracc. Los Arcos
          </span>
        </div>
      </ScrollReveal>

      {/* Trámites */}
      <ScrollReveal delay={0.1}>
        <h2 className="mb-6 text-2xl font-bold text-foreground">Trámites</h2>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tramites.map((t, i) => (
            <Card key={i} className="transition-shadow duration-300 hover:shadow-md">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <t.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{t.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollReveal>

      {/* Servicios */}
      <ScrollReveal delay={0.15}>
        <h2 className="mb-6 text-2xl font-bold text-foreground">Servicios</h2>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Card key={i} className="transition-shadow duration-300 hover:shadow-md">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/15">
                  <s.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{s.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollReveal>

      {/* Costos 2026 – ambas tablas en la misma fila */}
      <ScrollReveal delay={0.2}>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Costos Operativos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Costos Servicios Operativos 2026</CardTitle>
              <p className="text-base text-destructive font-semibold mt-1">
                * Los costos no incluyen IVA (16%)
              </p>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="py-4 px-4 text-lg font-bold text-foreground">Servicio</th>
                    <th className="py-4 px-4 text-lg font-bold text-foreground text-right">Costo + IVA</th>
                  </tr>
                </thead>
                <tbody>
                  {costosOperativos.map((row, i) => (
                    <tr key={i} className={`border-b ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
                      <td className="py-4 px-4 text-base text-foreground">{row.servicio}</td>
                      <td className="py-4 px-4 text-base font-semibold text-foreground text-right">{row.costo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Costos Administrativos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Costos Servicios Administrativos 2026</CardTitle>
              <p className="text-base text-destructive font-semibold mt-1">
                * Los costos no incluyen IVA (16%)
              </p>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="py-4 px-4 text-lg font-bold text-foreground">Servicio</th>
                    <th className="py-4 px-4 text-lg font-bold text-foreground text-right">Costo + IVA</th>
                    <th className="py-4 px-4 text-lg font-bold text-foreground">Requisitos</th>
                  </tr>
                </thead>
                <tbody>
                  {costosAdministrativos.map((row, i) => (
                    <tr key={i} className={`border-b ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
                      <td className="py-4 px-4 text-base text-foreground">{row.servicio}</td>
                      <td className="py-4 px-4 text-base font-semibold text-foreground text-right whitespace-nowrap">{row.costo}</td>
                      <td className="py-4 px-4 text-sm text-muted-foreground">{row.requisitos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </ScrollReveal>
    </div>
  </Layout>
);

export default Tramites;
