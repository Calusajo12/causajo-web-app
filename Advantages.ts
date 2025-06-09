import type { AdvantagesType } from "./AdvantagesType";
import Experience from "./Experience.astro";
import Personalization from "./Personalization.astro";
import Quality from "./Quality.astro";

export const advantages:AdvantagesType[] = [
    {
        title: "Experiencia",
        description: "Más de 5 años organizando eventos exitosos.",
        icon: Experience
    },
    {
        title: "Personalización",
        description: "Cada evento es único, adaptamos nuestros servicios a tus necesidades.",
        icon: Personalization
    },
    {
        title: "Calidad",
        description: "Trabajamos con los mejores proveedores para garantizar la excelencia.",
        icon: Quality
    }
];