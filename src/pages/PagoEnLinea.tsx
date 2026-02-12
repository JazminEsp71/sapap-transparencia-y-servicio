import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const PagoEnLinea = () => {
  return (
    <Layout>
      <div className="container py-10">
        <Breadcrumb items={[{ label: "Pago en Línea" }]} />

        {/* Contenedor del iframe */}
        <div className="w-full h-[800px] rounded-xl overflow-hidden border">
          <iframe
            src="https://sapap.com.mx"
            title="Pago en Línea"
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </Layout>
  );
};

export default PagoEnLinea;
