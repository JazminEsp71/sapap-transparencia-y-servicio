import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import {
  Search, FileText, CreditCard, Phone, Droplets,
  Calendar, MessageCircle, Download,
  Droplet, Leaf, AlertTriangle, MapPin, Clock,
  Receipt, FileDown, ChevronRight,
} from "lucide-react";
import heroImage from "@/assets/banner-subsidio.jpg";
import freir from "@/assets/freir-a-fluir-aceite.jpg"
import appMockup from "@/assets/sapap-app-mockup.jpg";
import semaforo from "@/assets/banner temporada calor 2026.jpg"
import bannerchiquito from "@/assets/banner chiquito_calor.jpg"
import temporada from "@/assets/temporada de calor_2026.jpg"
import dispositivos from "@/assets/banner_Dispositivos.jpg";
import cuadrolado from "@/assets/cuadroslado.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { title } from "process";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const heroSlides = [
  {
    image: semaforo,
    title:""
  },
  {
    image: dispositivos,
    title: ""
  },
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
];


const appBenefits = [
  { icon: CreditCard, text: "Pago del recibo de agua potable" },
  { icon: Receipt, text: "Consulta de adeudos en tiempo real" },
  { icon: FileDown, text: "Descarga de recibos en PDF" },
  { icon: MapPin, text: "Ubicación de módulos de cobro" },
];

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
    <section className="bg-muted/30 pt-4 pb-4 md:pt-6 md:pb-6">
      <div className="mx-auto w-full max-w-[1500px] px-3 md:px-6">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-border/50 bg-muted">
          <img
            src={slide.image}
            alt={slide.title || `Slide ${current + 1}`}
            className="block w-full h-auto transition-opacity duration-700 ease-in-out"
            style={{ opacity: fadeIn ? 1 : 0 }}
          />

          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-black/30 text-white text-2xl backdrop-blur hover:bg-black/50 transition"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-black/30 text-white text-2xl backdrop-blur hover:bg-black/50 transition"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 md:bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all
                  ${i === current
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/80"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const Index = () => {
  const [openCarrera, setOpenCarrera] = useState(false);

  return (
  <Layout>
    <HeroCarousel />

    <ScrollReveal>
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="grid items-start gap-8 lg:grid-cols-[2fr_3fr]">          
            {/* Columna izquierda */}
            <div className="max-w-prose">
              <div className="mb-6 flex items-center gap-3">
                <Droplets className="h-10 w-10 text-accent shrink-0" />
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Comprometidos con el agua
                </h2>
              </div>

              <div className="space-y-4 text-lg md:text-xl leading-relaxed tracking-wide text-muted-foreground md:text-lg md:leading-loose text-justify md:text-left">
                <p>
                  El agua como recurso natural de primera necesidad es vital para desarrollar cualquier actividad del ser humano, y es fuente de vida para los demás habitantes de la tierra, sean animales o vegetales. Por su naturaleza, es un recurso no renovable que día a día se está agotando.
                </p>

                <p>
                  El aumento de la población origina una sobre explotación de los mantos acuíferos para poder satisfacer las necesidades de abastecimiento de nuestra población.
                </p>
              </div>
            </div>

            {/* Columna derecha */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Video Institucional
                </h2>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/rNbRWdiOhLU"
                  title="Video Institucional SAPAP"
                  className="h-full w-full"
                  allowFullScreen
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

    {/* 4. Noticias y Video Aniversario */}
    <ScrollReveal>
      <section className="bg-background py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">
            Noticias y Aniversario
          </h2>

          <div className="grid gap-8 lg:grid-cols-2 items-stretch">

            {/* Noticias */}
            <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-md h-full flex flex-col">
              <CardContent className="flex flex-col gap-4 p-6 h-full">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-foreground">Noticias SAPAP</h3>
                  <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent whitespace-nowrap">
                    Facebook
                  </span>
                </div>
                <div className="relative w-full flex-1 overflow-hidden rounded-lg min-h-[520px]">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/100063857028532&tabs=timeline&width=500&height=720&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    className="absolute inset-0 h-full w-full border-0"
                    style={{ overflow: "hidden" }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    title="Noticias Facebook SAPAP"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Video 30 Aniversario */}
            <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-md h-full flex flex-col">
              <CardContent className="flex flex-col gap-4 p-6 h-full">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-foreground">Video 30 Aniversario SAPAP</h3>
                  <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent whitespace-nowrap">
                    Aniversario
                  </span>
                </div>
                <div className="relative w-full flex-1 overflow-hidden rounded-lg min-h-[320px]">
                  <iframe
                    src="https://www.youtube.com/embed/Je9ajqlgdRI"
                    title="Video 30 Aniversario SAPAP"
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                  />
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Celebramos más de 30 años llevando agua potable y saneamiento a nuestra comunidad. Conoce nuestra historia y compromiso con Purísima del Rincón.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* SAPAP App */}
            <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-md h-full">
              <CardContent className="flex flex-col gap-6 p-6 md:p-8 h-full">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-foreground md:text-2xl">
                    SAPAP App
                  </h3>
                  <span className="inline-block rounded-full bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent whitespace-nowrap">
                    Aplicación Móvil
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
                  <ul className="space-y-3">
                    {appBenefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 flex-shrink-0">
                          <b.icon className="h-5 w-5 text-accent" />
                        </div>
                        <span className="text-base">{b.text}</span>
                      </li>
                    ))}
                  </ul>
                  <img
                    src={cuadrolado}
                    alt="SAPAP App"
                    className="w-full md:w-44 h-44 object-cover rounded-lg"
                  />
                </div>

                <p className="text-base text-muted-foreground leading-relaxed">
                  Realiza tus trámites desde tu celular: paga, consulta y descarga recibos de forma rápida y segura.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="gap-2 text-base px-6 h-auto min-h-[52px] w-full sm:w-fit mt-auto"
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.sapapapp&hl=es_MX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-5 w-5" />
                    Descargar App Android
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Eventos Institucionales */}
            <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-md h-full">
              <CardContent className="flex flex-col gap-6 p-6 md:p-8 h-full">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-foreground md:text-2xl">
                    Semáforo en rojo: cuida el agua hoy
                  </h3>
                  <span className="inline-block rounded-full bg-destructive/15 px-4 py-1.5 text-sm font-semibold text-destructive whitespace-nowrap">
                    Temporada de calor
                  </span>
                </div>

                <img
                  src={semaforo}
                  alt="Semáforo en rojo - Temporada de calor"
                  className="w-full h-44 object-cover rounded-lg"
                />

                <p className="text-base text-muted-foreground leading-relaxed">
                  Durante la temporada de calor, el consumo de agua aumenta y es vital usarla con responsabilidad. Detecta a tiempo hábitos como duchas prolongadas o fugas no atendidas y contribuye a preservar este recurso esencial.
                </p>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-fit gap-2 text-base min-h-[52px] mt-auto"
                  onClick={() => setOpenCarrera(true)}
                >
                  Más información
                </Button>
              </CardContent>
            </Card>
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
              <span className="flex items-center gap-2"><Clock className="h-5 w-5" /> Lunes a viernes, 8:00 a.m. a 3:30 p.m.</span>
              <span className="flex items-center gap-2"><Phone className="h-5 w-5" /> (476) 107-5244</span>
            </div>
            <Button variant="secondary" size="lg" className="gap-2 text-base md:text-lg px-8 h-auto min-h-[56px]" asChild>
              <a href="https://api.whatsapp.com/send/?phone=524761075244" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                Escríbenos por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
        {openCarrera && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setOpenCarrera(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenCarrera(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            <img
              src={temporada}
              alt="14va Carrera SAPAP – Día Mundial del Agua"
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Index;