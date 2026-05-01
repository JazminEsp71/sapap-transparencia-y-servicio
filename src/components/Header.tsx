import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Transparencia", path: "/transparencia" },
  { label: "Leyes y Reglamentos", path: "/leyes" },
  { label: "Trámites y Servicios", path: "/tramites" },
  { label: "Pago en Línea", path: "/pago" },
  { label: "Conócenos", path: "/conocenos" },
  { label: "Contacto", path: "/contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-5 lg:py-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
              <img
                src={logo}
                alt="SAPAP"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="leading-tight">
              <span className="block text-xl font-bold tracking-wide">
                SAPAP
              </span>
              <span className="block text-xs opacity-90 max-w-[220px]">
                Sistema de Agua Potable, Alcantarillado y Saneamiento del Municipio de Purísima del Rincón
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `rounded px-3 py-2 text-sm font-medium transition-colors
                      hover:bg-institutional-light
                      ${isActive ? "bg-white text-primary font-semibold" : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary-foreground hover:bg-institutional-light"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-b bg-primary text-primary-foreground lg:hidden">
          <ul className="container flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `rounded px-3 py-2 text-sm font-medium transition-colors
                    hover:bg-institutional-light
                    ${isActive ? "bg-red-500 text-white" : ""}`
                  }
                >
                  {item.label}
                </NavLink>

              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Accent line */}
      <div className="h-1 bg-accent" />
    </header>
  );
};

export default Header;
