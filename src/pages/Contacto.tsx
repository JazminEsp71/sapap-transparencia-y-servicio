import { useState } from "react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useContacto } from "@/hooks/useContacto";

const Contacto = () => {
  const { toast } = useToast();
  const { mutateAsync, isPending } = useContacto();

  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    celular: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nombre = form.nombre.trim();
    const correo = form.correo.trim();
    const celular = form.celular.trim();
    const asunto = form.asunto.trim();
    const mensaje = form.mensaje.trim();

    if (nombre.length < 5 || nombre.length > 80) {
      alert("El nombre debe tener entre 5 y 80 caracteres.");
      return;
    }

    if (!/^[0-9]{10}$/.test(celular)) {
      alert("El celular debe tener exactamente 10 dígitos.");
      return;
    }

    if (correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      alert("El correo no tiene un formato válido.");
      return;
    }

    if (asunto.length < 5 || asunto.length > 100) {
      alert("El asunto debe tener entre 5 y 100 caracteres.");
      return;
    }

    if (mensaje.length < 10 || mensaje.length > 500) {
      alert("El mensaje debe tener entre 10 y 500 caracteres.");
      return;
    }

    try {
      await mutateAsync({
        nombre,
        correo,
        celular,
        asunto,
        mensaje,
      });

      toast({
        title: "Mensaje enviado",
        description: "Hemos recibido tu mensaje. Te contactaremos pronto.",
      });

      setForm({
        nombre: "",
        correo: "",
        celular: "",
        asunto: "",
        mensaje: "",
      });

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "No se pudo enviar el mensaje",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="container py-8">
        <Breadcrumb items={[{ label: "Contacto" }]} />
        <h1 className="mb-2 text-3xl font-bold text-foreground">Contacto</h1>
        <p className="mb-8 text-muted-foreground">
          Estamos para servirte. Contáctanos por cualquiera de estos medios.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input
                    id="nombre"
                    required
                    minLength={5}
                    maxLength={80}
                    placeholder="Ej. Juan Pérez López"
                    value={form.nombre}
                    onChange={(e) =>
                      setForm({ ...form, nombre: e.target.value })
                    }
                  />
                </div>

                {/* Correo */}
                <div className="space-y-2">
                  <Label htmlFor="correo">Correo electrónico (opcional)</Label>
                  <Input
                    id="correo"
                    type="email"
                    placeholder="ejemplo@correo.com"
                    maxLength={100}
                    value={form.correo}
                    onChange={(e) =>
                      setForm({ ...form, correo: e.target.value })
                    }
                  />
                </div>
                {/* Celular */}
                <div className="space-y-2">
                  <Label htmlFor="celular">Celular *</Label>
                  <Input
                    id="celular"
                    type="tel"
                    required
                    placeholder="Ej. 4421234567"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    title="Ingresa un número de 10 dígitos"
                    value={form.celular}
                    onChange={(e) => {
                      const soloNumeros = e.target.value.replace(/\D/g, "");
                      setForm({ ...form, celular: soloNumeros });
                    }}
                  />
                </div>
                {/* Asunto */}
                <div className="space-y-2">
                  <Label htmlFor="asunto">Asunto</Label>
                  <Input
                    id="asunto"
                    required
                    minLength={5}
                    maxLength={100}
                    placeholder="Motivo del mensaje"
                    value={form.asunto}
                    onChange={(e) =>
                      setForm({ ...form, asunto: e.target.value })
                    }
                  />
                </div>
                {/* Mensaje */}
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={500}
                    placeholder="Escribe tu mensaje..."
                    value={form.mensaje}
                    onChange={(e) =>
                      setForm({ ...form, mensaje: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            {/* Info */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Dirección</p>
                    <p className="text-sm text-muted-foreground">
                      Blvd Manuel Gómez Morín 400, Fracc. Los Arcos,
                      Purísima del Rincón, Guanajuato, C.P. 36400, México
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="text-sm text-muted-foreground">
                      (476) 706-1053 · (476) 706-1213
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Correo electrónico</p>
                    <p className="text-sm text-muted-foreground">
                      contacto@sapap.gob.mx
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Horario de atención</p>
                    <p className="text-sm text-muted-foreground">
                      Lunes a Viernes: 8:00 – 15:30 hrs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MAPA REAL */}
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps?q=SAPAP+Purisima+del+Rincon+Guanajuato&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;