import { useState, useEffect } from "react";
import MenuIcon from "./icons/Menu";
import CloseIcon from "./icons/Close";

export default function MobileMenuToggle({ currentPath }) {
  const [open, setOpen] = useState(false);
  const isHome = currentPath === "/";
  const isAboutUs = currentPath === "/aboutUs";
  const isContact = currentPath === "/contact";

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.pointerEvents = "auto";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.pointerEvents = "auto";
    };
  }, [open]);

  return (
    <>
      <button
        className="md:hidden z-50 relative"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{ pointerEvents: "auto" }}
      >
        {open ? (
          <CloseIcon className="h-6 w-6 hover:scale-110 cursor-pointer" />
        ) : (
          <MenuIcon className="h-6 w-6 hover:scale-110 cursor-pointer animate-slide-down" />
        )}
      </button>

      {open && (
        <nav
          className="fixed animate-slide-down top-full left-0 w-full h-screen bg-[#342F5A] backdrop-blur-lg flex flex-col lg:hidden items-center justify-center px-6 py-6 z-60"
          style={{ pointerEvents: "auto" }}
        >
          <a
            href="/"
            className={`block text-white py-2 hover:text-amber-300 ${
              isHome ? "underline underline-offset-8 text-amber-300" : ""
            }`}
          >
            Inicio
          </a>

          {isHome && (
            <>
              <a
                href="#events"
                className="block text-white py-2 hover:text-amber-300"
              >
                Eventos
              </a>
              <a
                href="#services"
                className="block text-white py-2 hover:text-amber-300"
              >
                Servicios
              </a>
            </>
          )}

          <a
            href="/aboutUs"
            className={`block text-white py-2 hover:text-amber-300 ${
              isAboutUs ? "underline underline-offset-8 text-amber-300" : ""
            }`}
          >
            Conócenos
          </a>

         
        </nav>
      )}
    </>
  );
}