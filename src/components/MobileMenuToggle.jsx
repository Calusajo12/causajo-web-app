// src/components/MobileMenuToggle.jsx
import { useState, useEffect } from "react";
import MenuIcon from "./icons/Menu";
import CloseIcon from "./icons/Close";

export default function MobileMenuToggle() {
  const [open, setOpen] = useState(false);

  // Bloquear/desbloquear scroll y interacciones
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
    }

    // Cleanup cuando el componente se desmonta
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.pointerEvents = 'auto';
    };
  }, [open]);

  return (
    <>
      <button
        className="md:hidden z-50 relative"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{ pointerEvents: 'auto' }}
      >
        {open ? <CloseIcon className="h-6 w-6 hover:scale-110 cursor-pointer" /> : <MenuIcon className="h-6 w-6 hover:scale-110 cursor-pointer" />}
      </button>

      {open && (
        <nav 
          className="absolute top-full left-0 w-full bg-black/100 backdrop-blur-md flex flex-col lg:hidden items-center justify-center px-6 py-6 z-40"
          style={{ pointerEvents: 'auto' }}
        >
          <a href="/home" className="block text-white py-2 hover:text-amber-300">Inicio</a>
          <a href="#events" className="block text-white py-2 hover:text-amber-300">Eventos</a>
          <a href="#servicios" className="block text-white py-2 hover:text-amber-300">Servicios</a>
          <a href="/aboutUs" className="block text-white py-2 hover:text-amber-300">Conócenos</a>
        </nav>
      )}
    </>
  );
}