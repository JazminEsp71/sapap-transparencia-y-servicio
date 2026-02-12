import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { Eye, Heart, Star, MapPin, Clock } from "lucide-react";
import organigrama from "@/assets/organigrama.jpg"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const filosofia = [
  {
    icon: Star,
    title: "Misión",
    text: "Servir y satisfacer las necesidades de nuestros usuarios utilizando eficientemente los recursos disponibles a través de la implementación de acciones de mejora continua que fortalezcan nuestros procesos.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Ser un organismo eficiente y comprometido con la prestación de servicios de agua potable, alcantarillado y saneamiento, responsables con el desarrollo hídrico sustentable en beneficio de nuestros usuarios.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Espíritu de servicio, honestidad, calidad, trabajo en equipo y responsabilidad.",
  },
];

const modulos = [
  { nombre: "Módulo de atención del DIF", direccion: "Av. de la Juventud No. 501 B", Horario: "Lunes a Viernes de 8:00 a.m. a 3:30 p.m." },
  { nombre: "Módulo de atención del Carmen", direccion: "Guadalupe Victoria 402, Col. del Carmen", Horario: "Lunes a Viernes de 8:00 a.m. a 3:30 p.m." },
  { nombre: "Módulo de atención del Centro", direccion: "Calle Benito Juárez No. 111, Zona Centro", Horario: "Lunes a Viernes de 8:00 a.m. a 3:30 p.m." },
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
                  <img
                    src={organigrama}
                  />
                
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
                      <Clock className="h-5 w-5 shrink-0 text-accent" />
                      {m.Horario}
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
