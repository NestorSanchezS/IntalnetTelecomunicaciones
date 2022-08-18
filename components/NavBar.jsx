import Link from "next/link";
import React from "react";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a style={style}>Inicio</a>
      </Link>
      <Link href="nuestraempresa">
        <a>Nuestra Empresa</a>
      </Link>
      <Link href="servicios">
        <a>Servicios</a>
      </Link>
      <Link href="regulacion">
        <a>Regulacion</a>
      </Link>
      <Link href="preguntas">
        <a>Preguntas Frecuentes</a>
      </Link>
      <Link href="internetsano">
        <a>Internet Sano</a>
      </Link>
      <Link href="contactenos">
        <a>Contactenos</a>
      </Link>
    </nav>
  );
};
