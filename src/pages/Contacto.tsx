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

const Contacto = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", correo: "", asunto: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensaje enviado", description: "Hemos recibido tu mensaje. Te contactaremos pronto." });
    setForm({ nombre: "", correo: "", asunto: "", mensaje: "" });
  };

  return (
    <Layout>
      <div className="container py-8">
        <Breadcrumb items={[{ label: "Contacto" }]} />
        <h1 className="mb-2 text-3xl font-bold text-foreground">Contacto</h1>
        <p className="mb-8 text-muted-foreground">Estamos para servirte. Contáctanos por cualquiera de estos medios.</p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Envíanos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input id="nombre" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="correo">Correo electrónico</Label>
                  <Input id="correo" type="email" required value={form.correo} onChange={(e) => setForm({ ...form, correo: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="asunto">Asunto</Label>
                  <Input id="asunto" required value={form.asunto} onChange={(e) => setForm({ ...form, asunto: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea id="mensaje" rows={5} required value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} />
                </div>
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" /> Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Dirección</p>
                    <p className="text-sm text-muted-foreground">Av. Constitución #450, Col. Centro, C.P. 63000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Teléfono</p>
                    <p className="text-sm text-muted-foreground">(311) 213-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Correo electrónico</p>
                    <p className="text-sm text-muted-foreground">contacto@sapap.gob.mx</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Horario de atención</p>
                    <p className="text-sm text-muted-foreground">Lunes a Viernes: 8:00 – 15:00 hrs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <iframe
                  title="Ubicación SAPAP"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.123!2d-104.895!3d21.505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMwJzE4LjAiTiAxMDTCsDUzJzQyLjAiVw!5e0!3m2!1ses!2smx!4v1700000000000"
                  className="h-64 w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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
