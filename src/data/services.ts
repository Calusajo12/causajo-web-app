import Calendar from "../components/icons/Calendar.astro";
import type { Service } from "../types/ServiceType";
import Home from "../components/icons/Home.astro";
import PaintRoller from "../components/icons/PaintRoller.astro";
import Volume from "../components/icons/Volume.astro";
import HandPlatter from "../components/icons/HandPlatter.astro"; 
import Person from "../components/icons/Person.astro";

export const services:Service[] = [
    {
        id: 1,
        name: "Planificación de eventos",
        description: "Organización y gestión de eventos corporativos y sociales.",
        icon: Calendar
    },
    {
        id: 2,
        name: "Alquiler mobiliario",
        description: "Suministro de mobiliario y equipos para eventos.",
        icon: Home
    },
    {
        id: 3,
        name: "Decoración de eventos",
        description: "Diseño y decoración de espacios para eventos.",
        icon: PaintRoller
    },
    {
        id: 4,
        name: "Sonido y cristaleria",
        description: "Provisión de equipos de sonido y cristalería para eventos.",
        icon: Volume
    },
    {
        id: 5,
        name: "Catering y banquetes",
        description: "Servicios de catering y banquetes para eventos.",
        icon: HandPlatter
    },
    {
        id: 6,
        name: "Personal de atención",
        description: "Contratación de personal para atención al cliente en eventos.",
        icon: Person
    },
]