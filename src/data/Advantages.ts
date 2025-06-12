import type { AdvantagesType } from "../types/AdvantagesType";
import Experience from "../components/icons/Experience.astro";
import Personalization from "../components/icons/Personalization.astro";
import Quality from "../components/icons/Quality.astro";

export const advantages:AdvantagesType[] = [
    {
        title: "Experiencia",
        description: "Mas de 5 años organizando eventos exitosos. Nuestro equipo cuenta con la experiencia necesaria para hacer de tu evento un éxito.",
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