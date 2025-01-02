// imports imagenes mobile
import MobileSer1 from "../assets/Mobile-servicios/mobile-servicios-1.png";
import MobileSer2 from "../assets/Mobile-servicios/mobile-servicios-2.png";
import MobileSer3 from "../assets/Mobile-servicios/mobile-servicios-3.png";
import MobileSer4 from "../assets/Mobile-servicios/mobile-servicios-4.png";
import MobileSer5 from "../assets/Mobile-servicios/mobile-servicios-5.png";
// imports imagenes desktop
import DesktopSer1 from "../assets/servicios.img/desktop-servicios-1.jpg";
import DesktopSer2 from "../assets/servicios.img/desktop-servicios-2.jpg";
import DesktopSer3 from "../assets/servicios.img/desktop-servicios-3.jpg";
import DesktopSer4 from "../assets/servicios.img/desktop-servicios-4.jpg";
import DesktopSer5 from "../assets/servicios.img/desktop-servicios-5.jpg";
// imagenes SVG de fondo
import Monstera from "../assets/vectors/monstera-white.svg";
import Fern from "../assets/vectors/fern-white.svg";



const cardData = [
    {
        title: "EXTERIORES > DISEÑO",
        text: `El equipo de VERBENAS es especialista en diseño de jardines y parques, haciendo de la estética y del bienestar nuestro lema. Contamos con diversidad de opciones para adecuarse a su necesidad, con un servicio totalmente personalizado
        y enfocado exclusivamente a sus requerimientos. Desarrollando espacios que sean estéticos y disfrutables todo el año. Elaboramos planes de mantenimiento específicos para cada espacio verde, planificando y optimizando los recursos, tanto humanos como técnicos. Buscamos los mayores estándares de desempeño para el mantenimiento de espacios verdes considerando tanto su buen estado estructural y fitosanitario, como aspectos estéticos de la vegetación, garantizando el aspecto y la salud de césped, arboles, plantas, flores y entorno.`,
        boldText: "VERBENAS",
        mobileImage: MobileSer1,
        desktopImage: DesktopSer1,
        altText: "Diseño de exteriores",
        bgColor: "bg-white",
        titleColor: "text-primary",
        textColor: "text-mutedText",
    },
    {
        title: "Terrazas verdes > DISEÑO Y MANTENIMIENTO",
        text: "Las terrazas, sobre todo en grandes urbanizaciones como Buenos Aires, suelen ser espacios comunes desaprovechados. Una terraza verde, además de sus muchos beneficios en cuanto al ecosistema, es una solución que da vida, incorpora vanguardia y pone en valor al espacio para el descanso, la sociabilización y la conexión de los habitantes con la naturaleza y su biodiversidad, transformando un espacio desaprovechado en un punto de encuentro para compartir, con beneficios recreativos, estéticos, ambientales y sociales.",
        boldText: "En VERBENAS nuestros especialistas te pueden brindar distintas soluciones para generar de tu terraza o patio urbano, un espacio verde disfrutable.",
        mobileImage: MobileSer2,
        desktopImage: DesktopSer2,
        altText: "Diseño de terrazas verdes",
        isReversed: true,
        plantSrc: Fern.src,
    },
    {
        title: "Muros verdes y Jardines verticales > DISEÑO y MANTENIMIENTO",
        text: `Los muros verdes constituyen uno de los enfoques más utilizados para generar espacios verdes en zonas urbanas. Una pared verde, en cualquier ambiente, a través de sus texturas, colores y fluidez se convierte en un elemento decorativo que hace resaltar el espacio, convirtiendo a los jardines verticales en un estilo ideal de bienestar y belleza para integrar la naturaleza y sus beneficios. Diseñamos muros verdes y jardines verticales, de interior y exterior, de acuerdo a su necesidad, con un amplio abanico de posibilidades, plantas verdes, flores o distintos tipos de musgos. Solo es necesario un muro para transformar tu ambiente.`,
        boldText: "Muros verdes y Jardines verticales",
        mobileImage: MobileSer3,
        desktopImage: DesktopSer3,
        altText: "Diseño de muros verdes",
        bgColor: "bg-white",
        titleColor: "text-primary",
        textColor: "text-mutedText",
    },
    {
        title: "INTERIORES > DISEÑO Y MANTENIMIENTO",
        text: "Ofrecemos asesoramiento e ideas para mejorar y decorar sus espacios interiores, a través de la colocación de elementos naturales, ocupándonos del suministro de todos los materiales necesarios, adecuándonos al espacio y a sus requerimientos. Los espacios interiores pueden mejorar con una decoración adecuada. Únicamente con  la colocación de elementos naturales podemos cambiar la estética y el entorno de un espacio interior, mejorando el bienestar ambiental del entorno. A través de nuestro servicio de mantenimiento nos aseguramos que cada planta reciba la atención y el cuidado necesarios para que conserven el mejor aspecto durante todo el año. Nuestro equipo de jardineros profesionales cuenta con el conocimiento y experiencia para cubrir todos  los requerimientos y características específicas de cada especie.",
        boldText: "Ofrecemos asesoramiento e ideas para mejorar y decorar sus espacios interiores, a través de la colocación de elementos naturales.",
        mobileImage: MobileSer4,
        desktopImage: DesktopSer4,
        altText: "Diseño de interiores",
        isReversed: true,
        plantSrc: Monstera.src,
    },
    {
        title: "Huertas > VERBENAS",
        text: `Las huertas urbanas vinculan a las poblaciones con la naturaleza y la posibilidad de tener sus propios cultivos. En VERBENAS trabajamos con VIVIERO-HUERTA, que nació de la iniciativa de vecinas del Barrio Rodrigo Bueno como una búsqueda de rescatar los conocimientos y las prácticas culturales de las tierras originales. Donde hoy, es espacio autogestivo donde se cultivan alimentos, plantas orgánicas y nativas.
        Trabajamos con las mejores manos del VIVERO-HUERTA para que cuentes con plantas y semillas totalmente orgánicas y con la capacitación del formidable equipo que te enseñará a mantenerla fresca y saludable. Nuestra responsabilidad social empresarial se focaliza, en tres vertientes: cuidado al medio ambiente, condiciones laborales de sus trabajadores y apoyo a las causas humanitarias.`,
        boldText: "VERBENAS",
        mobileImage: MobileSer5,
        desktopImage: DesktopSer5,
        altText: "Diseño de huertas urbanas",
        bgColor: "bg-white",
        titleColor: "text-primary",
        textColor: "text-mutedText",
    },
];

export { cardData };