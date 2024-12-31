import Whatsapp from "../assets/Icons/Whatsapp.astro";
import Facebook from "../assets/Icons/Facebook.astro";
import Instagram from "../assets/Icons/Instagram.astro";

const socialIcons = [
  { component: Instagram, name: "Instagram" },
  { component: Facebook, name: "Facebook" },
  { component: Whatsapp, name: "Whatsapp" },
];

const links = [
  { href: "#", text: "Nosotros" },
  { href: "#", text: "Servicios" },
  { href: "#", text: "Impronta" },
];

export { socialIcons, links };