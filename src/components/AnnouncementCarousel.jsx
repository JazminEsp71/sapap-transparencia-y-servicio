import { Card, CardContent } from "@/components/ui/card";
import Slider from "react-slick";
import { Droplet, Trash2, Leaf, AlertTriangle } from "lucide-react";

const announcements = [
  { icon: Droplet, title: "Cuidemos el Agua", description: "Cada gota cuenta. Cierra la llave mientras te enjabonas y reporta fugas al instante." },
  { icon: Trash2, title: "No tires basura en coladeras", description: "Evita taponamientos y daños al drenaje. Deposita la basura en su lugar." },
  { icon: Leaf, title: "Cuida el medio ambiente", description: "No viertas aceites ni químicos en el drenaje. Protejamos nuestros recursos hídricos." },
  { icon: AlertTriangle, title: "Reporta fugas", description: "Llámanos o envía un WhatsApp para reportar fugas en la vía pública." },
];

export default function AnnouncementCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
        }
        }
    ]
   };

  return (
    <Slider {...settings}>
      {announcements.map((item, i) => (
        <Card key={i} className="mx-2">
          <CardContent className="flex flex-col items-center p-6 text-center">
            <item.icon className="mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </Slider>
  );
}
