import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <Link href="/">Inicio</Link>
      <Link href="nuestraempresa">Nuestra Empresa</Link>
      <Link href="servicios">Servicios</Link>
      <Link href="regulacion">Regulacion</Link>
      <Link href="preguntas">Preguntas Frecuentes</Link>
      <Link href="internetsano">Internet Sano</Link>
      <Link href="contactenos">Contactenos</Link>
    </nav>
  );
};
