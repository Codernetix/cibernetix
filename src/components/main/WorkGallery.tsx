import GridGallery from "./components/GridGallery";
import WorkGalleryCard from "./components/WorkGalleryCard";

import ciberSeguridad from "../../assets/ciberseguridad.png";
import service from "../../assets/service.png";
import www from "../../assets/www.png";
import servidor from "../../assets/servidor.png";

export default function WorkGallery() {
  return (
    <GridGallery>
      <WorkGalleryCard
        imagen={ciberSeguridad}
        imgdesc={"Ciberseguridad"}
        titulo={"Ciberseguridad"}
        descripcion={`Protegemos la información y sistemas de tu empresa con
                  soluciones integrales de ciberseguridad, incluyendo
                  auditorías, análisis de vulnerabilidades, firewalls,
                  protección contra malware y formación en seguridad.
                  Garantizamos la protección de tus datos en un entorno digital
                  cada vez más desafiante.`}
      />
      <WorkGalleryCard
        imagen={service}
        imgdesc={"TELEFONIA IP"}
        titulo={"TELEFONIA IP"}
        descripcion={`Mejoramos la comunicación de tu empresa con soluciones VoIP.
                  Ofrecemos instalación, configuración y mantenimiento para
                  optimizar costos, mejorar la eficiencia y potenciar la
                  productividad.`}
      />
      <WorkGalleryCard
        imagen={www}
        imgdesc={"DESARROLLO WEB"}
        titulo={"DESARROLLO WEB"}
        descripcion={`Creamos páginas web personalizadas que se ajustan a tu
                  negocio, desde sitios informativos hasta tiendas en línea.
                  Ofrecemos diseño responsive, integración de pagos, SEO y
                  mantenimiento, asegurando una presencia digital atractiva y
                  funcional.`}
      />
      <WorkGalleryCard
        imagen={servidor}
        imgdesc={"SERVIDORES"}
        titulo={"SERVIDORES"}
        descripcion={`Ofrecemos servidores dedicados, virtualizados o en la nube
                  según las necesidades de tu empresa. Gestionamos su
                  instalación, configuración y mantenimiento, garantizando alto
                  rendimiento, seguridad y escalabilidad para tu crecimiento.`}
        gridPosition={"col-start-2"}
      />
    </GridGallery>
  );
}
