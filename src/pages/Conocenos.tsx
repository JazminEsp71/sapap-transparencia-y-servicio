import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Users, Eye, Heart, Star, MapPin, Phone } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const filosofia = [
  {
    icon: Star,
    title: "Misión",
    text: "Garantizar el abastecimiento de agua potable, el saneamiento y el tratamiento de aguas residuales con eficiencia, transparencia y calidad, para mejorar la vida de todos los ciudadanos del municipio.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Ser un organismo público de referencia a nivel estatal, reconocido por su compromiso con el servicio, la innovación tecnológica y la gestión sustentable de los recursos hídricos.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Transparencia, responsabilidad, servicio público, honestidad, eficiencia, respeto al medio ambiente y compromiso con la comunidad.",
  },
];

const modulos = [
  { nombre: "Módulo Centro", direccion: "Av. Constitución #450, Col. Centro", telefono: "(311) 213-0000" },
  { nombre: "Módulo Los Arcos", direccion: "Blv. Manuel Gómez Morín No. 400, Fracc. Los Arcos", telefono: "(311) 213-0001" },
  { nombre: "Módulo Sur", direccion: "Calle Reforma #120, Col. Las Flores", telefono: "(311) 213-0002" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const Conocenos = () => (
  <Layout>
    <div className="container py-10">
      <Breadcrumb items={[{ label: "Conócenos" }]} />

      <ScrollReveal>
        <h1 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Conócenos</h1>
        <p className="mb-10 text-lg text-muted-foreground">
          Conoce la estructura, filosofía y puntos de atención de SAPAP.
        </p>
      </ScrollReveal>

      {/* Organigrama */}
      <ScrollReveal delay={0.1}>
        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Organigrama</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col items-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/15">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <div className="w-full rounded-lg border-2 border-dashed border-border bg-muted/30 p-12 text-center">
                  <p className="text-lg font-medium text-foreground">Organigrama Institucional</p>
                  <p className="mt-2 text-base text-muted-foreground">
                    Espacio reservado para la imagen del organigrama institucional de SAPAP.
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    La imagen será ampliable para facilitar su lectura.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </ScrollReveal>

      {/* Filosofía Institucional */}
      <ScrollReveal delay={0.15}>
        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Filosofía Institucional</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {filosofia.map((item, i) => (
              <Card key={i} className="h-full">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Módulos de Cobro */}
      <ScrollReveal delay={0.2}>
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Módulos de Cobro</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {modulos.map((m, i) => (
              <Card key={i} className="transition-shadow duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-lg font-bold text-foreground">{m.nombre}</h3>
                  <div className="space-y-2">
                    <p className="flex items-start gap-2 text-base text-muted-foreground">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      {m.direccion}
                    </p>
                    <p className="flex items-center gap-2 text-base text-muted-foreground">
                      <Phone className="h-5 w-5 shrink-0 text-accent" />
                      {m.telefono}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  </Layout>
);

export default Conocenos;
