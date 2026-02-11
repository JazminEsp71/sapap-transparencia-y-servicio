import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import {
  Search, FileText, CreditCard, Phone, Droplets,
  Calendar, MessageCircle, Download,
  Droplet, Trash2, Leaf, AlertTriangle, MapPin, Clock,
  Receipt, FileDown, ChevronRight,
} from "lucide-react";
import heroImage from "@/assets/banner-subsidio.jpg";
import freir from "@/assets/freir-a-fluir-aceite.jpg"
import eventoImage from "@/assets/evento-carrera.jpg";
import appMockup from "@/assets/sapap-app-mockup.jpg";
import bannerCarrera from "@/assets/banner135x90.jpg"

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const heroSlides = [
  {
    image: heroImage,
    title: "Infraestructura hidráulica SAPAP",
    subtitle: "Comprometidos con el servicio y el acceso al agua de calidad",
    text: "Más de 30 años llevando agua potable y saneamiento a nuestra comunidad con transparencia y responsabilidad.",
    buttons: [
      { label: "Transparencia", path: "/transparencia", icon: Search },
      { label: "Trámites y Servicios", path: "/tramites", icon: FileText },
    ],
  },
  {
    image: freir,
    title: "Paga tu recibo de agua en línea",
    subtitle: "Rápido, seguro y sin filas",
    text: "Realiza tu pago en cualquier momento desde la comodidad de tu hogar.",
    buttons: [
      { label: "Pago en Línea", path: "/pago", icon: CreditCard },
    ],
  },
  {
    image: appMockup,
    title: "SAPAP App – Trámites desde tu celular",
    subtitle: "Disponible para iOS y Android",
    text: "Paga tu recibo · Consulta adeudos · Descarga recibos en PDF",
    buttons: [
      { label: "Descargar App", path: "#", icon: Download },
    ],
  },
  {
    image: eventoImage,
    title: "14va Carrera SAPAP – Día Mundial del Agua",
    subtitle: "22 de marzo, 2026 · Parque Central",
    text: "Participa en nuestra carrera anual. Categorías para toda la familia. ¡Inscripciones abiertas!",
    buttons: [
      { label: "Más información", path: "#", icon: ChevronRight },
    ],
  },
];

const announcements = [
  { icon: Droplet, title: "Cuidemos el Agua", description: "Cada gota cuenta. Cierra la llave mientras te enjabonas y reporta fugas al instante." },
  { icon: Trash2, title: "No tires basura en coladeras", description: "Evita taponamientos y daños al drenaje. Deposita la basura en su lugar." },
  { icon: Leaf, title: "Cuida el medio ambiente", description: "No viertas aceites ni químicos en el drenaje. Protejamos nuestros recursos hídricos." },
  { icon: AlertTriangle, title: "Reporta fugas", description: "Llámanos o envía un WhatsApp para reportar fugas en la vía pública." },
];

const appBenefits = [
  { icon: CreditCard, text: "Pago del recibo de agua potable" },
  { icon: Receipt, text: "Consulta de adeudos en tiempo real" },
  { icon: FileDown, text: "Descarga de recibos en PDF" },
  { icon: MapPin, text: "Ubicación de módulos de cobro" },
];

