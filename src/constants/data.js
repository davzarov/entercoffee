import EnterCoffeeLogo from "../assets/img/header/logo.png";

import AboutImg from "../assets/img/about/cup.png";

import ModelWhiteImg from "../assets/img/model-white.png";
import ModelBlackImg from "../assets/img/model-black.png";

// menu items
import espresso from "../assets/img/menu/espresso.png";
import americano from "../assets/img/menu/americano.png";
import capuccino from "../assets/img/menu/capuccino.png";
import mocca from "../assets/img/menu/mocca.png";

// team items
import SignatureImg from "../assets/img/team/signature.png";
import ChefImg from "../assets/img/team/chef.png";

// testimonial items
import Avatar1 from "../assets/img/testimonial/avatar1.png";
import Avatar2 from "../assets/img/testimonial/avatar2.png";
import Avatar3 from "../assets/img/testimonial/avatar3.png";

export const navData = [
  { id: "inicio", name: "inicio" },
  { id: "nosotros", name: "nosotros" },
  { id: "menu", name: "menu" },
  { id: "equipo", name: "equipo" },
  { id: "reservas", name: "reservas" },
  { id: "contacto", name: "contacto" },
];

export const heroData = {
  preTitle: "Tu espacio de trabajo",
  title: "Enter Coffee",
  subTitle:
    "Bienvenido a nuestro espacio de coworking y cafetería, donde el trabajo se encuentra con la comodidad y la creatividad. Nuestro espacio está diseñado para satisfacer todas tus necesidades profesionales, ya seas un freelancer, empresario o dueño de un pequeño negocio.",
  btnText: "sepa más",
};

export const aboutData = {
  preTitle: "Enter Coffee",
  title: "quiénes somos",
  subTitle:
    "Enter Coffee es una cafetería coworking donde tendrás todo lo que necesitas para hacer tu trabajo. Disponemos de internet de alta velocidad, salas de reuniones privadas y facilidades de impresión. Pero eso no es todo. Nuestra cafetería ofrece delicioso café, bebidas refrescantes y sabrosos snacks para alimentar tu cerebro y mantenerte en movimiento durante todo el día. ¿Necesitas un descanso del trabajo? Relájate en nuestra acogedora zona de asientos, ponerte al día con amigos o establece contactos con profesionales con ideas afines.",
  btnText: "más información",
  image: AboutImg,
};

export const menuData = {
  title: "delicioso sabor a otoño",
  subTitle: "ver todo el menú para una comida sabrosa hoy",
  modelImg: ModelWhiteImg,
  btnText: "ver menú completo",
  menuItems: [
    {
      image: espresso,
      name: "Espresso",
      price: "Gs 10.000",
      description: "30 ml de Espresso",
    },
    {
      image: americano,
      name: "Americano",
      price: "Gs 12.000",
      description: "60ml de Espresso doble  + Agua Caliente",
    },
    {
      image: capuccino,
      name: "Capuccino",
      price: "Gs 15.000",
      description: "30 ml de Espresso + 150 ml de leche y espuma",
    },
    {
      image: mocca,
      name: "Mocca",
      price: "Gs 17.000",
      description: "30 ml de Espresso + jarabe de chocolate",
    },
  ],
};

export const teamData = {
  preTitle: "nuestro equipo",
  title: "conozca a nuestro chef",
  sub1: "Ser una cafetería distinguida por sus altos estándares de calidad, servicio y sabor, al igual que comprometernos día a día en brindar una excelente experiencia al cliente. Estar presentes en el proceso de la vida laboral del cliente brindándole la comodidad y el agrado culinario.",
  sub2: "",
  name: "juan perez",
  occupation: "chef ejecutivo",
  signatureImg: SignatureImg,
  chefImg: ChefImg,
};

export const testimonialData = {
  title: "lo que dicen los clientes",
  subTitle: "más de 1500 clientes satisfechos",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        '"¡Me encanta trabajar en este espacio coworking! Las mesas son muy cómodas y el internet es súper veloz, lo que me permite ser más productivo en mi trabajo. Además, la sala de reuniones es perfecta para cuando necesito tener una reunión con mis clientes. ¡Definitivamente recomiendo este lugar!"',
      image: Avatar1,
      name: "Rick Thompson",
      occupation: "CEO of Delightful",
    },
    {
      message:
        '"El servicio al cliente en este espacio coworking es excepcional. Siempre son muy amables y serviciales, lo que hace que trabajar aquí sea una experiencia aún mejor. Además, las instalaciones están siempre limpias y ordenadas. ¡Definitivamente regresaré!"',
      image: Avatar2,
      name: "John Doe",
      occupation: "CEO of Delightful",
    },
    {
      message:
        '"La cafetería de este espacio coworking es mi lugar favorito para tomar un café y trabajar en mi laptop. Las bebidas son deliciosas y los postres son irresistibles. Además, el ambiente es muy acogedor y tranquilo, lo que me permite concentrarme mejor en mi trabajo. ¡No hay otro lugar como este en la ciudad!"',
      image: Avatar3,
      name: "Henry A.",
      occupation: "CEO of Delightful",
    },
  ],
};

export const reservationData = {
  title: "reservaciones",
  subTitle:
    "Llame al +595XXX-XXX-XXX de 07:00 a 20:00 todos los días, o llene este formulario y le confirmaremos su reservación por correo.",
  modelImg: ModelBlackImg,
  btnText: "haga una reservación",
};

export const newsletterData = {
  title: "únete a nuestro boletín",
  subTitle: "recibe noticias y actualizaciones en tu bandeja de entrada.",
  placeholder: "suscríbase con su correo electrónico",
  btnText: "suscribirse",
};

export const footerData = {
  contact: {
    title: "ubicación",
    address:
      "capitan julio cesar rivas c/ gabriel casaccia bo. mburucuya, asunción",
    phone: "+595XXX-XXX-XXX",
  },
  hours: {
    title: "horarios",
    program: [
      {
        days: "lunes - viernes",
        hours: "07:00 AM - 08:00 PM",
      },
      {
        days: "sabado - domingo",
        hours: "07:00 AM - 08:00 PM",
      },
    ],
  },
  social: {
    title: "redes sociales",
    icons: [
      { href: "/", icon: "" },
      { href: "/", icon: "" },
      { href: "/", icon: "" },
    ],
  },
};

export { EnterCoffeeLogo, ModelBlackImg, ModelWhiteImg };
