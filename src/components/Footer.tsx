import { Droplets, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Branding */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Droplets className="h-6 w-6 text-accent" />
            <span className="text-lg font-bold">SAPAP</span>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            Sistema de Agua Potable, Alcantarillado y Saneamiento del Municipio de Purísima del Rincón, Gto.
          </p>
          <p className="text-sm leading-relaxed opacity-80">
             Comprometidos con el servicio público, la transparencia y el acceso al agua de calidad para toda la comunidad.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/transparencia" className="opacity-80 hover:opacity-100 transition-opacity">Transparencia</Link></li>
            <li><Link to="/leyes" className="opacity-80 hover:opacity-100 transition-opacity">Leyes y Reglamentos</Link></li>
            <li><Link to="/tramites" className="opacity-80 hover:opacity-100 transition-opacity">Trámites y Servicios</Link></li>
            <li><Link to="/contacto" className="opacity-80 hover:opacity-100 transition-opacity">Contacto</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="opacity-80">Buolevard. Manuel Gómez Morín No. 400, Fraccionamiento Los Arcos, Purísima del Ríncón, Gto CP 36400   </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span className="opacity-80">(476) 706-1213, (476) 706-1053</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <span className="opacity-80">sistemas@sapap.gob.mx</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-accent" />
              <span className="opacity-80">Lun–Vie: 8:00–15:30 hrs</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} SAPAP — Sistema de Agua Potable, Alcantarillado y Saneamiento del Municipio de Purísima del Rincón, Gto. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