/* ------------------------------------------------------------------ */
/*  Hero Carousel                                                      */
/* ------------------------------------------------------------------ */

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const next = useCallback(() => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
      setFadeIn(true);
    }, 300);
  }, []);

  const prev = useCallback(() => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
      setFadeIn(true);
    }, 300);
  }, []);

  const goTo = (i) => {
    if (i === current) return;
    setFadeIn(false);
    setTimeout(() => {
      setCurrent(i);
      setFadeIn(true);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative w-full aspect-[1000/293] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: fadeIn ? 1 : 0,
        }}
      />
      {/* Prev */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-white text-2xl backdrop-blur hover:bg-black/50 transition"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-white text-2xl backdrop-blur hover:bg-black/50 transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-all
              ${i === current
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>
    </section>
  );

};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const Index = () => (
  <Layout>
    <HeroCarousel />

    {/* 2. Conoce SAPAP + Video Institucional (misma fila) */}
    <ScrollReveal>
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Conoce SAPAP */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <Droplets className="h-12 w-12 text-accent" />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">Comprometidos con el agua</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
                El agua como recurso natural de primera necesidad es vital para desarrollar cualquier actividad del ser humano, y es fuente de vida para los demás habitantes de la tierra, sean animales o vegetales, por su naturaleza, es un recurso no renovable que día a día se está agotando. 
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed md:text-xl">
                El aumento de la población origina una sobre explotación de los mantos acuíferos para poder satisfacer las necesidades de abastecimiento de nuestra población.
              </p>
            </div>
            {/* Video Institucional */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">Video Institucional</h3>
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.youtube.com/watch?v=rNbRWdiOhLU"
                  title="Video Institucional SAPAP"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                En el siguiente video podras conocer un poco de nuestra gran labor que desempeñamos dentro de nuestro organismo operador para que todos los purisimenses puedan gozar del servicio de agua potable, denaje y saneamiento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    {/* 4. Avisos y Campañas */}
    <ScrollReveal>
      <section className="bg-background py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">Avisos y Campañas</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {announcements.map((item, i) => (
              <Card key={i} className="h-full transition-shadow duration-300 hover:shadow-md">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
    </ScrollReveal>
      <ScrollReveal>
  <section className="bg-muted/50 py-16">
    <div className="container">
      <div className="grid gap-10 md:grid-cols-2 items-start">

        {/* --------------------- */}
        {/* Columna 1: SAPAP App Android */}
        {/* --------------------- */}
        <div className="flex flex-col justify-between h-full space-y-6">
          <div>
            
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">SAPAP App</h2>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Realiza tus trámites desde tu celular Android: paga tu recibo, consulta adeudos y descarga recibos de agua de forma rápida y segura.
            </p>

            {/* Beneficios de la app */}
            <ul className="mb-6 space-y-3">
              {appBenefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
                    <b.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-base md:text-lg">{b.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón + Imagen alineados */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Button size="lg" className="gap-2 text-base md:text-lg px-6 h-auto min-h-[52px] flex-shrink-0">
              <Download className="h-5 w-5" />
              Descargar App Android
            </Button>
            <img
              src="https://sapap.gob.mx/data/files/cuadrosladoderecho22_2023.jpg"
              alt="SAPAP App Android"
              className="h-auto w-full max-w-[150px] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* ------------------------------- */}
        {/* Columna 2: Eventos Institucionales */}
        {/* ------------------------------- */}
        <div className="flex flex-col justify-between h-full">
          <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl text-center md:text-left">
            Eventos Institucionales
          </h2>

          <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-md flex flex-col md:flex-row h-full">
            {/* Imagen del evento */}
            <div className="md:w-2/5 flex-shrink-0">
              <img 
                src={bannerCarrera} 
                alt="14va Carrera SAPAP – Día Mundial del Agua" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Contenido del evento */}
            <CardContent className="flex flex-col justify-center p-6 md:p-8 md:w-3/5">
              <span className="mb-3 inline-block w-fit rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent">
                Próximo evento
              </span>
              <h3 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
                14va Carrera SAPAP – Día Mundial del Agua
              </h3>
              <div className="mb-4 flex flex-wrap gap-4 text-base text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar className="h-5 w-5" /> 22 de marzo, 2026</span>
                <span className="flex items-center gap-2"><MapPin className="h-5 w-5" /> Parque Central</span>
              </div>
              <p className="mb-5 text-base text-muted-foreground leading-relaxed">
                Participa en nuestra carrera anual en conmemoración del Día Mundial del Agua. Categorías para toda la familia. ¡Inscripciones abiertas!
              </p>
              <Button variant="outline" size="lg" className="w-fit gap-2 text-base min-h-[52px] mt-auto">
                Más información
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</ScrollReveal>



    {/* 7. WhatsApp */}
    <ScrollReveal>
      <section className="bg-primary py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center text-primary-foreground">
            <div className="mb-5 flex justify-center">
              <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[hsl(142_70%_45%)]">
                <MessageCircle className="h-10 w-10 text-primary-foreground" />
              </div>
            </div>
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Atención Ciudadana por WhatsApp</h2>
            <p className="mb-3 text-lg opacity-90">Envía tus reportes, quejas o aclaraciones directamente por WhatsApp.</p>
            <div className="mb-8 flex flex-wrap items-center justify-center gap-5 text-base opacity-85">
              <span className="flex items-center gap-2"><Clock className="h-5 w-5" /> Lunes a viernes, 8:00 a.m. a 4:00 p.m.</span>
              <span className="flex items-center gap-2"><Phone className="h-5 w-5" /> (000) 000-0000</span>
            </div>
            <Button variant="secondary" size="lg" className="gap-2 text-base md:text-lg px-8 h-auto min-h-[56px]" asChild>
              <a href="https://wa.me/520000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                Escríbenos por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  </Layout>
);

export default Index;
